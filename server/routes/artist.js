var express = require("express");
var router = express.Router();

var auth = require("../middlewares/auth");
var authorization = require("../middlewares/authorization");
var config = require('./../config')
var index = require('./artist/index');
var media = require('./artist/media');
var track = require('./artist/track');
var playlist = require('./artist/playlist');

router.use("/", auth, authorization, index);
router.use("/media", auth, authorization, media);
router.use("/track", auth, authorization, track);
router.use("/playlist", auth, authorization, playlist);


module.exports = router;