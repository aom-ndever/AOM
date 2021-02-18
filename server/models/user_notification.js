var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var ReciversSchema = new Schema({
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  isSeen: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

var UserNotificationsSchema = new Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "artist" },
    receivers: [{ type: ReciversSchema }],
    type: { type: String, enum: ["notification"], required: true },
    timelineId: { type: String },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Compile model from schema
var UserNotificationsSchema = mongoose.model(
  "user_notifications",
  UserNotificationsSchema,
  "user_notifications"
);

module.exports = UserNotificationsSchema;
