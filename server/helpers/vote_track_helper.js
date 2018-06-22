
var Vote = require("./../models/vote_track");
var Track = require("./../models/track");
var comment_helper = {};
var vote_track_helper = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var moment = require('moment');

vote_track_helper.vote_for_track = async (user_id, obj) => {

    let vote = new Vote(obj)
    try {
        let votes = await vote.save();
        return { "status": 1, "message": "Voting done", "vote": votes };

    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting ", "error": err };
    }
};


vote_track_helper.get_all_voted_artist = async (user_id, track_id) => {
    try {
        var vote = await Vote.find({ "user_id": new ObjectId(user_id), "track_id": new ObjectId(track_id) })
        if (vote) {
            return { "status": 1, "message": "vote details found", "vote": vote.length };
        } else {
            return { "status": 2, "message": "vote not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding vote", "error": err }
    }
};



vote_track_helper.get_artist_vote_by_day = async (artist_id, day) => {
    var to = moment().utcOffset(0);
    var from = moment(to).subtract(day, "days").utcOffset(0);

    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
                "artist_id": new ObjectId(artist_id)
            },
        },
        {
            "$group": {
                _id: {
                    _id: "$_id",
                    days: { $dayOfWeek: "$created_at" },
                },
                count: { $sum: 1 },
            }
        },
        {
            "$group": {
                _id: "$_id._id",
                count: { $sum: 1 },
            }
        },

    ];

    let result = await Vote.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "Vote  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Vote" }
    }

};




vote_track_helper.get_artist_vote_by_track = async (id, day) => {
    var to = moment().utcOffset(0);
    var from = moment(to).subtract(day, "days").utcOffset(0);
    try {
        var track = await Track
            .find({ "artist_id": id, "created_at": { "$gt": new Date(from), "$lt": new Date(to) } })
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .sort({ "no_of_votes": -1 })
        if (track) {
            return { "status": 1, "message": "track details found", "results": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};


vote_track_helper.get_artist_vote_by_gender = async (artist_id, day) => {

    var to = moment();
    var from = moment(to).subtract(day, "days");

    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
                "artist_id": new ObjectId(artist_id)
            },
        },
        {
            $lookup: {
                from: "artist",
                localField: "artist_id",
                foreignField: "_id",
                as: "artist"
            }
        },
        {
            $unwind: "$artist"
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
            $group: {
                _id: {
                    gender: "$user.gender",
                },
                count: { $sum: 1 },
            }
        },
        {
            "$group": {
                "_id": null,
                "gender": { $push: "$$ROOT" },
                "total": { $sum: "$count" },

            }
        },
        {
            "$unwind": "$gender"
        },
        {
            $addFields: {
                "gender.percentage_value": { "$multiply": [{ "$divide": ["$gender.count", "$total"] }, 100] }
            }
        },

    ];

    let result = await Vote.aggregate(aggregate);
    if (result) {
        return { "status": 1, "message": "followers  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available followers" }
    }

};
module.exports = vote_track_helper;