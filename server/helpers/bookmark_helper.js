var Bookmark = require("../models/bookmark");
var bookmark_helper = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


bookmark_helper.insert_book_mark_track = async (object) => {
    let bookmark = new Bookmark(object)
    try {
        let data = await bookmark.save();
        return { "status": 1, "message": "Record inserted", "bookmark": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting bookmark", "error": err };
    }
};


bookmark_helper.get_all_bookmarked_track = async (user_id, track_id) => {
    try {
        var bookmark = await Bookmark
            .findOne({ "user_id": new ObjectId(user_id), "track_id": new ObjectId(track_id) })
            .populate('track_id')

        if (bookmark) {
            return { "status": 1, "message": "bookmark details found", "bookmark": bookmark };
        } else {
            return { "status": 2, "message": "bookmark not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding bookmark", "error": err }
    }
};


bookmark_helper.delete_bookmark = async (bookmark_id) => {
    try {
        let user = await Bookmark.findOneAndRemove({ _id: new ObjectId(bookmark_id) });
        if (!user) {
            return { status: 2, message: "Record has not Deleted" };
        } else {
            return { status: 1, message: "Record has been Deleted" };
        }
    } catch (err) {
        return { status: 0, message: "Error occured while deleting user", error: err };
    }
};


bookmark_helper.get_all_bookmarked_tracks = async (user_id, start, length) => {
    try {
        var bookmark = await Bookmark
            .find({ "user_id": new ObjectId(user_id) })
            .populate({ path: 'track_id', populate: { path: 'artist_id' } })
            .populate({ path: 'user_id', populate: { path: 'music_type' } })
            .skip(start)
            .limit(length)



        if (bookmark) {
            return { "status": 1, "message": "bookmark details found", "bookmark": bookmark };
        } else {
            return { "status": 2, "message": "bookmark not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding bookmark", "error": err }
    }
};
module.exports = bookmark_helper;