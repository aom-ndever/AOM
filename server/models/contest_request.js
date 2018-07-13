//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var ContestRequestModelSchema = new Schema({
    admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
    name: { type: String },
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    music_type: { type: mongoose.Schema.Types.ObjectId, ref: 'music_type' },
    location: String,
    status: { type: Boolean, default: false },
    no_of_participants: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var ContestRequest = mongoose.model('contest_request', ContestRequestModelSchema, 'contest_request');

module.exports = ContestRequest;