var express = require('express');
var router = express.Router();
var config = require('../../config');
var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
var purchase_helper = require('../../helpers/purchase_track_helper');
var vote_track_helper = require('../../helpers/vote_track_helper');
var track_helper = require('../../helpers/track_helper');
var like_helper = require('../../helpers/like_helper');
var download_helper = require('../../helpers/download_helper');
var artist_helper = require('../../helpers/artist_helper');
var user_helper = require('../../helpers/user_helper');
var mail_helper = require('../../helpers/mail_helper');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');
var archiver = require('archiver');



/**
 * @api {post} /user/track/purchase purchase  track Add
 * @apiName purchase track - Add
 * @apiGroup User

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {number} user_id User id of user
 * @apiParam {number} track_id Track id of track
 *
 * @apiSuccess (Success 200) {JSON} purchase details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/purchase', async (req, res) => {
  var schema = {
    "track_id": {
      notEmpty: true,
      errorMessage: "Track Id is required"
    },

  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {

    var obj = {
      user_id: req.userInfo.id,
      track_id: req.body.track_id
    };
    var resp_data = await purchase_helper.purchase_track(obj);
    if (resp_data.status == 0) {
      logger.error("Error occured while fetching music = ", resp_data);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
      logger.trace("music got successfully = ", resp_data);
      res.status(config.OK_STATUS).json(resp_data);
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


/**
 * @api {get} /user/track/purchased  Puchased Track - Get by id
 * @apiName Puchased Track - Get by id
  * @apiGroup User
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} track  of track document
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/purchased", async (req, res) => {
  user_id = req.userInfo.id;
  logger.trace("Get all Artist API called");
  var resp_data = await purchase_helper.get_purchased_track(user_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching Track = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("Artist got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});


/**
 * @api {post} /user/track/vote_track Vote for Artist Track Add
 * @apiName Vote for Artist Track - Add
 * @apiGroup User

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {String} artist_id Artist id of artist
 * @apiParam {String} Track_id track id of artist
 *
 * @apiSuccess (Success 200) {JSON} vote details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/vote_track', async (req, res) => {
  user_id = req.userInfo.id;
  var schema = {
    "track_id": {
      notEmpty: true,
      errorMessage: "Track Id is required"
    },

  };
  req.checkBody(schema);
  var errors = req.validationErrors();

  if (!errors) {
    var obj = {
      user_id: req.userInfo.id,
      track_id: req.body.track_id,
      artist_id: req.body.artist_id
    };

    var resp_data = await vote_track_helper.get_all_voted_artist(user_id, obj.track_id);

    if (resp_data && resp_data.vote == 0) {
      var data = await vote_track_helper.vote_for_track(user_id, obj);
      if (data && data.status == 0) {
        logger.error("Error occured while voting = ", data);
        res.status(config.INTERNAL_SERVER_ERROR).json(data);
      } else

        var resp_data = await track_helper.get_all_track_by_track_id(obj.track_id);
      no_vote = resp_data.track.no_of_votes + 1;


      var resp_data = await track_helper.update_votes(obj.track_id, no_vote);

      logger.trace("voting done successfully = ", data);
      // var resp = await user_helper.get_user_by_id(obj.user_id);
      // no_vote = resp.user.no_of_votes + 1
      // var resp_data = await user_helper.update_user_for_votes(obj.user_id, no_vote);
      logger.trace("voting done successfully = ", data);
      res.status(config.OK_STATUS).json(data);
    }

    else {
      logger.trace("Already Voted");
      res.status(config.OK_STATUS).json({ "message": "Already Voted" });
    }

  }
});


/**
 * @api {post} /user/artist/like_track Like  Artist Track Add
 * @apiName Like Artist Track - Add
 * @apiGroup User

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {String} artist_id Artist id of artist
 * @apiParam {String} Track_id track id of artist
 *
 * @apiSuccess (Success 200) {JSON} like details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/like_track', async (req, res) => {

  user_id = req.userInfo.id;
  var schema = {
    "track_id": {
      notEmpty: true,
      errorMessage: "Track Id is required"
    },
    "artist_id": {
      notEmpty: true,
      errorMessage: "Artist Id is required"
    },

  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      user_id: req.userInfo.id,
      track_id: req.body.track_id,
      artist_id: req.body.artist_id
    };

    var resp_data = await like_helper.get_like(user_id, obj.track_id);
    if (resp_data && resp_data.like == 0) {

      var data = await like_helper.like_for_track(user_id, obj);

      if (data && data.status == 0) {
        logger.error("Error occured while voting = ", data);
        res.status(config.INTERNAL_SERVER_ERROR).json(data);

      } else
        var resp_data = await like_helper.get_all_track_by_track_id(obj.track_id);
      no_vote = resp_data.like.no_of_likes + 1;
      var resp_data = await like_helper.update_likes(obj.track_id, no_vote);

      var responses = await artist_helper.get_artist_by_id(obj.artist_id);

      no_like = responses.artist.no_of_likes + 1
      var resp_data = await track_helper.update_artist_for_likes(obj.artist_id, no_like);

      var resp = await user_helper.get_user_by_id(obj.user_id);
      no_like = resp.user.no_of_likes + 1
      var resp_data = await user_helper.update_user_for_likes(obj.user_id, no_like);

      //sending mail to artist for like
      var resp = await artist_helper.get_artist_by_id(obj.artist_id);

      var response = await user_helper.get_user_by_id(user_id);
      if (responses.artist.notification_settings.like_by_email == true) {


        let mail_resp = await mail_helper.send("notification", {
          "to": resp.artist.email,
          "subject": "like from user"
        }, {
            "user": response.user.first_name + response.user.last_name
          });
      }

      logger.trace("like done successfully = ", data);
      res.status(config.OK_STATUS).json(data);
    }
    else {
      logger.trace("Already liked");
      res.status(config.OK_STATUS).json({ "message": "Already liked" });
    }
  }
  else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});
router.post("/add_admin", async (req, res) => {
  var schema = {
    "first_name": {
      notEmpty: true,
      errorMessage: "name is required"
    },
    "last_name": {
      notEmpty: true,
      errorMessage: "name is required"
    },
    "account_type": {
      notEmpty: true,
      errorMessage: "Account Type is required"
    },
    "email": {
      notEmpty: true,
      errorMessage: "email is required"
    },
    "password": {
      notEmpty: true,
      errorMessage: "password is required"
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      account_type: req.body.account_type,
      email: req.body.email,
      password: req.body.password,
    };
    type = await admin_helper.get_admin_by_id(req.userInfo.id)
    if (type.admin.account_type == "super_admin") {
      user = await admin_helper.get_admin_by_email(req.body.email)
      if (user.status === 2) {
        var data = await admin_helper.insert_admin(obj);
        if (data.status == 0) {
          logger.trace("Error occured while inserting admin - Admin Signup API");
          logger.debug("Error = ", data.error);
          res.status(config.INTERNAL_SERVER_ERROR).json(data);
        } else {
          logger.trace("Admin has been inserted");
          // Send email confirmation mail to user
          logger.trace("sending mail");
          let mail_resp = await mail_helper.send("admin_mail", {
            "to": data.admin.email,
            "subject": "Music Social Voting - Email confirmation"
          }, {
              "email": obj.email,
              "password": obj.password,
            });
          if (mail_resp.status === 0) {
            res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending confirmation email", "error": mail_resp.error });
          } else {
            res.status(config.OK_STATUS).json({ "status": 1, "message": "admin registered successfully" });
          }
        }
      }
      else {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "admin's email already exist" });
      }
    }
    else {
      logger.trace("You dont have permission to add admin");
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to add admin" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

/**
 * @api {get} /user/track/:track_id/download Download  Artist Track Add
 * @apiName Download Artist Track - Add
 * @apiGroup User

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key

 * @apiParam {String} Track_id track id of artist
 *
 * @apiSuccess (Success 200) {JSON} download details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get('/:track_id/download', async (req, res) => {
  try {
    var obj = {
      user_id: req.userInfo.id,
      track_id: req.params.track_id,
      artist_id: req.params.artist_id
    }
    var resp = await track_helper.get_all_track_by_track_id(obj.track_id);


    if (resp.track.is_downloadable == false) {
      res.status(200).json({ "status": 0, "message": "track cannot be downloaded" });
    } else {
      var resp_data = await download_helper.download_track(obj);
      if (resp_data.status == 0) {
        logger.error("Error occured while fetching music = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
      } else {
        var resp_data = await download_helper.get_all_track_by_track_id(obj.track_id);
        no_download = resp_data.track.no_of_downloads + 1;
        var resp_data = await download_helper.update_downloads(obj.track_id, no_download);
        if (resp_data.status == 1) {
          logger.trace("music got successfully = ", resp_data);
          let track_resp = await track_helper.get_all_track_by_track_id(req.params.track_id);
          if (track_resp.status == 1) {

            var filename = new Date().getTime() + (Math.floor(Math.random() * 90000) + 10000) + '.zip';
            // create a file to stream archive data to.
            var output = await fs.createWriteStream(__dirname + '/../../uploads/user/' + filename);
            var archive = await archiver('zip', {
              zlib: { level: 9 }
            });

            archive.pipe(output);
            archive.append(fs.createReadStream(__dirname + '/../../uploads/track/' + track_resp.track.audio), { name: track_resp.track.audio });
            archive.finalize(); +
              res.status(200).json({ "status": 1, "filename": filename });

          } else {
            res.status(200).json({ "status": 0, "message": "track not found" });
          }
        }
        else {
          res.status(200).json({ "status": 0, "message": "track not found" });

        }
      }
    }
  } catch (err) {
    res.send(err);
  }
});


module.exports = router;