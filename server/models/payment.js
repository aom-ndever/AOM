//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var PaymentModelSchema = new Schema({
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    card_number: Number,
    expires_on: Date,
    security_code: Number,
    first_name: String,
    last_name: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Payment = mongoose.model('payment', PaymentModelSchema, 'payment');

module.exports = Payment;