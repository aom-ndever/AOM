//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var SerialNumberModelSchema = new Schema(
  {
    serial_no: String,
    uses_count: Number,
    created_at: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

// Compile model from schema
var SerialNumber = mongoose.model(
  "serial_number",
  SerialNumberModelSchema,
  "serial_number"
);

module.exports = SerialNumber;
