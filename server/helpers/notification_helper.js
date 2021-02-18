var ArtistNotifications = require("../models/artist_notification");
var artist_notifications_helper = {};
// var socket = require("../socket/socketServer");

/*
 * get_notifications is used to fetch all user notification data
 *
 * @return  status 0 - If any internal error occured while fetching notification data, with error
 *          status 1 - If notification data found, with notification object
 *          status 2 - If notification not found, with appropriate message
 */
artist_notifications_helper.get_notifications = async (
  userId,
  skip = false,
  limit = false,
  sort = false
) => {
  try {
    var count = await ArtistNotifications.count(userId);

    var aggregate = [
      {
        $match: userId,
      },
    ];

    if (sort) {
      aggregate.push(sort);
    } else {
      aggregate.push({
        $sort: {
          _id: -1,
        },
      });
    }
    if (skip) {
      aggregate.push(skip);
    }
    if (limit) {
      aggregate.push(limit);
    }
    var notifications = await ArtistNotifications.aggregate(aggregate);

    if (notifications) {
      return {
        status: 1,
        message: "notifications found",
        notifications: notifications,
      };
    } else {
      return {
        status: 1,
        message: "No notifications available",
        notifications: [],
      };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding notifications",
      error: err,
    };
  }
};

/*
 * get_notifications_count is used to count all user notifications data
 *
 * @return  status 0 - If any internal error occured while counting notification data, with error
 *          status 1 - If notification data count, with notification object
 *          status 2 - If notification not count, with appropriate message
 */
artist_notifications_helper.get_notifications_count = async (sender) => {
  try {
    var count = await ArtistNotifications.find(sender).count();
    return {
      status: 1,
      message: "notifications found",
      count: count,
    };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding notifications",
      error: err,
    };
  }
};

/*
 * add_notifications is used to insert into user_notifications collection
 *
 * @param   notificationObj     JSON object consist of all property that need to insert in collection
 *
 * @return  status  0 - If any error occur in inserting user_notifications, with error
 *          status  1 - If user_notifications inserted, with inserted user_notifications document and appropriate message
 *
 */

artist_notifications_helper.add_notifications = async (
  notificationObj,
  socket,
  type = ""
) => {
  var authUserId = "";
  let notification_data;
  try {
    if (type != "") {
      notification_data = await ArtistNotifications.insertMany(notificationObj);
      authUserId = notificationObj[0].receiver;
    } else {
      let notification = new ArtistNotifications(notificationObj);
      notification_data = await notification.save();
      authUserId = notificationObj.receiver;
    }

    var user_notifications_count = await artist_notifications_helper.get_notifications_count(
      {
        receiver: authUserId,
        isSeen: 0,
      }
    );

    console.log(" : authUserId ==> ", authUserId);
    var user = socket.users.get(authUserId);
    console.log(" : user ==> ", user);
    if (user) {
      var socketIds = user.socketIds;
      socketIds.forEach((socketId) => {
        socket.io.to(socketId).emit("receive_artist_notification_count", {
          count: user_notifications_count.count,
        });
      });
    }
    return {
      status: 1,
      message: "notification sent",
      notification: notification_data,
    };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while sending notification",
      error: err,
    };
  }
};

/*
 * notification_seen is used to update status of notification unread to read from database
 *
 * @param   id String  _id of user that need to be delete
 * @param   updateObject Object  Object of record need to be delete
 *
 * @return  status  0 - If any error occur in updating of notification, with error
 *          status  1 - If notification updating successfully, with appropriate message
 *

 */
artist_notifications_helper.notification_seen = async (id, updateObject) => {
  try {
    console.log(" : id, updateObject ==> ", id, updateObject);
    // return false;
    let resp = await ArtistNotifications.updateMany(
      { receiver: id },
      { $set: updateObject }
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

artist_notifications_helper.get_all_notification = async (id) => {
  try {
    let resp = await ArtistNotifications.find({ receiver: id }).sort({
      createdAt: -1,
    });
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

module.exports = artist_notifications_helper;
