
var Flag = require("../models/flag");

var flag_helper = {};

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

flag_helper.insert_flag = async (object) => {
    let flag = new Flag(object)
    try {


        let data = await flag.save();
        return { "status": 1, "message": "Record inserted", "flag": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting flag", "error": err };
    }
};




flag_helper.delete_flag = async (from, to) => {

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

module.exports = flag_helper;