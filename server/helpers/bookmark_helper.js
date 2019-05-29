var Bookmark = require("../models/bookmark");
var bookmark_helper = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


bookmark_helper.insert_book_mark_track = async (object) => {
    let bookmark = new Bookmark(object)
    try {
        let data = await bookmark.save();
        return { "status": 1, "message": "Track Bookmarked", "bookmark": data };
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
            return { status: 1, message: "Bookmark has been Deleted" };
        }
    } catch (err) {
        return { status: 0, message: "Error occured while deleting user", error: err };
    }
};
bookmark_helper.delete_bookmark_by_track_id = async (track_id, user_id) => {
    try {
        let user = await Bookmark.deleteMany({ "track_id": new ObjectId(track_id), "user_id": new ObjectId(user_id) });
        if (!user) {
            return { status: 2, message: "Record has not Deleted" };
        } else {
            return { status: 1, message: "Bookmark has been Deleted" };
        }
    } catch (err) {
        return { status: 0, message: "Error occured while deleting user", error: err };
    }
};


bookmark_helper.get_all_bookmarked_tracks = async (user_id, start, length) => {
    try {

        // var bookmarks = await Bookmark
        //     .find({ "user_id": new ObjectId(user_id) })
        //     .populate({ path: 'track_id', populate: { path: 'artist_id' } })
        //     .populate({ path: 'user_id', populate: { path: 'music_type' } })

        // var tot_cnt = bookmarks.length;

        // var bookmark = await Bookmark
        //     .find({ "user_id": new ObjectId(user_id) })
        //     .populate({ path: 'track_id', populate: { path: 'artist_id' } })
        //     .populate({ path: 'user_id', populate: { path: 'music_type' } })
        //     .skip(start)
        //     .limit(length)
        // var filter_cnt = bookmark.length;

        var aggregates = [
            {
                "$match": {
                    "user_id": new ObjectId(user_id)
                }
            },
            {
                $lookup: {
                    from: 'track',
                    localField: 'track_id',
                    foreignField: '_id',
                    as: 'track'
                }
            },
            {
                $unwind: "$track"
            },
            {
                $match: {
                    "track.is_suspend": false
                }
            },
            {
                '$lookup': {
                    from: 'artist',
                    localField: 'track.artist_id',
                    foreignField: '_id',
                    as: 'artist'
                }
            },
            {
                '$unwind': '$artist'
            },
            {
                $match: {
                    "artist.flag": false
                }
            },
            // {
            //     '$lookup': {
            //         from: 'state',
            //         localField: 'artist.state',
            //         foreignField: '_id',
            //         as: 'state'
            //     }
            // },
            // {
            //     '$unwind': '$state'
            // },
            {
                '$lookup': {
                    from: 'music_type',
                    localField: 'artist.music_type',
                    foreignField: '_id',
                    as: 'music_type'
                }
            },
            {
                '$unwind': '$music_type'
            },
            {
                '$lookup': {
                    from: 'user',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                '$unwind': '$user'
            },

            {
                '$project': {
                    'track_id': 0,
                    'user_id': 0,
                    'track.artist_id': 0,
                    // 'artist.state': 0,
                    'artist.music_type': 0
                }
            },
        ];

        let bookmarks = await Bookmark.aggregate(aggregates);
        var tot_cnt = bookmarks.length;

        var aggregate = [
            {
                "$match": {
                    "user_id": new ObjectId(user_id)
                }
            },
            {
                $lookup: {
                    from: 'track',
                    localField: 'track_id',
                    foreignField: '_id',
                    as: 'track'
                }
            },
            {
                $unwind: "$track"
            },
            {
                $match: {
                    "track.is_suspend": false
                }
            },
            {
                '$lookup': {
                    from: 'artist',
                    localField: 'track.artist_id',
                    foreignField: '_id',
                    as: 'artist'
                }
            },

            {
                '$unwind': '$artist'
            },
            {
                $match: {
                    "artist.flag": false
                }
            },
            // {
            //     '$lookup': {
            //         from: 'state',
            //         localField: 'artist.state',
            //         foreignField: '_id',
            //         as: 'state'
            //     }
            // },
            // {
            //     '$unwind': '$state'
            // },
            {
                '$lookup': {
                    from: 'music_type',
                    localField: 'artist.music_type',
                    foreignField: '_id',
                    as: 'music_type'
                }
            },
            {
                '$unwind': '$music_type'
            },
            {
                '$lookup': {
                    from: 'user',
                    localField: 'user_id',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                '$unwind': '$user'
            },
            {
                '$project': {
                    'track_id': 0,
                    'user_id': 0,
                    'track.artist_id': 0,
                    // 'artist.state': 0,
                    'artist.music_type': 0
                }
            },
            {
                $sort: {
                    "created_at": -1
                }
            },
            {
                "$skip": start
            },
            {
                "$limit": length
            }
        ];
        let bookmark = await Bookmark.aggregate(aggregate);
        var filter_cnt = bookmark.length;
        if (bookmark) {
            return { "status": 1, "message": "bookmark details found", "bookmark": bookmark, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "bookmark not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding bookmark", "error": err }
    }
};


bookmark_helper.get_all_bookmarked = async (user_id) => {
    console.log('1 => ', 1);
    try {
        var bookmark = await Bookmark
            .find({ "user_id": new ObjectId(user_id) })
            .populate({ path: 'track_id', populate: { path: 'artist_id' } })
            .populate({ path: 'user_id', populate: { path: 'music_type' } })
        console.log('bookmark => ', bookmark);
        if (bookmark) {
            return { "status": 1, "message": "bookmark details found", "bookmark": bookmark };
        } else {
            return { "status": 2, "message": "bookmark not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding bookmark", "error": err }
    }
};


// bookmark_helper.get_all_bookmarked = async (track_id) => {
//     try {
//         var bookmark = await Bookmark
//             .find({ "track_id": new ObjectId(track_id) })

//         if (bookmark) {
//             return { "status": 1, "message": "bookmark details found", "bookmark": bookmark };
//         } else {
//             return { "status": 2, "message": "bookmark not found" };
//         }
//     } catch (err) {
//         return { "status": 0, "message": "Error occured while finding bookmark", "error": err }
//     }
// };

module.exports = bookmark_helper;