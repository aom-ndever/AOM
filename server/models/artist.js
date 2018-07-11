//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;
var NotificationSettings = new Schema({
    like_by_email: { type: Boolean, default: true },
    comment_by_email: { type: Boolean, default: true },
    like_by_sms: { type: Boolean, default: true },
    comment_by_sms: { type: Boolean, default: true },

});
var ArtistModelSchema = new Schema({
    social_media: {
        type: Object, default: null
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    music_type: { type: mongoose.Schema.Types.ObjectId, ref: 'music_type' },
    gender: { type: String, enum: ["male", "female"] },
    zipcode: Number,
    image: String,
    cover_image: String,
    notification_settings: { type: NotificationSettings, default: true },
    flag: { type: Boolean, default: false },
    status: { type: String, default: "active" },
    no_of_tracks: { type: Number, default: 0 },
    no_of_votes: { type: Number, default: 0 },
    no_of_followers: { type: Number, default: 0 },
    no_of_likes: { type: Number, default: 0 },
    no_of_comments: { type: Number, default: 0 },
    email_verified: Boolean,
    dob: Date,
    featured: { type: Boolean, default: false },
    location: String,
    description: String,
    refresh_token: { type: String },
    last_login: { type: Date },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


ArtistModelSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});
// Compile model from schema
var Artist = mongoose.model('artist', ArtistModelSchema, 'artist');

module.exports = Artist;