var global_helper = {};
var notification_helper = require("../helpers/notification_helper");
var user_notification_helper = require("../helpers/user_notification_helper");
var artist_message_helper = require("../helpers/artist_message_helper");

global_helper.rename_keys = async (obj, new_keys) => {
  const key_values = await Object.keys(obj).map((key) => {
    const new_key = new_keys[key] || key;
    return { [new_key]: obj[key] };
  });
  return Object.assign({}, ...key_values);
};

global_helper.send_notification = async (notificationObj, socket) => {
  try {
    console.log(" :  ==> ", notificationObj, socket);
    let message_data = await notification_helper.add_notifications(
      notificationObj,
      socket
    );

    if (notification_data.status == 1) {
      return {
        status: 1,
        message: "notification sent",
        notification: notification_data,
      };
    } else {
      return {
        status: 1,
        message: "notification not sent",
      };
    }
    //}
  } catch (error) {
    return {
      status: 1,
      message: "notification not sent",
    };
  }
};

global_helper.send_user_notification = async (notificationObj, socket) => {
  try {
    let notification_data = await user_notification_helper.add_notifications(
      notificationObj,
      socket
    );

    if (notification_data.status == 1) {
      return {
        status: 1,
        message: "User notification sent",
        notification: notification_data,
      };
    } else {
      return {
        status: 1,
        message: "User notification not sent",
      };
    }
    //}
  } catch (error) {
    return {
      status: 1,
      message: "User notification not sent",
    };
  }
};

global_helper.send_artist_message = async (messageObj, socket) => {
  try {
    console.log(" : messageObj ==> ", messageObj);
    let message_data = await artist_message_helper.add_message(
      messageObj,
      socket
    );
    console.log(" : message_data ==> ", message_data);
    if (message_data.status == 1) {
      return {
        inboxMessage: message_data,
      };
    } else {
      return {
        status: 1,
        message: "Artits message not sent",
      };
    }
    //}
  } catch (error) {
    return {
      status: 1,
      message: "Artist message not sent",
    };
  }
};

module.exports = global_helper;
