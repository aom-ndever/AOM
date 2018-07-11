var express = require('express');
var router = express.Router();
var config = require('../../config');
var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
const saltRounds = 10;

var user_helper = require('../../helpers/user_helper');
var participate_helper = require('../../helpers/participate_helper');
var flag_helper = require('../../helpers/flag_helper');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

/**
 * @api {put} /user Update user profile
 * @apiName Update user profile
 * @apiGroup User
 * 
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {String} social_media Social Media
 * @apiParam {String} email Email of user
 * @apiParam {String} password User Password
 * @apiParam {String} first_name User First Name
 * @apiParam {String} last_name User Last Name
 * @apiParam {String} zipcode User Zipcode
 * @apiParam {String} music_type Music Type
 * 
 * @apiSuccess (Success 200) {JSON} user User details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put("/", async (req, res) => {
    user_id = req.userInfo.id;
    var obj = {
    };
    if (req.body.share_url && req.body.share_url != null) {
        obj.social_media = req.body.share_url;
    }
    if (req.body.email && req.body.email != null) {
        obj.email = req.body.email;
    }
    if (req.body.password && req.body.password != null) {
        obj.password = req.body.password;
    }
    if (req.body.first_name && req.body.first_name != null) {
        obj.first_name = req.body.first_name;
    }
    if (req.body.last_name && req.body.last_name != null) {
        obj.last_name = req.body.last_name;
    }
    if (req.body.zipcode && req.body.zipcode != null) {
        obj.zipcode = req.body.zipcode;

    }
    if (req.body.music_type && req.body.music_type != null) {
        obj.music_type = req.body.music_type;
    }
    if (req.body.gender && req.body.gender != null) {
        obj.gender = req.body.gender;
    }
    var resp_data = await user_helper.update_user_by_id(user_id, obj);
    if (resp_data.status == 0) {
        logger.error("Error occured while updating = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("Updated successfully  = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});



/**
 * @api {put} /update_image Update user image
 * @apiName Update user image
 * @apiGroup User
 * 
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {String} image User image
 
 * 
 * @apiSuccess (Success 200) {JSON} user image details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put('/update_image', function (req, res) {
    user_id = req.userInfo.id;
    var obj = {
    };

    async.waterfall([
        function (callback) {
            if (req.files && req.files['image']) {
                logger.trace("Uploading avatar image");
                var file = req.files['image'];
                var dir = "./uploads/user";
                var mimetype = ['image/png', 'image/jpeg', 'image/jpg'];

                if (mimetype.indexOf(file.mimetype) !== -1) {
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir);
                    }
                    //var extention = path.extname(file.name);
                    var extension = '.jpg';
                    var filename = "user_" + new Date().getTime() + (Math.floor(Math.random() * 90000) + 10000) + extension;
                    file.mv(dir + '/' + filename, async (err) => {
                        if (err) {
                            logger.trace("There was an issue in uploading avatar image");
                            callback({ "status": config.MEDIA_ERROR_STATUS, "resp": { "status": 0, "message": "There was an issue in uploading avatar image" } });
                        } else {
                            logger.trace("Avatar image has uploaded for user");

                            callback(null, filename);
                        }
                    });
                } else {
                    callback({ "status": config.MEDIA_ERROR_STATUS, "resp": { "status": 0, "message": "Invalid image format" } });
                }
            } else {
                callback(null, null);
            }
        }

    ], async (err, filename) => {
        if (err) {
            res.status(err.status).json(err.resp);
        } else {
            if (filename) {
                obj.image = await filename;
            }
        }
        var resp_data = await user_helper.update_user_by_id(user_id, obj);
        if (resp_data.status === 0) {
            res.status(config.INTERNAL_SERVER_ERROR).json({ "error": resp_data.error });
        } else {
            res.status(config.OK_STATUS).json({ "message": "Profile has been updated successfully", "image": filename });
        }
    });
});



/**
 * @api {get} /user User detail - Get 
 * @apiName get_user_by_id - Get
 * @apiGroup User
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {Array} User detail as per id
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.get("/", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await user_helper.get_user_by_id(user_id);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});



/**
 * @api {delete} /user/image/:user_id Delete image  
 * @apiName delete_user_image 
 * @apiGroup User
 *
 * @apiHeader {String}  x-access-token unique access-key
 *
 * @apiSuccess (Success 200) {String} success message
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.delete('/image/:user_id', async (req, res) => {
    user_id = req.params.user_id;
    var del_resp = await user_helper.delete_user_image(user_id);
    if (del_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while deleting user image", "error": del_resp.error });
    } else if (del_resp.status === 2) {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Can't delete user image" });
    } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "user image has been deleted" });
    }
});


/**
 * @api {put} /change/email Update user email
 * @apiName Update user email
 * @apiGroup User
 * 
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {String} email User email
 
 * 
 * @apiSuccess (Success 200) {JSON} user email details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put('/change/email', async (req, res) => {
    user_id = req.userInfo.id;

    var resp = await user_helper.get_user_by_id(user_id);
    if (resp.status === 1) {
        if (resp.user.email == req.body.email) {
            if (req.body.new_email) {
                var resp = await user_helper.update_user_email(user_id, req.body.new_email);
                res.status(config.OK_STATUS).json({ "status": 1, "resp": "Email changed" });
            }
            else {
                res.status(config.OK_STATUS).json({ "status": 1, "resp": "Please Enter New Email" });
            }
        }
        else {
            res.status(config.OK_STATUS).json({ "status": 1, "resp": "You cannot change the email" });
        }
    } else {
        logger.error("Error occured while fetching = ", resp);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    }
});


/**
 * @api {put} /change/password Update user email
 * @apiName Update user password
 * @apiGroup User
 * 
 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {String} password User password
 
 * 
 * @apiSuccess (Success 200) {JSON} user password details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.put('/change/password', async (req, res) => {
    user_id = req.userInfo.id;

    var resp = await user_helper.get_user_by_id(user_id);
    if (resp.status === 1) {
        if (bcrypt.compareSync(req.body.password, resp.user.password)) {
            if (req.body.new_password) {
                var resp = await user_helper.update_user_password(user_id, { "password": bcrypt.hashSync(req.body.new_password, saltRounds) });
                res.status(config.OK_STATUS).json({ "status": 1, "resp": "Password changed" });
            }
            else {
                res.status(config.OK_STATUS).json({ "status": 1, "resp": "Please Enter New Password" });
            }
        }
        else {
            res.status(config.OK_STATUS).json({ "status": 1, "resp": "Password is wrong" });
        }

    }
    else {
        logger.error("Error occured while fetching = ", resp);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    }
});


/**
 * @api {post} /user/flag/user/:user_id Flag User Add
 * @apiName Flag User - Add
 * @apiGroup User

 * @apiHeader {String}  Content-Type application/json
 * @apiHeader {String}  x-access-token  unique access-key
 * 
 * @apiParam {String} from User id of user who flag user
 * @apiParam {String} to User id of user  who gets flagged
 *
 * @apiSuccess (Success 200) {JSON} track details
 * @apiError (Error 4xx) {String} message Validation or error message.
 */
router.post("/flag/user/:user_id", async (req, res) => {
    var obj = {
        from: req.userInfo.id,
        to: req.params.user_id
    }
    var resp = await user_helper.get_user_by_id(req.params.user_id);
    if (resp.status == 0) {
        logger.error("Error occured while fetching user = ", resp);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
        if (resp.user.flag == false) {
            var stat = true
            var user_resp = await flag_helper.insert_flag(obj);
            var user_resp = await user_helper.update_user_flag(req.params.user_id, stat);
            logger.trace("User flagged");
            res.status(config.OK_STATUS).json({ "message": "User flagged" });
        }

        else {
            var stat = false
            var user_resp = await user_helper.update_user_flag(req.params.user_id, stat);
            var user_resp = await flag_helper.delete_flag(obj.from, obj.to);
            logger.trace("flag deleted");
            res.status(config.OK_STATUS).json({ "message": "flag deleted" });
        }

    }
});


module.exports = router;