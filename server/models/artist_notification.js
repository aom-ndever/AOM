var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var ArtistNotificationsSchema = new Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "artist" },
    type: {
      type: String,
      enum: ["like", "comment", "follow", "flagged"],
      required: true,
    },
    timelineId: { type: String },
    body: { type: String, required: true },
    isSeen: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Compile model from schema
var ArtistNotifications = mongoose.model(
  "artist_notifications",
  ArtistNotificationsSchema,
  "artist_notifications"
);

module.exports = ArtistNotifications;
