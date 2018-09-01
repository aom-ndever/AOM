var express = require('express');
var router = express.Router();
var config = require('../../config');
var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
var admin_helper = require('../../helpers/admin_helper');
var round_helper = require('../../helpers/round_helper');
var participate_helper = require('../../helpers/participate_helper');
var artist_helper = require('../../helpers/artist_helper');
var user_helper = require('../../helpers/user_helper');
var track_helper = require('../../helpers/track_helper');
var mail_helper = require('../../helpers/mail_helper');
var flag_helper = require('../../helpers/flag_helper');
var flag_artist_helper = require('../../helpers/flag_artist_helper');
var flag_user_helper = require('../../helpers/flag_user_helper');
var follower_helper = require('../../helpers/follower_helper');
var participate_helper = require('../../helpers/participate_helper');
var contest_request_helper = require('../../helpers/contest_request_helper');
var vote_track_helper = require('../../helpers/vote_track_helper');
var contest_helper = require('../../helpers/contest_helper');
var comment_helper = require('../../helpers/comment_helper');
var winner_helper = require('../../helpers/winner_helper');
var bookmark_helper = require('../../helpers/bookmark_helper');
var like_helper = require('../../helpers/like_helper');
var playlist_helper = require('../../helpers/playlist_helper');
var Round = require('../../models/round')

var _ = require('underscore');
var cron = require('node-cron');
var moment = require('moment');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');


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
 * @api {post} /admin   Administrator detail with total participant - Get 
 * @apiName Contest detail with total participant - Get
 * @apiGroup  Admin
 *
 * @apiHeader {String}  x-access-token unique access-key
 
 * @apiSuccess (Success 200) {Array} contect detail 
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/', async (req, res) => {
  var sort = {};

  if (req.body.sort) {
    req.body.sort.forEach(sort_criteria => {
      sort[sort_criteria.field] = sort_criteria.value;
    });
  }

  if (Object.keys(sort).length === 0) {
    sort["_id"] = 1;
  }
  var admin = await admin_helper.get_all_admin(req.body.start, req.body.length, sort);

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
    "name": {
      notEmpty: true,
      errorMessage: "name is required"
    },

    "music_type": {
      notEmpty: true,
      errorMessage: "Music Type is required"
    },

  };


  req.checkBody(schema);
  var errors = req.validationErrors();

  if (!errors) {
    type = await admin_helper.get_admin_by_id(req.userInfo.id)
    if (type.admin.account_type == "super_admin" || type.admin.account_type == "admin") {
      var contest_obj = {
        admin_id: req.userInfo.id,
        music_type: req.body.music_type,
        name: req.body.name,
      }

      var resp_data = await contest_helper.insert_contest(contest_obj);

      var start_date = moment(
        {
          year: req.body.year,
          month: (parseInt(req.body.month) - 1),
          date: (parseInt(req.body.day) + 1),
        }
      );
      var round_obj = {
        contest_id: resp_data.contest._id,
        start_date: start_date,
        state: req.body.state,
        region: req.body.region,
        duration: req.body.duration,
        end_date: moment(start_date).add((req.body.duration * 7), 'days'),
        round: req.body.round,
        round_name: contest_obj.name + " " + "round" + req.body.round
      };


      var resp_data = await round_helper.insert_round(round_obj);

      if (resp_data.status == 0) {
        logger.error("Error occured while inserting = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
      } else {

        var resp_music = await artist_helper.get_artist_by_music_id(contest_obj.music_type);
        if (resp_music.status == 1) {

          logger.trace("sending mail");
          let mail_resp = await mail_helper.send("contest", {
            "to": resp_music.artist.email,
            "subject": "Contest Creation"
          }, {
              "Note": "new contest has been created named :" + contest_obj.name,
            });
        }

        logger.trace(" got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
      }
    }
    else {
      var obj = {
        admin_id: req.userInfo.id,
        name: req.body.name,
        start_date: start_date,
        duration: req.body.duration,
        end_date: moment(start_date).utc().add((req.body.duration * 7), 'days'),
        music_type: req.body.music_type,
        state: req.body.state,
        region: req.body.region,
        round: req.body.round,
        round_name: req.body.name + " " + "round" + req.body.round

      };
      var resp_data = await contest_request_helper.insert_contest_request(obj);
      if (resp_data.status == 0) {
        logger.error("Error occured while inserting = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
      } else {

        logger.trace(" got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
      }
    }
  }
  else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


router.post("/upgrade_to_super_admin", async (req, res) => {
  var schema = {
  };

  req.checkBody(schema);
  var errors = req.validationErrors();
  admin_id = req.userInfo.id

  if (!errors) {

    response = await admin_helper.get_admin_by_id(admin_id)

    var obj = {
      "admin_id": response.admin._id,
      "first_name": response.admin.first_name,
      "last_name": response.admin.last_name,
      "created_at": response.admin.created_at,
    }
    if (response.admin.account_type == "admin") {
      var resp_data = await admin_helper.get_admin_request_by_id(admin_id);

      if (resp_data.status == 2) {
        var resp_data = await admin_helper.insert_admin_request(obj);

        if (resp_data.status == 0) {
          logger.error("Error occured while inserting = ", resp_data);
          res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
        }
      }
      else if (resp_data.status == 1) {
        res.status(config.BAD_REQUEST).json({ message: "Already requested once" });
      }
    }

    else {
      res.status(config.BAD_REQUEST).json({ message: "You are not eligible to become Admin" });

    }
    logger.trace(" got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
  else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


router.put("/accept/upgrade_artist/:admin_id", async (req, res) => {
  //contest_resp = await contest_request_helper.get__by_id(req.params.admin_id)
  admin_id = req.userInfo.id
  var action = "accepted"
  var account_type = "super_admin"
  contest_resp = await admin_helper.get_admin_by_id(admin_id)
  if (contest_resp.admin.account_type == 'super_admin') {

    var resp_data = await admin_helper.update_admin_request_by_adminid(req.params.admin_id, action);
    var resp_data = await admin_helper.update_admin_request_by_id(req.params.admin_id, account_type);
    logger.trace("Request Accepted");
    res.status(config.OK_STATUS).json({ "message": "Request Accepted" });
  }
  else {
    logger.trace("You don't have permission to reject the request");
    res.status(config.OK_STATUS).json({ "message": "You don't have permission to accept the request" });
  }
});

router.put("/reject/upgrade_artist/:admin_id", async (req, res) => {
  //contest_resp = await contest_request_helper.get__by_id(req.params.admin_id)
  admin_id = req.userInfo.id
  var action = "rejected"
  var account_type = "super_admin"
  contest_resp = await admin_helper.get_admin_by_id(admin_id)
  if (contest_resp.admin.account_type == 'super_admin') {

    var resp_data = await admin_helper.update_admin_request_by_adminid(req.params.admin_id, action);
    var resp_data = await admin_helper.update_admin_request_by_id(req.params.admin_id, account_type);
    logger.trace("Request Rejected");
    res.status(config.OK_STATUS).json({ "message": "Request AcceptRejecteded" });
  }
  else {
    logger.trace("You don't have permission to reject the request");
    res.status(config.OK_STATUS).json({ "message": "You don't have permission to reject the request" });
  }
});



router.post("/add_existing_contest", async (req, res) => {
  var schema = {
  };

  req.checkBody(schema);
  var errors = req.validationErrors();
  contest_response = await contest_helper.get_contest_by_id(req.body.contest_id)

  if (!errors) {
    var round_obj = {
      contest_id: req.body.contest_id,
      start_date: moment(req.body.start_date).utc(),
      duration: req.body.duration,
      end_date: moment(req.body.start_date).utc().add((req.body.duration * 7), 'days'),
      music_type: req.body.music_type,
      state: req.body.state,
      region: req.body.region,
      round: req.body.round,
      round_name: contest_response.contest.name + "round" + req.body.round

    }
    var round = await round_helper.get_finished_round_of_contest(round_obj.contest_id);

    if (round.status === 1) {

      var track = await winner_helper.get_qualifiedss(round.round._id);
      if (track.status === 1) {

        var arry = [];
        for (let x of track.winner) {
          var winner = x.track_id;
          arry.push(ObjectId(winner));
        }
        if (arry.length > 0) {

          var roundget = await round_helper.get_rounds({ "_id": new ObjectId(round.round._id) }, { "track_id": null });

          if (roundget.status == 0) {
            var roundAdd = await round_helper.add_participant_in_next_round({ "_id": new ObjectId(round.round._id) }, { "track_id": arry });
            for (let x of track.winner) {

              var object = {
                "votes": x.votes,
                "track_id": x.track_id,
                "round_id": current_round.round._id

              }
            }

            var winner = winner_helper.insert_winner(object)
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
  }
  else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
  var current_round = await round_helper.get_current_round_of_contest(round_obj.contest_id);
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
router.post('/contest', async (req, res) => {
  var sort = {};
  if (req.body.sort) {
    req.body.sort.forEach(sort_criteria => {
      sort[sort_criteria.field] = sort_criteria.value;
    });
  }

  if (Object.keys(sort).length === 0) {
    sort["_id"] = 1;
  }

  var contest = await contest_helper.get_all_contests_list(req.body.start, req.body.length, sort);

  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "contest": contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }

});


router.get('/get_contest', async (req, res) => {

  var contest = await round_helper.get_all_contests();
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "contest": contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }

});
router.post('/get_round', async (req, res) => {
  contest_id = req.body.contest_id;
  var contest = await round_helper.get_rounds_by_contestid(contest_id);
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "contest": contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }

});
router.post('/get_admin_flagged', async (req, res) => {

  var contest = await admin_helper.get_all_admin_suspended(req.body.start, req.body.length);
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "contest": contest });
  } else {
    res.status(config.INTERNAL_SERVER_ERROR).json(contest);
  }

});
router.post('/get_admin_request', async (req, res) => {

  var contest = await admin_helper.get_all_admin_request(req.body.start, req.body.length);
  if (contest.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "contest": contest });
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
router.delete('/delete_track/:track_id', async (req, res) => {

  track_id = req.params.track_id;

  let track_resp = await track_helper.get_all_track_by_track_id(track_id);
  artist_id = track_resp.track.artist_id._id;
  track_id = track_resp.track._id;
  type = await admin_helper.get_admin_by_id(req.userInfo.id)

  if (type.admin.account_type == "super_admin" || type.admin.account_type == "admin") {



    var del_resp = await track_helper.delete_track_by_admin(track_id);

    if (del_resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while deleting track", "error": del_resp.error });
    } else if (del_resp.status === 2) {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Can't delete track" });
    } else {
      var resp = await artist_helper.get_artist_by_id(artist_id);
      no_track = resp.artist.no_of_tracks - 1
      var resp_data = await track_helper.update_artist_for_track(artist_id, no_track);

      var resp = await artist_helper.get_artist_by_id(artist_id);
      no_track = resp.artist.no_of_likes - 1
      var resp_data = await track_helper.update_artist_for_likes(artist_id, no_track);

      var bookmark_del = await bookmark_helper.delete_bookmark_by_track_id(track_id);

      var like_del = await like_helper.delete_like(track_id);
      var comment_del = await comment_helper.delete_comment_by_track(track_id);
      var playlist_del = await playlist_helper.delete_playlist_by_track(track_id);

      res.status(config.OK_STATUS).json({ "status": 1, "message": "track has been deleted" });
    }
  }
  else {
    logger.trace("You dont have permission to delete track");
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to delete track" });
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

router.delete('/delete/:admin_id', async (req, res) => {
  admin_id = req.params.admin_id;
  type = await admin_helper.get_admin_by_id(req.userInfo.id)

  if (type.admin.account_type == "super_admin") {
    var del_resp = await admin_helper.delete_admin(admin_id);
    if (del_resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while deleting admin", "error": del_resp.error });
    } else if (del_resp.status === 2) {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Can't delete admin" });
    } else {

      res.status(config.OK_STATUS).json({ "status": 1, "message": "Administrator has been deleted" });
    }
  }
  else {
    logger.trace("You dont have permission to delete admin");
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to delete other admin" });
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
router.post('/suspend/:admin_id', async (req, res) => {
  type = await admin_helper.get_admin_by_id(req.userInfo.id)
  if (type.admin.account_type == "super_admin") {

    var resp = await admin_helper.get_admin_by_id(req.params.admin_id);

    if (resp.status == 0) {
      logger.error("Error occured while fetching admin = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {

      if (resp.admin.status == "active") {
        var stat = "suspended"
        var admin_resp = await admin_helper.update_admin_status(req.params.admin_id, stat);
      }
      else {
        var stat = "active"
        var admin_resp = await admin_helper.update_admin_status(req.params.admin_id, stat);
      }
      logger.trace("Admin Suspended= ", { "admin": admin_resp });
      res.status(config.OK_STATUS).json({ "message": "Account Suspended" });
    }
  }
  else {
    logger.trace("You dont have permission to suspend Admin");
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to suspend Admin" });
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
router.delete('/:user_id', async (req, res) => {
  user_id = req.params.user_id;
  var del_resp = await user_helper.delete_user_by_admin(user_id);
  if (del_resp.status === 0) {
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while deleting user", "error": del_resp.error });
  } else if (del_resp.status === 2) {
    res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Can't delete user" });
  } else {
    res.status(config.OK_STATUS).json({ "status": 1, "message": "user has been deleted" });
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
  var resp_location = await vote_track_helper.get_artist_by_location_vote(req.body.day);
  if (resp_data.status == 0 && resp.status == 0 && resp_location.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data, "day_vote": resp });
    res.status(config.OK_STATUS).json({ "artist": resp_data.artist, "day_vote": resp.results, "location": resp_location.results });
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
  var resp_location = await track_helper.get_artist_by_location_like(req.body.day);
  //var resp_comment = await track_helper.get_artist_by_day_comment(req.body.day);
  if (resp_data.status == 0 && resp_like.status == 0 && resp_location.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data, "likes": resp_like });
    res.status(config.OK_STATUS).json({ "artist": resp_data.artist, "likes": resp_like.results, "location": resp_location.results });
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
  var resp_location = await track_helper.get_artist_by_location_comment(req.body.day);

  if (resp_data.status == 0 && resp_comment.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data, "comment": resp_comment });
    res.status(config.OK_STATUS).json({ "artist": resp_data.artist, "comment": resp_comment.results, "location": resp_location.results });
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
  var sort = { no_of_votes: -1, created_at: sort_by }
  if (req.body.location) {
    filter.location = req.body.location;
  }
  if (req.body.filter) {
    req.body.filter.forEach(filter_criteria => {
      filter[filter_criteria.field] = filter_criteria.value;
    });
  }
  if (req.body.search) {
    var r = new RegExp(req.body.search);
    var search = { "$regex": r, "$options": "i" };
    filter.first_name = search;
  }
  var resp_data = await artist_helper.get_all_active_and_suspend_artist(req.body.start, req.body.length, filter, sort);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data });
    res.status(config.OK_STATUS).json({ "artist": resp_data });
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
  type = await admin_helper.get_admin_by_id(req.userInfo.id)
  if (type.admin.account_type == "super_admin" || type.admin.account_type == "admin") {
    var resp = await artist_helper.get_artist_by_id(req.params.artist_id);
    if (resp.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.artist.status == "active") {
        var stat = "suspended"
        var artist_resp = await artist_helper.update_artist_status(req.params.artist_id, stat);
      }
      else {
        var stat = "active"
        var artist_resp = await artist_helper.update_artist_status(req.params.artist_id, stat);
      }
      logger.trace("Artist Suspended= ", { "artist": artist_resp });
      res.status(config.OK_STATUS).json({ "artist": artist_resp });
    }
  }
  else {
    logger.trace("You dont have permission to suspend Artist");
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to suspend Artist" });
  }
});


router.post("/suspend/track/:track_id", async (req, res) => {

  type = await admin_helper.get_admin_by_id(req.userInfo.id)
  account_type = type.admin.account_type;

  if (type.admin.account_type == "super_admin" || type.admin.account_type == "admin") {
    var resp = await track_helper.get_track_by_trackk_id(req.params.track_id);
    artist_id = resp.track.artist_id._id;
    if (resp.track.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.track.is_suspend == false) {
        var stat = true
        var resp = await track_helper.update_track_status(req.params.track_id, stat);
        logger.trace("Track Suspended= ", { "track": resp });

        var obj = {
          "suspend_by": req.userInfo.id,
          "account_type": account_type,
          "track_id": req.params.track_id,
          "artist_id": artist_id
        }
        var resp = await track_helper.insert_suspend_track(obj);

        res.status(config.OK_STATUS).json({ "message": "Track Suspended" });
      }
      else {
        var stat = false
        var resp = await track_helper.update_track_status(req.params.track_id, stat);
        logger.trace("Track Suspended= ", { "track": resp });
        var resp = await track_helper.delete_suspend_track(req.params.track_id);

        res.status(config.OK_STATUS).json({ "message": "Track Unsuspended" });
      }

    }
  }
  else {
    logger.trace("You dont have permission to suspend Track");
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to suspend Track" });
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
  admin_id = req.userInfo.id
  contest_resp = await contest_request_helper.get_contest_by_id(req.params.contest_id)

  var contest_obj = {
    name: contest_resp.contest.name,
    _id: contest_resp.contest._id,
    admin_id: contest_resp.contest.admin_id,
    created_at: contest_resp.contest.created_at,
    music_type: contest_resp.contest.music_type
  }
  round_resp = await contest_request_helper.get_round_by_id(req.params.contest_id)



  var round_obj = {
    contest_id: contest_obj._id,
    start_date: contest_resp.contest.start_date,
    duration: contest_resp.contest.duration,
    end_date: contest_resp.contest.end_date,
    state: contest_resp.contest.state,
    region: contest_resp.contest.region,
    round: contest_resp.contest.round,
    round_name: contest_resp.contest.round_name,

  }
  contest_resp = await admin_helper.get_admin_by_id(admin_id)
  if (contest_resp.admin.account_type == 'super_admin') {
    var action = "accepted"
    var resp_data1 = await contest_helper.insert_contest(contest_obj);
    var resp_data2 = await round_helper.insert_round(round_obj);


    var resp_data = await contest_request_helper.insert_action(req.params.contest_id, action);
    logger.trace("Contest Request Accepted");
    res.status(config.OK_STATUS).json({ "message": "Contest Request Accepted" });
  }
  else {
    logger.trace("You don't have permission to accept the request");
    res.status(config.OK_STATUS).json({ "message": "You don't have permission to accept the request" });
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
  contest_resp = await contest_request_helper.get_contest_by_id(req.params.contest_id)
  admin_id = req.userInfo.id
  var action = "rejected"
  contest_resp = await admin_helper.get_admin_by_id(admin_id)
  if (contest_resp.admin.account_type == 'super_admin') {
    var resp_data = await contest_request_helper.insert_action(req.params.contest_id, action);
    logger.trace("Contest Request Rejected");
    res.status(config.OK_STATUS).json({ "message": "Contest Request Rejected" });
  }
  else {
    logger.trace("You don't have permission to reject the request");
    res.status(config.OK_STATUS).json({ "message": "You don't have permission to reject the request" });
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
    to: req.params.user_id
  }
  type = await admin_helper.get_admin_by_id(req.userInfo.id)
  if (type.admin.account_type == "super_admin" || type.admin.account_type == "admin") {
    var resp = await user_helper.get_user_by_id(req.params.user_id);
    if (resp.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
      if (resp.user.flag == false) {
        var stat = true
        var user_response = await flag_user_helper.insert_flag(obj);
        var user_resp = await user_helper.update_user_flag(req.params.user_id, stat);
        logger.trace("user flagged");
        res.status(config.OK_STATUS).json({ "message": "User Suspended", "user": user_response.flag });
      }
      else {
        var stat = false
        var user_resp = await user_helper.update_user_flag(req.params.user_id, stat);
        var user_resp = await flag_user_helper.delete_flag(obj.from, obj.to);
        logger.trace("flag deleted");
        res.status(config.OK_STATUS).json({ "message": "User Activated" });
      }
    }
  }
  else {
    logger.trace("You dont have permission to suspend User");
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to suspend User" });
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
  var sort = { no_of_votes: -1, created_at: sort_by }

  if (req.body.filter) {
    req.body.filter.forEach(filter_criteria => {
      filter[filter_criteria.field] = filter_criteria.value;
    });
  }
  if (req.body.search) {
    var r = new RegExp(req.body.search);
    var search = { "$regex": r, "$options": "i" };
    filter.first_name = search;
  }


  var resp_data = await user_helper.get_all_active_and_suspend_user(req.body.start, req.body.length, filter, sort);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("user got successfully = ", { "user": resp_data });
    res.status(config.OK_STATUS).json({ "user": resp_data });
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
    logger.trace("user got successfully = ", { "user": resp_data });
    res.status(config.OK_STATUS).json({ "user": resp_data.user });
  }
});
router.post("/get_suspended_track", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await track_helper.get_suspended_track_by_artist_id(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching user = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("user got successfully = ", { "user": resp_data });
    res.status(config.OK_STATUS).json({ "track": resp_data.track });
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
  var resp_data = await contest_request_helper.get_contest_request(req.body.start, req.body.length);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching contest = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("user got successfully = ", { "contest": resp_data });
    res.status(config.OK_STATUS).json({ "contest": resp_data });
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
    logger.trace("artist got successfully = ", { "artist": resp_data });
    res.status(config.OK_STATUS).json({ "artist": resp_data.artist });
  }
});

router.post("/get_artist_votes", async (req, res) => {
  artist_id = req.body.artist_id;

  var resp_data = await vote_track_helper.get_all_voted_artist_by_id(artist_id);
  if (resp_data.status == 0) {

    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data });
    res.status(config.OK_STATUS).json({ "artist": resp_data });
  }
});


router.post("/get_artist_followers", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await follower_helper.get_all_followers(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data });
    res.status(config.OK_STATUS).json({ "artist": resp_data });
  }
});



router.post("/get_artist_comments", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await comment_helper.get_all_comment_by_artist_id(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data });
    res.status(config.OK_STATUS).json({ "artist": resp_data });
  }
});



router.post("/get_artist_tracks", async (req, res) => {
  artist_id = req.body.artist_id;
  var resp_data = await track_helper.get_track_by_artist_id(artist_id);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("artist got successfully = ", { "artist": resp_data });
    res.status(config.OK_STATUS).json({ "artist": resp_data });
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
  type = await admin_helper.get_admin_by_id(req.userInfo.id)
  var obj = {
    from: req.userInfo.id,
    to: req.params.artist_id,
    account_type: type.admin.account_type
  }
  if (type.admin.account_type == "super_admin" || type.admin.account_type == "admin") {
    if (resp.status == 0) {
      logger.error("Error occured while fetching artist = ", resp);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {

      if (resp.artist.flag == false) {
        var stat = true
        var artist_response = await flag_artist_helper.insert_flag(obj);
        var artist_resp = await artist_helper.update_artist_flag(req.params.artist_id, stat);
        logger.trace("artist flagged");
        res.status(config.OK_STATUS).json({ "message": "Artist Suspended", "artist": artist_response.flag });
      }
      else {
        var stat = false
        var artist_resp = await artist_helper.update_artist_flag(req.params.artist_id, stat);
        var artist_resp = await flag_artist_helper.delete_flag(obj.from, obj.to);
        logger.trace("flag deleted");
        res.status(config.OK_STATUS).json({ "message": "Artist Activated" });
      }
    }
  }
  else {
    logger.trace("You dont have permission to suspend Artist");
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "You dont have permission to suspend User" });
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
router.post('/user', async (req, res) => {
  user_id = req.body.user_id
  var user = await user_helper.get_user_by_id(user_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "user": user.user });
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
router.post('/user/artist_follow', async (req, res) => {
  user_id = req.body.user_id
  var user = await follower_helper.get_all_followers_by_user_id(user_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "user": user.user });
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});



router.post('/user/get_artist_follow', async (req, res) => {
  user_id = req.userInfo.id
  var user = await follower_helper.get_all_followers_by_user_id(user_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "user": user.user });
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
router.post('/get_participants_of_contest', async (req, res) => {
  contest_id = req.body.contest_id
  var artist = await participate_helper.get_participated_artist(contest_id);

  if (artist.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "artist": artist.participate });
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
  artist_id = req.body.artist_id
  var featured_artist = await artist_helper.get_no_of_featured_artist();

  var resp = await artist_helper.get_artist_by_id(artist_id);
  if (resp.status == 0) {
    logger.error("Error occured while fetching artist = ", resp);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp);
  } else {
    if (resp.artist.featured == false) {
      var feature = true
      if (featured_artist.artist.length <= 24) {

        var artist_resp = await artist_helper.update_featured_artist(artist_id, feature);
        logger.trace("Artist selected as featured artist = ");
        res.status(config.OK_STATUS).json({ "message": "Artist selected as featured artist" });
      }
      else {
        res.status(config.OK_STATUS).json({ "message": "Already 24 artist selected" });
      }
    }
    else {
      var feature = false
      var artist_resp = await artist_helper.update_featured_artist(artist_id, feature);
      logger.trace("Artist removed from featured artist = ");
      res.status(config.OK_STATUS).json({ "message": "Artist removed from featured artist" });
    }
  }
});



// cron.schedule('* * * * *', async () => {
//      contest_id = req.body.contest_id
//      contest_id = "5b8379ceefeb26718f02923b";
//     var round = await round_helper.get_current_round_of_contest(contest_id);

//      var round_id = round.round

//    var nextround = await winner_helper.get_qualified(round_id);

// });



module.exports = router;