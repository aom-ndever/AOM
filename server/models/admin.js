//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var AdminModelSchema = new Schema({
    first_name: String,
    last_name: String,
    account_type: String,
    reset: { type: Number, default: 0 },
    status: { type: String, default: "active" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refresh_token: { type: String },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

var Admin = mongoose.model('admin', AdminModelSchema, 'admin');

module.exports = Admin;