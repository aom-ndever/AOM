//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var WinnerModelSchema = new Schema({
    round_id: { type: mongoose.Schema.Types.ObjectId, ref: 'round' },
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    round_id: { type: mongoose.Schema.Types.ObjectId, ref: 'round' },
    track_id: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    //contest_id: { type: mongoose.Schema.Types.ObjectId, ref: 'contest' },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Winner = mongoose.model('winner', WinnerModelSchema, 'winner');

module.exports = Winner;