var Round = require("./../models/round");
var round_helper = {};
var mongoose = require('mongoose');
var _ = require('underscore');
var moment = require('moment');

var ObjectId = mongoose.Types.ObjectId;


round_helper.insert_round = async (object) => {
    let contest = new Round(object)
    try {
        let contests = await contest.save();
        return { "status": 1, "message": "Record inserted", "contest": contests };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting contest", "error": err };
    }
};

round_helper.get_contest_by_id = async (id) => {

    try {
        var contest = await Round
            .findOne({ "_id": new ObjectId(id) })
        if (contest) {
            return { "status": 1, "message": "contest details found", "contest": contest };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};


round_helper.get_round_by_id = async (id) => {

    try {
        var contest = await Round
            .find({ "contest_id": new ObjectId(id) })
        if (contest) {
            return { "status": 1, "message": "contest details found", "contest": contest };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};
round_helper.get_rounds_by_contestid = async (id) => {

    try {
        var contest = await Round
            .findOne({ "contest_id": new ObjectId(id) })
        if (contest) {
            return { "status": 1, "message": "contest details found", "contest": contest };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};
round_helper.update_participant = async (id, no_participants) => {
    try {
        var contest = await Round.findOneAndUpdate({ "contest_id": new ObjectId(id) }, { "no_of_participants": no_participants })
        if (contest) {
            return { "status": 1, "message": "contest updated", };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};

round_helper.get_all_round = async (start, length, sort = {}) => {
    try {

        var contests = await Round.find()
        var tot_cnt = contests.length;

        var participate = await Round.find()
            .populate({ path: 'contest_id', populate: { path: 'music_type' } })
            .populate('region')
            .populate('state')
            .sort(sort)
            .skip(start)
            .limit(length)

        var sorting = _.each(participate, p => {
        })
        var filter_cnt = participate.length;
        if (participate) {
            return { "status": 1, "message": "participants details found", "participate": participate, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "participants not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding participants", "error": err }
    }
}


round_helper.get_all_contests = async () => {
    try {

        var participate = await Round.find()
            .populate('music_type')
            .populate('contest_id')
            .populate('state')
            .populate()

        if (participate) {
            return { "status": 1, "message": "contest details found", "contest": participate };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
}


module.exports = round_helper;