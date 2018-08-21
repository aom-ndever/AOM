var jwt = require('jsonwebtoken');
var Admin = require("./../models/admin");
var AdminRequest = require("./../models/admin_request");
var mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;

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
admin_helper.insert_admin_request = async (object) => {
    let admins = new AdminRequest(object)
    try {
        let admin = await admins.save();
        return { "status": 1, "message": "Request Sent", "admin": admin };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting bookmark", "error": err };
    }
};
admin_helper.get_admin_request_by_id = async (id) => {
    try {
        var admin = await AdminRequest.findOne({ "admin_id": id }).lean();
        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};
admin_helper.update_admin_request_by_id = async (id, type) => {
    try {
        var admin = await Admin.findByIdAndUpdate({ "_id": id }, { "account_type": type }).lean();
        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};

admin_helper.update_admin_request_by_adminid = async (id, type) => {

    try {
        var admin = await AdminRequest.findByIdAndUpdate({ "admin_id": new ObjectId(id) }, { "action": type })
        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
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

admin_helper.get_all_admin = async (start, length, sort = {}) => {
    try {
        var admins = await Admin.find()

        var tot_cnt = admins.length;


        var admin = await Admin.find()
            .sort(sort)
            .skip(start)
            .limit(length);

        var filter_cnt = admin.length;

        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};

admin_helper.get_all_admin_suspended = async (start, length, sort = {}) => {
    try {
        var admins = await Admin.find({ "status": "suspended" })

        var tot_cnt = admins.length;


        var admin = await Admin.find({ "status": "suspended" })
            .sort(sort)
            .skip(start)
            .limit(length);

        var filter_cnt = admin.length;

        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
        } else {
            return { "status": 2, "message": "admin not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding admin", "error": err }
    }
};

admin_helper.get_all_admin_request = async (start, length, sort = {}) => {
    try {
        var admins = await Admin.find()

        var tot_cnt = admins.length;


        var admin = await AdminRequest.find()
            .sort(sort)
            .skip(start)
            .limit(length);

        var filter_cnt = admin.length;

        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin, "recordsFiltered": filter_cnt, "recordsTotal": tot_cnt };
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



admin_helper.update_admin_by_id = async (id, object) => {
    try {
        let admin = await Admin.findOneAndUpdate({ _id: id }, object);
        if (!admin) {
            return { "status": 2, "message": "Record has not updated" };
        } else {
            return { "status": 1, "message": "Record has been updated", "admin": admin };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating admin", "error": err }
    }
};

admin_helper.delete_admin = async (admin_id) => {
    try {
        var admin = await Admin.findOneAndRemove({ "_id": (admin_id) })
        if (admin) {
            return { "status": 1, "message": "admin details found", "admin": admin };
        } else {
            return { "status": 2, "message": "admin not found" };
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

admin_helper.update_admin_status = async (admin_id, status) => {
    try {
        var admin = await Admin.update({ _id: admin_id }, { "status": status })
        if (admin) {
            return { "status": 1, "message": "admin status updated", };
        } else {
            return { "status": 2, "message": "admin status found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating admin status", "error": err }
    }
};


admin_helper.update_admin_reset = async (admin_id, reset) => {
    try {
        var admin = await Admin.update({ _id: admin_id }, { "reset": reset })
        if (admin) {
            return { "status": 1, "message": "admin status updated", };
        } else {
            return { "status": 2, "message": "admin status found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating admin status", "error": err }
    }
};




module.exports = admin_helper;