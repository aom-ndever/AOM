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
  try {
    let admin = await Admin.find({ status: "active" });
    if (admin) {
      receivers = [];
      await admin.map((result) => {
        receivers.push({ receiver: ObjectId(result._id) });
      });
      object["receivers"] = receivers;
      let copyrightTrack = new copyright_track_notification(object);
      let data = await copyrightTrack.save();

      object.receivers.map(async (data) => {
        var admin_notification_count = await copyright_track_notification_helper.get_admin_notification_count(
          {
            receiver: data.receiver,
            isSeen: 0,
          }
        );
        reciverId = admin_notification_count.receiver.toString();
        var user = await socket.users.get(reciverId);
        if (user) {
          var socketIds = user.socketIds;
          socketIds.forEach((socketId) => {
            socket.io.to(socketId).emit("receive_admin_notification_count", {
              count: admin_notification_count.count,
            });
          });
        }
      });

      return { status: 1, message: "Record inserted", notification: data };
    } else {
      return { status: 2, message: "Active admins not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while inserting copyright notification",
      error: err,
    };
  }
};

copyright_track_notification_helper.get_admin_notification_count = async (
  sender
) => {
  try {
    var count = await copyright_track_notification
      .find({
        receivers: { $elemMatch: { receiver: sender.receiver, isSeen: 0 } },
      })
      .count();

    return {
      status: 1,
      message: "messages found",
      count: count,
      receiver: sender.receiver,
    };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding notification",
      error: err,
    };
  }
};

copyright_track_notification_helper.get_all_notification = async (id) => {
  try {
    console.log(" : id ==> ", id);
    var aggregate = [
      {
        $match: {
          receivers: {
            $elemMatch: { receiver: ObjectId("5b8a09010c0ad7289889636f") },
          },
        },
      },
      {
        $lookup: {
          from: "artist",
          localField: "artist",
          foreignField: "_id",
          as: "artist",
        },
      },
      {
        $unwind: "$artist",
      },
      {
        $project: {
          _id: "$_id",
          receivers: {
            $filter: {
              input: "$receivers",
              as: "item",
              cond: {
                $eq: ["$$item.receiver", ObjectId("5b8a09010c0ad7289889636f")],
              },
            },
          },
          artist: "$artist",
          track: "$track",
          type: "$type",
          body: "$body",
          createdAt: "$createdAt",
          modifiedAt: "$modifiedAt",
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ];

    var resp = await copyright_track_notification.aggregate(aggregate);
    if (!resp) {
      return {
        status: 2,
        message: "notification not found",
      };
    } else {
      return {
        status: 1,
        notifications: resp,
        message: "notification found",
      };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while find notification",
      error: err,
    };
  }
};

copyright_track_notification_helper.notification_seen = async (
  id,
  updateObject
) => {
  try {
    console.log(" : id, updateObject ==> ", id, updateObject);
    // return false;
    let resp = await copyright_track_notification.updateMany(
      { receivers: { $elemMatch: { receiver: id } } },
      { $set: { "receivers.$.isSeen": 1 } }
    );
    if (!resp) {
      return {
        status: 2,
        message: "notification not found",
      };
    } else {
      return {
        status: 1,
        message: "notification marked as read",
      };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while marking as read notification",
      error: err,
    };
  }
};

module.exports = copyright_track_notification_helper;
