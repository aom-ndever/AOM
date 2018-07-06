
var Flag = require("../models/flag_user");
var flag_user_helper = {};

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


flag_user_helper.insert_flag = async (object) => {
    let flag = new Flag(object)
    try {
        let data = await flag.save();
        return { "status": 1, "message": "Record inserted", "flag": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting flag", "error": err };
    }
};



flag_user_helper.get_flag = async (id) => {
    try {
        var user = await Flag
            .find({ to: new ObjectId(id) })
            .populate('from')
            .populate('to')

        if (user) {
            return { "status": 1, "message": "user details found", "user": user };
        } else {
            return { "status": 2, "message": "user not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding user", "error": err }
    }
};


flag_user_helper.delete_flag = async (from, to) => {

    try {
        var user = await Flag.remove({ "from": (from), "to": (to) })
        if (user) {
            return { "status": 1, "message": "flag deleted", "user": user };
        } else {
            return { "status": 2, "message": "user not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding user", "error": err }
    }
};

module.exports = flag_user_helper;
