var express = require("express");
var router = express.Router();
var config = require("../../config");
var logger = config.logger;
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var async = require("async");
var track_helper = require("../../helpers/track_helper");
var vote_track_helper = require("../../helpers/vote_track_helper");
var artist_helper = require("../../helpers/artist_helper");
var artist_helper = require("../../helpers/artist_helper");
var vote_track_helper = require("../../helpers/vote_track_helper");
var download_helper = require("../../helpers/download_helper");
var bookmark_helper = require("../../helpers/bookmark_helper");
var like_helper = require("../../helpers/like_helper");
var comment_helper = require("../../helpers/comment_helper");
var playlist_helper = require("../../helpers/playlist_helper");
var artist_playlist_helper = require("../../helpers/artist_playlist_helper");
var path = require("path");
var moment = require("moment");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var fs = require("fs");
const follower_helper = require("../../helpers/follower_helper");
var global_helper = require("../../helpers/global_helper");
var socket = require("../../socket/socketServer");
const { exec } = require("child_process");
const CopyrightTrackNotifications = require("../../models/copyright_track_notification");
const copyright_track_notification_helper = require("../../helpers/copyright_track_notification_helper");

/**
 * @api {post} /artist/track   track Add
 * @apiName  track - Add
 * @apiGroup Artist

 * @apiHeader {String}  Content-Type multipart/form-data
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} artist_id Artist id of artist
 * @apiParam {String} name Name of track
 * @apiParam {String} description Description of track
 * @apiParam {String} image Image of Artist
 *
 * @apiSuccess (Success 200) {JSON} purchase details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/", async (req, res) => {
  artist_id = req.userInfo.id;
  var obj = {
    artist_id: req.userInfo.id,
  };
  if (req.body.name) {
    obj.name = req.body.name;
  }
  if (req.body.description) {
    obj.description = req.body.description;
  }
  if (req.body.price) {
    obj.price = req.body.price;
  }

  async.waterfall(
    [
      function (callback) {
        if (req.files && req.files["audio"]) {
          logger.trace("Uploading avatar image");
          var file = req.files["audio"];
          var dir = "./uploads/track/";
          var mimetype = [
            "audio/vnd.dlna.adts",
            "audio/mp3",
            "audio/mpeg",
            "audio/wav",
            "audio/aiff",
            "audio/flac",
            "audio/x-aiff",
          ];

          if (mimetype.indexOf(file.mimetype) !== -1) {
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
            }
            // var extension = '.mp4';
            var extension = ".mp3";
            var filename =
              "audio_" +
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
                logger.trace("Avatar image has uploaded for user");
              }
            });
          } else {
            callback({
              status: config.MEDIA_ERROR_STATUS,
              resp: { status: 0, message: "Invalid audio format" },
            });
          }
        }
        if (req.files && req.files["image"]) {
          logger.trace("Uploading avatar image");
          var file = req.files["image"];
          var dir = "./uploads/track/";
          var mimetype = ["image/png", "image/jpeg", "image/jpg"];
          if (mimetype.indexOf(file.mimetype) !== -1) {
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir);
            }
            var extension = ".jpg";
            var filename1 =
              "image_" +
              new Date().getTime() +
              (Math.floor(Math.random() * 90000) + 10000) +
              extension;
            file.mv(dir + "/" + filename1, async (err) => {
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
                logger.trace("Avatar image has uploaded for user");
              }
            });
          } else {
            callback({
              status: config.MEDIA_ERROR_STATUS,
              resp: { status: 0, message: "Invalid image format" },
            });
          }
          callback(null, filename, filename1);
        } else {
          callback(null, null);
        }
      },
    ],
    async (err, filename, filename1) => {
      if (err) {
        res.status(err.status).json(err.resp);
      } else {
        if (filename) {
          obj.audio = await filename;
          obj.image = await filename1;
        }
      }

      var card_resp = await artist_helper.get_account_by_artist_id(artist_id);
      if (card_resp.status === 2) {
        res.status(config.INTERNAL_SERVER_ERROR).json({
          message:
            "Please add bank details to get money into your account when track is being purchased",
        });
      } else if (card_resp.status === 1) {
        var artist = await artist_helper.get_artist_by_id(artist_id);

        no_track = artist.artist.no_of_tracks + 1;

        var track = await track_helper.update_artist_for_track(
          artist_id,
          no_track
        );

        // var artist = await artist_helper.get_artist_by_id(artist_id),
        //     no_track = artist.artist.no_of_tracks + 1;
        // var track = await track_helper.update_artist_for_track(artist_id, no_track)

        var resp = await track_helper.insert_track(artist_id, obj);
        // console.log(" : resp ==> ", resp);
        const audioName = resp.media.audio;
        const uploaderId = resp.media.artist_id;
        const trackId = resp.media._id;
        const audioTitle = resp.media.name;
        if (resp.status === 0) {
          res.status(config.INTERNAL_SERVER_ERROR).json({ error: resp.error });
        } else {
          var resp = await artist_helper.get_artist_by_id(artist_id);
          no_track = resp.artist.no_of_tracks + 1;

          const folowers = await follower_helper.get_all_artist_followers(
            artist_id
          );
          let receivers = [];
          await folowers.artist.map((res) => {
            receivers.push({ receiver: new ObjectId(res.user_id) });
          });

          // var notificationObj = {
          //   artist: uploaderId,
          //   track: trackId,
          //   type: "notification",
          //   body: `${resp.artist.first_name} ${resp.artist.last_name} has uploaded the ${audioTitle} track, which is copyrighted.`,
          // };

          // const copyrightTrack = await copyright_track_notification_helper.insert_copyright_track_notification(
          //   notificationObj,
          //   socket
          // );

          exec(
            `cd uploads/AudibleMagicToolkit_38.11b_rn3_linux64/bin/ && ./identify -c AomLR_v38.config -i /var/www/html/AOM/server/uploads/track/${audioName} -e ${uploaderId}`,
            async (error, stdout, stderr) => {
              if (error || stderr) {
                console.log(`error: ${error.message}`);
              } else {
                const AMResponse = JSON.parse(stdout);
                if (
                  AMResponse.matches &&
                  AMResponse.matches[0].metadata &&
                  AMResponse.matches[0].metadata.Label !== undefined
                ) {
                  console.log(
                    " : AMResponse.matches[0].metadata.Label ==> ",
                    AMResponse.matches[0].metadata.Label
                  );
                  var notificationObj = {
                    artist: uploaderId,
                    track: trackId,
                    type: "notification",
                    body: `${resp.artist.first_name} ${resp.artist.last_name} has uploaded the ${audioTitle} track, which is copyrighted.`,
                  };

                  const copyrightTrack = await copyright_track_notification_helper.insert_copyright_track_notification(
                    notificationObj,
                    socket
                  );

                  console.log(" : true ==> ", copyrightTrack);
                }
              }
            }
          );

          // console.log(" : reciver ==> ", receivers);
          const ArtistDtatil = await artist_helper.get_artist_by_id(artist_id);
          var userNotificationObj = {
            sender: artist_id,
            receivers: receivers,
            type: "notification",
            body:
              "New track " +
              req.body.name +
              " uploaded by " +
              ArtistDtatil.artist.first_name +
              " " +
              ArtistDtatil.artist.last_name +
              ".",
          };
          var user_notification_data = await global_helper.send_user_notification(
            userNotificationObj,
            socket
          );
          // console.log(" : userNotificationObj ==> ", user_notification_data);
          res
            .status(config.OK_STATUS)
            .json({ message: "Track Added Successfully" });
        }
      } else {
        res
          .status(config.OK_STATUS)
          .json({ message: "Error occured while adding bank details" });
      }
    }
  );
});

/**
 * @api {get} /artist/track   Track detail - Get
 * @apiName get_all_track_of_artist - Get
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} Track detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/tracks", async (req, res) => {
  artist_id = req.userInfo.id;
  var track = await track_helper.get_all_track_of_artist(
    artist_id,
    req.body.start,
    req.body.length
  );
  if (track.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, track: track });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});

/**
 * @api {put} /artist/track/:track_id  track update
 * @apiName track update
 * @apiGroup Artist

 * @apiHeader {String}  Content-Type multipart/form-data
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} artist_id Artist id of artist
 * @apiParam {String} name Name of track
 * @apiParam {String} price Price of track
 * @apiParam {String} description Description of track
 * @apiParam {String} music_type Music Type of track
 * @apiParam {String} image Image of Artist
 *
 * @apiSuccess (Success 200) {JSON} purchase details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */

router.put("/:track_id", async (req, res) => {
  artist_id = req.userInfo.id;
  track_id = req.params.track_id;
  var obj = {};
  if (req.body.name) {
    obj.name = req.body.name;
  }
  if (req.body.price) {
    obj.price = req.body.price;
  }
  obj.description = req.body.description;

  if (req.body.music_type) {
    obj.music_type = req.body.music_type;
  }
  var filename;
  if (req.files && req.files["image"]) {
    var file = req.files["image"];
    var dir = "./uploads/track";
    var mimetype = ["image/png", "image/jpeg", "image/jpg"];
    if (mimetype.indexOf(file.mimetype) != -1) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      extention = path.extname(file.name);
      filename = "track_" + new Date().getTime() + extention;
      file.mv(dir + "/" + filename, function (err) {
        if (err) {
          logger.error("There was an issue in uploading image");
          res.send({
            status: config.MEDIA_ERROR_STATUS,
            err: "There was an issue in uploading image",
          });
        } else {
          logger.trace("image has been uploaded. Image name = ", filename);
        }
      });
    } else {
      logger.error("Image format is invalid");
      res.send({
        status: config.VALIDATION_FAILURE_STATUS,
        err: "Image format is invalid",
      });
    }
  } else {
    logger.info("Image not available to upload. Executing next instruction");
  }
  if (filename) {
    obj.image = filename;
  }
  var resp_data = await track_helper.update_track_by_id(
    artist_id,
    track_id,
    obj
  );
  if (resp_data.status == 0) {
    logger.error("Error occured while updating = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("Updated successfully  = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});

/**
 * @api {delete} /artist/track/:track_id Delete Track
 * @apiName Delete Track
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {String} success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.delete("/:track_id", async (req, res) => {
  track_id = req.params.track_id;
  artist_id = req.userInfo.id;
  var resp = await artist_helper.get_artist_by_id(artist_id);
  no_track = resp.artist.no_of_tracks - 1;
  var resp_data = await track_helper.update_artist_for_track(
    artist_id,
    no_track
  );

  var resp = await artist_helper.get_artist_by_id(artist_id);
  no_track = resp.artist.no_of_likes - 1;
  var resp_data = await track_helper.update_artist_for_likes(
    artist_id,
    no_track
  );

  var bookmark_del = await bookmark_helper.delete_bookmark_by_track(track_id);
  var like_del = await like_helper.delete_like(track_id);
  var comment_del = await comment_helper.delete_comment_by_track(track_id);
  var playlist_del = await playlist_helper.delete_playlist_by_track(track_id);
  var artist_playlist_del = await artist_playlist_helper.delete_playlist_by_track(
    track_id
  );
  var transaction_del = await artist_helper.delete_transaction_track(track_id);

  var del_resp = await track_helper.delete_track_by_id(artist_id, track_id);
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deleting track ",
      error: del_resp.error,
    });
  } else if (del_resp.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Can't delete track " });
  } else {
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "Track  has been Deleted" });
  }
});

/**
 * @api {delete} /artist/image/:track_id Delete Image
 * @apiNameDelete Image
 * @apiGroup Artist
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {String} success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.delete("/image/:track_id", async (req, res) => {
  track_id = req.params.track_id;
  var del_resp = await track_helper.delete_track_image(track_id);
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deleting track image",
      error: del_resp.error,
    });
  } else if (del_resp.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Can't delete track image" });
  } else {
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "track image has been deleted" });
  }
});

/**
 * @api {post} /artist/track/votes_by_day Get all artist vote by day
 * @apiName Get all artist vote by day
 * @apiGroup Root
 * @apiParam {Number} day Vote day
 * @apiSuccess (Success 200) {Array} artist Array of artist vote document
 * @apiError (Error 4xx) {String} message Validation or error message.
 **/
router.post("/analytics/track", async (req, res) => {
  var resp_day = await vote_track_helper.get_artist_vote_by_day(
    req.userInfo.id,
    req.body.day
  );
  var resp_gender = await vote_track_helper.get_artist_vote_by_gender(
    req.userInfo.id,
    req.body.day
  );
  var resp_track = await vote_track_helper.get_artist_vote_by_track(
    req.userInfo.id,
    req.body.day
  );
  var resp_location = await vote_track_helper.get_artist_by_location_votes(
    req.userInfo.id,
    req.body.day
  );

  if (
    resp_day.status === 0 &&
    resp_gender === 0 &&
    resp_rack === 0 &&
    resp_location === 0
  ) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while finding vote",
      error: resp_day.error,
    });
  } else if (resp_day.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Not available" });
  } else {
    res.status(config.OK_STATUS).json({
      status: 1,
      message: "Vote found",
      day: resp_day.results,
      gender: resp_gender.results,
      track: resp_track.results,
      location: resp_location.results,
    });
  }
});

/**
 * @api {post} /artist/track/downloaded_track Get all number of downloaded tracks by day
 * @apiName  Get all number of downloaded tracks by day
 * @apiGroup Root
 * @apiParam {Number} day download on day
 * @apiSuccess (Success 200) {Array} artist Array of artist downloaded track document
 * @apiError (Error 4xx) {String} message Validation or error message.
 **/
router.post("/downloaded_track", async (req, res) => {
  artist_id = req.userInfo.id;
  var track = await download_helper.get_all_downloaded_track_by_id(
    artist_id,
    req.body.day
  );
  var resp_day = await download_helper.get_downloads_by_day(
    req.userInfo.id,
    req.body.day
  );
  var resp_location = await download_helper.get_downloads_by_location(
    req.userInfo.id,
    req.body.day
  );
  if (
    track.status === 1 &&
    resp_day.status === 1 &&
    resp_location.status == 1
  ) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({
      status: 1,
      track: track.track,
      day: resp_day.results,
      location: resp_location.results,
    });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});

router.post("/payment_by_day", async (req, res) => {
  artist_id = req.userInfo.id;

  var resp_day = await artist_helper.get_payment_by_day(
    req.userInfo.id,
    req.body.day
  );
  if (resp_day.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, day: resp_day.results });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});

router.post("/change_status_of_download", async (req, res) => {
  artist_id = req.userInfo.id;
  track_id = req.body.track_id;
  var resp = await track_helper.get_all_track_by_track_id(track_id);
  if (resp.status == 0) {
    logger.error("Error occured while fetching user = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.track.is_downloadable == false) {
      var stat = "true";
      var artist_resp = await artist_helper.update_download(
        artist_id,
        track_id,
        stat
      );

      res
        .status(config.OK_STATUS)
        .json({ message: "You have turn on the download option" });
    } else {
      var stat = "false";
      var artist_resp = await artist_helper.update_download(
        artist_id,
        track_id,
        stat
      );
      res
        .status(config.OK_STATUS)
        .json({ message: "You have turn off the download option" });
    }
  }
});

router.get("/get_track_for_join_contest", async (req, res) => {
  artist_id = req.userInfo.id;
  var resp = await track_helper.get_all_track_by_artist_id(artist_id);
  if (resp.status == 0) {
    logger.error("Error occured while fetching user = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else if (resp.status == 1) {
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "Tracks Found", track: resp.track });
  } else {
    res
      .status(config.NOT_FOUND)
      .json({ status: 2, message: "Tracks not Found" });
  }
});

module.exports = router;
