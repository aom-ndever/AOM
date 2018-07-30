
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
                _id: "$_id.days",
                day: { $first: "$_id.days" },
                count: { $sum: 1 },
            }
        },
        {
            $project: {
                _id: 0
            }
        }
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
                _id: "$user.gender",
                count: { $sum: 1 }
            }
        },
        {
            "$group": {
                "_id": null,
                "gender": { $push: "$$ROOT" },
                "total": { $sum: "$count" },
            }
        },

    ];

    let result = await Vote.aggregate(aggregate);
    if (result && result.length > 0) {

        result[0].gender = result[0].gender.map((gender_data) => {
            gender_data.percentage_value = parseFloat(gender_data.count * 100 / result[0].total).toFixed(2);
            return gender_data;
        });

        return { "status": 1, "message": "Track  found", "results": result[0].gender }
    } else {
        return { "status": 2, "message": "No  available Track" }
    }

};


vote_track_helper.get_artist_by_location_vote = async (id, day) => {

    var to = moment();
    var from = moment(to).subtract(day, "days");

    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
            },
        },

    ];

    let result = await Vote.aggregate(aggregate);

    if (result) {
        return { "status": 1, "message": "Track  found", "results": result }
    }

    else {
        return { "status": 2, "message": "No  available Track" }
    }
};



vote_track_helper.get_artist_by_location_votes = async (id, day) => {

    var to = moment();
    var from = moment(to).subtract(day, "days");

    var aggregate = [
        {
            "$match":
            {
                "created_at": { "$gt": new Date(from), "$lt": new Date(to) },
                "artist_id": new ObjectId(id)
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
                    name: "$state.short_name"

                },
                value: { $sum: 1 },
            }
        },
        {
            $sort: { value: -1 }
        }
    ];

    let result = await Vote.aggregate(aggregate);

    if (result) {
        return { "status": 1, "message": "Track  found", "results": result }
    }

    else {
        return { "status": 2, "message": "No  available Track" }
    }
};
module.exports = vote_track_helper;