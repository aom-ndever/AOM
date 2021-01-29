var jwt = require("jsonwebtoken");

var Artist = require("./../models/artist");
var User = require("./../models/user");
var SerialNumber = require("../models/serial_number");
var serial_number_helper = {};
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

serial_number_helper.get_serial_number = async (serial_number) => {
  try {
    var serialNumber = await SerialNumber.findOne({
      serial_number: serial_number,
    }).lean();
    if (serialNumber) {
      return {
        status: 1,
        message: "serial number found",
        serialNumber: serialNumber,
      };
    } else {
      return { status: 2, message: "Invalid serial number" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding serial number",
      error: err,
    };
  }
};

serial_number_helper.update_uses_count_by_id = async (id, uses_count) => {
  try {
    var serialNumber = await SerialNumber.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      { uses_count: uses_count }
    ).lean();
    if (serialNumber) {
      return {
        status: 1,
        message: "Uses count updated",
        serialNumber: serialNumber,
      };
    } else {
      return { status: 2, message: "serial number not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding serial number",
      error: err,
    };
  }
};

module.exports = serial_number_helper;
