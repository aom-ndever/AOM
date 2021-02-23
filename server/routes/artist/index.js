var express = require("express");
var router = express.Router();
var config = require("../../config");
var logger = config.logger;
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var async = require("async");
const saltRounds = 10;
var media_helper = require("../../helpers/media_helper");
var Account = require("../../models/account");
var track_helper = require("../../helpers/track_helper");
var artist_helper = require("../../helpers/artist_helper");
var follower_helper = require("../../helpers/follower_helper");
var comment_helper = require("../../helpers/comment_helper");
var participate_helper = require("../../helpers/participate_helper");
var round_helper = require("../../helpers/round_helper");
var artist_helper = require("../../helpers/artist_helper");
var artist_notifications_helper = require("../../helpers/notification_helper");
var user_helper = require("../../helpers/user_helper");
var download_helper = require("../../helpers/download_helper");
var vote_track_helper = require("../../helpers/vote_track_helper");
var contest_helper = require("../../helpers/contest_helper");
var winner_helper = require("../../helpers/winner_helper");
var stripe = require("stripe")("sk_test_FUsMHGCLfkGJmKEbW0aiRATb");
var socket = require("../../socket/socketServer");

var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var fs = require("fs");
const artist_message_helper = require("../../helpers/artist_message_helper");
const Artist = require("../../models/artist");

router.get("/followers_of_artist", async (req, res) => {
  user_id = req.userInfo.id;
  var user = await follower_helper.get_all_artist_followers(user_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json(user);
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});

router.delete("/delete_comment/:comment_id", async (req, res) => {
  user_id = req.userInfo.id;

  var comment_data = await comment_helper.get_all_comments(
    req.params.comment_id
  );

  var track_id = comment_data.track.track_id;

  var track_data = await comment_helper.get_all_track_by_track_id(track_id);

  decrement_comment = track_data.track.no_of_comments - 1;
  var resp_data = await artist_helper.update_track_comment(
    track_id,
    decrement_comment
  );

  var del_resp = await comment_helper.delete_comment_by_artist(
    user_id,
    req.params.comment_id
  );
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deleting comment",
      error: del_resp.error,
    });
  } else if (del_resp.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Can't remove comment" });
  } else {
    var resp = await artist_helper.get_artist_by_id(user_id);

    no_comment = resp.artist.no_of_comments - 1;
    var resp_data = await artist_helper.update_artist_comment(
      user_id,
      no_comment
    );
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "comment has been removed" });
  }
});

/**
 * @api {get} /user/get_music_and_track music and track detail - Get
 * @apiName music and track detail - Get
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} music and track detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/get_music_and_track", async (req, res) => {
  artist_id = req.userInfo.id;

  var media = await media_helper.get_all_media_of_artist(artist_id);
  var track = await track_helper.get_all_track_of_artist(artist_id);

  if (media.status === 1 && track.status === 1) {
    logger.trace("got details successfully");
    res
      .status(config.OK_STATUS)
      .json({ status: 1, media: media.media, track: track.track });
  } else {
    logger.error("Error occured while fetching = ", media);
    res.status(config.INTERNAL_SERVER_ERROR).json(media);
  }
});

router.get("/get_all_artist_notifiction", async (req, res) => {
  artist_id = req.userInfo.id;

  var notification = await artist_helper.get_all_artist_notification(artist_id);

  if (notification.status === 1) {
    logger.trace("got details successfully");
    res
      .status(config.OK_STATUS)
      .json({ status: 1, notification: notification });
  } else {
    logger.error("Error occured while fetching = ", notification);
    res.status(config.INTERNAL_SERVER_ERROR).json(notification);
  }
});

/**
 * @api {get} /artist/artist_by_id Artist detail - Get
 * @apiName get_artist_by_id - Get
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} artist detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/artist_by_id", async (req, res) => {
  artist_id = req.userInfo.id;
  var artist = await artist_helper.get_artist_by_id(artist_id);
  if (artist.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, artist: artist.artist });
  } else {
    logger.error("Error occured while fetching = ", artist);
    res.status(config.INTERNAL_SERVER_ERROR).json(artist);
  }
});

/**
 * @api {put} /artist Update artist profile
 * @apiName Update artist profile
 * @apiGroup Artist
 *
 * @apiHeader {String}  Content-Type multipart/form-data
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} social_media Social Media
 * @apiParam {String} email Email of user
 * @apiParam {String} password User Password
 * @apiParam {String} first_name User First Name
 * @apiParam {String} last_name User Last Name
 * @apiParam {String} zipcode User Zipcode
 * @apiParam {String} music_type Music Type
 * @apiParam {String} image Image
 *
 * @apiSuccess (Success 200) {JSON} user User details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put("/", async (req, res) => {
  user_id = req.userInfo.id;
  var obj = {};

  if (req.body.share_url && req.body.share_url != null) {
    obj.social_media = JSON.parse(req.body.share_url);
  }
  if (req.body.phone_no && req.body.phone_no != null) {
    obj.phone_no = req.body.phone_no;
  }
  if (req.body.email && req.body.email != null) {
    obj.email = req.body.email.trim();
  }
  if (req.body.gender && req.body.gender != null) {
    obj.gender = req.body.gender.trim();
  }
  if (req.body.dob && req.body.dob != null) {
    obj.dob = req.body.dob.trim();
  }
  if (req.body.first_name && req.body.first_name != null) {
    obj.first_name = req.body.first_name.trim();
  }
  if (req.body.last_name && req.body.last_name != null) {
    obj.last_name = req.body.last_name.trim();
  }
  if (req.body.zipcode && req.body.zipcode != null) {
    obj.zipcode = req.body.zipcode;
  }
  if (req.body.music_type) {
    obj.music_type = req.body.music_type;
  }
  if (req.body.description && req.body.description != null) {
    obj.description = req.body.description;
  }
  if (req.body.region) {
    obj.region = req.body.region;
  }
  if (req.body.state) {
    obj.state = req.body.state;
  }
  var user_resp = await artist_helper.update_artist_by_id(req.userInfo.id, obj);

  if (user_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json(user_resp);
  } else {
    res.status(config.OK_STATUS).json(user_resp);
  }
});

router.put("/bank/:bank_id", async (req, res) => {
  user_id = req.userInfo.id;
  var obj = {};
  var user_resp = await artist_helper.update_bank(
    req.userInfo.id,
    req.params.bank_id
  );
  if (user_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json(user_resp);
  } else {
    res.status(config.OK_STATUS).json(user_resp);
  }
});

router.post("/add_bank_details", async (req, res) => {
  artist_id = req.userInfo.id;
  var obj = {
    name: req.body.name,
    holder_name: req.body.holder_name,
    account_number: req.body.account_number,
    bsb: req.body.bsb,
    artist_id: artist_id,
  };
  var artist_data = await artist_helper.get_artist_by_id(artist_id);
  var card_resp = await artist_helper.insert_bank(obj);
  console.log("card_resp", card_resp);

  bank_id = card_resp.card._id;

  if (card_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json(card_resp);
  } else {
    try {
      let bank_account_token = await stripe.tokens.create({
        bank_account: {
          account_number: obj.account_number,
          country: "US",
          currency: "usd",
          account_holder_name: obj.holder_name,
          account_holder_type: "individual",
          routing_number: obj.bsb,
        },
      });

      var card_resp = await artist_helper.get_account_by_artist_id(artist_id);
      console.log("card_resp====>", card_resp.status);
      console.log("artist_id", artist_id);

      //if (card_resp && card_resp.status != 1) {
      var account = await stripe.accounts.create({
        type: "custom",
        country: "US",
        email: artist_data.artist.email,
      });
      var account_obj = {
        artist_id: artist_id,
        account_id: account.id,
        bank_id: bank_id,
      };
      var card_resps = await artist_helper.insert_account(account_obj);
      console.log("card_resps", card_resps);

      //  }
      await stripe.accounts.createExternalAccount(
        card_resps.account.account_id,
        { external_account: bank_account_token.id }
      );
      res
        .status(config.OK_STATUS)
        .json({ message: "Bank account added successfully" });
    } catch (error) {
      //var delete_data = await Account.findOneAndRemove({ "_id": new ObjectId(card_resp.card._id) })
      var del_resp = await artist_helper.delete_bank(
        card_resp.card._id,
        req.userInfo.id
      );

      console.log("delete_data", del_resp);

      res
        .status(config.BAD_REQUEST)
        .json({ message: "Account not created. Please add valid details" });
    }
  }
});

// router.post('/withdraw', async (req, res) => {
//     var schema = {
//         'amount': {
//             notEmpty: true,
//             errorMessage: "Withdrawal amount is required"
//         },
//         // 'bank_account': {
//         //     notEmpty: true,
//         //     errorMessage: "Bank account is required"
//         // }
//     };

//     req.checkBody(schema);
//     const errors = req.validationErrors();
//     artist_id = req.userInfo.id
//     var card_resp = await artist_helper.get_account_by_artist_id(artist_id);

//     if (!errors) {
//         try {
//             let transfer = await stripe.transfers.create({
//                 amount: req.body.amount * 100,
//                 currency: "usd",
//                 destination: card_resp.account.account_id
//             });
//             res.status(config.OK_STATUS).json({ data: transfer });
//         }
//         catch (error) {
//             res.status(config.BAD_REQUEST).json({ message: "insufficient balance" });
//         }
//     } else {
//         res.status(config.BAD_REQUEST).json({ message: errors });
//     }
// });

router.post("/transaction", async (req, res) => {
  user_id = req.userInfo.id;
  logger.trace("Get all Artist API called");
  var resp_data = await artist_helper.get_transaction_by_artist_id(
    user_id,
    req.body.start,
    req.body.length
  );
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching Track = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("Artist got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});

/**
 * @api {put} /artist/notification_settings Update notification
 * @apiName Update notification
 * @apiGroup Artist
 *
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {Boolean} like_by_email
 * @apiParam {Boolean} aomment_by_email

 *
 * @apiSuccess (Success 200) {JSON} Update notification
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put("/notification_settings", function (req, res) {
  user_id = req.userInfo.id;

  var obj = {};
  if (req.body.like_by_email != null) {
    obj = {
      "notification_settings.like_by_email": req.body.like_by_email,
    };
  }
  if (req.body.comment_by_email != null) {
    obj = {
      "notification_settings.comment_by_email": req.body.comment_by_email,
    };
  }
  if (req.body.like_by_sms != null) {
    obj = {
      "notification_settings.like_by_sms": req.body.like_by_sms,
    };
  }
  if (req.body.comment_by_sms != null) {
    obj = {
      "notification_settings.comment_by_sms": req.body.comment_by_sms,
    };
  }
  var user_resp = artist_helper.update_artist_by_id(req.userInfo.id, obj);
  if (user_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({ error: user_resp.error });
  } else {
    res
      .status(config.OK_STATUS)
      .json({ message: "Notification has been updated successfully" });
  }
});

router.delete("/bank/:bank_id", async (req, res) => {
  artist_id = req.userInfo.id;
  var del_resp = await artist_helper.delete_bank(req.params.bank_id, artist_id);
  var del_response = await artist_helper.delete_account(
    req.params.bank_id,
    artist_id
  );
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deleting artist bank",
      error: del_resp.error,
    });
  } else if (del_resp.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Can't delete artist bank" });
  } else {
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: " Artist bank account has been deleted" });
  }
});

/**
 * @api {put} /artist/update_image Update artist image
 * @apiName Update artist image
 * @apiGroup Artist
 *
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} image Artist Image

 *
 * @apiSuccess (Success 200) {JSON} Update artist image
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put("/update_image", function (req, res) {
  user_id = req.userInfo.id;
  var obj = {};
  async.waterfall(
    [
      function (callback) {
        if (req.files && req.files["image"]) {
          var file = req.files["image"];
          var dir = "./uploads/artist";
          var mimetype = ["image/png", "image/jpeg", "image/jpg"];

          if (mimetype.indexOf(file.mimetype) !== -1) {
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
            }
            //var extention = path.extname(file.name);
            var extension = ".jpg";
            var filename =
              "artist_" +
              new Date().getTime() +
              (Math.floor(Math.random() * 90000) + 10000) +
              extension;
            file.mv(dir + "/" + filename, async (err) => {
              if (err) {
                logger.trace("There was an issue in uploading avatar image");
                callback({
                  status: config.MEDIA_ERROR_STATUS,
                  resp: {
                    status: 0,
                    message: "There was an issue in uploading avatar image",
                  },
                });
              } else {
                logger.trace("Avatar image has uploaded for artist");
                callback(null, filename);
              }
            });
          } else {
            callback({
              status: config.MEDIA_ERROR_STATUS,
              resp: { status: 0, message: "Invalid image format" },
            });
          }
        } else {
          callback(null, null);
        }
      },
    ],
    async (err, filename) => {
      if (err) {
        res.status(err.status).json(err.resp);
      } else {
        if (filename) {
          obj.image = await filename;
        }
      }
      var user_resp = await artist_helper.update_artist_by_id(
        req.userInfo.id,
        obj
      );
      if (user_resp.status === 0) {
        res
          .status(config.INTERNAL_SERVER_ERROR)
          .json({ error: user_resp.error });
      } else {
        res.status(config.OK_STATUS).json({
          message: "Profile has been updated successfully",
          image: filename,
        });
      }
    }
  );
});

router.put("/update_cover_image", function (req, res) {
  user_id = req.userInfo.id;
  var obj = {};

  async.waterfall(
    [
      function (callback) {
        if (req.files && req.files["cover_image"]) {
          logger.trace("Uploading avatar image");
          var file = req.files["cover_image"];
          var dir = "./uploads/artist";
          var mimetype = ["image/png", "image/jpeg", "image/jpg"];

          if (mimetype.indexOf(file.mimetype) !== -1) {
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
            }
            //var extention = path.extname(file.name);
            var extension = ".jpg";
            var filename =
              "artist_" +
              new Date().getTime() +
              (Math.floor(Math.random() * 90000) + 10000) +
              extension;
            file.mv(dir + "/" + filename, async (err) => {
              if (err) {
                logger.trace("There was an issue in uploading avatar image");
                callback({
                  status: config.MEDIA_ERROR_STATUS,
                  resp: {
                    status: 0,
                    message: "There was an issue in uploading avatar image",
                  },
                });
              } else {
                logger.trace("Avatar image has uploaded for artist");
                callback(null, filename);
              }
            });
          } else {
            callback({
              status: config.MEDIA_ERROR_STATUS,
              resp: { status: 0, message: "Invalid image format" },
            });
          }
        } else {
          callback(null, null);
        }
      },
    ],
    async (err, filename) => {
      if (err) {
        res.status(err.status).json(err.resp);
      } else {
        if (filename) {
          obj.cover_image = await filename;
        }
      }
      var user_resp = await artist_helper.update_artist_by_id(
        req.userInfo.id,
        obj
      );
      if (user_resp.status === 0) {
        res
          .status(config.INTERNAL_SERVER_ERROR)
          .json({ error: user_resp.error });
      } else {
        res.status(config.OK_STATUS).json({
          message: "Profile has been updated successfully",
          cover_image: filename,
        });
      }
    }
  );
});

router.delete("/image/:artist_id", async (req, res) => {
  artist_id = req.params.artist_id;
  var del_resp = await artist_helper.delete_artist_image(artist_id);
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deleting artist image",
      error: del_resp.error,
    });
  } else if (del_resp.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Can't delete artist image" });
  } else {
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "Artist image has been deleted" });
  }
});

router.delete("/cover_image/:artist_id", async (req, res) => {
  artist_id = req.params.artist_id;
  var del_resp = await artist_helper.delete_artist_cover_image(artist_id);
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deleting artist cover image",
      error: del_resp.error,
    });
  } else if (del_resp.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Can't delete artist cover image" });
  } else {
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "artist cover image has been deleted" });
  }
});

router.get("/bank", async (req, res) => {
  artist_id = req.userInfo.id;
  var card = await artist_helper.get_all_bank_by_artist_id(artist_id);
  if (card.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, bank: card.bank });
  } else {
    logger.error("Error occured while fetching = ", card);
    res.status(config.INTERNAL_SERVER_ERROR).json(card);
  }
});

/**
 * @api {get} /artist/ Artist Analytics detail - Get
 * @apiName Artist Analytics detail- Get
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} artist detail analytics as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */

router.post("/analytics/followers", async (req, res) => {
  var resp_gender = await follower_helper.get_artist_followers_by_gender(
    req.userInfo.id,
    req.body.day
  );
  var resp_day = await follower_helper.get_artist_followers_by_day(
    req.userInfo.id,
    req.body.day
  );
  var resp_age = await follower_helper.get_artist_followers_by_age(
    req.userInfo.id,
    req.body.day
  );
  var resp_location = await follower_helper.get_artist_followers_by_location(
    req.userInfo.id,
    req.body.day
  );
  if (
    resp_gender.status === 0 &&
    resp_day.status === 0 &&
    resp_age.status === 0 &&
    resp_location.status === 0
  ) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while finding artist",
      error: resp_gender.error,
      error: resp_day.error,
    });
  } else if (resp_gender.status === 2) {
    res.status(config.BAD_REQUEST).json({
      status: 0,
      message: "Not available",
      day: [],
      gender: [],
      track: [],
      location: [],
    });
  } else {
    res.status(config.OK_STATUS).json({
      status: 1,
      message: "Followers found",
      gender: resp_gender.results,
      day: resp_day.results,
      age: resp_age.results,
      loaction: resp_location.results,
    });
  }
});

router.post("/analytics/overview", async (req, res) => {
  var resp_gender = await follower_helper.get_artist_followers_by_gender(
    req.userInfo.id,
    req.body.day
  );
  var track = await download_helper.get_all_downloaded_track_by_id(
    req.userInfo.id,
    req.body.day
  );
  var resp_day = await vote_track_helper.get_artist_vote_by_day(
    req.userInfo.id,
    req.body.day
  );
  var resp_location = await vote_track_helper.get_artist_by_location_votes(
    req.userInfo.id,
    req.body.day
  );

  if (
    resp_gender.status === 0 &&
    resp_day.status === 0 &&
    track.status === 0 &&
    resp_location.status === 0
  ) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while finding artist",
      error: resp_gender.error,
      error: resp_day.error,
    });
  } else if (resp_gender.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Not available" });
  } else {
    res.status(config.OK_STATUS).json({
      status: 1,
      message: "found",
      gender: resp_gender.results,
      track: track.track,
      vote: resp_day.results,
      location: resp_location.results,
    });
  }
});

/**
 * @api {get} /artist/track_likes Artist track likes detail - Get
 * @apiName Artist track likes detail- Get
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} artist track likes detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/track_likes", async (req, res) => {
  artist_id = req.userInfo.id;
  var track = await track_helper.get_all_track_by_id(artist_id);
  if (track.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, track: track.track });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});

/**
 * @api {put} /settings/email Update artist email
 * @apiName Update artist email
 * @apiGroup User
 *
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} email Artist email

 *
 * @apiSuccess (Success 200) {JSON} Update artist email
 * @apiError (Error 4xx) {String} message Validation or error message.
 */

router.put("/settings/email", async (req, res) => {
  artist_id = req.userInfo.id;
  var schema = {
    new_email: {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" },
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var resp = await artist_helper.get_artist_by_id(artist_id);
    if (resp.status === 1) {
      if (resp.artist.email == req.body.email) {
        if (req.body.new_email) {
          console.log(" : req.body.email ==> ", req.body.new_email);
          var resp = await artist_helper.update_artist_email(
            artist_id,
            req.body.new_email
          );
          if (resp.status === 1) {
            res
              .status(config.OK_STATUS)
              .json({ status: 1, resp: "Email has been changed" });
          } else {
            res
              .status(config.BAD_REQUEST)
              .json({ status: 2, resp: "Email has not changed" });
          }
        } else {
          res
            .status(config.OK_STATUS)
            .json({ status: 1, resp: "Please Enter New Email" });
        }
      } else {
        res
          .status(config.OK_STATUS)
          .json({ status: 1, resp: "You cannot change the email" });
      }
    } else {
      logger.error("Error occured while fetching = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    }
  } else {
    res.status(config.BAD_REQUEST).json({ message: "Enter Valid Email" });
  }
});

/**
 * @api {put} /settings/email Update artist password
 * @apiName Update artist password
 * @apiGroup User
 *
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} password Artist password

 *
 * @apiSuccess (Success 200) {JSON} Update artist password
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put("/settings/password", async (req, res) => {
  artist_id = req.userInfo.id;
  var resp = await artist_helper.get_artist_by_id(artist_id);
  if (resp.status === 1) {
    if (bcrypt.compareSync(req.body.password, resp.artist.password)) {
      if (req.body.new_password) {
        var resp = await artist_helper.update_artist_password(artist_id, {
          password: bcrypt.hashSync(req.body.new_password, saltRounds),
        });
        res
          .status(config.OK_STATUS)
          .json({ status: 1, resp: "Password changed" });
      } else {
        res
          .status(config.BAD_REQUEST)
          .json({ status: 1, message: "Please Enter New Password" });
      }
    } else {
      res
        .status(config.BAD_REQUEST)
        .json({ status: 2, message: "Password is wrong" });
    }
  } else {
    logger.error("Error occured while fetching = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  }
});

/**
 * @api {get} /artist/track_comment Artist track likes comments - Get
 * @apiName Artist track comments detail- Get
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} artist track comments detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/track_comment", async (req, res) => {
  artist_id = req.userInfo.id;
  var comment = await comment_helper.get_all_comment_by_track(artist_id);
  if (comment.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, comment: comment.comment });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});

/**
 * @api {post} /artist/participate   Participate in Competition- Add
 * @apiName   Participate in Competition
 * @apiGroup Artist

 * @apiHeader {String}  Content-Type multipart/form-data
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} contest_id Contest id of contest
 * @apiParam {String} track_id Track id of track
 *
 * @apiSuccess (Success 200) {JSON} artist participate details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
// router.post("/participate", async (req, res) => {
//     artist_id = req.userInfo.id;
//     var schema = {
//         "contest_id": {
//             notEmpty: true,
//             errorMessage: "Contest Id is required"
//         },
//         // "track_id": {
//         //     notEmpty: true,
//         //     errorMessage: "Track Id is required"
//         // },
//         "round1_track": {
//             notEmpty: true,
//             errorMessage: "Track is required"
//         },
//         "round2_track": {
//             notEmpty: true,
//             errorMessage: "Track is required"
//         },
//         "round3_track": {
//             notEmpty: true,
//             errorMessage: "Track is required"
//         },
//         "semi_final_track": {
//             notEmpty: true,
//             errorMessage: "Track is required"
//         },
//         "final_track": {
//             notEmpty: true,
//             errorMessage: "Track is required"
//         }
//     };
//     req.checkBody(schema);
//     var errors = req.validationErrors();
//     if (!errors) {
//         var obj = {
//             artist_id: req.userInfo.id,
//             contest_id: req.body.contest_id,
//             preliminary2_track: req.body.preliminary2_track,
//             preliminary3_track: req.body.preliminary3_track,
//             round1_track: req.body.round1_track,
//             round2_track: req.body.round2_track,
//             semi_final_track: req.body.semi_final_track,
//             final_track: req.body.final_track
//         };

//         var contest_data = await contest_helper.get_contest_by_id(obj.contest_id);
//         contest_music = contest_data.contest.music_type;

//         var artist_data = await artist_helper.get_artist_by_id(artist_id);
//         artist_music = artist_data.artist.music_type._id;
//         var round = await round_helper.get_current_rounds_of_contests(obj.contest_id)

//         if (round.status == 1) {
//             if (contest_music.toString() === artist_music.toString()) {
//                 var resp_data = await participate_helper.get_participant(obj.artist_id, obj.contest_id, obj.track_id);
//                 if (resp_data.status == 2) {
//                     var resp_datas = await participate_helper.insert_participant(obj);
//                     var resp_part = await participate_helper.get_participant(obj.artist_id, obj.contest_id, obj.track_id);

//                     var round = await round_helper.get_current_rounds_of_contests(obj.contest_id)

//                     if (round.status == 1) {
//                         var winner_obj = {
//                             artist_id: req.userInfo.id,
//                             contest_id: req.body.contest_id,
//                             track_id: req.body.track_id,
//                             round_id: round.round._id
//                         }

//                         var resp = await winner_helper.insert_winner(winner_obj);
//                     }
//                     if (resp_data.status == 0) {
//                         logger.error("Error occured while inserting = ", resp_data);
//                         res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
//                     } else
//                         var resp_data = await round_helper.get_round_by_id(obj.contest_id);

//                     no_paritipant = resp_data.contest.no_of_participants + 1
//                     var resp_data = await round_helper.update_participant(obj.contest_id, no_paritipant);
//                     var resp_data = await artist_helper.update_is_submit(obj.track_id, true);
//                     logger.trace(" got successfully = ", resp_datas);
//                     res.status(config.OK_STATUS).json({ "message": "Participated Successfully" });
//                 }
//                 else {
//                     logger.trace("Already participated for this contest");
//                     res.status(config.OK_STATUS).json({ "message": "Already participated for this contest" });
//                 }

//             }
//             else {
//                 logger.trace("You are of Different Genre");
//                 res.status(config.OK_STATUS).json({ "message": "You are of Different Genre" });
//             }
//         }

//         else {
//             res.status(config.OK_STATUS).json({ "message": "Contest is not Yet started" });

//         }

//     }
//     else {
//         logger.error("Validation Error = ", errors);
//         res.status(config.BAD_REQUEST).json({ message: errors });
//     }
// });

// submit the tracks for contest

router.post("/submit_tracks", async (req, res) => {
  console.log("1", 1);

  artist_id = req.userInfo.id;
  var schema = {
    // "contest_id": {
    //     notEmpty: true,
    //     errorMessage: "Contest Id is required"
    // },
    // "track_id": {
    //     notEmpty: true,
    //     errorMessage: "Track Id is required"
    // },
    // "round1_track": {
    //     notEmpty: true,
    //     errorMessage: "Track is required"
    // },
    // "round2_track": {
    //     notEmpty: true,
    //     errorMessage: "Track is required"
    // },
    // "round3_track": {
    //     notEmpty: true,
    //     errorMessage: "Track is required"
    // },
    // "semi_final_track": {
    //     notEmpty: true,
    //     errorMessage: "Track is required"
    // },
    // "final_track": {
    //     notEmpty: true,
    //     errorMessage: "Track is required"
    // }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      artist_id: req.userInfo.id,
      contest_id: req.body.contest_id,
      preliminary2_track: req.body.preliminary1_track,
      preliminary3_track: req.body.preliminary2_track,
      round1_track: req.body.round1_track,
      round2_track: req.body.round2_track,
      round3_track: req.body.round3_track,
      semi_final_track: req.body.semi_final_track,
      final_track: req.body.final_track,
    };
    var no_pariticipant;
    var artist_participation = await participate_helper.get_track_participation(
      obj.contest_id,
      req.userInfo.id
    );

    if (artist_participation.status == 2) {
      var contest_data = await contest_helper.get_contest_by_id(obj.contest_id);
      console.log("contest_data", contest_data);

      var participate_data = await round_helper.get_round_by_id(obj.contest_id);
      console.log("participate_data", participate_data);

      if (contest_data.contest.contest_type == "special") {
        var artist_data = await artist_helper.get_artist_by_id(artist_id);
        artist_music = artist_data.artist.music_type._id;
        console.log("artist_music => ", artist_music);
        console.log(
          "contest_data.contest.music_type => ",
          contest_data.contest.music_type
        );
        if (
          artist_music.toString() == contest_data.contest.music_type.toString()
        ) {
          var no_of_participant = contest_data.contest.no_of_participant + 1;
          var resp_data = await contest_helper.update_participant(
            obj.contest_id,
            no_of_participant
          );
          var resp_data = await participate_helper.insert_track_round(obj);
          res.status(config.OK_STATUS).json({
            message: "Successfully added track for the contest",
            status: 1,
            tracks: resp_data,
          });
        } else {
          logger.trace("You are of Different Genre");
          res
            .status(config.BAD_REQUEST)
            .json({ message: "You are of Different Genre" });
        }
      } else if (
        contest_data.contest.contest_type == "standard" ||
        contest_data.contest.contest_type == "beta"
      ) {
        if (participate_data.contest.round == "preliminary1") {
          var artist_data = await artist_helper.get_artist_by_id(
            req.userInfo.id
          );
          if (artist_data.artist.music_type.alias == "hiphop") {
            if (participate_data.contest.hip_hop_participants <= 1000) {
              no_pariticipant =
                participate_data.contest.hip_hop_participants + 1;
              var resp_data = await round_helper.update_hip_hop_participant(
                obj.contest_id,
                no_pariticipant
              );
            } else {
              res.status(config.BAD_REQUEST).json({
                message:
                  "Preliminary round is over of your genre, you cannot apply",
              });
            }
          } else if (artist_data.artist.music_type.alias == "pop") {
            if (participate_data.contest.pop_participants <= 1000) {
              no_pariticipant = participate_data.contest.pop_participants + 1;
              var resp_data = await round_helper.update_pop_participant(
                obj.contest_id,
                no_pariticipant
              );
            } else {
              res.status(config.BAD_REQUEST).json({
                message:
                  "Preliminary round is over of your genre, you cannot apply",
              });
            }
          } else if (artist_data.artist.music_type.alias == "rb") {
            if (participate_data.contest.rb_participants <= 1000) {
              no_pariticipant = participate_data.contest.rb_participants + 1;
              var resp_data = await round_helper.update_rb_participant(
                obj.contest_id,
                no_pariticipant
              );
            } else {
              res.status(config.BAD_REQUEST).json({
                message:
                  "Preliminary round is over of your genre, you cannot apply",
              });
            }
          } else if (artist_data.artist.music_type.alias == "ele") {
            if (participate_data.contest.country_participants <= 1000) {
              no_pariticipant =
                participate_data.contest.country_participants + 1;
              var resp_data = await round_helper.update_ele_participant(
                obj.contest_id,
                no_pariticipant
              );
            } else {
              res.status(config.BAD_REQUEST).json({
                message:
                  "Preliminary round is over of your genre, you cannot apply",
              });
            }
          } else if (artist_data.artist.music_type.alias == "rock") {
            if (participate_data.contest.rock_participants <= 1000) {
              no_pariticipant = participate_data.contest.rock_participants + 1;
              var resp_data = await round_helper.update_rock_participant(
                obj.contest_id._id,
                no_pariticipant
              );
            } else {
              res.status(config.BAD_REQUEST).json({
                message:
                  "Preliminary round is over of your genre, you cannot apply",
              });
            }
          } else if (artist_data.artist.music_type.alias == "latin") {
            if (participate_data.contest.latin_participants <= 1000) {
              no_pariticipant = participate_data.contest.latin_participants + 1;
              var resp_data = await round_helper.update_latin_participant(
                contest_data.contest._id,
                no_pariticipant
              );
            } else {
              res.status(config.BAD_REQUEST).json({
                message:
                  "Preliminary round is over of your genre, you cannot apply",
              });
            }
          }
          var no_of_participant = contest_data.contest.no_of_participant + 1;
          var resp_data = await contest_helper.update_participant(
            obj.contest_id,
            no_of_participant
          );
          var resp_data = await participate_helper.insert_track_round(obj);
          res.status(config.OK_STATUS).json({
            message: "Successfully added track for the contest",
            status: 1,
            tracks: resp_data,
          });
        } else {
          res
            .status(config.BAD_REQUEST)
            .json({ message: "Preliminary round is over for this contest" });
        }
      }
    } else {
      res
        .status(config.BAD_REQUEST)
        .json({ message: "You have already participated in this contest" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

router.post("/get_contest_track", async (req, res) => {
  var contest_track = await participate_helper.get_track_participation(
    req.body.contest_id,
    req.userInfo.id
  );
  res.status(config.OK_STATUS).send({
    tracks: contest_track,
  });
});

router.post("/deleteMessage", async (req, res) => {
  const ids = req.body.ids;
  let all_id = [];
  await ids.map((id) => {
    all_id.push(ObjectId(id));
  });
  var resp = await artist_message_helper.delete_message(
    {
      ids: all_id,
      selectedAll: req.body.selectedAll,
      reqUser_id: req.userInfo.id,
    },
    socket
  );

  if (resp.status == 0) {
    logger.error("Error occured while deleting notification = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.status == 1) {
      res.status(config.OK_STATUS).json({
        status: 1,
        inboxMessages: resp.inboxMessages,
        message: resp.message,
      });
    } else {
      res
        .status(config.NOT_FOUND)
        .json({ status: 2, message: "Messages not deleted." });
    }
  }
});

router.post("/message_markAsRead", async (req, res) => {
  const ids = req.body.ids;
  let all_id = [];
  await ids.map((id) => {
    all_id.push(ObjectId(id));
  });
  var resp = await artist_message_helper.markAsRead(
    {
      ids: all_id,
      selectedAll: req.body.selectedAll,
      reqUser_id: req.userInfo.id,
    },
    socket
  );

  if (resp.status == 0) {
    logger.error("Error occured while marking as read = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.status == 1) {
      res.status(config.OK_STATUS).json({
        status: 1,
        inboxMessages: resp.inboxMessages,
        messageCount: resp.messageCount,
        message: resp.message,
      });
    } else {
      res
        .status(config.NOT_FOUND)
        .json({ status: 2, message: "Messages not marked as read." });
    }
  }
});

router.get("/contest", async (req, res) => {
  var artist_music = await artist_helper.get_artist_by_id(req.userInfo.id);
  artist_music = artist_music.artist.music_type._id;
  var contest = await contest_helper.get_all_contests();
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, contest: contest.contest });
  } else {
    logger.error("Error occured while fetching = ", contest);
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }
});

router.get("/message", async (req, res) => {
  var resp = await artist_message_helper.get_all_message(req.userInfo.id);
  console.log(" : resp ==> ", resp);
  if (resp.status == 0) {
    logger.error("Error occured while fetching notification = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.status == 1) {
      res.status(config.OK_STATUS).json({
        status: 1,
        inboxMessages: resp.inboxMessages,
        message: resp.message,
      });
    } else {
      res
        .status(config.NOT_FOUND)
        .json({ status: 2, message: "Messages not found." });
    }
  }
});

router.get("/message/:id", async (req, res) => {
  console.log(" : req.params.user_id ==> ", req.params.id);
  var resp = await artist_message_helper.getMessageById(
    req.params.id,
    req.userInfo.id,
    socket
  );
  if (resp.status == 0) {
    logger.error("Error occured while finding message detail = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.status == 1) {
      res.status(config.OK_STATUS).json({
        status: 1,
        message: "Message detail found",
        messageDetail: resp.messageDetail,
      });
    } else {
      res
        .status(config.NOT_FOUND)
        .json({ status: 2, message: "Message detail not found." });
    }
  }
  // var resp = await artist_message_helper.get_all_message(req.userInfo.id);
  // console.log(" : resp ==> ", resp);
  // if (resp.status == 0) {
  //   logger.error("Error occured while fetching notification = ", resp);
  //   res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  // } else {
  //   if (resp.status == 1) {
  //     res.status(config.OK_STATUS).json({
  //       status: 1,
  //       inboxMessages: resp.inboxMessages,
  //       message: resp.message,
  //     });
  //   } else {
  //     res
  //       .status(config.NOT_FOUND)
  //       .json({ status: 2, message: "Messages not found." });
  //   }
  // }
});

router.post("/suspend/user/:user_id", async (req, res) => {
  var resp = await user_helper.get_user_by_id(req.params.user_id);
  if (resp.status == 0) {
    logger.error("Error occured while fetching user = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.user.status == "active") {
      var stat = "suspended";
      var user_resp = await user_helper.update_user_status(
        req.params.user_id,
        stat
      );
    } else {
      var stat = "active";
      var user_resp = await user_helper.update_user_status(
        req.params.user_id,
        stat
      );
    }
    res.status(config.OK_STATUS).json({ artist: user_resp });
  }
});

router.get("/notification", async (req, res) => {
  var resp = await artist_notifications_helper.get_all_notification(
    req.userInfo.id
  );
  console.log(" : resp ==> ", resp);
  if (resp.status == 0) {
    logger.error("Error occured while fetching notification = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.status == 1) {
      res
        .status(config.OK_STATUS)
        .json({ status: 1, notifications: resp.notifications });
    } else {
      res
        .status(config.NOT_FOUND)
        .json({ status: 2, message: "Notification not found." });
    }
  }
});

router.post("/notification_count_update", async (req, res) => {
  var resp = await artist_notifications_helper.notification_seen(
    req.userInfo.id,
    req.body
  );
  if (resp.status == 0) {
    logger.error("Error occured while updating counts = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.status == 1) {
      res
        .status(config.OK_STATUS)
        .json({ status: 1, message: "Counts updated." });
    } else {
      res
        .status(config.NOT_FOUND)
        .json({ status: 2, message: "Notification not found." });
    }
  }
});

router.post("/deactive_delete_Account", async (req, res) => {
  try {
    if (req.body.is_deactivate) {
      const artistDeactivate = await Artist.updateOne(
        { _id: ObjectId(req.userInfo.id) },
        { $set: { is_deactivate: true } }
      );
      if (artistDeactivate) {
        res.status(config.OK_STATUS).json({
          status: 1,
          message: "Your account deactivated successfully.",
        });
      } else {
        res
          .status(config.NOT_FOUND)
          .json({ status: 2, message: "Your account not found." });
      }
    } else {
      const artistDelete = await Artist.updateOne(
        { _id: ObjectId(req.userInfo.id) },
        { $set: { is_del: true } }
      );
      if (artistDelete) {
        res.status(config.OK_STATUS).json({
          status: 1,
          message: "Your account deleted successfully.",
        });
      } else {
        res
          .status(config.NOT_FOUND)
          .json({ status: 2, message: "Your account not found." });
      }
    }
  } catch (err) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deactivating or deleting account",
      error: err,
    });
  }

  // res.status(config.OK_STATUS).json({ status: 1, message: "Account del" });
  // var resp = await artist_notifications_helper.notification_seen(
  //   req.userInfo.id,
  //   req.body
  // );
  // if (resp.status == 0) {
  //   logger.error("Error occured while updating counts = ", resp);
  //   res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  // } else {
  //   if (resp.status == 1) {
  //     res
  //       .status(config.OK_STATUS)
  //       .json({ status: 1, message: "Account del" });
  //   } else {
  //     res
  //       .status(config.NOT_FOUND)
  //       .json({ status: 2, message: "Artist not found." });
  //   }
  // }
});

module.exports = router;
