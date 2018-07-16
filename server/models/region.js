//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var RegionModelSchema = new Schema({

    name: { type: String },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Region = mongoose.model('region', RegionModelSchema, 'region');

module.exports = Region;