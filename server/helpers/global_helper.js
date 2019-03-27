var global_helper = {};
var notification_helper = require('../helpers/notification_helper');


global_helper.rename_keys = async (obj, new_keys) => {
    const key_values = await Object.keys(obj).map(key => {
        const new_key = new_keys[key] || key;
        return { [new_key]: obj[key] };
    });
    return Object.assign({}, ...key_values);
}


global_helper.send_notification = async (notificationObj, socket) => {
    try {
        let notification_data = await notification_helper.add_notifications(
            notificationObj,
            socket
        );

        if (notification_data.status == 1) {
            return {
                status: 1,
                message: "notification sent",
                notification: notification_data
            };
        } else {
            return {
                status: 1,
                message: "notification not sent"
            };
        }
        //}
    } catch (error) {
        return {
            status: 1,
            message: "notification not sent"
        };
    }
};


module.exports = global_helper;