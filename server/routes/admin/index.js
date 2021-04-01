var express = require("express");
var router = express.Router();
var config = require("../../config");
var logger = config.logger;
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var async = require("async");
var admin_helper = require("../../helpers/admin_helper");
var round_helper = require("../../helpers/round_helper");
var participate_helper = require("../../helpers/participate_helper");
var artist_helper = require("../../helpers/artist_helper");
var user_helper = require("../../helpers/user_helper");
var track_helper = require("../../helpers/track_helper");
var mail_helper = require("../../helpers/mail_helper");
var flag_helper = require("../../helpers/flag_helper");
var flag_artist_helper = require("../../helpers/flag_artist_helper");
var flag_user_helper = require("../../helpers/flag_user_helper");
var follower_helper = require("../../helpers/follower_helper");
var participate_helper = require("../../helpers/participate_helper");
var contest_request_helper = require("../../helpers/contest_request_helper");
var vote_track_helper = require("../../helpers/vote_track_helper");
var contest_helper = require("../../helpers/contest_helper");
var comment_helper = require("../../helpers/comment_helper");
var winner_helper = require("../../helpers/winner_helper");
var bookmark_helper = require("../../helpers/bookmark_helper");
var like_helper = require("../../helpers/like_helper");
var playlist_helper = require("../../helpers/playlist_helper");
var global_helper = require("../../helpers/global_helper");
var socket = require("../../socket/socketServer");
var RoundTracks = require("../../models/round_tracks");
var Round = require("../../models/round");

var _ = require("underscore");
var cron = require("node-cron");
var moment = require("moment");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var fs = require("fs");
const artist_message_helper = require("../../helpers/artist_message_helper");
const copyright_track_notification_helper = require("../../helpers/copyright_track_notification_helper");
const user_notifications_helper = require("../../helpers/user_notification_helper");
const contest_voting_helper = require("../../helpers/contest_voting_helper");
const { result } = require("underscore");

/**
 * @api {post} /admin/add_admin

 * @apiName Add Admin
 * @apiGroup  Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} first_name Admin First Name
 * @apiParam {String} last_name Admin Last Name
 * @apiParam {String} account_type Admin Account type
 * @apiParam {String} email Admin Email
 * @apiParam {String} password Admin password
 *
 * @apiSuccess (Success 200) {JSON} admin details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */

router.post("/add_admin", async (req, res) => {
  var schema = {
    first_name: {
      notEmpty: true,
      errorMessage: "name is required",
    },
    last_name: {
      notEmpty: true,
      errorMessage: "name is required",
    },
    account_type: {
      notEmpty: true,
      errorMessage: "Account Type is required",
    },
    email: {
      notEmpty: true,
      errorMessage: "email is required",
    },
    password: {
      notEmpty: true,
      errorMessage: "password is required",
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
    type = await admin_helper.get_admin_by_id(req.userInfo.id);
    if (type.admin.account_type == "super_admin") {
      user = await admin_helper.get_admin_by_email(req.body.email);
      if (user.status === 2) {
        var data = await admin_helper.insert_admin(obj);
        if (data.status == 0) {
          logger.trace(
            "Error occured while inserting admin - Admin Signup API"
          );
          logger.debug("Error = ", data.error);
          res.status(config.INTERNAL_SERVER_ERROR).json(data);
        } else {
          logger.trace("Admin has been inserted");
          logger.trace("sending mail");
          let mail_resp = await mail_helper.send(
            "admin_mail",
            {
              to: data.admin.email,
              subject: "Music Social Voting - Email confirmation",
            },
            {
              email: obj.email,
              password: obj.password,
            }
          );
          if (mail_resp.status === 0) {
            res.status(config.INTERNAL_SERVER_ERROR).json({
              status: 0,
              message: "Error occured while sending confirmation email",
              error: mail_resp.error,
            });
          } else {
            res
              .status(config.OK_STATUS)
              .json({ status: 1, message: "admin registered successfully" });
          }
        }
      } else {
        res
          .status(config.BAD_REQUEST)
          .json({ status: 0, message: "admin's email already exist" });
      }
    } else {
      logger.trace("You dont have permission to add admin");
      res
        .status(config.INTERNAL_SERVER_ERROR)
        .json({ status: 0, message: "You dont have permission to add admin" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

/**
 * @api {post} /admin   Administrator detail with total participant - Get
 * @apiName Contest detail with total participant - Get
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key

 * @apiSuccess (Success 200) {Array} contect detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/", async (req, res) => {
  var sort = {};

  if (req.body.sort) {
    req.body.sort.forEach((sort_criteria) => {
      sort[sort_criteria.field] = sort_criteria.value;
    });
  }
  if (Object.keys(sort).length === 0) {
    sort["_id"] = 1;
  }
  var admin = await admin_helper.get_all_admin(
    req.body.start,
    req.body.length,
    sort
  );
  if (admin.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json(admin);
  } else {
    logger.error("Error occured while fetching = ", admin);
    res.status(config.INTERNAL_SERVER_ERROR).json(admin);
  }
});

/**
 * @api {post} /admin/add_contest Add Contest
 * @apiName Add Contest
 * @apiGroup  Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} name Contest Name
 * @apiParam {String} start_date Contest start date
 * @apiParam {String} end_date Contest end date
 * @apiParam {String} music_type Contest Music Type
 * @apiParam {String} location Contest Location

 * @apiSuccess (Success 200) {JSON} Contest details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/add_contest", async (req, res) => {
  var schema = {
    name: {
      notEmpty: true,
      errorMessage: "name is required",
    },

    // "music_type": {
    //   notEmpty: true,
    //   errorMessage: "Music Type is required"
    // },
  };

  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    type = await admin_helper.get_admin_by_id(req.userInfo.id);

    var start_date = moment({
      year: req.body.year,
      month: parseInt(req.body.month) - 1,
      date: parseInt(req.body.day),
    });

    let today = moment().startOf("day");

    if (start_date.format("YYYY-MM-DD") > today.format("YYYY-MM-DD")) {
    }
    if (start_date.format("YYYY-MM-DD") < today.format("YYYY-MM-DD")) {
    }

    if (start_date.format("YYYY-MM-DD") >= today.format("YYYY-MM-DD")) {
      if (
        type.admin.account_type == "super_admin" ||
        type.admin.account_type == "admin" ||
        type.admin.account_type == "moderator"
      ) {
        var duration;
        var max_participation;
        var round;

        if (req.body.contest_type == "beta") {
          (duration = 24), (max_participation = 6000);
          if (req.body.round) {
            round = "preliminary1";
          }
        } else if (req.body.contest_type == "standard") {
          (duration = 32), (max_participation = 12000);
          if (req.body.round) {
            round = "preliminary1";
          }
        } else if (req.body.contest_type == "special") {
          duration = req.body.duration;
          if (req.body.round) {
            round = "round1";
          }
        }
        var contest_obj = {
          admin_id: req.userInfo.id,
          music_type: req.body.music_type,
          name: req.body.name,
          contest_type: req.body.contest_type,
          region: req.body.region,
          states: req.body.states,
          duration: duration,
          max_participation: max_participation,
          contest_type: req.body.contest_type,
          round: req.body.round,
        };

        var resp_data = await contest_helper.insert_contest(contest_obj);

        var round_obj = {
          contest_id: resp_data.contest._id,
          start_date: start_date,
          // state: req.body.state,
          // region: req.body.region,
          // duration: req.body.duration,
          // end_date: moment(start_date).add((req.body.duration * 7), 'days'),
          round: round,
          round_name:
            req.body.round && req.body.round > 1
              ? contest_obj.name + " " + "round1"
              : contest_obj.name + " " + "round" + req.body.round,
        };
        if (req.body.round > 1) {
          round_obj["contestant"] = req.body.contestant;
          round_obj["totalRound"] = req.body.round;
        }

        var resp_datas = await round_helper.insert_round(round_obj);
        const receivers = await user_notifications_helper.user_noticication_from_admin(
          req.userInfo.id,
          resp_data.contest._id,
          socket
        );

        if (receivers) {
          var user_notification_data = await global_helper.send_user_notification(
            receivers.data,
            socket
          );
        }
        // let receivers = [];
        // await folowers.artist.map((res) => {
        //   receivers.push({ receiver: new ObjectId(res.user_id) });
        // });

        // var notificationObj = {
        //   artist: uploaderId,
        //   track: trackId,
        //   type: "notification",
        //   body: `${resp.artist.first_name} ${resp.artist.last_name} has uploaded the ${audioTitle} track, which is copyrighted.`,
        // };
        if (resp_data.status == 0) {
          logger.error("Error occured while inserting = ", resp_data);
          res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
        } else {
          logger.trace(" got successfully = ", resp_data);

          res.status(config.OK_STATUS).json(resp_data);
        }
      } else {
        logger.error("Error occured while inserting = ", resp_data);
        res
          .status(config.BAD_REQUEST)
          .json("You have no aceess to create contest.");
      }
      // else {
      //   var obj = {
      //     admin_id: req.userInfo.id,
      //     name: req.body.name,
      //     start_date: start_date,
      //     duration: req.body.duration,
      //     end_date: moment(start_date).utc().add((req.body.duration * 7), 'days'),
      //     music_type: req.body.music_type,
      //     state: req.body.state,
      //     region: req.body.region,
      //     round: req.body.round,
      //     round_name: req.body.name + " " + "round" + req.body.round

      //   };
      //   var resp_data = await contest_request_helper.insert_contest_request(obj);
      //   if (resp_data.status == 0) {
      //     logger.error("Error occured while inserting = ", resp_data);
      //     res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
      //   } else {
      //     logger.trace(" got successfully = ", resp_data);
      //     res.status(config.OK_STATUS).json(resp_data);
      //   }
      // }
    } else {
      res
        .status(config.BAD_REQUEST)
        .json({ message: "Date must be greater or equal to today's date" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

router.post("/upgrade_to_super_admin", async (req, res) => {
  var schema = {};

  req.checkBody(schema);
  var errors = req.validationErrors();
  admin_id = req.userInfo.id;

  if (!errors) {
    response = await admin_helper.get_admin_by_id(admin_id);

    var obj = {
      admin_id: response.admin._id,
      first_name: response.admin.first_name,
      last_name: response.admin.last_name,
      created_at: response.admin.created_at,
    };
    if (response.admin.account_type == "admin") {
      var resp_data = await admin_helper.get_admin_request_by_id(admin_id);

      if (resp_data.status == 2) {
        var resp_data = await admin_helper.insert_admin_request(obj);

        if (resp_data.status == 0) {
          logger.error("Error occured while inserting = ", resp_data);
          res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
        }
      } else if (resp_data.status == 1) {
        res
          .status(config.BAD_REQUEST)
          .json({ message: "Already requested once" });
      }
    } else {
      res
        .status(config.BAD_REQUEST)
        .json({ message: "You are not eligible to become Admin" });
    }
    logger.trace(" got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

router.put("/accept/upgrade_artist/:admin_id", async (req, res) => {
  //contest_resp = await contest_request_helper.get__by_id(req.params.admin_id)
  admin_id = req.userInfo.id;
  var action = "accepted";
  var account_type = "super_admin";
  contest_resp = await admin_helper.get_admin_by_id(admin_id);
  if (contest_resp.admin.account_type == "super_admin") {
    var resp_data = await admin_helper.update_admin_request_by_adminid(
      req.params.admin_id,
      action
    );
    var resp_data = await admin_helper.update_admin_request_by_id(
      req.params.admin_id,
      account_type
    );
    logger.trace("Request Accepted");
    res.status(config.OK_STATUS).json({ message: "Request Accepted" });
  } else {
    logger.trace("You don't have permission to reject the request");
    res
      .status(config.OK_STATUS)
      .json({ message: "You don't have permission to accept the request" });
  }
});

router.put("/reject/upgrade_artist/:admin_id", async (req, res) => {
  //contest_resp = await contest_request_helper.get__by_id(req.params.admin_id)
  admin_id = req.userInfo.id;
  var action = "rejected";
  var account_type = "super_admin";
  contest_resp = await admin_helper.get_admin_by_id(admin_id);
  if (contest_resp.admin.account_type == "super_admin") {
    var resp_data = await admin_helper.update_admin_request_by_adminid(
      req.params.admin_id,
      action
    );
    var resp_data = await admin_helper.update_admin_request_by_id(
      req.params.admin_id,
      account_type
    );
    logger.trace("Request Rejected");
    res.status(config.OK_STATUS).json({ message: "Request AcceptRejecteded" });
  } else {
    logger.trace("You don't have permission to reject the request");
    res
      .status(config.OK_STATUS)
      .json({ message: "You don't have permission to reject the request" });
  }
});

router.post("/add_existing_contest", async (req, res) => {
  var schema = {};

  req.checkBody(schema);
  var errors = req.validationErrors();
  contest_response = await contest_helper.get_contest_by_id(
    req.body.contest_id
  );

  if (!errors) {
    var round_obj = {
      contest_id: req.body.contest_id,
      start_date: moment(req.body.start_date).utc(),
      duration: req.body.duration,
      end_date: moment(req.body.start_date)
        .utc()
        .add(req.body.duration * 7, "days"),
      music_type: req.body.music_type,
      state: req.body.state,
      region: req.body.region,
      round: req.body.round,
      round_name: contest_response.contest.name + "round" + req.body.round,
    };
    var round = await round_helper.get_finished_round_of_contest(
      round_obj.contest_id
    );
    var start_date = moment({
      year: req.body.year,
      month: parseInt(req.body.month) - 1,
      date: parseInt(req.body.day),
    });
    let today = moment().startOf("day");

    if (start_date.format("YYYY-MM-DD") >= today.format("YYYY-MM-DD")) {
      if (round.status === 1) {
        var track = await winner_helper.get_qualifiedss(round.round._id);
        if (track.status === 1) {
          var arry = [];
          for (let x of track.winner) {
            var winner = x.track_id;
            arry.push(ObjectId(winner));
          }
          if (arry.length > 0) {
            var roundget = await round_helper.get_rounds(
              { _id: new ObjectId(round.round._id) },
              { track_id: null }
            );

            if (roundget.status == 0) {
              var roundAdd = await round_helper.add_participant_in_next_round(
                { _id: new ObjectId(round.round._id) },
                { track_id: arry }
              );

              for (let x of track.winner) {
                var object = {
                  votes: x.votes,
                  track_id: x.track_id,
                  round_id: current_round.round._id,
                };
              }
              var winner = winner_helper.insert_winner(object);
            }
          }
        }
      }

      var resp_data = await round_helper.insert_round(round_obj);

      if (resp_data.status === 0) {
        logger.error("Error occured while inserting = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
      }
      logger.trace(" got successfully = ", resp_data);
      res.status(config.OK_STATUS).json(resp_data);
    } else {
      res
        .status(config.BAD_REQUEST)
        .json({ message: "Date must be greater or equal to today's date" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
  console.log(" : round_obj.contest_id ==> ", round_obj.contest_id);
  var current_round = await round_helper.get_current_round_of_contest(
    round_obj.contest_id
  );
});

/**
 * @api {post} /admin/contest   Contest detail with total participant - Get
 * @apiName Contest detail with total participant - Get
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key

 * @apiSuccess (Success 200) {Array} contect detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/contest", async (req, res) => {
  var sort = {};
  if (req.body.sort) {
    req.body.sort.forEach((sort_criteria) => {
      sort[sort_criteria.field] = sort_criteria.value;
    });
  }

  if (Object.keys(sort).length === 0) {
    sort["_id"] = 1;
  }

  var contest = await contest_helper.get_all_contests_list(
    req.body.start,
    req.body.length,
    sort
  );

  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, contest: contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }
});

router.post("/message", async (req, res) => {
  var artist = await RoundTracks.find({
    contest_id: ObjectId(req.body.contest_id),
  }).lean();
  if (artist) {
    if (artist.length > 0) {
      let receivers = [];
      await artist.map((contestant) => {
        receivers.push({ isSeen: 0, receiver: contestant.artist_id });
      });
      var messageObj = {
        sender: req.userInfo.id,
        receivers: receivers,
        contest_id: req.body.contest_id,
        message: req.body.message,
        type: "message",
      };

      var artist_message_data = await global_helper.send_artist_message(
        messageObj,
        socket
      );
      res
        .status(config.OK_STATUS)
        .json({ ...artist_message_data.inboxMessage });
    } else {
      res
        .status(config.BAD_REQUEST)
        .json({ status: 0, message: "No participants found in this contest" });
    }
  } else {
    res.status(config.BAD_REQUEST).json(artist);
  }
});

router.get("/get_contest", async (req, res) => {
  var contest = await round_helper.get_all_contests();
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, contest: contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }
});

router.post("/get_round", async (req, res) => {
  contest_id = req.body.contest_id;
  var contest = await round_helper.get_rounds_by_contestid(contest_id);
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, contest: contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }
});
router.post("/get_admin_flagged", async (req, res) => {
  var contest = await admin_helper.get_all_admin_suspended(
    req.body.start,
    req.body.length
  );
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, contest: contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }
});
router.post("/get_admin_request", async (req, res) => {
  var contest = await admin_helper.get_all_admin_request(
    req.body.start,
    req.body.length
  );
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, contest: contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }
});

/**
 * @api {delete} /admin/delete_track/:artist_id Delete Artist
 * @apiName Delete Artist
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {String} success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.delete("/delete_track/:track_id", async (req, res) => {
  track_id = req.params.track_id;

  let track_resp = await track_helper.get_all_track_by_track_id(track_id);
  artist_id = track_resp.track.artist_id._id;
  track_id = track_resp.track._id;
  type = await admin_helper.get_admin_by_id(req.userInfo.id);

  if (
    type.admin.account_type == "super_admin" ||
    type.admin.account_type == "admin"
  ) {
    var del_resp = await track_helper.delete_track_by_admin(track_id);

    if (del_resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({
        status: 0,
        message: "Error occured while deleting track",
        error: del_resp.error,
      });
    } else if (del_resp.status === 2) {
      res
        .status(config.BAD_REQUEST)
        .json({ status: 0, message: "Can't delete track" });
    } else {
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

      var bookmark_del = await bookmark_helper.delete_bookmark_by_track_id(
        track_id
      );

      var like_del = await like_helper.delete_like(track_id);
      var comment_del = await comment_helper.delete_comment_by_track(track_id);
      var playlist_del = await playlist_helper.delete_playlist_by_track(
        track_id
      );
      var transaction_del = await artist_helper.delete_transaction_track(
        track_id
      );
      res
        .status(config.OK_STATUS)
        .json({ status: 1, message: "Track has been deleted" });
    }
  } else {
    logger.trace("You dont have permission to delete track");
    res
      .status(config.INTERNAL_SERVER_ERROR)
      .json({ status: 0, message: "You dont have permission to delete track" });
  }
});

/**
 * @api {delete} /delete/:admin_id Delete Admin
 * @apiName Delete Admin
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 * @apiParam {String} admin_id Admin Id
 *
 * @apiSuccess (Success 200) {String} success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */

router.delete("/delete/:admin_id", async (req, res) => {
  admin_id = req.params.admin_id;
  type = await admin_helper.get_admin_by_id(req.userInfo.id);

  if (type.admin.account_type == "super_admin") {
    var del_resp = await admin_helper.delete_admin(admin_id);
    if (del_resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({
        status: 0,
        message: "Error occured while deleting admin",
        error: del_resp.error,
      });
    } else if (del_resp.status === 2) {
      res
        .status(config.BAD_REQUEST)
        .json({ status: 0, message: "Can't delete admin" });
    } else {
      res
        .status(config.OK_STATUS)
        .json({ status: 1, message: "Administrator has been deleted" });
    }
  } else {
    logger.trace("You dont have permission to delete admin");
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "You dont have permission to delete other admin",
    });
  }
});

/**
 * @api {post} /admin/suspend/:admin_id  Suspend Admin - post
 * @apiName Suspend Admin - post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 * @apiParam {String} admin_id Admin Id

 * @apiSuccess (Success 200) {Array} contect detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/suspend/:admin_id", async (req, res) => {
  type = await admin_helper.get_admin_by_id(req.userInfo.id);
  if (type.admin.account_type == "super_admin") {
    var resp = await admin_helper.get_admin_by_id(req.params.admin_id);

    if (resp.status == 0) {
      logger.error("Error occured while fetching admin = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.admin.status == "active") {
        var stat = "suspended";
        var admin_resp = await admin_helper.update_admin_status(
          req.params.admin_id,
          stat
        );
        logger.trace("Admin Suspended= ", { admin: admin_resp });
        res
          .status(config.OK_STATUS)
          .json({ message: "Role suspended successfully" });
      } else {
        var stat = "active";
        var admin_resp = await admin_helper.update_admin_status(
          req.params.admin_id,
          stat
        );
        logger.trace("Admin UnSuspended= ", { admin: admin_resp });
        res
          .status(config.OK_STATUS)
          .json({ message: "Role unsuspended successfully" });
      }
    }
  } else {
    logger.trace("You dont have permission to suspend Admin");
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "You dont have permission to suspend Admin",
    });
  }
});

/**
 * @api {delete} /admin/:user_id Delete User
 * @apiName Delete User
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {String} success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.delete("/:user_id", async (req, res) => {
  user_id = req.params.user_id;
  var del_resp = await user_helper.delete_user_by_admin(user_id);
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "Error occured while deleting user",
      error: del_resp.error,
    });
  } else if (del_resp.status === 2) {
    res
      .status(config.BAD_REQUEST)
      .json({ status: 0, message: "Can't delete user" });
  } else {
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "user has been deleted" });
  }
});

/**
 * @api {post} /admin/home_vote  Artist Vote - post
 * @apiName Artist Vote- post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key

 * @apiSuccess (Success 200) {Array} artist vote detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/home_vote", async (req, res) => {
  var resp_data = await artist_helper.get_all_artist_by_vote();
  var resp = await track_helper.get_artist_by_day_vote(req.body.day);
  var resp_location = await vote_track_helper.get_artist_by_location_vote(
    req.body.day
  );
  if (resp_data.status == 0 && resp.status == 0 && resp_location.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", {
      artist: resp_data,
      day_vote: resp,
    });
    res.status(config.OK_STATUS).json({
      artist: resp_data.artist,
      day_vote: resp.results,
      location: resp_location.results,
    });
  }
});

/**
 * @api {post} /admin/home_like  Artist like - post
 * @apiName Artist like - post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key

 * @apiSuccess (Success 200) {Array} artist like detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/home_likes", async (req, res) => {
  var resp_data = await artist_helper.get_all_artist_by_likes();
  var resp_like = await track_helper.get_artist_by_day_like(req.body.day);
  var resp_location = await track_helper.get_artist_by_location_like(
    req.body.day
  );
  //var resp_comment = await track_helper.get_artist_by_day_comment(req.body.day);
  if (
    resp_data.status == 0 &&
    resp_like.status == 0 &&
    resp_location.status == 0
  ) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", {
      artist: resp_data,
      likes: resp_like,
    });
    res.status(config.OK_STATUS).json({
      artist: resp_data.artist,
      likes: resp_like.results,
      location: resp_location.results,
    });
  }
});

/**
 * @api {post} /admin/home_comment  Artist comment - post
 * @apiName Artist comment- post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key

 * @apiSuccess (Success 200) {Array} artist comment detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/home_comment", async (req, res) => {
  var resp_data = await artist_helper.get_all_artist_by_comment();
  var resp_comment = await track_helper.get_artist_by_day_comment(req.body.day);
  var resp_location = await track_helper.get_artist_by_location_comment(
    req.body.day
  );

  if (resp_data.status == 0 && resp_comment.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", {
      artist: resp_data,
      comment: resp_comment,
    });
    res.status(config.OK_STATUS).json({
      artist: resp_data.artist,
      comment: resp_comment.results,
      location: resp_location.results,
    });
  }
});

/**
 * @api {post} /admin/get_artist  Get Artist Details with the day and other filter-Get
 * @apiName  Get Artist Details with the day and other filter-Get
 * @apiGroup Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} day Artist day
 * @apiParam {String} location Artist location
 * @apiParam {String} music_type Artist Music Type
 * @apiParam {String} search Artist Search by name

 * @apiSuccess (Success 200) {JSON} Artist details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/get_artist", async (req, res) => {
  var filter = {};
  var sort_by = 1;
  if (req.body.sort_by != 1) {
    sort_by = -1;
  }
  var sort = { no_of_votes: -1, created_at: sort_by };
  if (req.body.location) {
    filter.location = req.body.location;
  }
  if (req.body.filter) {
    req.body.filter.forEach((filter_criteria) => {
      filter[filter_criteria.field] = filter_criteria.value;
    });
  }
  if (req.body.search) {
    var r = new RegExp(req.body.search);
    var search = { $regex: r, $options: "i" };
    filter.first_name = search;
  }
  // if (req.body.search) {
  //   var r = new RegExp(req.body.search);
  //   var search = { "$regex": r, "$options": "i" };
  //   filter.last_name = search;
  // }
  var resp_data = await artist_helper.get_all_active_and_suspend_artist(
    req.body.start,
    req.body.length,
    filter,
    sort
  );
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { artist: resp_data });
    res.status(config.OK_STATUS).json({ artist: resp_data });
  }
});

/**
 * @api {post} /suspend/artist/:admin_id  Suspend Artist
 * @apiName Suspend Artist
 * @apiGroup  Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} artist_id Artist Id


 * @apiSuccess (Success 200) {JSON} Artist details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/suspend/artist/:artist_id", async (req, res) => {
  type = await admin_helper.get_admin_by_id(req.userInfo.id);
  if (
    type.admin.account_type == "super_admin" ||
    type.admin.account_type == "admin"
  ) {
    var resp = await artist_helper.get_artist_by_id(req.params.artist_id);
    if (resp.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.artist.status == "active") {
        var stat = "suspended";
        var artist_resp = await artist_helper.update_artist_status(
          req.params.artist_id,
          stat
        );
      } else {
        var stat = "active";
        var artist_resp = await artist_helper.update_artist_status(
          req.params.artist_id,
          stat
        );
      }
      logger.trace("Artist Suspended= ", { artist: artist_resp });
      res.status(config.OK_STATUS).json({ artist: artist_resp });
    }
  } else {
    logger.trace("You dont have permission to suspend Artist");
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "You dont have permission to suspend Artist",
    });
  }
});

router.post("/suspend/track/:track_id", async (req, res) => {
  type = await admin_helper.get_admin_by_id(req.userInfo.id);
  account_type = type.admin.account_type;

  if (
    type.admin.account_type == "super_admin" ||
    type.admin.account_type == "admin"
  ) {
    var resp = await track_helper.get_track_by_trackk_id(req.params.track_id);
    //
    artist_id = resp.track.artist_id._id;
    trackName = resp.track.name;
    if (resp.track.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.track.is_suspend == false) {
        var stat = true;
        var resp = await track_helper.update_track_status(
          req.params.track_id,
          stat
        );
        logger.trace("Track Suspended= ", { track: resp });

        var obj = {
          suspend_by: req.userInfo.id,
          account_type: account_type,
          track_id: req.params.track_id,
          artist_id: artist_id,
        };
        var resp = await track_helper.insert_suspend_track(obj);
        var obj2 = {
          sender: ObjectId(req.userInfo.id),
          receiver: ObjectId(artist_id),
          type: "flagged",
          body: "Your upload " + trackName + " has been flagged for copyright.",
        };

        var notification_data = await global_helper.send_notification(
          obj2,
          socket
        );

        res.status(config.OK_STATUS).json({ message: "Track Suspended" });
      } else {
        var stat = false;
        var resp = await track_helper.update_track_status(
          req.params.track_id,
          stat
        );
        logger.trace("Track Suspended= ", { track: resp });
        var resp = await track_helper.delete_suspend_track(req.params.track_id);

        res.status(config.OK_STATUS).json({ message: "Track Unsuspended" });
      }
    }
  } else {
    logger.trace("You dont have permission to suspend Track");
    res.status(config.INTERNAL_SERVER_ERROR).json({
      status: 0,
      message: "You dont have permission to suspend Track",
    });
  }
});

/**
 * @api {post} /admin/accept/contest_request/:contest_id  Accept Request
 * @apiName Accept Request
 * @apiGroup  Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} contest_id contest Id

 * @apiSuccess (Success 200) {JSON} Contest details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/accept/contest_request/:contest_id", async (req, res) => {
  admin_id = req.userInfo.id;
  contest_resp = await contest_request_helper.get_contest_by_id(
    req.params.contest_id
  );

  var contest_obj = {
    name: contest_resp.contest.name,
    _id: contest_resp.contest._id,
    admin_id: contest_resp.contest.admin_id,
    created_at: contest_resp.contest.created_at,
    music_type: contest_resp.contest.music_type,
  };
  round_resp = await contest_request_helper.get_round_by_id(
    req.params.contest_id
  );

  var round_obj = {
    contest_id: contest_obj._id,
    start_date: contest_resp.contest.start_date,
    duration: contest_resp.contest.duration,
    end_date: contest_resp.contest.end_date,
    state: contest_resp.contest.state,
    region: contest_resp.contest.region,
    round: contest_resp.contest.round,
    round_name: contest_resp.contest.round_name,
  };
  contest_resp = await admin_helper.get_admin_by_id(admin_id);
  if (contest_resp.admin.account_type == "super_admin") {
    var action = "accepted";
    var resp_data1 = await contest_helper.insert_contest(contest_obj);
    var resp_data2 = await round_helper.insert_round(round_obj);

    var resp_data = await contest_request_helper.insert_action(
      req.params.contest_id,
      action
    );
    logger.trace("Contest Request Accepted");
    res.status(config.OK_STATUS).json({ message: "Contest Request Accepted" });
  } else {
    logger.trace("You don't have permission to accept the request");
    res
      .status(config.OK_STATUS)
      .json({ message: "You don't have permission to accept the request" });
  }
});

/**
 * @api {post} /admin/reject/contest_request/:contest_id  Accept Request
 * @apiName Reject Request
 * @apiGroup  Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} contest_id contest Id


 * @apiSuccess (Success 200) {JSON} Contest details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/reject/contest_request/:contest_id", async (req, res) => {
  contest_resp = await contest_request_helper.get_contest_by_id(
    req.params.contest_id
  );
  admin_id = req.userInfo.id;
  var action = "rejected";
  contest_resp = await admin_helper.get_admin_by_id(admin_id);
  if (contest_resp.admin.account_type == "super_admin") {
    var resp_data = await contest_request_helper.insert_action(
      req.params.contest_id,
      action
    );
    logger.trace("Contest Request Rejected");
    res.status(config.OK_STATUS).json({ message: "Contest Request Rejected" });
  } else {
    logger.trace("You don't have permission to reject the request");
    res
      .status(config.OK_STATUS)
      .json({ message: "You don't have permission to reject the request" });
  }
});

/**
 * @api {post} /admin/suspend/artist/:user_id  Flag User
 * @apiName Flag User
 * @apiGroup  Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} user_id User Id


 * @apiSuccess (Success 200) {JSON} User details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/flag/user/:user_id", async (req, res) => {
  var obj = {
    from: req.userInfo.id,
    to: req.params.user_id,
  };
  const type = await admin_helper.get_admin_by_id(req.userInfo.id);
  if (
    type.admin.account_type == "super_admin" ||
    type.admin.account_type == "admin"
  ) {
    var resp = await user_helper.get_user_by_id(req.params.user_id);
    if (resp.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.user.flag == false) {
        var stat = true;
        var user_response = await flag_user_helper.insert_flag(obj);
        var user_resp = await user_helper.update_user_flag(
          req.params.user_id,
          stat
        );
        logger.trace("user flagged");
        res
          .status(config.OK_STATUS)
          .json({ message: "User Suspended", user: user_response.flag });
      } else {
        var stat = false;
        var user_resp = await user_helper.update_user_flag(
          req.params.user_id,
          stat
        );
        var user_resp = await flag_user_helper.delete_flag(obj.from, obj.to);
        logger.trace("flag deleted");
        res.status(config.OK_STATUS).json({ message: "User Activated" });
      }
    }
  } else {
    logger.trace("You dont have permission to suspend User");
    res
      .status(config.INTERNAL_SERVER_ERROR)
      .json({ status: 0, message: "You dont have permission to suspend User" });
  }
});

/**
 * @api {post} /admin/get_user  Get User Details with the day and other filter-Get
 * @apiName  Get User Details with the day and other filter-Get
 * @apiGroup Admin

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} day User day
 * @apiParam {String} search User Search by name

 * @apiSuccess (Success 200) {JSON} User details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/get_user", async (req, res) => {
  var filter = {};
  var filters = {};
  if (req.body.location) {
    filter.location = req.body.location;
  }
  var sort_by = 1;
  if (req.body.sort_by != 1) {
    sort_by = -1;
  }
  var sort = { no_of_votes: -1, created_at: sort_by };

  if (req.body.filter) {
    req.body.filter.forEach((filter_criteria) => {
      filter[filter_criteria.field] = filter_criteria.value;
    });
  }
  if (req.body.search) {
    var r = new RegExp(req.body.search);
    var search = { $regex: r, $options: "i" };
    filter.first_name = search;
  }

  var resp_data = await user_helper.get_all_active_and_suspend_user(
    req.body.start,
    req.body.length,
    filter,
    sort
  );
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("user got successfully = ", { user: resp_data });
    res.status(config.OK_STATUS).json({ user: resp_data });
  }
});

/**
 * @api {get} /admin/get_flagged_user  Get Flagged user - Get
 * @apiName Get Flagged user - Get
 * @apiGroup Admin
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiParam {String} user_id User Id
 *
 * @apiSuccess (Success 200) {Array} Get Flagged user document
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/get_flagged_user", async (req, res) => {
  user_id = req.body.user_id;
  var resp_data = await flag_user_helper.get_flag(user_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching user = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("user got successfully = ", { user: resp_data });
    res.status(config.OK_STATUS).json({ user: resp_data.user });
  }
});
router.post("/get_suspended_track", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await track_helper.get_suspended_track_by_artist_id(
    artist_id
  );
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching user = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("user got successfully = ", { user: resp_data });
    res.status(config.OK_STATUS).json({ track: resp_data.track });
  }
});

/**
 * @api {post} /admin/contest_request  Get Contest request - Get
 * @apiName  Get Contest request - Get
 * @apiGroup Admin
 * @apiHeader {String}  x-access-token unique access-key
 *
 *
 * @apiSuccess (Success 200) {Array} contest request document
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/contest_request", async (req, res) => {
  var resp_data = await contest_request_helper.get_contest_request(
    req.body.start,
    req.body.length
  );
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching contest = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("user got successfully = ", { contest: resp_data });
    res.status(config.OK_STATUS).json({ contest: resp_data });
  }
});

router.get("/contest", async (req, res) => {
  var contest = await contest_helper.get_all_contests();
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, contest: contest.contest });
  } else {
    logger.error("Error occured while fetching = ", contest);
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }
});

/**
 * @api {get} /admin/get_flag  Get Flagged artist - Get
 * @apiName Get Flagged artist - Get
 * @apiGroup Admin
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiParam {String} artist_id artist Id
 *
 * @apiSuccess (Success 200) {Array} Get Flagged artist document
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/get_flag", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await flag_artist_helper.get_flag(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { artist: resp_data });
    res.status(config.OK_STATUS).json({ artist: resp_data.artist });
  }
});

router.post("/get_artist_votes", async (req, res) => {
  artist_id = req.body.artist_id;

  var resp_data = await vote_track_helper.get_all_voted_artist_by_id(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { artist: resp_data });
    res.status(config.OK_STATUS).json({ artist: resp_data });
  }
});

router.post("/get_artist_followers", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await follower_helper.get_all_followers(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { artist: resp_data });
    res.status(config.OK_STATUS).json({ artist: resp_data });
  }
});

router.post("/get_artist_comments", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await comment_helper.get_all_comment_by_artist_id(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { artist: resp_data });
    res.status(config.OK_STATUS).json({ artist: resp_data });
  }
});

router.post("/get_artist_tracks", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await track_helper.get_track_by_artist_id(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { artist: resp_data });
    res.status(config.OK_STATUS).json({ artist: resp_data });
  }
});

/**
 * @api {post} /admin/flag/artist/:artist_id  Flag Artist - post
 * @apiName S Flag Artist - post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 * @apiParam {String} artist_id Artist Id

 * @apiSuccess (Success 200) {Array}  Flag Artist detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/flag/artist/:artist_id", async (req, res) => {
  var resp = await artist_helper.get_artist_by_id(req.params.artist_id);
  type = await admin_helper.get_admin_by_id(req.userInfo.id);
  var obj = {
    from: req.userInfo.id,
    to: req.params.artist_id,
    account_type: type.admin.account_type,
  };
  if (
    type.admin.account_type == "super_admin" ||
    type.admin.account_type == "admin"
  ) {
    if (resp.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.artist.flag == false) {
        var stat = true;
        var artist_response = await flag_artist_helper.insert_flag(obj);
        var artist_resp = await artist_helper.update_artist_flag(
          req.params.artist_id,
          stat
        );
        logger.trace("artist flagged");
        res
          .status(config.OK_STATUS)
          .json({ message: "Artist Suspended", artist: artist_response.flag });
      } else {
        var stat = false;
        var artist_resp = await artist_helper.update_artist_flag(
          req.params.artist_id,
          stat
        );
        var artist_resp = await flag_artist_helper.delete_flag(
          obj.from,
          obj.to
        );
        logger.trace("flag deleted");
        res.status(config.OK_STATUS).json({ message: "Artist Activated" });
      }
    }
  } else {
    logger.trace("You dont have permission to suspend Artist");
    res
      .status(config.INTERNAL_SERVER_ERROR)
      .json({ status: 0, message: "You dont have permission to suspend User" });
  }
});

/**
 * @api {post} /admin/user Get User by user id- post
 * @apiName Get User by user id - post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 * @apiParam {String} user_id User Id

 * @apiSuccess (Success 200) {Array} User detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/user", async (req, res) => {
  user_id = req.body.user_id;
  var user = await user_helper.get_user_by_id(user_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, user: user.user });
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});

/**
 * @api {post} /admin/user/artist_follow Get followers by user id- post
 * @apiName Get followers by user id - post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 * @apiParam {String} user_id User Id

 * @apiSuccess (Success 200) {Array} Followers detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/user/artist_follow", async (req, res) => {
  user_id = req.body.user_id;
  var user = await follower_helper.get_all_followers_by_user_id(user_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, user: user.user });
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});

router.post("/user/get_artist_follow", async (req, res) => {
  user_id = req.userInfo.id;
  var user = await follower_helper.get_all_followers_by_user_id(user_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ status: 1, user: user.user });
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});

/**
 * @api {post} /admin/get_participants_of_contest  Get participants as per conteset id - post
 * @apiName Get participants as per conteset id- post
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 * @apiParam {String} contest_id Contest Id

 * @apiSuccess (Success 200) {Array} participant detail
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/get_participants_of_contest", async (req, res) => {
  contest_id = req.body.contest_id;
  var artist = await participate_helper.get_participated_artist(contest_id);

  if (artist.status === 1) {
    logger.trace("got details successfully");
    res
      .status(config.OK_STATUS)
      .json({ status: 1, artist: artist.participate });
  } else {
    logger.error("Error occured while fetching = ", artist);
    res.status(config.INTERNAL_SERVER_ERROR).json(artist);
  }
});

/**
 * @api {put} /admin/featured_artist Update artist as featured - put
 * @apiName Update artist as featured - put
 * @apiGroup User
 *
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} artist_id Artist Id
 *
 * @apiSuccess (Success 200) {JSON} artist featured details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */

router.put("/featured_artist", async (req, res) => {
  artist_id = req.body.artist_id;
  var featured_artist = await artist_helper.get_no_of_featured_artist();

  var resp = await artist_helper.get_artist_by_id(artist_id);
  if (resp.status == 0) {
    logger.error("Error occured while fetching artist = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.artist.featured == false) {
      var feature = true;
      if (featured_artist.artist.length <= 24) {
        var artist_resp = await artist_helper.update_featured_artist(
          artist_id,
          feature
        );
        logger.trace("Artist selected as featured artist = ");
        res
          .status(config.OK_STATUS)
          .json({ message: "Artist selected as featured artist" });
      } else {
        res
          .status(config.OK_STATUS)
          .json({ message: "Already 24 artist selected" });
      }
    } else {
      var feature = false;
      var artist_resp = await artist_helper.update_featured_artist(
        artist_id,
        feature
      );
      logger.trace("Artist removed from featured artist = ");
      res
        .status(config.OK_STATUS)
        .json({ message: "Artist removed from featured artist" });
    }
  }
});

router.get("/notifications", async (req, res) => {
  var resp = await copyright_track_notification_helper.get_all_notification(
    req.userInfo.id
  );
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

router.post("/update_notification_count", async (req, res) => {
  var resp = await copyright_track_notification_helper.notification_seen(
    req.userInfo.id,
    req.body
  );
  if (resp.status == 0) {
    logger.error("Error occured while updating count = ", resp);
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

cron.schedule("*/30 * * * *", async () => {
  try {
    var artist_id = [];
    var track_id = [];
    var contest = await round_helper.get_all_round_tracks(1);
    if (contest.status == 1) {
      for (const cont of contest.contest) {
        console.log(
          " : running cron cont.contest_id ==> ",
          cont.contest_id._id
        );
        if (cont.contest_id.contest_type == "beta") {
          var round = await round_helper.get_last_round(cont.contest_id._id);
          if (
            round.contest.round == "preliminary1" &&
            cont.contest_id.status === "in_progress"
          ) {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            var currentdate = moment().format("YYYY-MM-DD");
            if (
              currentdate >= startdate &&
              round.contest.hip_hop_participants >= 51 &&
              round.contest.pop_participants >= 51 &&
              round.contest.rb_participants >= 51 &&
              round.contest.country_participants >= 51 &&
              round.contest.rock_participants >= 51 &&
              round.contest.latin_participants >= 51
            ) {
              var obj = {
                status: "started",
              };
              var objRound = {};
              if (startdate !== currentdate) {
                objRound = {
                  start_date: moment()
                    .utcOffset(0)
                    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                };
              } else {
                objRound = {
                  start_date: round.contest.start_date,
                };
              }
              var updateContest = await contest_helper.update_status(
                round.contest.contest_id._id,
                obj
              );

              var updateRound = await round_helper.update_start_date(
                round.contest.contest_id._id,
                objRound
              );
            } else {
              console.log(' : "wrong" ==> ', "wrong");
            }
          } else if (
            round.contest.round == "preliminary1" &&
            cont.contest_id.status === "started"
          ) {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (
              currentdate === nextDate &&
              round.contest.hip_hop_participants >= 51 &&
              round.contest.pop_participants >= 51 &&
              round.contest.rb_participants >= 51 &&
              round.contest.country_participants >= 51 &&
              round.contest.rock_participants >= 51 &&
              round.contest.latin_participants >= 51
            ) {
              let next_round = "1";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                50,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                50,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                50,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                50,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                50,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                50,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.round1_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.round1_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.round1_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.round1_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.round1_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.round1_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 50,
                pop_participants: 50,
                rb_participants: 50,
                country_participants: 50,
                rock_participants: 50,
                latin_participants: 50,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "1") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "2";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.round2_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.round2_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.round2_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.round2_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.round2_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.round2_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 25,
                pop_participants: 25,
                rb_participants: 25,
                country_participants: 25,
                rock_participants: 25,
                latin_participants: 25,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "2") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "3";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.round3_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );

                pop_track_id.push(pop_track.data.round3_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.round3_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.round3_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.round3_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.round3_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 12,
                pop_participants: 12,
                rb_participants: 12,
                country_participants: 12,
                rock_participants: 12,
                latin_participants: 12,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "3") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "semi_final";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.semi_final_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );

                pop_track_id.push(pop_track.data.semi_final_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.semi_final_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.semi_final_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.semi_final_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.semi_final_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 6,
                pop_participants: 6,
                rb_participants: 6,
                country_participants: 6,
                rock_participants: 6,
                latin_participants: 6,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "semi_final") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "final";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.final_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );

                pop_track_id.push(pop_track.data.final_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.final_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.final_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.final_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.final_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 3,
                pop_participants: 3,
                rb_participants: 3,
                country_participants: 3,
                rock_participants: 3,
                latin_participants: 3,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "final") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");
            if (currentdate >= nextDate) {
              var obj = {
                status: "finished",
              };
              var updateContest = await contest_helper.update_status(
                round.contest.contest_id._id,
                obj
              );
            }
          }
        } else if (cont.contest_id.contest_type == "standard") {
          var round = await round_helper.get_last_round(cont.contest_id._id);
          if (
            round.contest.round == "preliminary1" &&
            cont.contest_id.status === "in_progress"
          ) {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            var currentdate = moment().format("YYYY-MM-DD");
            if (
              currentdate >= startdate &&
              round.contest.hip_hop_participants >= 501 &&
              round.contest.pop_participants >= 501 &&
              round.contest.rb_participants >= 501 &&
              round.contest.country_participants >= 501 &&
              round.contest.rock_participants >= 501 &&
              round.contest.latin_participants >= 501
            ) {
              var obj = {
                status: "started",
              };
              var objRound = {};
              if (startdate !== currentdate) {
                objRound = {
                  start_date: moment()
                    .utcOffset(0)
                    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                };
              } else {
                objRound = {
                  start_date: round.contest.start_date,
                };
              }
              var updateContest = await contest_helper.update_status(
                round.contest.contest_id._id,
                obj
              );

              var updateRound = await round_helper.update_start_date(
                round.contest.contest_id._id,
                objRound
              );
            } else {
              console.log(' : "wrong" ==> ', "wrong");
            }
          } else if (
            round.contest.round == "preliminary1" &&
            cont.contest_id.status === "started"
          ) {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (
              currentdate === nextDate &&
              round.contest.hip_hop_participants >= 501 &&
              round.contest.pop_participants >= 501 &&
              round.contest.rb_participants >= 501 &&
              round.contest.country_participants >= 501 &&
              round.contest.rock_participants >= 501 &&
              round.contest.latin_participants >= 501
            ) {
              let next_round = "preliminary2";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                500,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                500,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                500,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                500,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                500,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary1",
                500,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.preliminary2_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.preliminary2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );

                pop_track_id.push(pop_track.data.preliminary2_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.preliminary2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.preliminary2_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.preliminary2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.preliminary2_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.preliminary2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.preliminary2_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.preliminary2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.preliminary2_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.preliminary2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 500,
                pop_participants: 500,
                rb_participants: 500,
                country_participants: 500,
                rock_participants: 500,
                latin_participants: 500,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "preliminary2") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "preliminary3";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary2",
                100,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary2",
                100,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary2",
                100,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary2",
                100,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary2",
                100,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary2",
                100,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.preliminary3_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.preliminary3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.preliminary3_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.preliminary3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.preliminary3_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.preliminary3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.preliminary3_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.preliminary3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.preliminary3_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.preliminary3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.preliminary3_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.preliminary3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 100,
                pop_participants: 100,
                rb_participants: 100,
                country_participants: 100,
                rock_participants: 100,
                latin_participants: 100,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "preliminary3") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "1";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary3",
                50,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary3",
                50,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary3",
                50,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary3",
                50,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary3",
                50,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "preliminary3",
                50,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.round1_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.round1_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.round1_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.round1_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.round1_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.round1_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.round1_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 50,
                pop_participants: 50,
                rb_participants: 50,
                country_participants: 50,
                rock_participants: 50,
                latin_participants: 50,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "1") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "2";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "1",
                25,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.round2_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.round2_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.round2_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.round2_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.round2_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.round2_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.round2_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 25,
                pop_participants: 25,
                rb_participants: 25,
                country_participants: 25,
                rock_participants: 25,
                latin_participants: 25,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "2") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "3";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "2",
                12,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.round3_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.round3_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.round3_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.round3_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.round3_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.round3_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.round3_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 12,
                pop_participants: 12,
                rb_participants: 12,
                country_participants: 12,
                rock_participants: 12,
                latin_participants: 12,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "3") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "semi_final";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "3",
                6,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.semi_final_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.semi_final_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.semi_final_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.semi_final_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.semi_final_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.semi_final_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.semi_final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 6,
                pop_participants: 6,
                rb_participants: 6,
                country_participants: 6,
                rock_participants: 6,
                latin_participants: 6,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "semi_final") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate === nextDate) {
              let next_round = "final";
              var hiphop_track_id = [];
              var pop_track_id = [];
              var rb_track_id = [];
              var latin_track_id = [];
              var rock_track_id = [];
              var country_track_id = [];

              var top_hiphop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "hiphop"
              );

              var top_pop_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "pop"
              );

              var top_rb_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "rb"
              );

              var top_rock_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "rock"
              );

              var top_country_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "ele"
              );

              var top_latin_artist = await contest_voting_helper.topArtist(
                cont.contest_id._id,
                "semi_final",
                3,
                "latin"
              );

              for (const hiphop of top_hiphop_artist.result) {
                artist_id.push(hiphop.artist_id._id);
                var hiphop_track = await round_helper.get_track_selected_by_id(
                  hiphop.artist_id._id,
                  hiphop.contest_id
                );
                hiphop_track_id.push(hiphop_track.data.final_track);
                var votingObj = {
                  artist_id: hiphop_track.data.artist_id,
                  contest_id: hiphop_track.data.contest_id,
                  track_id: hiphop_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const pop of top_pop_artist.result) {
                artist_id.push(pop.artist_id._id);
                var pop_track = await round_helper.get_track_selected_by_id(
                  pop.artist_id._id,
                  pop.contest_id
                );
                pop_track_id.push(pop_track.data.final_track);
                var votingObj = {
                  artist_id: pop_track.data.artist_id,
                  contest_id: pop_track.data.contest_id,
                  track_id: pop_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rb of top_rb_artist.result) {
                artist_id.push(rb.artist_id._id);
                var rb_track = await round_helper.get_track_selected_by_id(
                  rb.artist_id._id,
                  rb.contest_id
                );
                rb_track_id.push(rb_track.data.final_track);
                var votingObj = {
                  artist_id: rb_track.data.artist_id,
                  contest_id: rb_track.data.contest_id,
                  track_id: rb_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const country of top_country_artist.result) {
                artist_id.push(country.artist_id._id);
                var country_track = await round_helper.get_track_selected_by_id(
                  country.artist_id._id,
                  country.contest_id
                );
                country_track_id.push(country_track.data.final_track);
                var votingObj = {
                  artist_id: country_track.data.artist_id,
                  contest_id: country_track.data.contest_id,
                  track_id: country_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const rock of top_rock_artist.result) {
                artist_id.push(rock.artist_id._id);
                var rock_track = await round_helper.get_track_selected_by_id(
                  rock.artist_id._id,
                  rock.contest_id
                );
                rock_track_id.push(rock_track.data.final_track);
                var votingObj = {
                  artist_id: rock_track.data.artist_id,
                  contest_id: rock_track.data.contest_id,
                  track_id: rock_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }
              for (const latin of top_latin_artist.result) {
                artist_id.push(latin.artist_id._id);
                var latin_track = await round_helper.get_track_selected_by_id(
                  latin.artist_id._id,
                  latin.contest_id
                );
                latin_track_id.push(latin_track.data.final_track);
                var votingObj = {
                  artist_id: latin_track.data.artist_id,
                  contest_id: latin_track.data.contest_id,
                  track_id: latin_track.data.final_track,
                  round: next_round,
                };
                var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                  votingObj
                );
              }

              var obj = {
                hip_hop_participants: 3,
                pop_participants: 3,
                rb_participants: 3,
                country_participants: 3,
                rock_participants: 3,
                latin_participants: 3,
                contest_id: round.contest.contest_id,
                round: next_round,
                track_id: track_id,
                artist_id: artist_id,
                hip_hop_track: hiphop_track_id,
                pop_track: pop_track_id,
                rb_track: rb_track_id,
                country_track: country_track_id,
                rock_track: rock_track_id,
                latin_track: latin_track_id,
                start_date: moment()
                  .utcOffset(0)
                  .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
              };
              var resp_data = await round_helper.insert_round(obj);
            } else {
            }
          } else if (round.contest.round == "final") {
            var startdate = moment(round.contest.start_date).format(
              "YYYY-MM-DD"
            );
            nextDate = moment(startdate).add(28, "days").format("YYYY-MM-DD");
            var currentdate = moment().format("YYYY-MM-DD");

            if (currentdate >= nextDate) {
              var obj = {
                status: "finished",
              };
              var updateContest = await contest_helper.update_status(
                round.contest.contest_id._id,
                obj
              );
            }
          } else {
          }
        } else if (cont.contest_id.contest_type == "special") {
          var round = await round_helper.get_last_round(cont.contest_id._id);
          if (
            round.contest &&
            round.contest.totalRound &&
            round.contest.totalRound === 2
          ) {
            if (
              round.contest.round === "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.pop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rb_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.country_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rock_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.latin_participants >
                  round.contest.contestant[0].Round2
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round === "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 2 ||
                cont.contest_id.duration === 3 ||
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );
                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants >
                    round.contest.contestant[0].Round2 &&
                  round.contest.pop_participants >
                    round.contest.contestant[0].Round2 &&
                  round.contest.rb_participants >
                    round.contest.contestant[0].Round2 &&
                  round.contest.country_participants >
                    round.contest.contestant[0].Round2 &&
                  round.contest.rock_participants >
                    round.contest.contestant[0].Round2 &&
                  round.contest.latin_participants >
                    round.contest.contestant[0].Round2
                ) {
                  let next_round = "round2";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round2_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round2_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round2_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round2_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round2_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round2_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[0].Round2,
                    pop_participants: round.contest.contestant[0].Round2,
                    rb_participants: round.contest.contestant[0].Round2,
                    country_participants: round.contest.contestant[0].Round2,
                    rock_participants: round.contest.contestant[0].Round2,
                    latin_participants: round.contest.contestant[0].Round2,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round === "round2" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 2) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            } else {
            }
          } else if (
            round.contest &&
            round.contest.totalRound &&
            round.contest.totalRound === 3
          ) {
            if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.pop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rb_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.country_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rock_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.latin_participants >
                  round.contest.contestant[0].Round2
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 3 ||
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.pop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rb_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.country_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rock_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.latin_participants >=
                    round.contest.contestant[0].Round2
                ) {
                  let next_round = "round2";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round2_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round2_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round2_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round2_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round2_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round2_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[0].Round2,
                    pop_participants: round.contest.contestant[0].Round2,
                    rb_participants: round.contest.contestant[0].Round2,
                    country_participants: round.contest.contestant[0].Round2,
                    rock_participants: round.contest.contestant[0].Round2,
                    latin_participants: round.contest.contestant[0].Round2,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round2" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 3 ||
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.country_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[1].Round3
                ) {
                  let next_round = "round3";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round3_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round3_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round3_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round3_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round3_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round3_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[1].Round3,
                    pop_participants: round.contest.contestant[1].Round3,
                    rb_participants: round.contest.contestant[1].Round3,
                    country_participants: round.contest.contestant[1].Round3,
                    rock_participants: round.contest.contestant[1].Round3,
                    latin_participants: round.contest.contestant[1].Round3,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round === "round3" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 3 ||
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );
                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            } else {
            }
          } else if (
            round.contest &&
            round.contest.totalRound &&
            round.contest.totalRound === 4
          ) {
            if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.pop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rb_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.country_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rock_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.latin_participants >
                  round.contest.contestant[0].Round2
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );
                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.pop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rb_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.country_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rock_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.latin_participants >=
                    round.contest.contestant[0].Round2
                ) {
                  let next_round = "round2";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round2_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round2_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round2_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round2_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round2_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round2_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[0].Round2,
                    pop_participants: round.contest.contestant[0].Round2,
                    rb_participants: round.contest.contestant[0].Round2,
                    country_participants: round.contest.contestant[0].Round2,
                    rock_participants: round.contest.contestant[0].Round2,
                    latin_participants: round.contest.contestant[0].Round2,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round2" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.country_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[1].Round3
                ) {
                  let next_round = "round3";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round3_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round3_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round3_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round3_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round3_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round3_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[1].Round3,
                    pop_participants: round.contest.contestant[1].Round3,
                    rb_participants: round.contest.contestant[1].Round3,
                    country_participants: round.contest.contestant[1].Round3,
                    rock_participants: round.contest.contestant[1].Round3,
                    latin_participants: round.contest.contestant[1].Round3,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round3" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.country_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[2].Round4
                ) {
                  let next_round = "round4";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round4_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round4_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round4_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round4_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round4_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round4_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[2].Round4,
                    pop_participants: round.contest.contestant[2].Round4,
                    rb_participants: round.contest.contestant[2].Round4,
                    country_participants: round.contest.contestant[2].Round4,
                    rock_participants: round.contest.contestant[2].Round4,
                    latin_participants: round.contest.contestant[2].Round4,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round === "round4" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            } else {
            }
          } else if (
            round.contest &&
            round.contest.totalRound &&
            round.contest.totalRound === 5
          ) {
            if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.pop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rb_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.country_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rock_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.latin_participants >
                  round.contest.contestant[0].Round2
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.pop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rb_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.country_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rock_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.latin_participants >=
                    round.contest.contestant[0].Round2
                ) {
                  let next_round = "round2";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round2_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round2_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round2_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round2_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round2_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round2_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[0].Round2,
                    pop_participants: round.contest.contestant[0].Round2,
                    rb_participants: round.contest.contestant[0].Round2,
                    country_participants: round.contest.contestant[0].Round2,
                    rock_participants: round.contest.contestant[0].Round2,
                    latin_participants: round.contest.contestant[0].Round2,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round2" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.country_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[1].Round3
                ) {
                  let next_round = "round3";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round3_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round3_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round3_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round3_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round3_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round3_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[1].Round3,
                    pop_participants: round.contest.contestant[1].Round3,
                    rb_participants: round.contest.contestant[1].Round3,
                    country_participants: round.contest.contestant[1].Round3,
                    rock_participants: round.contest.contestant[1].Round3,
                    latin_participants: round.contest.contestant[1].Round3,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round3" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.country_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[2].Round4
                ) {
                  let next_round = "round4";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round4_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round4_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round4_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round4_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round4_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round4_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[2].Round4,
                    pop_participants: round.contest.contestant[2].Round4,
                    rb_participants: round.contest.contestant[2].Round4,
                    country_participants: round.contest.contestant[2].Round4,
                    rock_participants: round.contest.contestant[2].Round4,
                    latin_participants: round.contest.contestant[2].Round4,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round4" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.country_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[3].Round5
                ) {
                  let next_round = "round5";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round5_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round5_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round5_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round5_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round5_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round5_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[3].Round5,
                    pop_participants: round.contest.contestant[3].Round5,
                    rb_participants: round.contest.contestant[3].Round5,
                    country_participants: round.contest.contestant[3].Round5,
                    rock_participants: round.contest.contestant[3].Round5,
                    latin_participants: round.contest.contestant[3].Round5,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round === "round5" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            } else {
            }
          } else if (
            round.contest &&
            round.contest.totalRound &&
            round.contest.totalRound === 6
          ) {
            if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.pop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rb_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.country_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rock_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.latin_participants >
                  round.contest.contestant[0].Round2
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.pop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rb_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.country_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rock_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.latin_participants >=
                    round.contest.contestant[0].Round2
                ) {
                  let next_round = "round2";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round2_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round2_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round2_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round2_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round2_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round2_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[0].Round2,
                    pop_participants: round.contest.contestant[0].Round2,
                    rb_participants: round.contest.contestant[0].Round2,
                    country_participants: round.contest.contestant[0].Round2,
                    rock_participants: round.contest.contestant[0].Round2,
                    latin_participants: round.contest.contestant[0].Round2,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round2" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.country_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[1].Round3
                ) {
                  let next_round = "round3";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round3_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round3_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round3_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round3_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round3_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round3_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[1].Round3,
                    pop_participants: round.contest.contestant[1].Round3,
                    rb_participants: round.contest.contestant[1].Round3,
                    country_participants: round.contest.contestant[1].Round3,
                    rock_participants: round.contest.contestant[1].Round3,
                    latin_participants: round.contest.contestant[1].Round3,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round3" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.country_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[2].Round4
                ) {
                  let next_round = "round4";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round4_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round4_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round4_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round4_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round4_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round4_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[2].Round4,
                    pop_participants: round.contest.contestant[2].Round4,
                    rb_participants: round.contest.contestant[2].Round4,
                    country_participants: round.contest.contestant[2].Round4,
                    rock_participants: round.contest.contestant[2].Round4,
                    latin_participants: round.contest.contestant[2].Round4,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round4" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.country_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[3].Round5
                ) {
                  let next_round = "round5";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round5_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round5_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round5_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round5_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round5_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round5_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[3].Round5,
                    pop_participants: round.contest.contestant[3].Round5,
                    rb_participants: round.contest.contestant[3].Round5,
                    country_participants: round.contest.contestant[3].Round5,
                    rock_participants: round.contest.contestant[3].Round5,
                    latin_participants: round.contest.contestant[3].Round5,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round5" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.country_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[4].Round6
                ) {
                  let next_round = "round6";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round6_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round6_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round6_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round6_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round6_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round6_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[4].Round6,
                    pop_participants: round.contest.contestant[4].Round6,
                    rb_participants: round.contest.contestant[4].Round6,
                    country_participants: round.contest.contestant[4].Round6,
                    rock_participants: round.contest.contestant[4].Round6,
                    latin_participants: round.contest.contestant[4].Round6,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round === "round6" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            } else {
            }
          } else if (
            round.contest &&
            round.contest.totalRound &&
            round.contest.totalRound === 7
          ) {
            if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.pop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rb_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.country_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rock_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.latin_participants >
                  round.contest.contestant[0].Round2
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.pop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rb_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.country_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rock_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.latin_participants >=
                    round.contest.contestant[0].Round2
                ) {
                  let next_round = "round2";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round2_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round2_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round2_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round2_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round2_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round2_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[0].Round2,
                    pop_participants: round.contest.contestant[0].Round2,
                    rb_participants: round.contest.contestant[0].Round2,
                    country_participants: round.contest.contestant[0].Round2,
                    rock_participants: round.contest.contestant[0].Round2,
                    latin_participants: round.contest.contestant[0].Round2,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round2" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.country_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[1].Round3
                ) {
                  let next_round = "round3";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round3_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round3_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round3_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round3_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round3_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round3_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[1].Round3,
                    pop_participants: round.contest.contestant[1].Round3,
                    rb_participants: round.contest.contestant[1].Round3,
                    country_participants: round.contest.contestant[1].Round3,
                    rock_participants: round.contest.contestant[1].Round3,
                    latin_participants: round.contest.contestant[1].Round3,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round3" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.country_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[2].Round4
                ) {
                  let next_round = "round4";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round4_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round4_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round4_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round4_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round4_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round4_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[2].Round4,
                    pop_participants: round.contest.contestant[2].Round4,
                    rb_participants: round.contest.contestant[2].Round4,
                    country_participants: round.contest.contestant[2].Round4,
                    rock_participants: round.contest.contestant[2].Round4,
                    latin_participants: round.contest.contestant[2].Round4,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round4" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.country_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[3].Round5
                ) {
                  let next_round = "round5";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round5_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round5_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round5_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round5_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round5_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round5_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[3].Round5,
                    pop_participants: round.contest.contestant[3].Round5,
                    rb_participants: round.contest.contestant[3].Round5,
                    country_participants: round.contest.contestant[3].Round5,
                    rock_participants: round.contest.contestant[3].Round5,
                    latin_participants: round.contest.contestant[3].Round5,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round5" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.country_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[4].Round6
                ) {
                  let next_round = "round6";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round6_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round6_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round6_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round6_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round6_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round6_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[4].Round6,
                    pop_participants: round.contest.contestant[4].Round6,
                    rb_participants: round.contest.contestant[4].Round6,
                    country_participants: round.contest.contestant[4].Round6,
                    rock_participants: round.contest.contestant[4].Round6,
                    latin_participants: round.contest.contestant[4].Round6,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round6" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.country_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[5].Round7
                ) {
                  let next_round = "round7";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round7_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round7_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round7_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round7_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round7_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round7_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[5].Round7,
                    pop_participants: round.contest.contestant[5].Round7,
                    rb_participants: round.contest.contestant[5].Round7,
                    country_participants: round.contest.contestant[5].Round7,
                    rock_participants: round.contest.contestant[5].Round7,
                    latin_participants: round.contest.contestant[5].Round7,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round === "round7" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            } else {
            }
          } else if (
            round.contest &&
            round.contest.totalRound &&
            round.contest.totalRound === 8
          ) {
            if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.pop_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rb_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.country_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.rock_participants >
                  round.contest.contestant[0].Round2 &&
                round.contest.latin_participants >
                  round.contest.contestant[0].Round2
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round == "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.pop_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rb_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.country_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.rock_participants >=
                    round.contest.contestant[0].Round2 &&
                  round.contest.latin_participants >=
                    round.contest.contestant[0].Round2
                ) {
                  let next_round = "round2";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round1",
                    round.contest.contestant[0].Round2,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round2_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round2_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round2_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round2_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round2_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round2_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round2_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[0].Round2,
                    pop_participants: round.contest.contestant[0].Round2,
                    rb_participants: round.contest.contestant[0].Round2,
                    country_participants: round.contest.contestant[0].Round2,
                    rock_participants: round.contest.contestant[0].Round2,
                    latin_participants: round.contest.contestant[0].Round2,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round2" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.country_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[1].Round3 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[1].Round3
                ) {
                  let next_round = "round3";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round2",
                    round.contest.contestant[1].Round3,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round3_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round3_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round3_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round3_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round3_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round3_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round3_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[1].Round3,
                    pop_participants: round.contest.contestant[1].Round3,
                    rb_participants: round.contest.contestant[1].Round3,
                    country_participants: round.contest.contestant[1].Round3,
                    rock_participants: round.contest.contestant[1].Round3,
                    latin_participants: round.contest.contestant[1].Round3,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round3" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.country_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[2].Round4 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[2].Round4
                ) {
                  let next_round = "round4";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round3",
                    round.contest.contestant[2].Round4,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round4_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round4_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round4_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round4_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round4_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round4_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round4_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[2].Round4,
                    pop_participants: round.contest.contestant[2].Round4,
                    rb_participants: round.contest.contestant[2].Round4,
                    country_participants: round.contest.contestant[2].Round4,
                    rock_participants: round.contest.contestant[2].Round4,
                    latin_participants: round.contest.contestant[2].Round4,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round4" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.country_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[3].Round5 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[3].Round5
                ) {
                  let next_round = "round5";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round4",
                    round.contest.contestant[3].Round5,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round5_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round5_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round5_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round5_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round5_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round5_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round5_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[3].Round5,
                    pop_participants: round.contest.contestant[3].Round5,
                    rb_participants: round.contest.contestant[3].Round5,
                    country_participants: round.contest.contestant[3].Round5,
                    rock_participants: round.contest.contestant[3].Round5,
                    latin_participants: round.contest.contestant[3].Round5,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round5" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.country_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[4].Round6 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[4].Round6
                ) {
                  let next_round = "round6";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round5",
                    round.contest.contestant[4].Round6,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round6_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round6_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round6_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round6_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round6_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round6_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round6_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[4].Round6,
                    pop_participants: round.contest.contestant[4].Round6,
                    rb_participants: round.contest.contestant[4].Round6,
                    country_participants: round.contest.contestant[4].Round6,
                    rock_participants: round.contest.contestant[4].Round6,
                    latin_participants: round.contest.contestant[4].Round6,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round6" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.country_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[5].Round7 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[5].Round7
                ) {
                  let next_round = "round7";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round6",
                    round.contest.contestant[5].Round7,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round7_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round7_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round7_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round7_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round7_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round7_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round7_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[5].Round7,
                    pop_participants: round.contest.contestant[5].Round7,
                    rb_participants: round.contest.contestant[5].Round7,
                    country_participants: round.contest.contestant[5].Round7,
                    rock_participants: round.contest.contestant[5].Round7,
                    latin_participants: round.contest.contestant[5].Round7,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round == "round7" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (
                  currentdate >= nextDate.date &&
                  round.contest.hip_hop_participants ===
                    round.contest.contestant[6].Round8 &&
                  round.contest.pop_participants ===
                    round.contest.contestant[6].Round8 &&
                  round.contest.rb_participants ===
                    round.contest.contestant[6].Round8 &&
                  round.contest.country_participants ===
                    round.contest.contestant[6].Round8 &&
                  round.contest.rock_participants ===
                    round.contest.contestant[6].Round8 &&
                  round.contest.latin_participants ===
                    round.contest.contestant[6].Round8
                ) {
                  let next_round = "round8";
                  var hiphop_track_id = [];
                  var pop_track_id = [];
                  var rb_track_id = [];
                  var latin_track_id = [];
                  var rock_track_id = [];
                  var country_track_id = [];

                  var top_hiphop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round7",
                    round.contest.contestant[6].Round8,
                    "hiphop"
                  );

                  var top_pop_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round7",
                    round.contest.contestant[6].Round8,
                    "pop"
                  );

                  var top_rb_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round7",
                    round.contest.contestant[6].Round8,
                    "rb"
                  );

                  var top_rock_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round7",
                    round.contest.contestant[6].Round8,
                    "rock"
                  );

                  var top_country_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round7",
                    round.contest.contestant[6].Round8,
                    "ele"
                  );

                  var top_latin_artist = await contest_voting_helper.topArtist(
                    cont.contest_id._id,
                    "round7",
                    round.contest.contestant[6].Round8,
                    "latin"
                  );

                  for (const hiphop of top_hiphop_artist.result) {
                    artist_id.push(hiphop.artist_id._id);
                    var hiphop_track = await round_helper.get_track_selected_by_id(
                      hiphop.artist_id._id,
                      hiphop.contest_id
                    );
                    hiphop_track_id.push(hiphop_track.data.round8_track);
                    var votingObj = {
                      artist_id: hiphop_track.data.artist_id,
                      contest_id: hiphop_track.data.contest_id,
                      track_id: hiphop_track.data.round8_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const pop of top_pop_artist.result) {
                    artist_id.push(pop.artist_id._id);
                    var pop_track = await round_helper.get_track_selected_by_id(
                      pop.artist_id._id,
                      pop.contest_id
                    );

                    pop_track_id.push(pop_track.data.round8_track);
                    var votingObj = {
                      artist_id: pop_track.data.artist_id,
                      contest_id: pop_track.data.contest_id,
                      track_id: pop_track.data.round8_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rb of top_rb_artist.result) {
                    artist_id.push(rb.artist_id._id);
                    var rb_track = await round_helper.get_track_selected_by_id(
                      rb.artist_id._id,
                      rb.contest_id
                    );
                    rb_track_id.push(rb_track.data.round8_track);
                    var votingObj = {
                      artist_id: rb_track.data.artist_id,
                      contest_id: rb_track.data.contest_id,
                      track_id: rb_track.data.round8_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const country of top_country_artist.result) {
                    artist_id.push(country.artist_id._id);
                    var country_track = await round_helper.get_track_selected_by_id(
                      country.artist_id._id,
                      country.contest_id
                    );
                    country_track_id.push(country_track.data.round8_track);
                    var votingObj = {
                      artist_id: country_track.data.artist_id,
                      contest_id: country_track.data.contest_id,
                      track_id: country_track.data.round8_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const rock of top_rock_artist.result) {
                    artist_id.push(rock.artist_id._id);
                    var rock_track = await round_helper.get_track_selected_by_id(
                      rock.artist_id._id,
                      rock.contest_id
                    );
                    rock_track_id.push(rock_track.data.round8_track);
                    var votingObj = {
                      artist_id: rock_track.data.artist_id,
                      contest_id: rock_track.data.contest_id,
                      track_id: rock_track.data.round8_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }
                  for (const latin of top_latin_artist.result) {
                    artist_id.push(latin.artist_id._id);
                    var latin_track = await round_helper.get_track_selected_by_id(
                      latin.artist_id._id,
                      latin.contest_id
                    );
                    latin_track_id.push(latin_track.data.round8_track);
                    var votingObj = {
                      artist_id: latin_track.data.artist_id,
                      contest_id: latin_track.data.contest_id,
                      track_id: latin_track.data.round8_track,
                      round: next_round,
                    };
                    var contest_voting_data = await contest_voting_helper.insert_contest_voting_record(
                      votingObj
                    );
                  }

                  var obj = {
                    hip_hop_participants: round.contest.contestant[6].Round8,
                    pop_participants: round.contest.contestant[6].Round8,
                    rb_participants: round.contest.contestant[6].Round8,
                    country_participants: round.contest.contestant[6].Round8,
                    rock_participants: round.contest.contestant[6].Round8,
                    latin_participants: round.contest.contestant[6].Round8,
                    contest_id: round.contest.contest_id,
                    round: next_round,
                    track_id: track_id,
                    artist_id: artist_id,
                    hip_hop_track: hiphop_track_id,
                    pop_track: pop_track_id,
                    rb_track: rb_track_id,
                    country_track: country_track_id,
                    rock_track: rock_track_id,
                    latin_track: latin_track_id,
                    contestant: round.contest.contestant,
                    totalRound: round.contest.totalRound,
                    start_date: moment(nextDate.date).utcOffset(0),
                  };
                  var resp_data = await round_helper.insert_round(obj);
                } else {
                }
              }
            } else if (
              round.contest.round === "round8" &&
              cont.contest_id.status === "started"
            ) {
              if (cont.contest_id.duration === 8) {
                var totalDays =
                  (cont.contest_id.duration * 7) / round.contest.totalRound;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            } else {
            }
          } else {
            if (
              round.contest.round === "round1" &&
              cont.contest_id.status === "in_progress"
            ) {
              var startdate = moment(round.contest.start_date).format(
                "YYYY-MM-DD"
              );
              var currentdate = moment().format("YYYY-MM-DD");
              if (
                currentdate >= startdate &&
                round.contest.hip_hop_participants >= 10 &&
                round.contest.pop_participants >= 10 &&
                round.contest.rb_participants >= 10 &&
                round.contest.country_participants >= 10 &&
                round.contest.rock_participants >= 10 &&
                round.contest.latin_participants >= 10
              ) {
                var obj = {
                  status: "started",
                };
                var objRound = {};
                if (startdate !== currentdate) {
                  objRound = {
                    start_date: moment()
                      .utcOffset(0)
                      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 }),
                  };
                } else {
                  objRound = {
                    start_date: round.contest.start_date,
                  };
                }
                var updateContest = await contest_helper.update_status(
                  round.contest.contest_id._id,
                  obj
                );

                var updateRound = await round_helper.update_start_date(
                  round.contest.contest_id._id,
                  objRound
                );
              } else {
                console.log(' : "wrong" ==> ', "wrong");
              }
            } else if (
              round.contest.round === "round1" &&
              cont.contest_id.status === "started"
            ) {
              if (
                cont.contest_id.duration === 1 ||
                cont.contest_id.duration === 2 ||
                cont.contest_id.duration === 3 ||
                cont.contest_id.duration === 4 ||
                cont.contest_id.duration === 5 ||
                cont.contest_id.duration === 6 ||
                cont.contest_id.duration === 7 ||
                cont.contest_id.duration === 8
              ) {
                var totalDays = cont.contest_id.duration * 7;
                var currentdate = moment().format("YYYY-MM-DD HH:MM");
                var nextDate = await round_helper.nextDate(
                  totalDays,
                  round.contest.start_date
                );

                if (currentdate >= nextDate.date) {
                  var obj = {
                    status: "finished",
                  };
                  var updateContest = await contest_helper.update_status(
                    round.contest.contest_id._id,
                    obj
                  );
                }
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.log(" : error ==> ", error);
  }
});

module.exports = router;
