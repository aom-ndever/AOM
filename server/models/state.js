//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var StateModelSchema = new Schema({
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'region' },
    name: { type: String },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var State = mongoose.model('state', StateModelSchema, 'state');

module.exports = State;