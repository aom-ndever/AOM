var Winner = require("./../models/winners");
var winner_helper = {};
var mongoose = require('mongoose');
var underscore = require('underscore')
var _ = require('underscore');

var ObjectId = mongoose.Types.ObjectId;


winner_helper.insert_winner = async (object) => {
    try {
        var winner = await Winner.insertMany(object)

        if (winner) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding winner", "error": err }
    }
};


winner_helper.get_all_qualifieds = async (contest_id, round_id) => {
    try {
        var winner = await Winner
            .find()
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .populate('track_id')
            .populate('contest_id')
            .limit(50)

        if (winner && winner.length > 0) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

winner_helper.get_qualified_contestant = async (track_id, round_id) => {
    try {
        var winner = await Winner
            .findOne({ round_id: new ObjectId(round_id), track_id: new ObjectId(track_id) })
        if (winner) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


winner_helper.get_all_qualifieds = async (contest_id, round_id) => {
    try {

        var winner = await Winner
            .find()
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .populate('track_id')
            .populate('contest_id')
            .limit(50)

        if (winner && winner.length > 0) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

winner_helper.get_qualified_contestant = async (track_id, round_id) => {
    try {

        var winner = await Winner
            .findOne({ round_id: new ObjectId(round_id), track_id: new ObjectId(track_id) })

        if (winner) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

winner_helper.get_qualifiedss = async (round_id, start, length) => {
    try {
        var winner = await Winner
            .find({ round_id: new ObjectId(round_id) })
        if (winner) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

winner_helper.get_qualified = async (round_id, start, length, filter, filters) => {

    try {
        var winners = await Winner
            .find({ round_id: new ObjectId(round_id) })

        var tot_cnt = winners.length;

        var aggregate = [
            {
                '$match': {
                    round_id: new ObjectId(round_id)
                }
            },
            {
                '$lookup': {
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
                '$match': {
                    "artist.flag": false
                }
            },
            {
                '$lookup': {
                    from: 'state',
                    localField: 'artist.state',
                    foreignField: '_id',
                    as: 'state'
                }
            },
            {
                '$unwind': '$state'
            },
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
                '$project': {
                    'artist.music_type': 0,
                    'artist.state': 0,
                    'track_id': 0,
                    'artist_id': 0
                }
            },
            {
                '$skip': start
            },
            {
                '$limit': length
            }

        ];

        if (filter) {
            aggregate.push({
                "$match": filter
            })
        }

        if (filters) {
            aggregate.push({
                "$match":

                    { $or: [{ "artist.first_name": filters }, { "artist.last_name": filters }, { "track.name": filters }] }
            });
        }

        let winner = await Winner.aggregate(aggregate);
        var filter_cnt = winner.length;

        if (winner) {
            return { "status": 1, "message": "winner details found", "winner": winner, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};



winner_helper.update_votes = async (track_id, round_id, vote) => {
    try {
        var vote = await Winner.findOneAndUpdate({ "round_id": new ObjectId(round_id), "track_id": new ObjectId(track_id) }, vote, { new: true })
        if (vote) {
            return { "status": 1, "message": "vote details found", "vote": vote };
        } else {
            return { "status": 2, "message": "vote not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding vote", "error": err }
    }
};

module.exports = winner_helper;