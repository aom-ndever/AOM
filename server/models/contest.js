//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var ContestModelSchema = new Schema({
    admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
    name: { type: String },
    contest_type: { type: String },
    music_type: { type: mongoose.Schema.Types.ObjectId, ref: 'music_type' },
    no_of_participant: { type: Number, default: 0 },
    max_participation: { type: Number },
    duration: { type: Number },
    status: { type: String, default: "in_progress" },
    created_at: { type: Date, default: Date.now },
}, { versionKey: false });


// Compile model from schema
var Contest = mongoose.model('contest', ContestModelSchema, 'contest');

module.exports = Contest;