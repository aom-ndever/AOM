var Contest = require("./../models/contest_request");
var contest_request_helper = {};
var mongoose = require('mongoose');
var _ = require('underscore');
var ObjectId = mongoose.Types.ObjectId;


contest_request_helper.insert_contest_request = async (object) => {
    let contest = new Contest(object)
    try {
        let contests = await contest.save();
        return { "status": 1, "message": "Record inserted", "contest": contests };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting contest", "error": err };
    }
};


contest_request_helper.get_contest_request = async (start, length) => {

    try {
        var contests = await Contest
            .find()

        var tot_cnt = contests.length;

        var contest = await Contest
            .find()
            .populate('admin_id')
            .skip(start)
            .limit(length)

        var filter_cnt = contest.length;
        if (contest) {
            return { "status": 1, "message": "contest details found", "contest": contest, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "contest not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding contest", "error": err }
    }
};

contest_request_helper.get_contest_by_id = async (id) => {

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

contest_request_helper.insert_action = async (id, action) => {
    try {
        let contest = await Contest.update({ _id: new ObjectId(id) }, { $set: { "action": action } });
        if (!contest) {
            return { status: 2, message: "Record has not updated" };
        } else {
            return { status: 1, message: "Record has been updated" };
        }
    } catch (err) {
        return { status: 0, message: "Error occured while updating request", error: err };
    }
};



module.exports = contest_request_helper;