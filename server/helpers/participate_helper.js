var Participate = require("./../models/participate");
var Contest = require("./../models/contest");
var participate_helper = {};
var mongoose = require('mongoose');
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



participate_helper.get_participant = async (id, ids, trackid) => {
    try {
        var participate = await Participate
            .find({ "artist_id": new ObjectId(id), "contest_id": new ObjectId(ids), "track_id": new ObjectId(trackid) })
        if (participate) {
            return { "status": 1, "message": "comment details found", "participate": participate };
        } else {
            return { "status": 2, "message": "comment not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
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