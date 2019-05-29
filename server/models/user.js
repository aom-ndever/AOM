//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
    social_media: { type: String, enum: ["facebook", "instagram", "twitter", "youtube"] },
    email: { type: String, unique: true },
    image: String,
    facebook_token: { type: String },
    gmail_token: { type: String },
    social_id: String,
    provider: String,
    password: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    music_type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'music_type' }],
    gender: { type: String, enum: ["male", "female"] },
    zipcode: String,
    dob: { type: Date },
    no_of_votes: { type: Number, default: 0 },
    no_of_followers: { type: Number, default: 0 },
    no_of_likes: { type: Number, default: 0 },
    no_of_comments: { type: Number, default: 0 },
    status: { type: String, default: "active" },
    email_verified: Boolean,
    phone_no: Number,
    refresh_token: { type: String },
    flag: { type: Boolean, default: false },
    type: { type: String },
    // state: { type: mongoose.Schema.Types.ObjectId, ref: 'state' },
    state: { type: String },
    last_login: { type: Date },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


UserModelSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one                                
            user.password = hash;
            next();
        });
    });
});
// Compile model from schema
var User = mongoose.model('user', UserModelSchema, 'user');

module.exports = User;