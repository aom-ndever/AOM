var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var ReciversSchema = new Schema({
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "artist" },
  isSeen: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

var CopyrightTrackNotificationSchema = new Schema(
  {
    artist: { type: mongoose.Schema.Types.ObjectId, ref: "artist" },
    receivers: [{ type: ReciversSchema }],
    track: { type: mongoose.Schema.Types.ObjectId, ref: "track" },
    type: { type: String, enum: ["notification"], required: true },
    timelineId: { type: String },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Compile model from schema
var CopyrightTrackNotifications = mongoose.model(
  "copyright_track_notification",
  CopyrightTrackNotificationSchema,
  "copyright_track_notification"
);

module.exports = CopyrightTrackNotifications;
