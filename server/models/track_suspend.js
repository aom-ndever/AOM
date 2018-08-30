//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TrackSuspendModelSchema = new Schema({
    suspend_by: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
    track_id: { type: mongoose.Schema.Types.ObjectId, ref: 'track' },
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: 'artist' },
    account_type: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var TrackFlag = mongoose.model('trackflag', TrackSuspendModelSchema, 'trackflag');

module.exports = TrackFlag;