var Playlist = require("./../models/playlist");
var playlist_helper = {};
var vote_comment_helper = {};
var mongoose = require('mongoose');
var _ = require('underscore');
var ObjectId = mongoose.Types.ObjectId;


playlist_helper.insert_playlist = async (object) => {
    let playlist = new Playlist(object)
    try {
        let data = await playlist.save();
        return { "status": 1, "message": "Record inserted", "playlist": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting playlist", "error": err };
    }
};

playlist_helper.get_playlist_by_user_id = async (user_id, start, length) => {
    try {

        var playlists = await Playlist
            .find({ "user_id": user_id })
            .populate({ path: 'track_id', populate: { path: 'artist_id' } })
            .populate({ path: 'user_id', populate: { path: 'music_type' } })


        var tot_cnt = playlists.length;


        var playlist = await Playlist
            .find({ "user_id": user_id })
            .populate({ path: 'track_id', populate: { path: 'artist_id' } })
            .populate({ path: 'user_id', populate: { path: 'music_type' } })
            .sort({ 'created_at': -1 })
            .skip(start)
            .limit(length)



        var filter_cnt = playlist.length;
        if (playlist) {
            return { "status": 1, "message": "Track details found", "playlist": playlist, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
}


playlist_helper.get_playlists = async (user_id, playlist_id, start, length) => {
    try {

        var playlists = await Playlist.aggregate([
            {
                "$match": {

                    "_id": ObjectId(playlist_id)
                }
            },
            {
                "$unwind": "$track_id"
            },
            {
                "$lookup": {
                    "from": "track",
                    "foreignField": "_id",
                    "localField": "track_id",
                    "as": "track"
                }
            },
            {
                "$unwind": "$track"
            },
            {
                "$lookup": {
                    "from": "artist",
                    "foreignField": "_id",
                    "localField": "track.artist_id",
                    "as": "artist"
                }
            },
            {
                "$unwind": "$artist"
            },

        ]);
        var tot_cnt = playlists.length

        var playlist = await Playlist.aggregate([
            {
                "$match": {

                    "_id": ObjectId(playlist_id)
                }
            },
            {
                "$unwind": "$track_id"
            },
            {
                "$lookup": {
                    "from": "track",
                    "foreignField": "_id",
                    "localField": "track_id",
                    "as": "track"
                }
            },
            {
                "$unwind": "$track"
            },
            {
                "$lookup": {
                    "from": "artist",
                    "foreignField": "_id",
                    "localField": "track.artist_id",
                    "as": "artist"
                }
            },
            {
                "$unwind": "$artist"
            },
            {
                "$skip": start
            },
            {
                "$limit": length
            }

        ]);
        var filter_cnt = playlist.length

        if (playlist) {
            return { "status": 1, "message": "Track details found", "playlist": playlist, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
}


playlist_helper.get_playlists_for_delete = async (user_id, playlist_id) => {
    try {

        var playlist = await Playlist
            .findOne({ "_id": new ObjectId(playlist_id), "user_id": user_id })

        if (playlist) {
            return { "status": 1, "message": "Track details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
}

playlist_helper.update_playlist = async (user_id, playlist_id, obj) => {

    try {
        var playlist = await Playlist.findOneAndUpdate({ "user_id": new ObjectId(user_id), "_id": new ObjectId(playlist_id) }, obj, { new: true })
        if (playlist) {
            return { "status": 1, "message": "Track Added Successfully", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};


playlist_helper.delete_playlist = async (user_id, playlist_id) => {

    try {
        var playlist = await Playlist.findOneAndRemove({ "user_id": new ObjectId(user_id), "_id": new ObjectId(playlist_id) })

        if (playlist) {
            return { "status": 1, "message": "playlist details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};

playlist_helper.delete_track_playlist = async (user_id, playlist_id, newData) => {

    try {
        var playlist = await Playlist.findByIdAndUpdate({ "user_id": new ObjectId(user_id), "_id": new ObjectId(playlist_id) }, { "track_id": newData })


        if (playlist) {
            return { "status": 1, "message": "playlist details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};
playlist_helper.delete_playlist_by_track = async (track_id) => {

    try {
        var playlist = await Playlist.update(
            {},
            { $pull: { track_id: ObjectId(track_id) } },
            { multi: true }
        )

        if (playlist) {
            return { "status": 1, "message": "playlist details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};
module.exports = playlist_helper;