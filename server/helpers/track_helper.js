var Track = require("./../models/track");
var Artist = require("./../models/artist");
var Vote_track = require("./../models/vote_track");
var Comment = require("./../models/comment");
var Like = require("./../models/like");
var track_helper = {};
var mongoose = require('mongoose');
var moment = require('moment');
var ObjectId = mongoose.Types.ObjectId;
var moment = require('moment');



track_helper.insert_track = async (id, object) => {
    let trk = new Track(object)
    try {
        let data = await trk.save();
        return { "status": 1, "message": "Record inserted", "media": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting media", "error": err };
    }
};


track_helper.get_all_track_of_artist = async (artist_id, start, length) => {

    try {

        var music = await Track
            .find({ "artist_id": new ObjectId(artist_id) })

        var tot_cnt = music.length;


        var musics = await Track
            .find({ "artist_id": new ObjectId(artist_id) })
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .skip(start)
            .limit(length);



        var filter_cnt = musics.length;
        if (music) {
            return { "status": 1, "message": "music details found", "music": musics, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "music not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};

track_helper.get_all_track_of_artist_by_ranking = async (artist_id, sort_by = {}, start, length) => {
    try {
        var musics = await Track
            .find({ "artist_id": new ObjectId(artist_id) })

        var tot_cnt = musics.length;


        var music = await Track
            .find({ "artist_id": new ObjectId(artist_id) })
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .sort(sort_by)
            .skip(start)
            .limit(length)
            .lean();
        var filter_cnt = music.length;

        if (music) {
            return { "status": 1, "message": "music details found", "music": music, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "music not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};

track_helper.get_all_audio = async (filter, page_no, page_size) => {
    try {

        var music = await Track
            .find(filter)
            .skip((page_size * page_no) - page_size)
            .limit(page_size)
            .lean();

        if (music) {
            return { "status": 1, "message": "music details found", "music": music };
        } else {
            return { "status": 2, "message": "music not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};


track_helper.get_track_by_filter = async (id, filter, start, length) => {
    try {
        var track = await Track
            .find({ "artist_id": { $in: id } })
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .sort({ "no_of_likes": - 1 })
            .skip(start)
            .limit(length)

        if (track) {
            return { "status": 1, "message": "user details found", "track": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};


track_helper.delete_track_by_admin = async (track_id) => {

    try {
        var track = await Track.findOneAndRemove({ "_id": (track_id) })
        if (track) {
            return { "status": 1, "message": "track details found", "track": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};


track_helper.get_all_track_by_track_id = async (track_id) => {
    try {
        var track = await Track
            .findOne({ "_id": new ObjectId(track_id) })
            .populate('artist_id')
        if (track) {
            return { "status": 1, "message": "Track details found", "track": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
}



track_helper.update_votes = async (track_id, no_votes) => {
    try {
        var vote = await Track.findOneAndUpdate({ "_id": new ObjectId(track_id) }, { "no_of_votes": no_votes })
        if (vote) {
            return { "status": 1, "message": "voting updated", };
        } else {
            return { "status": 2, "message": "vote not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding vote", "error": err }
    }
};



track_helper.get_all_track_by_id = async (artist_id) => {
    try {
        var aggregate = [{
            "$match": {
                "artist_id": new ObjectId(artist_id)
            }
        },
        {
            "$project":
            {
                "_id": 1,
                "no_of_likes": 1
            }
        }
        ];
        var track = await Track.aggregate(aggregate);
        if (track && track.length > 0) {
            return { "status": 1, "message": "media found", "track": track };
        } else {
            return { "status": 2, "message": "No media available" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding media", "error": err }
    }
}

track_helper.update_artist_for_track = async (id, no_track) => {
    try {
        var contest = await Artist.findOneAndUpdate({ "_id": new ObjectId(id) }, { "no_of_tracks": no_track })
        if (contest) {
            return { "status": 1, "message": "contest updated", };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};

track_helper.update_artist_for_likes = async (id, no_like) => {
    try {
        var contest = await Artist.findOneAndUpdate({ "_id": new ObjectId(id) }, { "no_of_likes": no_like })
        if (contest) {
            return { "status": 1, "message": "contest updated", };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};
track_helper.update_artist_for_votes = async (id, no_vote) => {
    try {
        var contest = await Artist.findOneAndUpdate({ "_id": new ObjectId(id) }, { "no_of_votes": no_vote })
        if (contest) {
            return { "status": 1, "message": "contest updated", };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};


track_helper.update_artist_for_comments = async (id, no_comment) => {
    try {
        var contest = await Artist.findOneAndUpdate({ "_id": new ObjectId(id) }, { "no_of_comments": no_comment })
        if (contest) {
            return { "status": 1, "message": "contest updated", };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};


track_helper.update_artist_for_followers = async (id, no_follow) => {
    try {
        var contest = await Artist.findOneAndUpdate({ "_id": new ObjectId(id) }, { "no_of_followers": no_follow })
        if (contest) {
            return { "status": 1, "message": "contest updated", };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};


track_helper.get_artist_by_day_vote = async (day) => {
    var to = moment();
    var from = moment(to).subtract(day, "days");

    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
            },
        },
        {
            $group: {
                _id: { $dayOfWeek: "$created_at" },
                count: { $sum: 1 }
            }
        },
    ];

    let result = await Vote_track.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Artist  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }
};

track_helper.get_artist_by_location_vote = async (day) => {
    var to = moment();
    var from = moment(to).subtract(day, "days");

    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
            },
        },

        {
            $lookup: {
                from: "user",
                localField: "user_id",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $lookup: {
                from: "state",
                localField: "user.state",
                foreignField: "_id",
                as: "state"
            }
        },
        {
            $unwind: "$state"
        },
        {
            "$group": {
                _id: {
                    _id: "$state.name",
                },
                count: { $sum: 1 },
            }
        },

    ];

    let result = await Vote_track.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Artist  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }
};



track_helper.get_artist_by_day_like = async (day) => {
    var to = moment();
    var from = moment(to).subtract(day, "days");
    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
            },
        },
        {
            $group: {
                _id: { $dayOfWeek: "$created_at" },
                count: { $sum: 1 }
            }
        },
    ];
    let result = await Like.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Artist  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }
};


track_helper.get_artist_by_location_like = async (day) => {
    var to = moment();
    var from = moment(to).subtract(day, "days");
    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
            },
        },


        {
            $lookup: {
                from: "user",
                localField: "user_id",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $lookup: {
                from: "state",
                localField: "user.state",
                foreignField: "_id",
                as: "state"
            }
        },
        {
            $unwind: "$state"
        },
        {
            "$group": {
                _id: {
                    _id: "$state.name",
                },
                count: { $sum: 1 },
            }
        },


    ];
    let result = await Like.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Artist  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }
};

track_helper.get_artist_by_day_comment = async (day) => {
    var to = moment();
    var from = moment(to).subtract(day, "days");
    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
            },
        },
        {
            $group: {
                _id: { $dayOfWeek: "$created_at" },
                count: { $sum: 1 }
            }
        },
    ];
    let result = await Comment.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Artist  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }
};



track_helper.get_artist_by_location_comment = async (day) => {
    var to = moment();
    var from = moment(to).subtract(day, "days");
    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
            },
        },


        {
            $lookup: {
                from: "user",
                localField: "user_id",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $lookup: {
                from: "state",
                localField: "user.state",
                foreignField: "_id",
                as: "state"
            }
        },
        {
            $unwind: "$state"
        },
        {
            "$group": {
                _id: {
                    _id: "$state.name",
                },
                count: { $sum: 1 },
            }
        },

    ];
    let result = await Comment.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Artist  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }
};



track_helper.delete_track_by_id = async (artist_id, track_id) => {
    try {
        var track = await Track.remove({ "artist_id": new ObjectId(artist_id), "_id": (track_id) })
        if (track) {
            return { "status": 1, "message": "track details found", "track": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};

track_helper.update_track_by_id = async (artist_id, track_id, track_object) => {
    try {
        let track = await Track.findOneAndUpdate({ "_id": track_id, "artist_id": artist_id }, track_object);
        if (!track) {
            return { "status": 2, "message": "Record has not updated" };
        } else {
            return { "status": 1, "message": "Record has been updated", "track": track };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating track", "error": err }
    }
};


track_helper.delete_track_image = async (track_id) => {
    try {
        var track = await Track.update({ "_id": (track_id) }, { $unset: { "image": null } })
        if (track) {
            return { "status": 1, "message": "track details found", "track": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};


track_helper.get_new_uploads = async (day, start, length) => {
    var to = moment().utcOffset(0);
    var from = moment(to).subtract(day, "days").utcOffset(0);
    try {
        var track = await Track
            .find({ "created_at": { "$gt": new Date(from), "$lt": new Date(to) } })
            .skip(start)
            .limit(length)
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
        if (track) {
            return { "status": 1, "message": "track details found", "results": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};


track_helper.get_track_main = async (filter, filters) => {
    var aggregate = [

        {
            $lookup: {
                from: "artist",
                localField: "artist_id",
                foreignField: "_id",
                as: "artist_id"
            }
        },
        {
            $unwind: "$artist_id"
        },
        {
            $lookup: {
                from: "music_type",
                localField: "artist_id.music_type",
                foreignField: "_id",
                as: "music_type"
            }
        },
        {
            $unwind: "$music_type"
        },
        {
            "$match": filters
        }
    ];

    if (filter) {
        aggregate.push({
            "$match":

                { $or: [{ "artist_id.first_name": filter }, { "artist_id.last_name": filter }, { "name": filter }] }
        });
    }
    let result = await Track.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Artist  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }

};


track_helper.delete_track = async (track_id) => {
    try {
        var track = await Track.remove({ "_id": (track_id) })
        if (track) {
            return { "status": 1, "message": "track details found", "track": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};

module.exports = track_helper;