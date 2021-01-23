//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var AccountModelSchema = new Schema({
    account_id: String,
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    bank_id: { type: mongoose.Schema.Types.ObjectId, ref: 'bank' },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

var Account = mongoose.model('account', AccountModelSchema, 'account');

module.exports = Account;
