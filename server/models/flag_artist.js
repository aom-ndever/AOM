//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var FlagArtistModelSchema = new Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    account_type: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var FlagArtist = mongoose.model('flag_artist', FlagArtistModelSchema, 'flag_artist');

module.exports = FlagArtist;