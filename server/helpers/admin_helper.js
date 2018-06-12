var jwt = require('jsonwebtoken');

var Admin = require("./../models/admin");

var admin_helper = {};


admin_helper.insert_admin = async (object) => {
    let admins = new Admin(object)
    try {
        let admin = await admins.save();
        return { "status": 1, "message": "Record inserted", "admin": admin };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting bookmark", "error": err };
    }
};


admin_helper.get_admin_by_id = async (id) => {
    try {
        var admin = await Admin.findOne({ "_id": id }).lean();
        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};

admin_helper.get_all_admin = async () => {
    try {
        var admin = await Admin.find().lean();
        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};

admin_helper.get_login_by_email = async (email, password) => {
    try {
        var admin = await Admin.findOne({ "email": email, "password": password }).lean();
        if (admin) {
            return { "status": 1, "message": "login successful", "admin": admin };
        } else {
            return { "status": 2, "message": "email or password invalid" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};


admin_helper.get_admin_by_email = async (email) => {
    try {
        var admin = await Admin.findOne({ "email": email }).lean();
        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};


admin_helper.update_admin_by_id = async (user_id, object) => {
    try {
        let admin = await Admin.findOneAndUpdate(object);
        if (!admin) {
            return { "status": 2, "message": "Record has not updated" };
        } else {
            return { "status": 1, "message": "Record has been updated", "admin": admin };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating admin", "error": err }
    }
};


module.exports = admin_helper;