//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var AdminRequestModelSchema = new Schema({
    first_name: String,
    last_name: String,
    admin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
    action: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

var AdminRequest = mongoose.model('admin_request', AdminRequestModelSchema, 'admin_request');

module.exports = AdminRequest;