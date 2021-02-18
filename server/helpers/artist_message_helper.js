var ArtistMessage = require("../models/artist_messages");
var artist_message_helper = {};
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var moment = require("moment");

// var socket = require("../socket/socketServer");

/*
 * get_notifications is used to fetch all user notification data
 *
 * @return  status 0 - If any internal error occured while fetching notification data, with error
 *          status 1 - If notification data found, with notification object
 *          status 2 - If notification not found, with appropriate message
 */
// artist_messages_helper.get_notifications = async (
//   userId,
//   skip = false,
//   limit = false,
//   sort = false
// ) => {
//   try {
//     var count = await ArtistNotifications.count(userId);

//     var aggregate = [
//       {
//         $match: userId,
//       },
//     ];

//     if (sort) {
//       aggregate.push(sort);
//     } else {
//       aggregate.push({
//         $sort: {
//           _id: -1,
//         },
//       });
//     }
//     if (skip) {
//       aggregate.push(skip);
//     }
//     if (limit) {
//       aggregate.push(limit);
//     }
//     var notifications = await ArtistNotifications.aggregate(aggregate);

//     if (notifications) {
//       return {
//         status: 1,
//         message: "notifications found",
//         notifications: notifications,
//       };
//     } else {
//       return {
//         status: 1,
//         message: "No notifications available",
//         notifications: [],
//       };
//     }
//   } catch (err) {
//     return {
//       status: 0,
//       message: "Error occured while finding notifications",
//       error: err,
//     };
//   }
// };

/*
 * get_notifications_count is used to count all user notifications data
 *
 * @return  status 0 - If any internal error occured while counting notification data, with error
 *          status 1 - If notification data count, with notification object
 *          status 2 - If notification not count, with appropriate message
 */
artist_message_helper.get_artist_messages_count = async (sender) => {
  try {
    var count = await ArtistMessage.find({
      receivers: { $elemMatch: { receiver: sender.receiver, isSeen: 0 } },
    }).count();

    console.log(" : count ==> ", count);
    return {
      status: 1,
      message: "messages found",
      count: count,
      receiver: sender.receiver,
    };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding messages",
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

artist_message_helper.add_message = async (messageObj, socket, type = "") => {
  var authUserId = "";
  let message_data;
  try {
    if (type != "") {
      message_data = await ArtistMessage.insertMany(messageObj);
      authUserId = messageObj[0].receivers;
    } else {
      let message = new ArtistMessage(messageObj);
      message_data = await message.save();
      authUserId = messageObj.receivers;
    }

    messageObj.receivers.map(async (data) => {
      var artist_messages_count = await artist_message_helper.get_artist_messages_count(
        {
          receiver: data.receiver,
          isSeen: 0,
        }
      );
      console.log(
        " : artist_messages_count.receiver ==> ",
        artist_messages_count
      );
      reciverId = artist_messages_count.receiver.toString();
      console.log(" : socket.users 1==> ", reciverId);
      console.log(" : socket.users ==> ", socket.users);
      console.log(" : socket.users.get() ==> ", socket.users.get(reciverId));
      var user = await socket.users.get(reciverId);
      console.log(" : user ==> ", user);
      if (user) {
        var socketIds = user.socketIds;
        socketIds.forEach((socketId) => {
          socket.io.to(socketId).emit("receive_artist_messages_count", {
            count: artist_messages_count.count,
          });
        });
      }
    });

    return {
      status: 1,
      message: "Artist message sent",
      inboxMessage: message_data,
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
// artist_messages_helper.notification_seen = async (id, updateObject) => {
//   try {
//     console.log(" : id, updateObject ==> ", id, updateObject);
//     // return false;
//     let resp = await ArtistNotifications.updateMany(
//       { receiver: id },
//       { $set: updateObject }
//     );
//     if (!resp) {
//       return {
//         status: 2,
//         message: "notification not found",
//       };
//     } else {
//       return {
//         status: 1,
//         message: "notification marked as read",
//       };
//     }
//   } catch (err) {
//     return {
//       status: 0,
//       message: "Error occured while marking as read notification",
//       error: err,
//     };
//   }
// };

artist_message_helper.get_all_message = async (id, userInfoID) => {
  try {
    let resp = await ArtistMessage.find({
      receivers: {
        $elemMatch: { receiver: new ObjectId(id), isDelete: false },
      },
    })
      .populate("contest_id")
      .sort({
        createdAt: -1,
      });
    let finalResult = [];
    await resp.map(async (result) => {
      var resObj = {};
      await result["receivers"].map((data, index) => {
        if (data.receiver.toString() === id) {
          resObj = {
            _id: result._id,
            sender: result.sender,
            receivers: data,
            contest_id: result.contest_id,
            message: result.message,
            type: result.type,
            createdAt: moment(result.createdAt)
              .format("LT")
              .substring(0, 5)
              .trim(),
            modifiedAt: result.modifiedAt,
          };
          finalResult.push(resObj);
        }
      });
    });
    if (!resp) {
      return {
        status: 2,
        message: "Messages not found",
      };
    } else {
      console.log(" : resp ==> ", finalResult);
      return {
        status: 1,
        inboxMessages: finalResult,
        message: "Messages found",
      };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while find messages",
      error: err,
    };
  }
};

artist_message_helper.delete_message = async (data, socket) => {
  console.log(" : data ==> ", data);
  try {
    let resp = await ArtistMessage.updateMany(
      {
        _id: { $in: data.ids },
        receivers: { $elemMatch: { receiver: ObjectId(data.reqUser_id) } },
      },
      { $set: { "receivers.$.isDelete": true, "receivers.$.isSeen": 1 } }
    );

    if (resp && resp.ok === 1) {
      let respData = await ArtistMessage.find({
        receivers: {
          $elemMatch: {
            receiver: new ObjectId(data.reqUser_id),
            isDelete: false,
          },
        },
      })
        .populate("contest_id")
        .sort({
          createdAt: -1,
        });
      let finalResult = [];
      await respData.map(async (result) => {
        var resObj = {};
        await result["receivers"].map((receiverData, index) => {
          if (receiverData.receiver.toString() === data.reqUser_id) {
            resObj = {
              _id: result._id,
              sender: result.sender,
              receivers: receiverData,
              contest_id: result.contest_id,
              message: result.message,
              type: result.type,
              createdAt: moment(result.createdAt)
                .format("LT")
                .substring(0, 5)
                .trim(),
              modifiedAt: result.modifiedAt,
            };
            finalResult.push(resObj);
          }
        });
      });
      let messageCount = await ArtistMessage.find({
        receivers: {
          $elemMatch: { receiver: ObjectId(data.reqUser_id), isSeen: 0 },
        },
      }).count();
      if (!respData) {
        return {
          status: 2,
          message: "Messages not found",
        };
      } else {
        console.log(" : resp ==> ", finalResult);
        if (messageCount >= 0) {
          reciverId = data.reqUser_id.toString();
          console.log(" : socket.users 1==> ", reciverId);
          console.log(" : socket.users ==> ", socket.users);
          console.log(
            " : socket.users.get() ==> ",
            socket.users.get(reciverId)
          );
          var user = await socket.users.get(reciverId);
          console.log(" : user ==> ", user);
          if (user) {
            var socketIds = user.socketIds;
            socketIds.forEach((socketId) => {
              socket.io.to(socketId).emit("receive_artist_messages_count", {
                count: messageCount,
              });
            });
          }
        }
        return {
          status: 1,
          inboxMessages: finalResult,
          message: "Message deleted",
        };
      }
    } else {
      return {
        status: 0,
        message: "Message not deleted",
        error: err,
      };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while deleting messages",
      error: err,
    };
  }
};

artist_message_helper.markAsRead = async (data, socket) => {
  try {
    let resp = await ArtistMessage.updateMany(
      {
        _id: { $in: data.ids },
        receivers: { $elemMatch: { receiver: ObjectId(data.reqUser_id) } },
      },
      { $set: { "receivers.$.isSeen": 1 } }
    );

    if (resp && resp.ok === 1) {
      let respData = await ArtistMessage.find({
        receivers: {
          $elemMatch: {
            receiver: new ObjectId(data.reqUser_id),
            isDelete: false,
          },
        },
      })
        .populate("contest_id")
        .sort({
          createdAt: -1,
        });
      let finalResult = [];

      await respData.map(async (result) => {
        var resObj = {};
        await result["receivers"].map((receiverData, index) => {
          if (receiverData.receiver.toString() === data.reqUser_id) {
            resObj = {
              _id: result._id,
              sender: result.sender,
              receivers: receiverData,
              contest_id: result.contest_id,
              message: result.message,
              type: result.type,
              createdAt: moment(result.createdAt)
                .format("LT")
                .substring(0, 5)
                .trim(),
              modifiedAt: result.modifiedAt,
            };
            finalResult.push(resObj);
          }
        });
      });

      let messageCount = await ArtistMessage.find({
        receivers: {
          $elemMatch: { receiver: ObjectId(data.reqUser_id), isSeen: 0 },
        },
      }).count();
      if (!respData) {
        return {
          status: 2,
          message: "Messages not found",
        };
      } else {
        console.log(" : messageCount ==> ", messageCount);
        if (messageCount >= 0) {
          reciverId = data.reqUser_id.toString();
          console.log(" : socket.users 1==> ", reciverId);
          console.log(" : socket.users ==> ", socket.users);
          console.log(
            " : socket.users.get() ==> ",
            socket.users.get(reciverId)
          );
          var user = await socket.users.get(reciverId);
          console.log(" : user ==> ", user);
          if (user) {
            var socketIds = user.socketIds;
            socketIds.forEach((socketId) => {
              socket.io.to(socketId).emit("receive_artist_messages_count", {
                count: messageCount,
              });
            });
          }
        }
        return {
          status: 1,
          inboxMessages: finalResult,
          messageCount: messageCount,
          message: "Message marked as read",
        };
      }
    } else {
      return {
        status: 0,
        message: "Message not marked as read",
        error: err,
      };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while updating messages marked as read",
      error: err,
    };
  }
};

artist_message_helper.getMessageById = async (id, reqestedUserId, socket) => {
  try {
    let updateAsIsSeen = await ArtistMessage.updateOne(
      {
        _id: ObjectId(id),
        receivers: { $elemMatch: { receiver: ObjectId(reqestedUserId) } },
      },
      { $set: { "receivers.$.isSeen": 1 } }
    );
    let resp = await ArtistMessage.findById({ _id: ObjectId(id) }).populate(
      "contest_id"
    );
    let messageCount = await ArtistMessage.find({
      receivers: {
        $elemMatch: { receiver: ObjectId(reqestedUserId), isSeen: 0 },
      },
    }).count();
    if (updateAsIsSeen) {
      console.log(" : resp ==> ", resp);
      console.log(" : messageCount ==> ", messageCount);
      var resObj = {};
      resp["receivers"].map((data, index) => {
        if (data.receiver.toString() === reqestedUserId) {
          resObj = {
            _id: resp._id,
            sender: resp.sender,
            receivers: data,
            contest_id: resp.contest_id,
            message: resp.message,
            type: resp.type,
            displayTime: moment(resp.createdAt)
              .format("LT")
              .substring(0, 5)
              .trim(),
            diffTime: moment(resp.createdAt).fromNow(),
            createdAt: resp.createdAt,
            modifiedAt: resp.modifiedAt,
          };
          console.log(" : resObj ==> ", resObj);
        }
      });

      if (resp) {
        if (messageCount >= 0) {
          reciverId = reqestedUserId.toString();
          var user = socket.users.get(reciverId);
          if (user) {
            var socketIds = user.socketIds;
            socketIds.forEach((socketId) => {
              socket.io.to(socketId).emit("receive_artist_messages_count", {
                count: messageCount,
              });
            });
          }
        }
        return {
          status: 1,
          message: "Message details found",
          messageDetail: resObj,
        };
      } else {
        return { status: 2, message: "Message detail not found" };
      }
    } else {
      return { status: 0, message: "something went wrong" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding message detail",
      error: err,
    };
  }
};

module.exports = artist_message_helper;
