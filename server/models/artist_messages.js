var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var ReciversSchema = new Schema({
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "artist" },
  isSeen: { type: Number, default: 0 },
  isDelete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

var ArtistMessagesSchema = new Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
    receivers: [{ type: ReciversSchema }],
    type: { type: String, enum: ["message"], required: true },
    timelineId: { type: String },
    contest_id: { type: mongoose.Schema.Types.ObjectId, ref: "contest" },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Compile model from schema
var ArtistMessagesSchema = mongoose.model(
  "artist_messages",
  ArtistMessagesSchema,
  "artist_messages"
);

module.exports = ArtistMessagesSchema;
