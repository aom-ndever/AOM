var State = require("./../models/state");
var region = require("./../models/region");
var state_helper = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


state_helper.get_all_state = async (region) => {

    try {

        var aggregate = [

            {
                $lookup: {
                    from: "region",
                    localField: "region",
                    foreignField: "_id",
                    as: "region"
                }
            },
            {
                $unwind: "$region"
            },
            {
                $match: {

                    "region._id": new ObjectId(region)
                }
            }
        ];

        var state = await State.aggregate(aggregate);
        if (state) {
            return { "status": 1, "message": "state details found", "state": state };
        } else {
            return { "status": 2, "message": "state not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


module.exports = state_helper;