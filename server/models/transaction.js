//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var TransactionModelSchema = new Schema({
    to_account: String,
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    track_id: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    amount: Number,
    transfer_id: String,
    status: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

var Transaction = mongoose.model('transaction', TransactionModelSchema, 'transaction');

module.exports = Transaction;