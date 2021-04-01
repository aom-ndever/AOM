//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var ContestVotingModelSchema = new Schema(
  {
    contest_id: { type: mongoose.Schema.Types.ObjectId, ref: "contest" },
    track_id: { type: mongoose.Schema.Types.ObjectId, ref: "track" },
    artist_id: { type: mongoose.Schema.Types.ObjectId, ref: "artist" },
    number_of_vote: { type: Number, default: 0 },
    round: { type: String, default: "preliminary1" },
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Compile model from schema
var ContestVoting = mongoose.model(
  "contest_voting",
  ContestVotingModelSchema,
  "contest_voting"
);

module.exports = ContestVoting;
