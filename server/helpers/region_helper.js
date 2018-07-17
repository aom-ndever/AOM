var Region = require("./../models/region");

var Region_helper = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


Region_helper.get_all_region = async () => {
    try {
        var region = await Region
            .find()


        if (region) {
            return { "status": 1, "message": "Region details found", "Region": region };
        } else {
            return { "status": 2, "message": "Region not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

module.exports = Region_helper;