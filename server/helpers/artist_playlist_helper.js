var Playlist = require("./../models/artist_playlist");
var artist_playlist_helper = {};
var vote_comment_helper = {};
var mongoose = require('mongoose');
var _ = require('underscore');
var ObjectId = mongoose.Types.ObjectId;


artist_playlist_helper.insert_playlist = async (object) => {
    let playlist = new Playlist(object)
    try {
        let data = await playlist.save();
        return { "status": 1, "message": "Playlist Created Successfully", "playlist": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting playlist", "error": err };
    }
};

artist_playlist_helper.get_playlist_by_artist_id = async (artist_id, start, length) => {
    try {

        var playlists = await Playlist
            .find({ "artist_id": artist_id })
            .populate({ path: 'track_id', populate: { path: 'artist_id' } })
            .populate({ path: 'user_id', populate: { path: 'music_type' } })


        var tot_cnt = playlists.length;


        var playlist = await Playlist
            .find({ "artist_id": artist_id })
            .populate({ path: 'track_id', populate: { path: 'artist_id' } })
            .populate({ path: 'user_id', populate: { path: 'music_type' } })
            .sort({ 'created_at': -1 })
            .skip(start)
            .limit(length)


        var filter_cnt = playlist.length;


        if (playlist) {
            return { "status": 1, "message": "Track details found", "playlist": playlist, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
            //"recordsFiltered": filter_cnt, "recordsTotal": tot_cnt
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
}


artist_playlist_helper.get_playlists = async (artist_id, playlist_id, start, length) => {
    try {

        var playlists = await Playlist.aggregate([
            {
                "$match": {
                    "artist_id": ObjectId(artist_id),
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
                $match: {
                    "track.is_suspend": false
                }
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
                $match: {
                    "artist.flag": false
                }
            }

        ]);
        var tot_cnt = playlists.length

        var playlist = await Playlist.aggregate([
            {
                "$match": {
                    "artist_id": ObjectId(artist_id),
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
                $match: {
                    "track.is_suspend": false
                }
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
                $match: {
                    "artist.flag": false
                }
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


artist_playlist_helper.get_playlists_for_push = async (artist_id, playlist_id) => {
    try {

        var playlist = await Playlist
            .findOne({ "_id": new ObjectId(playlist_id), "artist_id": artist_id })

        if (playlist) {
            return { "status": 1, "message": "Track details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
}

artist_playlist_helper.get_playlists_for_delete = async (artist_id, playlist_id) => {
    try {

        var playlist = await Playlist
            .findOne({ "_id": new ObjectId(playlist_id), "artist_id": artist_id })

        if (playlist) {
            return { "status": 1, "message": "Track details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
}

artist_playlist_helper.update_playlist = async (artist_id, playlist_id, obj) => {
    console.log('artist_id', artist_id);
    console.log('playlist_id', playlist_id);
    console.log('obj', obj);


    try {
        var playlist = await Playlist.findOneAndUpdate({ "artist_id": new ObjectId(artist_id), "_id": new ObjectId(playlist_id) }, obj, { new: true })
        if (playlist) {
            return { "status": 1, "message": "Track Added Successfully", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};

artist_playlist_helper.update_playlists = async (artist_id, playlist_id, obj) => {

    try {
        var playlist = await Playlist.findOneAndUpdate({ "artist_id": new ObjectId(artist_id), "_id": new ObjectId(playlist_id) }, { "track_id": obj }, { new: true })
        if (playlist) {
            return { "status": 1, "message": "Track Added Successfully", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};
artist_playlist_helper.delete_playlist = async (artist_id, playlist_id) => {

    try {
        var playlist = await Playlist.findOneAndRemove({ "artist_id": new ObjectId(artist_id), "_id": new ObjectId(playlist_id) })

        if (playlist) {
            return { "status": 1, "message": "playlist details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};

artist_playlist_helper.delete_track_playlist = async (artist_id, playlist_id, newData) => {

    try {
        var playlist = await Playlist.findByIdAndUpdate({ "artist_id": new ObjectId(artist_id), "_id": new ObjectId(playlist_id) }, { "track_id": newData })


        if (playlist) {
            return { "status": 1, "message": "playlist details found", "playlist": playlist };
        } else {
            return { "status": 2, "message": "playlist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding playlist", "error": err }
    }
};

artist_playlist_helper.delete_playlist_by_track = async (track_id) => {

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
module.exports = artist_playlist_helper;