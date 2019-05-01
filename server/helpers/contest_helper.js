var Contest = require("./../models/contest");
var RoundTracks = require("./../models/round_tracks");
var contest_helper = {};
var mongoose = require('mongoose');
var _ = require('underscore');
var ObjectId = mongoose.Types.ObjectId;


contest_helper.insert_contest = async (object) => {
    let contest = new Contest(object)
    try {
        let contests = await contest.save();
        return { "status": 1, "message": "Record inserted", "contest": contests };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting contest", "error": err };
    }
};


contest_helper.get_contest_by_id = async (id) => {
    try {
        var contest = await Contest
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


contest_helper.update_participant = async (id, no_participants) => {
    try {
        console.log('no_participants', no_participants);

        var contest = await Contest.update({ "_id": new ObjectId(id) }, { $set: { "no_of_participant": no_participants } })
        if (contest) {
            return { "status": 1, "message": "contest updated", };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};


contest_helper.get_all_contest_and_participant = async (start, length, sort = {}) => {
    try {
        var contests = await Contest.find()
        var tot_cnt = contests.length;
        var participate = await Contest.find()
            .populate('music_type')
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


contest_helper.get_all_contests_for_vote = async (filter) => {
    var aggregate = [
        {
            $project: {
                "name": 1
            }
        }
    ];
    if (filter) {
        aggregate.push({
            "$match": filter
        })
    }
    let winner = await Contest.aggregate(aggregate);
    if (winner) {
        return { "status": 1, "message": "Artist  found", "winner": winner }
    } else {
        return { "status": 2, "message": "No  available Artist" }
    }
}


contest_helper.get_all_contests = async (music) => {
    try {
        var participate = await Contest.find()
            .populate('music_type')
        if (participate) {
            return { "status": 1, "message": "contest details found", "contest": participate };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
}

contest_helper.get_current_contest_round = async (music) => {
    try {
        var participate = await Contest.find({ "created_at": 1 })
            .populate('music_type')
        if (participate) {
            return { "status": 1, "message": "contest details found", "contest": participate };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
}

contest_helper.get_all_contest = async () => {
    try {
        var participates = await Contest.find({ "status": { $ne: "complete" } })
            .populate('music_type')
        var tot_cnt = participates.length;

        var participate = await Contest.find()
            .populate('music_type')

        var filter_cnt = participate.length
        if (participate) {
            return { "status": 1, "message": "contest details found", "contest": participate, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
}

contest_helper.get_all_contests_list = async () => {
    try {
        var participates = await Contest.find()
            .populate('music_type')
        var tot_cnt = participates.length;

        var participate = await Contest.find()
            .populate('music_type')

        var filter_cnt = participate.length
        if (participate) {
            return { "status": 1, "message": "contest details found", "contest": participate, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
}


module.exports = contest_helper;