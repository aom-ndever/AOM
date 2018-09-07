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
round_helper.get_rounds = async (id, condtion) => {

    try {
        var contest = await Round
            .find({ "_id": new ObjectId(id), condition })
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
            .find({ "contest_id": new ObjectId(id) })
            .populate({ path: 'contest_id', populate: { path: 'music_type' } })
            .populate('region')
            .populate('state')
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

round_helper.add_participant_in_next_round = async (condition, object) => {
    try {
        var round = await Round.findOneAndUpdate(condition, object)
        if (round) {
            return { "status": 1, "message": "round updated", };
        } else {
            return { "status": 2, "message": "round not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding round", "error": err }
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
            .populate({ path: 'contest_id', populate: { path: 'music_type' } })
            .populate('state')


        if (participate) {
            return { "status": 1, "message": "contest details found", "contest": participate };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
}


round_helper.get_current_round_of_contest = async (id) => {
    let current = moment().toISOString();

    var round = await Round
        .findOne({
            "contest_id": new ObjectId(id),
            "start_date": {
                $lte: current
            },
            "end_date": {
                $gte: current
            }
        });
    if (round) {
        return { "status": 1, "message": "round details found", "round": round };
    } else {
        return { "status": 2, "message": "contest not found" };
    }
};

round_helper.get_current_rounds_of_contests = async (id) => {
    let current = moment().toISOString();
    var round = await Round
        .findOne({
            "contest_id": new ObjectId(id),
            "start_date": {
                $lte: current
            },

        });

    if (round) {
        return { "status": 1, "message": "round details found", "round": round };
    } else {
        return { "status": 2, "message": "contest not found" };
    }
};


round_helper.get_finished_round_of_contest = async (id) => {

    let current = moment().toISOString();
    var round = await Round
        .findOne({
            "contest_id": new ObjectId(id),
            "end_date": {
                $lt: current
            }
        });
    if (round) {
        return { "status": 1, "message": "round details found", "round": round };
    } else {
        return { "status": 2, "message": "contest not found" };
    }
};

module.exports = round_helper;