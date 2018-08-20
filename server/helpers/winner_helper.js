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


winner_helper.get_all_shortlisted = async (round) => {
    try {

        var winner = await Winner
            .find()
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .populate('track_id')
            .populate('contest_id')
            .sort({ 'track_id.no_of_votes': -1 })
            .limit(50)

        if (winner && winner.length > 0) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


winner_helper.get_all_round1 = async (round) => {
    try {
        var winner = await Winner
            .find({ "round": round })
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .populate('track_id')
            .populate('contest_id')
            .sort({ 'track_id.no_of_votes': -1 })
            .limit('25')

        if (winner && winner.length > 0) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};
winner_helper.get_all_round2 = async (round) => {
    try {
        var winner = await Winner
            .find({ "round": round })
            .populate({ path: 'artist_id', populate: { path: 'music_type' } })
            .populate('track_id')
            .populate('contest_id')
            .sort({ 'no_of_votes': -1 })
            .limit('25')

        if (winner && winner.length > 0) {
            return { "status": 1, "message": "winner details found", "winner": winner };
        } else {
            return { "status": 2, "message": "winner not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};
module.exports = winner_helper;