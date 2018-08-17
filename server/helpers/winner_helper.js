var Winner = require("./../models/winners");
var winner_helper = {};
var mongoose = require('mongoose');
var underscore = require('underscore')
var _ = require('underscore');

var ObjectId = mongoose.Types.ObjectId;


winner_helper.insert_winner = async (object) => {
    try {

        var winner = await Winner.insertMany(object)

        if (winner) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding winner", "error": err }
    }
};



module.exports = winner_helper;