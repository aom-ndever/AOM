var Download = require("./../models/download");
var Track = require("./../models/track");

var download_helper = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


var moment = require('moment');

download_helper.download_track = async (obj) => {
    let down = new Download(obj)
    try {
        let downloads = await down.save();
        return { "status": 1, "message": "download done", "track": downloads };

    } catch (err) {
        return { "status": 0, "message": "Error occured while downloading ", "error": err };
    }
};

download_helper.update_downloads = async (id, no_downloads) => {
    try {
        var track = await Track.findOneAndUpdate({ "_id": new ObjectId(id) }, { "no_of_downloads": no_downloads })
        if (track) {
            return { "status": 1, "message": "track downloaded", };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding vote", "error": err }
    }
};



download_helper.get_all_downloaded_track_by_id = async (id, day) => {
    var to = moment().utcOffset(0);
    var from = moment(to).subtract(day, "days").utcOffset(0);
    try {
        var track = await Track
            .find({ "artist_id": id, "created_at": { "$gt": new Date(from), "$lt": new Date(to) } })
            .populate('artist_id')
            //.populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .sort({ "no_of_downloads": -1 })
            .limit(5)
        if (track) {
            return { "status": 1, "message": "track details found", "track": track };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};

download_helper.get_all_track_by_track_id = async (track_id) => {
    try {
        var like = await Track
            .findOne({ "_id": new ObjectId(track_id) })
        if (like) {
            return { "status": 1, "message": "Track details found", "track": like };
        } else {
            return { "status": 2, "message": "track not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding track", "error": err }
    }
};

download_helper.get_downloads_by_day = async (artist_id, day) => {

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
            $project:
                {
                    _id: 0
                }
        }

    ];
    let result = await Track.aggregate(aggregate);


    if (result) {
        return { "status": 1, "message": "Track  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Track" }
    }

};



download_helper.get_downloads_by_location = async (artist_id, day) => {

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

        // {
        //     $lookup: {
        //         from: "state",
        //         localField: "user.state",
        //         foreignField: "_id",
        //         as: "state"
        //     }
        // },
        // {
        //     $unwind: "$state"
        // },
        {
            "$group": {
                _id: {
                    _id: "$user.state",
                    //name: "$state.short_name"

                },
                value: { $sum: 1 },
            }
        },
        {
            $sort: { value: -1 }
        }

    ];
    let result = await Download.aggregate(aggregate);


    if (result) {
        return { "status": 1, "message": "Track  found", "results": result }
    } else {
        return { "status": 2, "message": "No  available Track" }
    }

};

module.exports = download_helper;