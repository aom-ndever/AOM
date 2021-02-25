var copyright_track_notification = require("./../models/copyright_track_notification");
var copyright_track_notification_helper = {};
var mongoose = require("mongoose");
var moment = require("moment");
var ObjectId = mongoose.Types.ObjectId;
var moment = require("moment");
const Admin = require("../models/admin");

copyright_track_notification_helper.insert_copyright_track_notification = async (
  object,
  socket
) => {
  let copyrightTrack = new copyright_track_notification(object);
  try {
    let data = await copyrightTrack.save();
    let admin = await Admin.find({ status: active });
    if (admin) {
      console.log(" : admin ==> ", admin);
    } else {
      console.log(" : admins not found ==> ");
    }
    return { status: 1, message: "Record inserted", notification: data };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while inserting copyright notification",
      error: err,
    };
  }
};

module.exports = copyright_track_notification_helper;
