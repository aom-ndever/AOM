//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var BankModelSchema = new Schema({
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    card_number: Number,
    holder_name: String,
    expiry_date: Date,
    cvv: String,
    status: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

var Bank = mongoose.model('bank', BankModelSchema, 'bank');

module.exports = Bank;