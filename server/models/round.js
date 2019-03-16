//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var RoundModelSchema = new Schema({
    contest_id: { type: mongoose.Schema.Types.ObjectId, ref: 'contest' },
    round_name: String,
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date },
    music_type: { type: mongoose.Schema.Types.ObjectId, ref: 'music_type' },
    duration: String,
    //round: Number,
    round: String,
    state: { type: mongoose.Schema.Types.ObjectId, ref: 'state' },
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'region' },
    hip_hop_participants: { type: Number, default: 0 },
    pop_participants: { type: Number, default: 0 },
    rb_participants: { type: Number, default: 0 },
    country_participants: { type: Number, default: 0 },
    rock_participants: { type: Number, default: 0 },
    latin_participants: { type: Number, default: 0 },
    hip_hop_track: [{ type: String }],
    pop_track: [{ type: String }],
    rb_track: [{ type: String }],
    country_track: [{ type: String }],
    rock_track: [{ type: String }],
    latin_track: [{ type: String }],
    track_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'track' }],
    artist_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'artist' }],
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Round = mongoose.model('round', RoundModelSchema, 'round');

module.exports = Round;