//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var ArtistPlaylistModelSchema = new Schema({
    name: String,
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    track_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'track' }],
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });



// Compile model from schema
var ArtistPlaylist = mongoose.model('artistplaylist', ArtistPlaylistModelSchema, 'artistplaylist');

module.exports = ArtistPlaylist;