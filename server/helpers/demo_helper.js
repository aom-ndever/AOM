var jwt = require('jsonwebtoken');

var Demo = require("./../models/demo");
var demo_helper = {};

demo_helper.insert_user = async (object) => {
    let art = new Demo(object)
    try {
        let data = await art.save();
        return { "status": 1, "message": "Record inserted", "user": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting user", "error": err };
    }
};

demo_helper.get_all_user = async (filter, page_no, page_size) => {
    try {

        var user = await Demo
            .find(filter)
            .skip((page_size * page_no) - page_size)
            .limit(page_size)
            .lean();

        if (user) {
            return { "status": 1, "message": "user details found", "user": user };
        } else {
            return { "status": 2, "message": "user not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};
module.exports = demo_helper;