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
    no_of_participants: { type: Number, default: 0 },
    track_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'track' }],
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Round = mongoose.model('round', RoundModelSchema, 'round');

module.exports = Round;