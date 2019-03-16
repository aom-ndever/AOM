//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var RoundTrackModelSchema = new Schema({
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    contest_id: { type: mongoose.Schema.Types.ObjectId, ref: 'contest' },
    round1_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    round2_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    round3_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    round4_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    semi_final_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    final_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    preliminary2_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    preliminary3_track: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });



// Compile model from schema
var RoundTrack = mongoose.model('round_track', RoundTrackModelSchema, 'round_track');

module.exports = RoundTrack;