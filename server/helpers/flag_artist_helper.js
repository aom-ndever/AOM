
var Flag = require("../models/flag_artist");
var flag_artist_helper = {};

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


flag_artist_helper.insert_flag = async (object) => {
    let flag = new Flag(object)
    try {
        let data = await flag.save();
        return { "status": 1, "message": "Record inserted", "flag": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting flag", "error": err };
    }
};



flag_artist_helper.get_flag = async (id) => {
    try {
        var artist = await Flag
            .find({ to: new ObjectId(id) })
            .populate('from')
            .populate('to')

        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


flag_artist_helper.delete_flag = async (from, to) => {

    try {
        var artist = await Flag.remove({ "from": (from), "to": (to) })
        if (artist) {
            return { "status": 1, "message": "flag deleted", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

module.exports = flag_artist_helper;
