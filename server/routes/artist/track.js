var express = require('express');
var router = express.Router();
var config = require('../../config');
var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
var track_helper = require('../../helpers/track_helper');
var vote_track_helper = require('../../helpers/vote_track_helper');
var artist_helper = require('../../helpers/artist_helper');
var artist_helper = require('../../helpers/artist_helper');
var vote_track_helper = require('../../helpers/vote_track_helper');
var download_helper = require('../../helpers/download_helper');
var bookmark_helper = require('../../helpers/bookmark_helper');
var like_helper = require('../../helpers/like_helper');
var comment_helper = require('../../helpers/comment_helper');
var playlist_helper = require('../../helpers/playlist_helper');
var artist_playlist_helper = require('../../helpers/artist_playlist_helper');
var path = require('path');
var moment = require('moment');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');


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
        artist_id: req.userInfo.id
    };
    if (req.body.name && req.body.name != null) {
        obj.name = req.body.name;
    }
    if (req.body.description && req.body.description != null) {
        obj.description = req.body.description;
    }
    if (req.body.price && req.body.price != null) {
        obj.price = req.body.price;
    }

    async.waterfall([
        function (callback) {
            if (req.files && req.files['audio']) {
                logger.trace("Uploading avatar image");
                var file = req.files['audio'];
                var dir = "./uploads/track/";
                var mimetype = ['audio/aac', 'audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/AlFF', 'audio/FLAC'];

                if (mimetype.indexOf(file.mimetype) !== -1) {
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir);
                    }
                    var extension = '.mp4';
                    var filename = "audio_" + new Date().getTime() + (Math.floor(Math.random() * 90000) + 10000) + extension;
                    file.mv(dir + '/' + filename, async (err) => {
                        if (err) {
                            logger.trace("There was an issue in uploading avatar image");
                            callback({ "status": config.MEDIA_ERROR_STATUS, "resp": { "status": 0, "message": "There was an issue in uploading avatar image" } });
                        } else {
                            logger.trace("Avatar image has uploaded for user");
                        }
                    });
                } else {
                    callback({ "status": config.MEDIA_ERROR_STATUS, "resp": { "status": 0, "message": "Invalid image format" } });
                }
            }
            if (req.files && req.files['image']) {
                logger.trace("Uploading avatar image");
                var file = req.files['image'];
                var dir = "./uploads/track/";
                var mimetype = ["image/png", "image/jpeg", "image/jpg"];
                if (mimetype.indexOf(file.mimetype) !== -1) {
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir);
                    }
                    var extension = '.jpg';
                    var filename1 = "image_" + new Date().getTime() + (Math.floor(Math.random() * 90000) + 10000) + extension;
                    file.mv(dir + '/' + filename1, async (err) => {
                        if (err) {
                            logger.trace("There was an issue in uploading avatar image");
                            callback({ "status": config.MEDIA_ERROR_STATUS, "resp": { "status": 0, "message": "There was an issue in uploading avatar image" } });
                        } else {
                            logger.trace("Avatar image has uploaded for user");
                        }
                    });
                } else {
                    callback({ "status": config.MEDIA_ERROR_STATUS, "resp": { "status": 0, "message": "Invalid image format" } });
                }
                callback(null, filename, filename1);
            }
            else {
                callback(null, null);
            }
        }

    ], async (err, filename, filename1) => {
        if (err) {
            res.status(err.status).json(err.resp);
        } else {
            if (filename) {
                obj.audio = await filename;
                obj.image = await filename1;
            }
        }

        var card_resp = await artist_helper.get_account_by_artist_id(artist_id);
        console.log('card_resp', card_resp);

        if (card_resp.status === 2) {

            res.status(config.INTERNAL_SERVER_ERROR).json({ "message": "Please Add bank Details to get money into your Account When Track is being Purchased" });
        } else if (card_resp.status === 1) {

            var resp = await track_helper.insert_track(artist_id, obj);
            if (resp.status === 0) {
                res.status(config.INTERNAL_SERVER_ERROR).json({ "error": resp.error });
            } else {
                var resp = await artist_helper.get_artist_by_id(artist_id);
                no_track = resp.artist.no_of_tracks + 1
                res.status(config.OK_STATUS).json({ "message": "Inserted successfully" });
            }
        }
        else {
            res.status(config.OK_STATUS).json({ "message": "Error occured while adding bank details" });
        }
    });
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
router.post('/tracks', async (req, res) => {
    artist_id = req.userInfo.id;
    var track = await track_helper.get_all_track_of_artist(artist_id, req.body.start, req.body.length);
    if (track.status === 1) {
        logger.trace("got details successfully");
        res.status(config.OK_STATUS).json({ "status": 1, "track": track });
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
    var obj = {
    };
    if (req.body.name && req.body.name != null) {
        obj.name = req.body.name;
    }
    if (req.body.price && req.body.price != null) {
        obj.price = req.body.price;
    }
    if (req.body.description && req.body.description != null) {
        obj.description = req.body.description;
    }
    if (req.body.music_type && req.body.music_type != null) {
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
                        err: "There was an issue in uploading image"
                    });
                } else {
                    logger.trace("image has been uploaded. Image name = ", filename);
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
    }
    if (filename) {
        obj.image = filename;
    }
    var resp_data = await track_helper.update_track_by_id(artist_id, track_id, obj);
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
router.delete('/:track_id', async (req, res) => {
    track_id = req.params.track_id;
    artist_id = req.userInfo.id



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
    var artist_playlist_del = await artist_playlist_helper.delete_playlist_by_track(track_id);

    var del_resp = await track_helper.delete_track_by_id(artist_id, track_id);
    if (del_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while deleting track ", "error": del_resp.error });
    } else if (del_resp.status === 2) {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Can't delete track " });
    } else {


        res.status(config.OK_STATUS).json({ "status": 1, "message": "track  has been deleted" });
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
router.delete('/image/:track_id', async (req, res) => {
    track_id = req.params.track_id;
    var del_resp = await track_helper.delete_track_image(track_id);
    if (del_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while deleting track image", "error": del_resp.error });
    } else if (del_resp.status === 2) {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Can't delete track image" });
    } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "track image has been deleted" });
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
router.post('/analytics/track', async (req, res) => {
    var resp_day = await vote_track_helper.get_artist_vote_by_day(req.userInfo.id, req.body.day);
    var resp_gender = await vote_track_helper.get_artist_vote_by_gender(req.userInfo.id, req.body.day);
    var resp_track = await vote_track_helper.get_artist_vote_by_track(req.userInfo.id, req.body.day);
    var resp_location = await vote_track_helper.get_artist_by_location_votes(req.userInfo.id, req.body.day);

    if (resp_day.status === 0 && resp_gender === 0 && resp_rack === 0 && resp_location === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while finding vote", "error": resp_day.error });
    } else if (resp_day.status === 2) {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Not available" });
    } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Vote found", "day": resp_day.results, "gender": resp_gender.results, "track": resp_track.results, "location": resp_location.results });
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
router.post('/downloaded_track', async (req, res) => {
    artist_id = req.userInfo.id;
    var track = await download_helper.get_all_downloaded_track_by_id(artist_id, req.body.day);
    var resp_day = await download_helper.get_downloads_by_day(req.userInfo.id, req.body.day);
    var resp_location = await download_helper.get_downloads_by_location(req.userInfo.id, req.body.day);
    if (track.status === 1 && resp_day.status === 1 && resp_location.status == 1) {
        logger.trace("got details successfully");
        res.status(config.OK_STATUS).json({ "status": 1, "track": track.track, "day": resp_day.results, "location": resp_location.results });
    } else {
        logger.error("Error occured while fetching = ", track);
        res.status(config.INTERNAL_SERVER_ERROR).json(track);
    }
});


router.post('/payment_by_day', async (req, res) => {
    artist_id = req.userInfo.id;

    var resp_day = await artist_helper.get_payment_by_day(req.userInfo.id, req.body.day);
    if (resp_day.status === 1) {
        logger.trace("got details successfully");
        res.status(config.OK_STATUS).json({ "status": 1, "day": resp_day.results });
    } else {
        logger.error("Error occured while fetching = ", track);
        res.status(config.INTERNAL_SERVER_ERROR).json(track);
    }
})


router.post("/change_status_of_download", async (req, res) => {
    artist_id = req.userInfo.id
    track_id = req.body.track_id
    var resp = await track_helper.get_all_track_by_track_id(track_id);
    if (resp.status == 0) {
        logger.error("Error occured while fetching user = ", resp);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp);
    } else {
        if (resp.track.is_downloadable == false) {
            var stat = "true"
            var artist_resp = await artist_helper.update_download(artist_id, track_id, stat);

            res.status(config.OK_STATUS).json({ "message": " you have turn on the download option" });
        }
        else {
            var stat = "false"
            var artist_resp = await artist_helper.update_download(artist_id, track_id, stat);
            res.status(config.OK_STATUS).json({ "message": " you have turn off the download option" });
        }

    }

});
module.exports = router;