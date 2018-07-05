
var Block = require("../models/block");
var block_helper = {};

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


block_helper.insert_flag = async (object) => {
    let flag = new Block(object)
    try {
        let data = await flag.save();
        return { "status": 1, "message": "Record inserted", "flag": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting flag", "error": err };
    }
};



block_helper.get_flag = async (id) => {
    try {
        var artist = await Block
            .find({ to: new ObjectId(id) })
            .populate('from')
            .populate('to')

        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


block_helper.delete_flag = async (from, to) => {

    try {
        var artist = await Block.remove({ "from": (from), "to": (to) })
        if (artist) {
            return { "status": 1, "message": "flag deleted", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

module.exports = block_helper;
