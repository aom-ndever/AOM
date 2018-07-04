//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var BlockModelSchema = new Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Block = mongoose.model('block', BlockModelSchema, 'block');

module.exports = Block;