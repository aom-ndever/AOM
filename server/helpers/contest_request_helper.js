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


contest_request_helper.get_contest_request = async () => {

    try {
        var contest = await Contest
            .find()
        if (contest) {
            return { "status": 1, "message": "contest details found", "contest": contest };
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

contest_request_helper.delete_request = async (id) => {
    try {
        let contest = await Contest.findOneAndRemove({ _id: new ObjectId(id) });
        if (!contest) {
            return { status: 2, message: "Record has not Deleted" };
        } else {
            return { status: 1, message: "Record has been Deleted" };
        }
    } catch (err) {
        return { status: 0, message: "Error occured while deleting request", error: err };
    }
};



module.exports = contest_request_helper;