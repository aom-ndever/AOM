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
var winner_helper = require('../../helpers/winner_helper');
var participate_helper = require('../../helpers/participate_helper');
var round_helper = require('../../helpers/round_helper');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');
var archiver = require('archiver');
var stripe = require("stripe")("sk_test_FUsMHGCLfkGJmKEbW0aiRATb");

var cron = require('node-cron');



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

    var track_response = await track_helper.get_all_track_by_track_id(obj.track_id);
    artist_id = track_response.track.artist_id._id;

    try {
      var charge = await stripe.charges.create({
        amount: track_response.track.price * 100,
        currency: "usd",
        source: req.body.card_id,
        //source: 'tok_1D2CEMByKlzX7uR6PCR4CuuV',
        description: "Charge for jenny.rosen@example.com"

      });

      var resp_data = await purchase_helper.purchase_track(obj);
      if (resp_data.status == 0) {
        logger.error("Error occured while fetching music = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
      } else {

        var card_resp = await artist_helper.get_account_by_artist_id(artist_id);

        if (card_resp.status == 0) {
          logger.error("Error occured while fetching music = ", resp_data);
          res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
        } else if (card_resp.status == 1) {
          let transfer = await stripe.transfers.create({
            amount: track_response.track.price * 100,
            currency: "usd",
            destination: card_resp.account.account_id
          });


          var obj = {
            "transfer_id": transfer.id,
            "to_account": transfer.destination,
            "amount": transfer.amount,
            "artist_id": artist_id,
            "track_id": obj.track_id,
            "status": "finised"
          }
          var transfer_resp = await artist_helper.insert_transaction(obj);


        } else {
          res.status(config.BAD_REQUEST).json({ "message": "Artist doesn't have bank account" });
        }
        res.status(config.OK_STATUS).json(resp_data);
      }

    } catch (error) {

      res.status(config.INTERNAL_SERVER_ERROR).json({ "message": "invalid token" });
    }
  }
  else {
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
router.post("/purchased", async (req, res) => {
  user_id = req.userInfo.id;
  logger.trace("Get all Artist API called");
  var resp_data = await purchase_helper.get_purchased_track(user_id, req.body.start, req.body.length);
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
    var participate_response = await participate_helper.get_participant_by_track_id(req.body.track_id);
    contest_id = participate_response.participate.contest_id;

    var round_response = await round_helper.get_current_round_of_contest(contest_id);
    if (round_response.status === 1) {

      var obj = {
        user_id: req.userInfo.id,
        track_id: req.body.track_id,
        artist_id: req.body.artist_id,
        round_id: round_response.round._id,
        contest_id: round_response.round.contest_id,
      };

      var data = await vote_track_helper.get_all_voted_artist(user_id, obj.track_id, obj.contest_id, obj.round_id);

      if (data.status == 2) {
        var data = await vote_track_helper.vote_for_track(user_id, obj);
        var resp_data = await track_helper.get_all_track_by_track_id(obj.track_id);
        var no_vote = resp_data.track.no_of_votes + 1;
        resp_data = await track_helper.update_votes(obj.track_id, no_vote);

        var resp_data = await artist_helper.get_artist_by_id(obj.artist_id);
        var no_vote = resp_data.artist.no_of_votes + 1;
        resp_data = await artist_helper.update_artist_votes(obj.artist_id, no_vote);

        resp_data = await winner_helper.get_qualified_contestant(obj.track_id, obj.round_id);

        if (resp_data.status == 2) {
          var object = {
            track_id: req.body.track_id,
            round_id: round_response.round._id,
            votes: [req.userInfo.id]
          }
          var resp = await winner_helper.insert_winner(object);

          return res.send(resp);
        } else if (resp_data.status == 1) {

          var resp_data = await winner_helper.get_qualified_contestant(obj.track_id, obj.round_id);

          var vote = resp_data.winner.votes;
          vote.push(req.userInfo.id);
          let newVote = {
            votes: vote
          }
          resp_data = await winner_helper.update_votes(obj.track_id, obj.round_id, newVote);


        }
        logger.trace("voting done successfully = ", data);
        res.status(config.OK_STATUS).json({ "message": "voting done successfully" });
      }
      else {
        res.status(config.OK_STATUS).json({ "message": "Already Voted" });
      }
    }
    else if (round_response.status === 2) {

      res.status(config.OK_STATUS).json({ "message": "Voting lines are closed for now" });

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
      }
      else
        var resp_data = await track_helper.get_all_track_by_track_id(obj.track_id);
      no_vote = resp_data.track.no_of_likes + 1;
      var resp_data = await track_helper.update_track_for_likes(obj.track_id, no_vote);
      var responses = await artist_helper.get_artist_by_id(obj.artist_id);
      no_like = responses.artist.no_of_likes + 1
      var resp_data = await track_helper.update_artist_for_likes(obj.artist_id, no_like);

      var resp = await user_helper.get_user_by_id(obj.user_id);
      no_like = resp.user.no_of_likes + 1
      var resp_data = await user_helper.update_user_for_likes(obj.user_id, no_like);
      var resp = await artist_helper.get_artist_by_id(obj.artist_id);
      var response = await user_helper.get_user_by_id(user_id);
      if (responses.artist.notification_settings.like_by_email == true) {


        let mail_resp = await mail_helper.send("notification", {
          "to": resp.artist.email,
          "subject": "like from user"
        }, {
            "username": resp.artist.first_name + '\t' + response.user.last_name,
            "user": response.user.first_name + '\t' + resp.artist.last_name,
            // "link": "http://34.204.127.137/artist_profile/" + response.user._id
          });
      }
      if (responses.artist.notification_settings.like_by_sms == true) {
        const accountSid = 'AC07190084851dbbe340c260b740a08ced';
        const authToken = '96ae4c1342bee3f471fc54d471dbbe3f';
        const client = require('twilio')(accountSid, authToken);

        client.messages
          .create({
            body: 'you got like from' + '\t' + response.user.first_name + response.user.last_name,
            from: '+12526801944',
            to: '+917405843252'
          })
          .then(message => console.log(message.sid))
          .done();
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



router.post('/share_track_by_mail', async (req, res) => {

  var resp_data = await track_helper.get_all_track_by_track_id(req.body.track_id);
  var track_name = resp_data.track.name;
  var artist_first_name = resp_data.track.artist_id.first_name;
  var artist_last_name = resp_data.track.artist_id.last_name;

  var obj = {
    track_id: req.body.track_id,
    url: req.body.url,
    email: req.body.email,
  };

  let mail_resp = await mail_helper.send("share", {
    "to": obj.email,
    "subject": "Track sharing"
  }, {
      "artist": artist_first_name + "  " + artist_last_name,
      "track": track_name,
      "url": obj.url
    });

  if (mail_resp.status == 1) {
    res.status(config.OK_STATUS).json({ message: "Track shared successfully" });
  }
  else {
    res.status(config.OK_STATUS).json({ message: "Track sharing failed" });
  }
}
);


router.post('/share_track_by_sms', async (req, res) => {

  var resp_data = await track_helper.get_all_track_by_track_id(req.body.track_id);
  var track_name = resp_data.track.name;
  var artist_first_name = resp_data.track.artist_id.first_name;
  var artist_last_name = resp_data.track.artist_id.last_name;

  var obj = {
    track_id: req.body.track_id,
    url: req.body.url,
    phone_no: req.body.phone_no

  };
  const accountSid = 'AC07190084851dbbe340c260b740a08ced';
  const authToken = '96ae4c1342bee3f471fc54d471dbbe3f';
  const client = require('twilio')(accountSid, authToken);

  try {
    var msg = await client.messages
      .create({
        body: 'Artist: ' + " " + artist_first_name + artist_last_name + '\n' + 'track:' + track_name + '\n' + 'url:' + obj.url,
        from: '+12526801944',
        to: req.body.phone_no
      })
    if (msg) {
      res.status(config.OK_STATUS).json({ message: "Track shared successfully" });
    } else {
      res.status(config.OK_STATUS).json({ message: "Your number is not registered" });
    }
  } catch (error) {
    res.status(config.OK_STATUS).json({ message: "Your number is not registered" });
  }
}
);


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
            archive.finalize();
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

router.get('/:track_id/purchase_track_download', async (req, res) => {
  try {
    var obj = {
      user_id: req.userInfo.id,
      track_id: req.params.track_id,
      artist_id: req.params.artist_id
    }

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
          archive.finalize();
          res.status(200).json({ "status": 1, "filename": filename });

        } else {
          res.status(200).json({ "status": 0, "message": "track not found" });
        }
      }
      else {
        res.status(200).json({ "status": 0, "message": "track not found" });

      }
    }

  } catch (err) {
    res.send(err);
  }
});
module.exports = router;