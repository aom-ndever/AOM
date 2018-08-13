var express = require('express');
var router = express.Router();
var config = require('../config');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var moment = require('moment');

var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
var mail_helper = require('./../helpers/mail_helper');
const saltRounds = 10;
var artist_helper = require('./../helpers/artist_helper');
var user_helper = require('./../helpers/user_helper');
var track_helper = require('./../helpers/track_helper');
var music_helper = require('./../helpers/music_helper');
var round_helper = require('../helpers/comment_helper');
var admin_helper = require('./../helpers/admin_helper');
var media_helper = require('./../helpers/media_helper');
var follower_helper = require('./../helpers/follower_helper');
var comment_helper = require('../helpers/comment_helper');
var state_helper = require('./../helpers/state_helper');
var region_helper = require('./../helpers/region_helper');
var global_helper = require('./../helpers/global_helper');
var contest_helper = require('./../helpers/contest_helper');

/**
 * @api {post} /artist_registration Artist Registration
 * @apiName Artist Registration
 * @apiGroup Root
 * 
 * @apiDescription  Registration request for Artist role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 
 * @apiParam {object} social_media Type of Social Media
 * @apiParam {Array} music_type Type of music
 * @apiParam {String} email Email address
 * @apiParam {String}  password Password
 * @apiParam {String} last_name Last Name
 * @apiParam {String} first_name First Name
 * @apiParam {String} zipcode Zipcode
 * @apiParam {String} gender Gender
 * @apiParam {String} Image image

 * @apiSuccess (Success 200) {String} message Success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/artist_registration', async (req, res) => {
  var schema = {
    "music_type": {
      notEmpty: true,
      errorMessage: "Music Type is required"
    },
    "email": {
      notEmpty: true,
      errorMessage: "Email is required"
    },
    "password": {
      notEmpty: true,
      errorMessage: "password is required"
    },
    "last_name": {
      notEmpty: true,
      errorMessage: "last name is required"
    },
    "first_name": {
      notEmpty: true,
      errorMessage: "first name is required"
    },
    "zipcode": {
      notEmpty: true,
      errorMessage: "zipcode is required"
    },
    "phone_no": {
      notEmpty: true,
      errorMessage: "Phone Number is required"
    }


  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var reg_obj = {
      "email": req.body.email,
      "phone_no": req.body.phone_no,
      "password": req.body.password,
      "first_name": req.body.first_name,
      "last_name": req.body.last_name,
      "zipcode": req.body.zipcode,
      "music_type": req.body.music_type,
      "state": req.body.state,
      "gender": req.body.gender,
      "dob": req.body.dob
    };
    if (req.body.share_url) {
      reg_obj.social_media = JSON.parse(req.body.share_url)
    }
    let artist = await artist_helper.get_artist_by_email(req.body.email)
    if (artist.status === 2) {


      var obj = {}
      //image upload
      var filename;
      if (req.files && req.files["image"]) {
        var file = req.files["image"];
        var dir = "./uploads/artist";
        var mimetype = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

        if (mimetype.indexOf(file.mimetype) != -1) {
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          extention = path.extname(file.name);
          filename = "artist_" + new Date().getTime() + extention;
          file.mv(dir + "/" + filename, function (err) {
            if (err) {
              logger.error("There was an issue in uploading image");
              res.send({
                status: config.MEDIA_ERROR_STATUS,
                err: "There was an issue in uploading image"
              });
            } else {
              logger.trace("image has been uploaded. Image name = ", filename);
              //return res.send(200, "null");
            }
          });
        } else {
          logger.error("Image format is invalid");
          res.send({
            status: config.VALIDATION_FAILURE_STATUS,
            err: "Image format is invalid"
          });
        }
      } else {
        logger.info("Image not available to upload. Executing next instruction");
        //res.send(config.MEDIA_ERROR_STATUS, "No image submitted");
      }
      if (filename) {
        reg_obj.image = filename;
      }

      //End image upload

      var data = await artist_helper.insert_artist(reg_obj);
      var datas = await artist_helper.insert_notification(obj);

      if (data.status == 0) {
        logger.debug("Error = ", data.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(data);
      } else {
        logger.trace("Artist has been inserted");

        logger.trace("sending mail");
        let mail_resp = await mail_helper.send("email_confirmation", {
          "to": data.artist.email,
          "subject": "Music Social Voting - Email confirmation"
        }, {
            "confirm_url": config.website_url + "/email_confirm/artist/" + data.artist._id
          });

        if (mail_resp.status === 0) {
          res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending confirmation email", "error": mail_resp.error });
        } else {
          res.status(config.OK_STATUS).json({ "status": 1, "message": "Artist registered successfully" });
        }
      }
    } else {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Artist's email already exist" });
    }


  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});



//facebook registration
router.post('/user_registration_facebook', async (req, res) => {
  var schema = {
    "email": {
      notEmpty: true,
      errorMessage: "Email is required"
    },
    "id": {
      notEmpty: true,
      errorMessage: "social id is required"
    },
    "name": {
      notEmpty: true,
      errorMessage: "first name is required"
    },
    "provider": {
      notEmpty: true,
      errorMessage: "provider is required"
    },
    "token": {
      notEmpty: true,
      errorMessage: "token is required"
    }

  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      "email": req.body.email,
      "social_id": req.body.id,
      "first_name": req.body.name,
      "provider": req.body.provider,
      "facebook_token": req.body.token,
      "image": req.body.image
    };

    user = await user_helper.get_user_by_email(req.body.email)
    if (user.status === 2) {

      var data = await user_helper.insert_user(obj);

      if (data.status == 0) {
        logger.trace("Error occured while inserting user - User Signup API");
        logger.debug("Error = ", data.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(data);
      } else {
        logger.trace("User has been inserted");
        // Send email confirmation mail to user
        logger.trace("sending mail");
        let mail_resp = await mail_helper.send("email_confirmation", {
          "to": data.user.email,
          "subject": "Music Social Voting - Email confirmation"
        }, {
            "confirm_url": config.website_url + "/email_confirm/user/" + data.user._id
          });
        if (mail_resp.status === 0) {
          res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending confirmation email", "error": mail_resp.error });
        } else {
          res.status(config.OK_STATUS).json({ "status": 1, "message": "User login successfully done", "user": data.user });
        }
      }
    } else {
      let login_resp = await user_helper.get_login_by_email(req.body.email);

      var refreshToken = jwt.sign({ id: login_resp.user._id }, config.REFRESH_TOKEN_SECRET_KEY, {});

      let update_resp = await user_helper.update_user_by_id(login_resp.user._id, { "refresh_token": refreshToken, "last_login": Date.now() });

      var LoginJson = { id: login_resp.user._id, email: login_resp.email, role: "user" };

      var token = jwt.sign(LoginJson, config.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: config.ACCESS_TOKEN_EXPIRE_TIME
      });

      delete login_resp.user.status;
      delete login_resp.user.password;
      delete login_resp.user.refresh_token;

      delete login_resp.user.last_login_date;
      delete login_resp.user.created_at;

      logger.info("Token generated");
      res.status(config.OK_STATUS).json({ "status": 1, "message": "Logged in successful", "user": login_resp.user, "token": token, "refresh_token": refreshToken });
    }


  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});



//gmail registration
router.post('/user_registration_gmail', async (req, res) => {
  var schema = {
    "U3": {
      notEmpty: true,
      errorMessage: "Email is required"
    },
    "Eea": {
      notEmpty: true,
      errorMessage: "social id is required"
    },
    "ofa": {
      notEmpty: true,
      errorMessage: "first name is required"
    },
    "wea": {
      notEmpty: true,
      errorMessage: "last name is required"
    },
    "token": {
      notEmpty: true,
      errorMessage: "token is required"
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var obj = {
      "email": req.body.U3,
      "social_id": req.body.Eea,
      "first_name": req.body.ofa,
      "last_name": req.body.wea,
      "gmail_token": req.body.token,
      "image": req.body.image
    };

    var user = await user_helper.get_user_by_email(req.body.U3);


    if (user.status === 2) {

      var data = await user_helper.insert_user(obj);

      if (data.status == 0) {
        logger.trace("Error occured while inserting user - User Signup API");
        logger.debug("Error = ", data.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(data);
      } else {
        logger.trace("User has been inserted");
        // Send email confirmation mail to user
        logger.trace("sending mail");
        let mail_resp = await mail_helper.send("email_confirmation", {
          "to": data.user.email,
          "subject": "Music Social Voting - Email confirmation"
        }, {
            "confirm_url": config.website_url + "/email_confirm/user/" + data.user._id
          });
        if (mail_resp.status === 0) {
          res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending confirmation email", "error": mail_resp.error });
        } else {
          res.status(config.OK_STATUS).json({ "status": 1, "message": "User login successfully done", "user": user });
        }
      }
    } else {
      let login_resp = await user_helper.get_login_by_email(req.body.U3);


      var refreshToken = jwt.sign({ id: login_resp.user._id }, config.REFRESH_TOKEN_SECRET_KEY, {});

      let update_resp = await user_helper.update_user_by_id(login_resp.user._id, { "refresh_token": refreshToken, "last_login": Date.now() });

      var LoginJson = { id: login_resp.user._id, email: login_resp.email, role: "user" };

      var token = jwt.sign(LoginJson, config.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: config.ACCESS_TOKEN_EXPIRE_TIME
      });

      delete login_resp.user.status;
      delete login_resp.user.password;
      delete login_resp.user.refresh_token;

      delete login_resp.user.last_login_date;
      delete login_resp.user.created_at;

      logger.info("Token generated");
      res.status(config.OK_STATUS).json({ "status": 1, "message": "Logged in successful", "user": login_resp.user, "token": token, "refresh_token": refreshToken });
    }


  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

/**
 * @api {get} /artist_email_verify/:artist_id Artist email verification
 * @apiName Artist email verification
 * @apiGroup Root
 * 
 * @apiDescription  Email verification request for artist
 * 
 * @apiSuccess (Success 200) {String} message Success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get('/artist_email_verify/:artist_id', async (req, res) => {

  logger.debug("req.body = ", req.body);

  var artist_resp = await artist_helper.get_artist_by_id(req.params.artist_id);
  if (artist_resp.status === 0) {
    logger.error("Error occured while finding artist by id - ", req.params.artist_id, artist_resp.error);
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error has occured while finding artist" });
  } else if (artist_resp.status === 2) {
    logger.trace("Artist not found in artist email verify API");
    res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid token entered" });
  } else {
    if (artist_resp.artist.email_verified) {
      // Email already verified
      logger.trace("artist already verified");
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Email already verified" });
    } else {
      // Verify email
      logger.trace("Valid request for email verification - ", artist_resp.artist._id);

      var update_resp = await artist_helper.update_artist_by_id(artist_resp.artist._id, { "email_verified": true, "status": true });
      if (update_resp.status === 0) {
        logger.trace("Error occured while updating artist : ", update_resp.error);
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while verifying artist's email" });
      } else if (update_resp.status === 2) {
        logger.trace("Artist has not updated");
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Error occured while verifying artist's email" });
      } else {
        // Email verified!
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Email has been verified" });
      }
    }
  }
});


/**
 * @api {post} /artist_login Artist Login
 * @apiName Artist Login
 * @apiGroup Root
 * 
 * @apiDescription  Login request for artist role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} email Email 
 * @apiParam {String} password Password
 * 
 * @apiSuccess (Success 200) {JSON} artist Artist object.
 * @apiSuccess (Success 200) {String} token Unique token which needs to be passed in subsequent requests.
 * @apiSuccess (Success 200) {String} refresh_token Unique token which needs to be passed to generate next access token.
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/artist_login', async (req, res) => {

  logger.trace("API - artist login called");
  logger.debug("req.body = ", req.body);

  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" }
    },


  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    if (req.body.type == 'artist') {

      let login_resp = await artist_helper.get_login_by_email(req.body.email);

      logger.trace("Login checked resp = ", login_resp);
      if (login_resp.status === 0) {
        logger.trace("Login checked resp = ", login_resp);
        logger.error("Error in finding by email in login API. Err = ", login_resp.err);

        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Something went wrong while finding artist", "error": login_resp.error });
      } else if (login_resp.status === 1) {
        logger.trace("Artist found. Executing next instruction");
        logger.trace("valid token. Generating token");
        if (login_resp.artist.flag == false) {
          if (bcrypt.compareSync(req.body.password, login_resp.artist.password) && req.body.email == login_resp.artist.email) {

            if (login_resp.artist.email_verified) {

              var refreshToken = jwt.sign({ id: login_resp.artist._id }, config.REFRESH_TOKEN_SECRET_KEY, {});
              let update_resp = await artist_helper.update_artist_by_id(login_resp.artist._id, { "refresh_token": refreshToken, "last_login": Date.now() });
              var LoginJson = { id: login_resp.artist._id, email: login_resp.email, role: "artist" };
              var token = jwt.sign(LoginJson, config.ACCESS_TOKEN_SECRET_KEY, {
                expiresIn: config.ACCESS_TOKEN_EXPIRE_TIME
              });
              delete login_resp.artist.status;
              delete login_resp.artist.password;
              delete login_resp.artist.refresh_token;
              delete login_resp.artist.last_login_date;
              delete login_resp.artist.created_at;

              logger.info("Token generated");
              res.status(config.OK_STATUS).json({ "status": 1, "message": "Logged in successful", "artist": login_resp.artist, "token": token, "refresh_token": refreshToken });
            }
            else {
              res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Email not verified" });
            }
          }
          else {
            res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid email address or password" });
          }


        } else {
          res.status(config.BAD_REQUEST).json({ message: "You Are Flagged By Admin" });

        }
      } else {

        res.status(config.BAD_REQUEST).json({ message: "You are not of this type" });
      }
    }
    else {

      res.status(config.BAD_REQUEST).json({ message: "You are not of this type" });
    }
  }
  else {

    res.status(config.BAD_REQUEST).json({ message: "invalid email" });
  }
});



/**
 * @api {post} /user_registration User Registration
 * @apiName User Registration
 * @apiGroup Root
 * 
 * @apiDescription  Registration request for User role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 

 * @apiParam {Array} music_type Type of music
 * @apiParam {String} email Email address
 * @apiParam {String}  password Password
 * @apiParam {String} last_name Last Name
 * @apiParam {String} first_name First Name
 * @apiParam {String} zipcode Zipcode
 * @apiParam {String} gender Gender

 * 
 * @apiSuccess (Success 200) {String} message Success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/user_registration', async (req, res) => {

  logger.trace("API - artist signup called");
  logger.debug("req.body = ", req.body);
  var schema = {

    "music_type": {
      notEmpty: true,
      errorMessage: "Music Type is required"
    },
    "email": {
      notEmpty: true,
      errorMessage: "Email is required"
    },
    "password": {
      notEmpty: true,
      errorMessage: "password is required"
    },
    "last_name": {
      notEmpty: true,
      errorMessage: "last name is required"
    },
    "first_name": {
      notEmpty: true,
      errorMessage: "first name is required"
    },
    "zipcode": {
      notEmpty: true,
      errorMessage: "zipcode is required"
    },
    "dob": {
      notEmpty: true,
      errorMessage: "DOB is required"
    },
    "gender": {
      notEmpty: true,
      errorMessage: "DOB is required"
    },


  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {

    var obj = {
      "email": req.body.email,
      "password": req.body.password,
      "first_name": req.body.first_name,
      "last_name": req.body.last_name,
      "zipcode": req.body.zipcode,
      "music_type": req.body.music_type,
      "dob": req.body.dob,
      "gender": req.body.gender,
      "state": req.body.state,
      "phone_no": req.body.phone_no,
    };
    if (req.body.share_url) {
      obj.social_media = JSON.parse(req.body.share_url)
    }
    user = await user_helper.get_user_by_email(req.body.email)
    if (user.status === 2) {

      var data = await user_helper.insert_user(obj);

      if (data.status == 0) {
        logger.trace("Error occured while inserting user - User Signup API");
        logger.debug("Error = ", data.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(data);
      } else {
        logger.trace("User has been inserted");
        // Send email confirmation mail to user
        logger.trace("sending mail");
        let mail_resp = await mail_helper.send("email_confirmation", {
          "to": data.user.email,
          "subject": "Music Social Voting - Email confirmation"
        }, {
            "confirm_url": config.website_url + "/email_confirm/user/" + data.user._id
          });
        if (mail_resp.status === 0) {
          res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending confirmation email", "error": mail_resp.error });
        } else {
          res.status(config.OK_STATUS).json({ "status": 1, "message": "User registered successfully" });
        }
      }
    } else {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "User's email already exist" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


/**
 * @api {get} /user_email_verify/:user_id User email verification
 * @apiName User email verification
 * @apiGroup Root
 * 
 * @apiDescription  Email verification request for user
 * 
 * @apiSuccess (Success 200) {String} message Success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get('/user_email_verify/:user_id', async (req, res) => {
  var user_resp = await user_helper.get_user_by_id(req.params.user_id);
  if (user_resp.status === 0) {
    logger.error("Error occured while finding user by id - ", req.params.user_id, user_resp.error);
    res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error has occured while finding user" });
  } else if (user_resp.status === 2) {
    logger.trace("User not found in user email verify API");
    res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid token entered" });
  } else {
    // artist available
    if (user_resp.user.email_verified) {
      // Email already verified
      logger.trace("user already verified");
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "F" });
    } else {
      // Verify email
      logger.trace("Valid request for email verification - ", user_resp.user._id);
      var update_resp = await user_helper.update_user_by_id(user_resp.user._id, { "email_verified": true, "status": true });
      if (update_resp.status === 0) {
        logger.trace("Error occured while updating artist : ", update_resp.error);
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while verifying user's email" });
      } else if (update_resp.status === 2) {
        logger.trace("Artist has not updated");
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Error occured while verifying user's email" });
      } else {
        // Email verified!
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Email has been verified" });
      }
    }
  }
});


/**
 * @api {post} /user_login User Login
 * @apiName User Login
 * @apiGroup Root
 * 
 * @apiDescription  Login request for user role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} email Email 
 * @apiParam {String} password Password
 * 
 * @apiSuccess (Success 200) {JSON} user User object.
 * @apiSuccess (Success 200) {String} token Unique token which needs to be passed in subsequent requests.
 * @apiSuccess (Success 200) {String} refresh_token Unique token which needs to be passed to generate next access token.
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/user_login', async (req, res) => {
  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" }
    },
    'password': {
      notEmpty: true,
      errorMessage: "password is required."
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    if (req.body.type == 'listener') {

      let login_resp = await user_helper.get_login_by_email(req.body.email);

      logger.trace("Login checked resp = ", login_resp);
      if (login_resp.status === 0) {
        logger.trace("Login checked resp = ", login_resp);
        logger.error("Error in finding by email in login API. Err = ", login_resp.err);

        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Something went wrong while finding user", "error": login_resp.error });
      } else if (login_resp.status === 1) {
        logger.trace("Artist found. Executing next instruction");
        logger.trace("valid token. Generating token");
        if (login_resp.user.flag == false) {
          if (bcrypt.compareSync(req.body.password, login_resp.user.password) && req.body.email == login_resp.user.email) {

            if (login_resp.user.email_verified) {

              var refreshToken = jwt.sign({ id: login_resp.user._id }, config.REFRESH_TOKEN_SECRET_KEY, {});
              let update_resp = await user_helper.update_user_by_id(login_resp.user._id, { "refresh_token": refreshToken, "last_login": Date.now() });
              var LoginJson = { id: login_resp.user._id, email: login_resp.email, role: "user" };
              var token = jwt.sign(LoginJson, config.ACCESS_TOKEN_SECRET_KEY, {
                expiresIn: config.ACCESS_TOKEN_EXPIRE_TIME
              });
              delete login_resp.user.status;
              delete login_resp.user.password;
              delete login_resp.user.refresh_token;
              delete login_resp.user.last_login_date;
              delete login_resp.user.created_at;

              logger.info("Token generated");
              res.status(config.OK_STATUS).json({ "status": 1, "message": "Logged in successful", "user": login_resp.user, "token": token, "refresh_token": refreshToken });
            }
            else {
              res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Email not verified" });
            }
          }
          else {
            res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid email address or password" });
          }


        } else {
          res.status(config.BAD_REQUEST).json({ message: "You Are Flagged By Admin" });

        }
      } else {

        res.status(config.BAD_REQUEST).json({ message: "You are not of this type" });
      }
    }
    else {

      res.status(config.BAD_REQUEST).json({ message: "You are not of this type" });
    }
  }
  else {

    res.status(config.BAD_REQUEST).json({ message: "invalid email" });
  }
});



/**
 * @api {post} /artist_forgot_password Artist forgot password
 * @apiName Artist forgot password
 * @apiGroup Root
 * 
 * @apiDescription   Forgot password request for artist role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} email Email
 * 
 * @apiSuccess (Success 200) {String} message Appropriate success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/artist_forgot_password', async (req, res) => {
  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" }
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var resp = await artist_helper.get_artist_by_email(req.body.email);
    if (resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error while finding artist" });
    } else if (resp.status === 2) {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "email doesn't exist" });
    } else {
      // Send mail on user's email address
      var reset_token = Buffer.from(jwt.sign({ "artist_id": resp.artist._id }, config.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 2 // expires in 2 hour
      })).toString('base64');

      let mail_resp = await mail_helper.send("reset_password", {
        "to": resp.artist.email,
        "subject": "Music Social Voting"
      }, {
          "reset_link": config.website_url + "/forgot_password/artist/" + reset_token
        });

      if (mail_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending mail to artist", "error": mail_resp.error });
      } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Reset link has been sent on your email address" });
      }
    }
  } else {
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


/**
 * @api {post} /artist_reset_password Artist reset password
 * @apiName Artist reset password
 * @apiGroup Root
 * 
 * @apiDescription   Reset password request for artist role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} token Reset password token
 * @apiParam {String} password New password
 * 
 * @apiSuccess (Success 200) {String} message Appropriate success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/artist_reset_password', async (req, res) => {
  var schema = {
    'token': {
      notEmpty: true,
      errorMessage: "Reset password token is required."
    },
    'password': {
      notEmpty: true,
      errorMessage: "Password is required."
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {

    logger.trace("Verifying JWT");
    jwt.verify(Buffer.from(req.body.token, 'base64').toString(), config.ACCESS_TOKEN_SECRET_KEY, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          logger.trace("Link has expired");
          res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Link has been expired" });
        } else {
          logger.trace("Invalid link");
          res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid token sent" });
        }
      } else {
        var reset_resp = await artist_helper.get_artist_by_id(decoded.artist_id);

        if (reset_resp.artist.reset == 1) {
          if (decoded.artist_id) {
            var update_resp = await artist_helper.update_artist_by_id(decoded.artist_id, { "password": bcrypt.hashSync(req.body.password, saltRounds) });
            if (update_resp.status === 0) {
              logger.trace("Error occured while updating artist : ", update_resp.error);
              res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while verifying artist's email" });
            } else if (update_resp.status === 2) {
              logger.trace("artist has not updated");
              res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Error occured while reseting password of artist" });
            } else {

              logger.trace("Password has been changed for artist - ", decoded.artist_id);
              res.status(config.OK_STATUS).json({ "status": 1, "message": "Password has been changed" });
            }
          } else {
          }
        }
        else {
          res.status(config.BAD_REQUEST).json({ message: "Your link has expired" });
        }
      }
    });
  } else {
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


/**
 * @api {post} /user_forgot_password User forgot password
 * @apiName User forgot password
 * @apiGroup Root
 * 
 * @apiDescription   Forgot password request for user role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} email Email
 * 
 * @apiSuccess (Success 200) {String} message Appropriate success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/user_forgot_password', async (req, res) => {
  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" }
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var resp = await user_helper.get_user_by_email(req.body.email);
    if (resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error while finding user" });
    } else if (resp.status === 2) {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "No user available with given email" });
    } else {
      // Send mail on user's email address
      var reset_token = Buffer.from(jwt.sign({ "user_id": resp.user._id }, config.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 2 // expires in 2 hour
      })).toString('base64');

      let mail_resp = await mail_helper.send("reset_password", {
        "to": resp.user.email,
        "subject": "Music Social Voting"
      }, {
          "reset_link": config.website_url + "/forgot_password/user/" + reset_token
        });

      if (mail_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending mail to user", "error": mail_resp.error });
      } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Reset link has been sent on your email address" });
      }
    }
  } else {
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});



/**
 * @api {post} /user_reset_password User reset password
 * @apiName User reset password
 * @apiGroup Root
 * 
 * @apiDescription   Reset password request for user role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} token Reset password token
 * @apiParam {String} password New password
 * 
 * @apiSuccess (Success 200) {String} message Appropriate success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/user_reset_password', async (req, res) => {
  var schema = {
    'token': {
      notEmpty: true,
      errorMessage: "Reset password token is required."
    },
    'password': {
      notEmpty: true,
      errorMessage: "Password is required."
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {

    logger.trace("Verifying JWT");
    jwt.verify(Buffer.from(req.body.token, 'base64').toString(), config.ACCESS_TOKEN_SECRET_KEY, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          logger.trace("Link has expired");
          res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Link has been expired" });
        } else {
          logger.trace("Invalid link");
          res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid token sent" });
        }
      } else {
        logger.trace("Valid token. Reseting password for artist");
        var reset_resp = await user_helper.get_user_by_id(decoded.user_id);

        if (reset_resp.user.reset == 1) {
          if (decoded.user_id) {
            var update_resp = await user_helper.update_user_by_id(decoded.user_id, { "password": bcrypt.hashSync(req.body.password, saltRounds) });
            if (update_resp.status === 0) {
              logger.trace("Error occured while updating artist : ", update_resp.error);
              res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while verifying user_id's email" });
            } else if (update_resp.status === 2) {
              logger.trace("artist has not updated");
              res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Error occured while reseting password of user" });
            } else {
              // Password reset!
              logger.trace("Password has been changed for artist - ", decoded.user_id);
              res.status(config.OK_STATUS).json({ "status": 1, "message": "Password has been changed" });
            }
          } else {

          }
        }
        else {
          res.status(config.BAD_REQUEST).json({ message: "Your link has expired" });
        }
      }
    });
  } else {
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});





/**
 * @api {post} /artist_by_filter Get all artist
 * @apiName Get all artist
 * @apiGroup Root
 * @apiParam {Number} page_no Page Number
 * @apiParam {Number} page_size Page Size
 * @apiParam {String} social_media Social Media for filter
 * @apiParam {String} music_type Music Type for filter
 * @apiParam {String} first_name First Name for filter
 * @apiParam {String} first_name Last Name for filter
 * @apiSuccess (Success 200) {Array} artist Array of artist document
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/artist_by_filter", async (req, res) => {
  var filter = {};
  var page_no = {};
  var page_size = {};

  var schema = {
    "page_no": {
      notEmpty: true,
      errorMessage: "page_no is required"
    },
    "page_size": {
      notEmpty: true,
      errorMessage: "page_size is required"
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();

  if (req.body.social_media) {
    filter.social_media = req.body.social_media;
  }
  if (req.body.first_name) {
    filter.first_name = req.body.first_name;
  }
  if (req.body.last_name) {
    filter.last_name = req.body.last_name;
  }
  if (req.body.music_type) {
    filter.music_type = new ObjectId(req.body.music_type);
  }
  if (req.body.gender) {
    filter.gender = req.body.gender;
  }
  if (!errors) {
    var resp_data = await artist_helper.get_all_artist(filter, req.body.page_no, req.body.page_size);
    if (resp_data.status == 0) {
      logger.error("Error occured while fetching artist = ", resp_data);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
      logger.trace("artist got successfully = ", resp_data);
      res.status(config.OK_STATUS).json(resp_data);
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});



/**
 * @api {post} /musics Get all tracks
 * @apiName Get all tracks
 * @apiGroup Root
 * @apiParam {Number} page_no Page Number
 * @apiParam {Number} page_size Page Size
 * @apiParam {String} music_type Music Type for filter
 * @apiParam {String} artist_id Artist Id for filter
 * @apiParam {String} name Track Name for filter
 * @apiSuccess (Success 200) {Array} tracks Array of tracks document
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/musics", async (req, res) => {
  var filter = {};
  var page_no = {};
  var page_size = {};

  var schema = {
    "page_no": {
      notEmpty: true,
      errorMessage: "page_no is required"
    },
    "page_size": {
      notEmpty: true,
      errorMessage: "page_size is required"
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();

  if (req.body.music_type) {
    filter.music_type = new ObjectId(req.body.music_type);
  }
  if (req.body.artist_id) {
    filter.artist_id = new ObjectId(req.body.artist_id);
  }
  if (req.body.name) {
    filter.name = req.body.name;
  }
  if (!errors) {
    var resp_data = await track_helper.get_all_audio(filter, req.body.page_no, req.body.page_size);
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
 * @api {post} /login Admin Login
 * @apiName Admin Login
 * @apiGroup Root
 * 
 * @apiDescription  Login request for admin role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} email Email 
 * @apiParam {String} password Password
 * 
 * @apiSuccess (Success 200) {JSON}  admin object.
 * @apiSuccess (Success 200) {String} token Unique token which needs to be passed in subsequent requests.
 * @apiSuccess (Success 200) {String} refresh_token Unique token which needs to be passed to generate next access token.
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/admin_login', async (req, res) => {
  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",

    },
    'password': {
      notEmpty: true,
      errorMessage: "password is required."
    },

  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {

    let login_resp = await admin_helper.get_login_by_email(req.body.email, req.body.password);
    if (login_resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Something went wrong while finding admin", "error": login_resp.error });
    } else if (login_resp.status === 1) {
      logger.trace("Admin found. Executing next instruction");
      logger.trace("valid token. Generating token");
      if (login_resp.admin.status == "active") {

        var refreshToken = jwt.sign({ id: login_resp.admin._id }, config.REFRESH_TOKEN_SECRET_KEY, {});
        let update_resp = await admin_helper.update_admin_by_id(login_resp.admin._id, { "refresh_token": refreshToken, "last_login_date": Date.now() });
        var LoginJson = { id: login_resp.admin._id, email: login_resp.email, role: "admin" };
        var token = jwt.sign(LoginJson, config.ACCESS_TOKEN_SECRET_KEY, {
          expiresIn: config.ACCESS_TOKEN_EXPIRE_TIME
        });


        delete login_resp.admin.status;
        delete login_resp.admin.password;
        delete login_resp.admin.refresh_token;
        delete login_resp.admin.last_login_date;
        delete login_resp.admin.created_at;

        logger.info("Token generated");
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Logged in successful", "admin": login_resp.admin, "token": token, "refresh_token": refreshToken });
      }
      else {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "You are flagged by Super Admin" });
      }
    }

    else {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid email address or token" });
    }

  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});



/**
 * @api {post} /admin_forgot_password Admin forgot password
 * @apiName Admin forgot password
 * @apiGroup Root
 * 
 * @apiDescription   Forgot password request for admin role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} email Email
 * 
 * @apiSuccess (Success 200) {String} message Appropriate success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/admin_forgot_password', async (req, res) => {
  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" }
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var resp = await admin_helper.get_admin_by_email(req.body.email);
    if (resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error while finding admin" });
    } else if (resp.status === 2) {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "No admin available with given email" });
    } else {
      var reset_token = Buffer.from(jwt.sign({ "admin_id": resp.admin._id }, config.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 2 // expires in 2 hour
      })).toString('base64');

      // for reseting the value as 0 
      let reset_response = await admin_helper.update_admin_reset(resp.admin._id, 1)


      let mail_resp = await mail_helper.send("reset_password", {
        "to": resp.admin.email,
        "subject": "Music Social Voting"
      }, {
          "reset_link": config.website_url + "/forgot_password/admin/" + reset_token
        });

      if (mail_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending mail to admin", "error": mail_resp.error });
      } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Reset link has been sent on your email address" });
      }
    }
  } else {
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


/**
 * @api {post} /admin_reset_password Admin reset password
 * @apiName Admin reset password
 * @apiGroup Root
 * 
 * @apiDescription   Reset password request for admin role
 * 
 * @apiHeader {String}  Content-Type application/json
 * 
 * @apiParam {String} token Reset password token
 * @apiParam {String} password New password
 * 
 * @apiSuccess (Success 200) {String} message Appropriate success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/admin_reset_password', async (req, res) => {

  var schema = {
    'token': {
      notEmpty: true,
      errorMessage: "Reset password token is required."
    },
    'password': {
      notEmpty: true,
      errorMessage: "Password is required."
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {

    logger.trace("Verifying JWT");
    jwt.verify(Buffer.from(req.body.token, 'base64').toString(), config.ACCESS_TOKEN_SECRET_KEY, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          logger.trace("Link has expired");
          res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Link has been expired" });
        } else {
          logger.trace("Invalid link");
          res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid token sent" });
        }
      } else {
        logger.trace("Valid token. Reseting password for artist");
        var reset_resp = await admin_helper.get_admin_by_id(decoded.admin_id);

        if (reset_resp.admin.reset == 1) {
          if (decoded.admin_id) {
            var update_resp = await admin_helper.update_admin_by_id(decoded.admin_id, { "password": req.body.password });
            if (update_resp.status === 0) {
              logger.trace("Error occured while updating admin : ", update_resp.error);
              res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while verifying admin_id's email" });
            } else if (update_resp.status === 2) {
              logger.trace("admin has not updated");
              res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Error occured while reseting password of admin" });
            } else {
              let reset_response = await admin_helper.update_admin_reset(decoded.admin_id, 0)
              logger.trace("Password has been changed for admin - ", decoded.admin_id);
              res.status(config.OK_STATUS).json({ "status": 1, "message": "Password has been changed" });
            }
          } else {

          }
        }
        else {
          res.status(config.BAD_REQUEST).json({ message: "Your link has expired" });
        }
      }
    });
  } else {
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});


/**
 * @api {get} /music_type Music Type detail - Get 
 * @apiName Get All music Type - Get
 * @apiGroup Root
 *
 *
 * @apiSuccess (Success 200) {Array} bookmark detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/music_type", async (req, res) => {
  var resp_data = await music_helper.get_all_music_type();
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching music = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("Music got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});


router.get("/region", async (req, res) => {
  var resp_data = await region_helper.get_all_region();
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching region = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("region got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});

router.post("/state_by_region", async (req, res) => {
  region = req.body.region
  var resp_data = await state_helper.get_all_state_by_region(region);
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching State = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("State got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});

router.post("/state", async (req, res) => {
  var resp_data = await state_helper.get_all_state();
  if (resp_data.status == 0) {
    logger.error("Error occured while fetching State = ", resp_data);
    res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
  } else {
    logger.trace("State got successfully = ", resp_data);
    res.status(config.OK_STATUS).json(resp_data);
  }
});

/**
 * @api {post} /whatsnew Artist detail By Filter - Get 
 * @apiName Artist detail By Filter - Get
 * @apiGroup Root
 *
 * @apiSuccess (Success 200) {Array} bookmark detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */router.post("/whatsnew", async (req, res) => {
  var filter = {};


  var schema = {
    /* "page_no": {
       notEmpty: true,
       errorMessage: "page_no is required"
     },
     "page_size": {
       notEmpty: true,
       errorMessage: "page_size is required"
     }*/
  };
  if (req.body.filter) {
    req.body.filter.forEach(filter_criteria => {
      filter[filter_criteria.field] = filter_criteria.value;
    });
  }
  if (req.body.music_type) {
    filter.music_type = new ObjectId(req.body.music_type);
  }
  if (req.body.location) {
    filter.location = req.body.location;
  }
  if (req.body.search) {
    var r = new RegExp(req.body.search);
    var search = { "$regex": r, "$options": "i" };
    filter.first_name = search;
  }
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var artist_ids = [];
    var resp_artist = await artist_helper.get_artist_by_filter(filter, req.body.start, req.body.length);

    if (resp_artist.status == 1) {
      resp_artist.artist.forEach(artist => {
        artist_ids.push(new ObjectId(artist._id));

      });
      var resp_track = await track_helper.get_track_by_filter(artist_ids, filter, req.body.start, req.body.length);
      if (resp_track.status == 0 && resp_artist.status == 0) {
        logger.error("Error occured while fetching users = ", resp_track);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_track);
      } else {
        logger.trace("music got successfully = ");
        res.status(config.OK_STATUS).json({ "status": 1, "track": resp_track.track, "artist": resp_artist.artist });
      }
    }
    else {
      res.status(config.OK_STATUS).json({ "status": 2, "message": "No record found" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }

});



/**
 * @api {post} /mainpage Track detail - Get 
 * @apiName Track - Get
 * @apiGroup Root
 *
 *
 * @apiSuccess (Success 200) {Array} Track detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/mainpage", async (req, res) => {
  var filter = {};
  var filters = {};
  var page_no = {};
  var page_size = {};

  var schema = {};
  if (req.body.music_type) {
    filters["music_type._id"] = new ObjectId(req.body.music_type);
  }

  if (req.body.search) {
    var r = new RegExp(req.body.search);
    var search = { "$regex": r, "$options": "i" };
  }
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var artist_ids = [];
    var resp_artist = await track_helper.get_track_main(search, filters);

    var resp_track = await track_helper.get_new_uploads(30, req.body.start, req.body.length);
    if (resp_track.status == 0 && resp_artist.status == 0) {
      logger.error("Error occured while fetching users = ", resp_track);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp_track);
    } else {
      logger.trace("music got successfully = ");
      res.status(config.OK_STATUS).json({ "status": 1, "finalist": resp_artist.results, "new_uploads": resp_track.results });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({
      message:
        errors
    });
  }
});


router.post("/artistv1", async (req, res) => {
  var filter_for_risingstar = {};
  var filter_for_charttoppers = {
  };


  var filter = {};
  var page_no = {};
  var page_size = {};

  if (req.body.filter) {
    req.body.filter.forEach(filter_criteria => {
      filter[filter_criteria.field] = filter_criteria.value;
    });
  }
  var schema = {};
  if (req.body.music_type) {
    filter_for_risingstar.music_type = {
      _id: new ObjectId(req.body.music_type)
    }

    filter_for_charttoppers["music_type._id"] = new ObjectId(req.body.music_type)

  }
  if (req.body.search) {
    var r = new RegExp(req.body.search);
    var search = { "$regex": r, "$options": "i" };
    filter_for_risingstar.first_name = search;
    filter_for_charttoppers.first_name = search;
  }




  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var artist_ids = [];
    var to = moment().utcOffset(0);
    var from = moment(to).subtract(30, "days").utcOffset(0);
    filter_for_risingstar.created_at = { "$gt": new Date(from), "$lt": new Date(to) };

    var resp_artist = await artist_helper.get_new_uploads(filter);

    //var resp_track = await artist_helper.get_artist_by_id(filter);
    var resp_chart = await artist_helper.get_all_artist();

    if (resp_artist.status == 0 && resp_chart.status == 0) {
      logger.error("Error occured while fetching users = ", resp_artist);
      res.status(config.INTERNAL_SERVER_ERROR).json(resp_artist);
    } else {
      logger.trace("artist got successfully = ");
      res.status(config.OK_STATUS).json({ "status": 1, "rising_stars": resp_artist.results, "chart_toppers": resp_chart.artist });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

/**
 * @api {post} /get_media Media detail - Get 
 * @apiName Media - Get
 * @apiGroup Root
 *
 *
 * @apiSuccess (Success 200) {Array} Media detail as per artist id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/get_media', async (req, res) => {
  artist_id = req.body.artist_id
  var media = await media_helper.get_all_media_of_artist(artist_id);
  if (media.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "media": media.media });
  } else {
    logger.error("Error occured while fetching = ", media);
    res.status(config.INTERNAL_SERVER_ERROR).json(media);
  }
});



/**
 * @api {post} /get_track Track detail by Artist id- Get 
 * @apiName Track detail by Artist id - Get
 * @apiGroup Root
 *
 * @apiParam {String} artist_id Artist Id
 * 
 * @apiSuccess (Success 200) {Array} Media detail as per artist id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/get_track', async (req, res) => {
  artist_id = req.body.artist_id
  var filter = {};

  var sort_by = 1;
  if (req.body.sort_by != 1) {
    sort_by = -1;
  }

  var sort = { created_at: sort_by }
  var track = await track_helper.get_all_track_of_artist(artist_id, req.body.start, req.body.length, sort);
  if (track.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "track": track });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});

/**
 * @api {post} /get_ranking Artist detail by Ranking - Get 
 * @apiName Artist detail by Ranking- Get
 * @apiGroup Root
 *
 * @apiParam {String} artist_id Artist Id
 * 
 * @apiSuccess (Success 200) {Array} Media detail as per artist id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/get_ranking', async (req, res) => {
  var filter = {};

  var sort_by = 1;
  if (req.body.sort_by != 1) {
    sort_by = -1;
  }
  var sort = { no_of_votes: -1, created_at: sort_by }
  artist_id = req.body.artist_id
  var track = await track_helper.get_all_track_of_artist_by_ranking(artist_id, sort, req.body.start, req.body.length);
  if (track.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "track": track });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});

/**
 * @api {post} /get_artist Artist detail by Artist Id - Get 
 * @apiName Artist detail by Artist Id- Get
 * @apiGroup Root
 *
 * @apiParam {String} artist_id Artist Id
 * 
 * @apiSuccess (Success 200) {Array} Media detail as per artist id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/get_artist', async (req, res) => {
  artist_id = req.body.artist_id
  var artist = await artist_helper.get_artist_by_id(artist_id);
  if (artist.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "artist": artist.artist });
  } else {
    logger.error("Error occured while fetching = ", artist);
    res.status(config.INTERNAL_SERVER_ERROR).json(artist);
  }
});


/**
 * @api {post} /followers Followers detail by Artist id- Get 
 * @apiName Followers detail by Artist id- Get
 * @apiGroup Root
 *
 * @apiParam {String} artist_id Artist Id
 * 
 * @apiSuccess (Success 200) {Array} Followers detail as per artist id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/followers', async (req, res) => {
  artist_id = req.body.artist_id
  var user = await follower_helper.get_all_followers(artist_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json(user);
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});


/**
 * @api {post} /comment Comment detail by Artist id- Get 
 * @apiName Comment detail by Artist id - Get
 * @apiGroup Root
 *
 * @apiParam {String} artist_id Artist Id
 * 
 * @apiSuccess (Success 200) {Array} Comment detail as per artist id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/comment', async (req, res) => {
  artist_id = req.body.artist_id
  var user = await comment_helper.get_all_comment_by_artist_id(artist_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json(user);
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});


/**
 * @api {post} /comment Comment detail by Track id- Get 
 * @apiName Comment detail by Track id- Get
 * @apiGroup Root
 *
 * @apiParam {String} track_id Track Id
 * 
 * @apiSuccess (Success 200) {Array} Comment detail by Track id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post('/get_comment_by_track_id', async (req, res) => {
  track_id = req.body.track_id
  var user = await comment_helper.get_all_comment_by_track_id(track_id);
  if (user.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json(user);
  } else {
    logger.error("Error occured while fetching = ", user);
    res.status(config.INTERNAL_SERVER_ERROR).json(user);
  }
});


/**
 * @api {post} /tracks/:track_id Track detail by Track id- Get 
 * @apiName Track detail by Track id- Get
 * @apiGroup Root
 *
 * @apiParam {String}track_id Track Id
 * 
 * @apiSuccess (Success 200) {Array} Track detail by Track id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get('/tracks/:track_id', async (req, res) => {
  var track = await track_helper.get_all_track_by_track_id(req.params.track_id);

  if (track.status === 1) {
    logger.trace("got details successfully");
    res.status(config.OK_STATUS).json({ "status": 1, "track": track.track });
  } else {
    logger.error("Error occured while fetching = ", track);
    res.status(config.INTERNAL_SERVER_ERROR).json(track);
  }
});


module.exports = router;
