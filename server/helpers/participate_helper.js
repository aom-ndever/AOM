var Participate = require("./../models/participate");
var RoundTracks = require("./../models/round_tracks");
var participate_helper = {};
var mongoose = require('mongoose');
var underscore = require('underscore')
var _ = require('underscore');

var ObjectId = mongoose.Types.ObjectId;


participate_helper.insert_participant = async (object) => {
    let contest = new Participate(object)
    try {
        let contests = await contest.save();
        return { "status": 1, "message": "Record inserted", "contest": contests };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting contest", "error": err };
    }
};
participate_helper.insert_track_round = async (object) => {
    let contest = new RoundTracks(object)
    try {
        let contests = await contest.save();
        return { "status": 1, "message": "Record inserted", "contest": contests };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting contest", "error": err };
    }
};

participate_helper.get_track_participation = async (id, ids) => {
    try {
        var contest = await RoundTracks
            .findOne({ "artist_id": new ObjectId(ids), "contest_id": new ObjectId(id) })
        if (contest) {
            return { "status": 1, "message": "contest details found", "contest": contest };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};
participate_helper.get_participant = async (id, ids, trackid) => {
    try {
        var participate = await Participate
            .findOne({ "artist_id": new ObjectId(id), "contest_id": new ObjectId(ids), "track_id": new ObjectId(trackid) })
        if (participate) {
            return { "status": 1, "message": "comment details found", "participate": participate };
        } else {
            return { "status": 2, "message": "comment not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

participate_helper.get_all_participant = async (start, length) => {
    try {
        var participate = await Participate
            .find()
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .populate({ path: 'artist_id', populate: { path: 'state' } })
            .populate('track_id')
            .populate('contest_id')
            .skip(start)
            .limit(length)
        if (participate) {
            return { "status": 1, "message": "comment details found", "participate": participate };
        } else {
            return { "status": 2, "message": "comment not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


participate_helper.get_participant_by_track_id = async (trackid) => {
    try {
        var participate = await Participate
            .findOne({ "track_id": new ObjectId(trackid) })
        //.populate()
        if (participate) {
            return { "status": 1, "message": "comment details found", "participate": participate };
        } else {
            return { "status": 2, "message": "comment not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

participate_helper.get_all_participants = async (ids) => {

    try {
        var participate = await Participate
            .find({ "contest_id": new ObjectId(ids) })
            .populate({ path: 'track_id', populate: { path: 'artist_id' } })

        var sorting = _.sortBy(participate, function (o) {
            return o.track_id.no_of_votes
        })
        participate.reverse();
        participate.splice(16000)

        if (participate) {
            return { "status": 1, "message": "participants details found", "participate": participate };
        } else {
            return { "status": 2, "message": "participants not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding participants", "error": err }
    }
};



participate_helper.get_participated_artist = async (ids) => {
    try {
        var participate = await Participate
            .find({ "contest_id": new ObjectId(ids) })
            .populate('contest_id')
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .populate('track_id')

        participate = _.sortBy(participate, function (p) {

            return p.artist_id.no_of_votes;
        });

        participate = participate.reverse();

        if (participate) {
            return { "status": 1, "message": "comment details found", "participate": participate };
        } else {
            return { "status": 2, "message": "comment not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

module.exports = participate_helper;