var express = require("express");
var router = express.Router();
var config = require("../../config");
var logger = config.logger;
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var async = require("async");

var comment_helper = require("../../helpers/comment_helper");
var vote_comment_helper = require("../../helpers/vote_comment_helper");
var artist_helper = require("../../helpers/artist_helper");
var track_helper = require("../../helpers/track_helper");
var user_helper = require("../../helpers/user_helper");
var mail_helper = require("../../helpers/mail_helper");
var notification_helper = require("../../helpers/notification_helper");
var global_helper = require("../../helpers/global_helper");
var socket = require("../../socket/socketServer");

var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var fs = require("fs");

/**
 * @api {post} /user/comment Comment on Track Add
 * @apiName Comment on Track - Add
 * @apiGroup User

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 *
 * @apiParam {String} artist_id User id of user
 * @apiParam {String} track_id Track id of track
 * @apiParam {String} comment Comment of track
 *
 * @apiSuccess (Success 200) {JSON} track details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/", async (req, res) => {
  var schema = {
    artist_id: {
      notEmpty: true,
      errorMessage: "Artist Id is required",
    },
    track_id: {
      notEmpty: true,
      errorMessage: "Track Id is required",
    },
    comment: {
      notEmpty: true,
      errorMessage: "Comment is required",
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      user_id: req.userInfo.id,
      artist_id: req.body.artist_id,
      track_id: req.body.track_id,
      comment: req.body.comment,
    };

    var resp = await user_helper.get_user_by_id(obj.user_id);
    if (resp.user.status == "suspended") {
      logger.trace("you are blocked to comment = ");
      res
        .status(config.OK_STATUS)
        .json({ message: "you are blocked to comment" });
    } else {
      const trackName = await track_helper.get_track_by_id(
        req.body.artist_id,
        req.body.track_id
      );
      console.log(" : trackName ==> ", trackName);
      var notificationObj = {
        sender: req.userInfo.id,
        receiver: req.body.artist_id,
        type: "comment",
        body:
          "Got comment on track " +
          trackName.track.name +
          " from" +
          " " +
          resp.user.first_name,
      };
      var resp_data = await comment_helper.insert_comment_on_artist(obj);
      // var notification_data = await notification_helper.insert_comment_on_artist(notification_obj);
      console.log("socket.user==========>", socket.socketToUsers);

      var notification_data = await global_helper.send_notification(
        notificationObj,
        socket
      );
      // console.log('notification_data', notification_data);

      if (resp_data.status == 0) {
        logger.error("Error occured while fetching music = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
      } else {
        var response = await user_helper.get_user_by_id(obj.user_id);

        var resp = await artist_helper.get_artist_by_id(obj.artist_id);
        if (resp.artist.notification_settings.comment_by_email == true) {
          let mail_resp = await mail_helper.send(
            "notification_comment",
            {
              to: resp.artist.email,
              subject: "Comment from user",
            },
            {
              username: resp.artist.first_name + "\t" + resp.artist.last_name,
              user: response.user.first_name + "\t" + response.user.last_name,
              link:
                "http://34.204.127.137/artist_profile/" +
                resp.artist._id +
                "/comments",
            }
          );
        }

        if (resp.artist.notification_settings.comment_by_sms == true) {
          const accountSid = "AC07190084851dbbe340c260b740a08ced";
          const authToken = "96ae4c1342bee3f471fc54d471dbbe3f";
          const client = require("twilio")(accountSid, authToken);

          client.messages
            .create({
              body:
                "you got comment from" +
                "\t" +
                response.user.first_name +
                "\t" +
                response.user.last_name,
              from: "+12526801944",
              to: "+917405843252",
            })
            .then((message) => console.log(message.sid))
            .done();
        }

        no_comment = resp.artist.no_of_comments + 1;

        var resp_data = await track_helper.update_artist_for_comments(
          obj.artist_id,
          no_comment
        );

        var resp_datas = await comment_helper.get_all_track_by_track_id(
          obj.track_id
        );

        no_vote = resp_datas.track.no_of_comments + 1;
        var resp_data = await comment_helper.update_comment(
          obj.track_id,
          no_vote
        );

        var resp = await user_helper.get_user_by_id(obj.user_id);
        no_comment = resp.user.no_of_comments + 1;
        var resp_data = await user_helper.update_user_for_comments(
          obj.user_id,
          no_comment
        );

        logger.trace("music got successfully = ", resp_data);
        res
          .status(config.OK_STATUS)
          .json({ message: "Comment added Successfully" });
      }
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

/**
 * @api {get} /user/comment Comment by user id - Get
 * @apiName get_all_artist_comment_by_user_id - Get
 * @apiGroup User
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} comment detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/", async (req, res) => {
  user_id = req.userInfo.id;
  logger.trace("Get all Artist API called");
  var resp_data = await comment_helper.get_all_artist_comment_by_user_id(
    user_id
  );
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching Artist = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("Artist got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});

// vote on comment
// router.post('/vote_comment', async (req, res) => {
//   user_id = req.userInfo.id;
//   var schema = {
//     "comment_id": {
//       notEmpty: true,
//       errorMessage: "Comment Id is required"
//     },
//     "status": {
//       notEmpty: true,
//       errorMessage: "status is required"
//     },
//   };
//   req.checkBody(schema);
//   var errors = req.validationErrors();
//   if (!errors) {
//     var obj = {
//       user_id: req.userInfo.id,
//       artist_id: req.body.artist_id,
//       comment_id: req.body.comment_id,
//       status: req.body.status
//     };
//     var data = await vote_comment_helper.upvote_or_down_vote(user_id, obj);
//     if (data && data.vote == 0) {
//       // insert vote
//       var resp_data = await vote_comment_helper.upvote_or_down_vote(user_id, obj);

//       if (resp_data.status == 0) {
//         logger.error("Error occured while voting = ", resp_data);
//         res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
//       } else {
//         var resp_data = await comment_helper.get_all_comment_by_comment_id(obj.comment_id);
//         if (obj.status == "upvote") {
//           no_vote = resp_data.comment[0].no_of_votes + 1;
//           var resp_data = await comment_helper.update_votes(obj.comment_id, no_vote);
//         }
//         else {
//           no_vote = resp_data.comment[0].no_of_votes - 1;
//           var resp_data = await comment_helper.update_votes(obj.comment_id, no_vote);
//         }
//         logger.trace("voting done successfully = ", resp_data);
//         res.status(config.OK_STATUS).json(resp_data);
//       }
//     }
//     else {
//       // Update vote
//       var resp_data = await vote_comment_helper.update_vote_status(user_id, obj.comment_id, obj.status);
//       if (resp_data.status == 0) {
//         logger.error("Error occured while voting = ", resp_data);
//         res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
//       } else {
//         var resp_data = await comment_helper.get_all_comment_by_comment_id(obj.comment_id);
//         if (obj.status == "upvote") {
//           no_vote = resp_data.comment[0].no_of_votes + 2;
//           var resp_data = await comment_helper.update_votes(obj.comment_id, no_vote);
//         }
//         else {
//           no_vote = resp_data.comment[0].no_of_votes - 2;
//           var resp_data = await comment_helper.update_votes(obj.comment_id, no_vote);
//         }
//         logger.trace("voting done successfully = ", resp_data);

//         res.status(config.OK_STATUS).json(resp_data);
//       }
//     }
//   }
//   else {
//     logger.error("Validation Error = ", errors);
//     res.status(config.BAD_REQUEST).json({ message: errors });
//   }
// });

router.post("/upvote", async (req, res) => {
  user_id = req.userInfo.id;
  var schema = {
    comment_id: {
      notEmpty: true,
      errorMessage: "Comment Id is required",
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      user_id: req.userInfo.id,
      comment_id: req.body.comment_id,
      status: "upvote",
    };
    var data = await vote_comment_helper.get_all_voted_user(
      user_id,
      obj.comment_id
    );

    if (data.status == 2) {
      var resp_data = await vote_comment_helper.upvote_or_down_vote(
        user_id,
        obj
      );
      var resp_data = await comment_helper.get_all_comment_by_comment_id(
        obj.comment_id
      );

      no_vote = resp_data.comment[0].no_of_votes + 1;
      var resp_data = await comment_helper.update_votes(
        obj.comment_id,
        no_vote
      );

      if (resp_data.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({
          status: 0,
          message: "Error occured while upvoting",
          error: resp_data.error,
        });
      } else if (resp_data.status === 2) {
        res
          .status(config.BAD_REQUEST)
          .json({ status: 0, message: "Can't upvote" });
      } else {
        res
          .status(config.OK_STATUS)
          .json({ status: 1, message: "Upvoting done" });
      }
    } else {
      if (data.vote.status == "upvote") {
        res.status(config.OK_STATUS).json({ message: "Already upvoted" });
      } else if (data.vote.status == "downvote") {
        no_vote = resp_data.comment[0].no_of_votes + 2;
        var resp_data = await comment_helper.update_votes(
          obj.comment_id,
          no_vote
        );

        var status = "upvote";
        var resp_data = await vote_comment_helper.update_status(
          obj.user_id,
          obj.comment_id,
          status
        );

        res.status(config.OK_STATUS).json({ message: "Upvoting done" });
      }
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

router.post("/downvote", async (req, res) => {
  user_id = req.userInfo.id;
  var schema = {
    comment_id: {
      notEmpty: true,
      errorMessage: "Comment Id is required",
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      user_id: req.userInfo.id,
      comment_id: req.body.comment_id,
      status: "downvote",
    };
    var data = await vote_comment_helper.get_all_voted_user(
      user_id,
      obj.comment_id
    );

    if (data.status == 2) {
      var resp_data = await vote_comment_helper.upvote_or_down_vote(
        user_id,
        obj
      );
      var resp_data = await comment_helper.get_all_comment_by_comment_id(
        obj.comment_id
      );

      no_vote = resp_data.comment[0].no_of_votes - 1;
      var resp_data = await comment_helper.update_votes(
        obj.comment_id,
        no_vote
      );

      if (resp_data.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({
          status: 0,
          message: "Error occured while upvoting",
          error: resp_data.error,
        });
      } else if (resp_data.status === 2) {
        res
          .status(config.BAD_REQUEST)
          .json({ status: 0, message: "Can't upvote" });
      } else {
        res
          .status(config.OK_STATUS)
          .json({ status: 1, message: "downvoting done" });
      }
    } else {
      if (data.vote.status == "downvote") {
        res.status(config.OK_STATUS).json({ message: "Already downvoted" });
      } else if (data.vote.status == "upvote") {
        var resp_data = await comment_helper.get_all_comment_by_comment_id(
          obj.comment_id
        );

        no_vote = resp_data.comment[0].no_of_votes - 2;
        var resp_data = await comment_helper.update_votes(
          obj.comment_id,
          no_vote
        );
        var status = "downvote";
        var resp_data = await vote_comment_helper.update_status(
          obj.user_id,
          obj.comment_id,
          status
        );
        res.status(config.OK_STATUS).json({ message: "Downvoting done" });
      }
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

/**
 * @api {delete} /user/comment/:comment_id Delete Comment
 * @apiName delete_comment
 * @apiGroup User
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {String} success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.delete("/:comment_id", async (req, res) => {
  user_id = req.userInfo.id;
  var del_resp = await comment_helper.delete_comment(
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
    res
      .status(config.OK_STATUS)
      .json({ status: 1, message: "comment has been removed" });
  }
});

module.exports = router;
