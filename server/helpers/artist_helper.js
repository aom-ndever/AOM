var jwt = require('jsonwebtoken');

var Artist = require("./../models/artist");
var User = require("./../models/user");
var Track = require("./../models/track");
var Notification = require("./../models/notification");
const saltRounds = 10;
var artist_helper = {};
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var moment = require('moment');
/*
 * insert_artist is used to insert into artist collection
 * 
 * @param   object     JSON object consist of all property that need to insert in collection
 * 
 * @return  status  0 - If any error occur in inserting artist, with error
 *          status  1 - If artist inserted, with inserted artist's document and appropriate message
 * 
 */
artist_helper.insert_artist = async (object) => {
    let art = new Artist(object)
    try {
        let data = await art.save();
        return { "status": 1, "message": "Record inserted", "artist": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting artist", "error": err };
    }
};

artist_helper.insert_notification = async (object) => {
    let art = new Notification(object)
    try {
        let data = await art.save();
        return { "status": 1, "message": "Record inserted", "artist": data };
    } catch (err) {
        return { "status": 0, "message": "Error occured while inserting artist", "error": err };
    }
};

/*
 * get_artist_by_email is used to fetch single user by email address
 * 
 * @param   email   Specify email address of artist
 * 
 * @return  status  0 - If any error occur in finding artist, with error
 *          status  1 - If artist found, with found artist document
 *          status  2 - If artist not found, with appropriate error message
 * 
 */
artist_helper.get_artist_by_email = async (email) => {
    try {
        var artist = await Artist.findOne({ "email": email }).lean();
        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

/*
 * get_artist_by_id is used to fetch artist details by artist id
 * 
 * @params  artist_id     _id field of artist collection
 * 
 * @return  status 0 - If any internal error occured while fetching artist data, with error
 *          status 1 - If artist data found, with artist object
 *          status 2 - If artist not found, with appropriate message
 */
artist_helper.get_artist_by_id = async (artist_id) => {
    try {

        var artist = await Artist.findOne({ "_id": { "$eq": artist_id } }).populate('music_type');
        if (artist) {
            return { "status": 1, "message": "Artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "Artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};



/*
 * update_artist_by_id is used to update artist data based on artist_id
 * 
 * @param   artist_id         String  _id of artist that need to be update
 * @param   object     JSON    object consist of all property that need to update
 * 
 * @return  status  0 - If any error occur in updating artist, with error
 *          status  1 - If artist updated successfully, with appropriate message
 *          status  2 - If artist not updated, with appropriate message
 * 
 */
artist_helper.update_artist_by_id = async (artist_id, artist_object) => {
    try {
        let artist = await Artist.findOneAndUpdate({ _id: artist_id }, artist_object);
        if (!artist) {
            return { "status": 2, "message": "Record has not updated" };
        } else {
            return { "status": 1, "message": "Record has been updated", "artist": artist };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating artist", "error": err }
    }
};

artist_helper.get_login_by_email = async (email) => {
    try {
        var artist = await Artist.findOne({ "email": email }).lean();
        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


/*
 * get_all_artist is used to get all artist
 * 
 * @return  status 0 - If any internal error occured while fetching artist data, with error
 *          status 1 - If artist data found, with artist's documents
 *          status 2 - If artist not found, with appropriate message
 */
artist_helper.get_all_artist = async (filter = {}) => {

    try {
        var artist = await Artist.aggregate([
            {
                $lookup: {
                    from: "music_type",
                    localField: "music_type",
                    foreignField: "_id",
                    as: "music_type"
                }
            },
            {
                $unwind: "$music_type"
            },
            {
                $match: filter
            },
            {
                $group: {
                    _id: "$_id",
                    total: {
                        $sum: { $sum: ["$no_of_likes", "$no_of_votes"] },
                    },
                    artist: {
                        $first: "$$ROOT"
                    }
                }
            },
            {
                $sort: {
                    total: -1
                }
            }

        ]);

        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};

artist_helper.get_artist_by_filter = async (filter) => {
    try {
        var artist = await Artist
            .find(filter)
            .populate('music_type')
            .lean();

        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

artist_helper.delete_artist_by_admin = async (artist_id) => {

    try {
        var artist = await Artist.findOneAndRemove({ "_id": (artist_id) })
        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};



artist_helper.update_artist_votes = async (artist_id, no_votes) => {

    try {
        var vote = await Artist.findOneAndUpdate({ "_id": new ObjectId(artist_id) }, { "no_of_votes": no_votes })

        if (vote) {
            return { "status": 1, "message": "voting updated", };
        } else {
            return { "status": 2, "message": "vote not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding vote", "error": err }
    }
};

artist_helper.update_artist_comment = async (artist_id, no_votes) => {

    try {
        var vote = await Artist.findOneAndUpdate({ "_id": new ObjectId(artist_id) }, { "no_of_comments": no_votes })

        if (vote) {
            return { "status": 1, "message": "comment updated", };
        } else {
            return { "status": 2, "message": "comment not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding comment", "error": err }
    }
};


artist_helper.update_track_comment = async (id, no_comment) => {
    try {
        var track_data = await Track.findOneAndUpdate({ "_id": new ObjectId(id) }, { "no_of_comments": no_comment })

        if (track_data) {
            return { "status": 1, "message": "comment updated", };
        } else {
            return { "status": 2, "message": "comment not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding comment", "error": err }
    }
};
artist_helper.get_all_artist_by_vote = async () => {
    try {
        var artist = await Artist
            .find({}, {
                "first_name": 1,
                "last_name": 1,
                "gender": 1,
                "music_type": 1,
                "no_of_tracks": 1,
                "no_of_votes": 1,
                "no_of_likes": 1,
                "no_of_followers": 1,
                "no_of_comments": 1,
            })
            .sort({ "no_of_votes": - 1 })
            .limit(10)
            .lean();

        if (artist && artist.length > 0) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};


artist_helper.get_all_artist_by_likes = async () => {
    try {
        var artist = await Artist
            .find({}, {
                "first_name": 1,
                "last_name": 1,
                "gender": 1,
                "music_type": 1,
                "no_of_tracks": 1,
                "no_of_votes": 1,
                "no_of_likes": 1,
                "no_of_followers": 1,
                "no_of_comments": 1,
            })
            .sort({ "no_of_likes": - 1 })
            .limit(10)
            .lean();

        if (artist && artist.length > 0) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};


artist_helper.get_all_artist_by_comment = async () => {
    try {
        var artist = await Artist
            .find({}, {
                "first_name": 1,
                "last_name": 1,
                "gender": 1,
                "music_type": 1,
                "no_of_tracks": 1,
                "no_of_votes": 1,
                "no_of_likes": 1,
                "no_of_followers": 1,
                "no_of_comments": 1,
            })
            .sort({ "no_of_comments": - 1 })
            .limit(10)
            .lean();

        if (artist && artist.length > 0) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding music", "error": err }
    }
};
artist_helper.get_all_active_and_suspend_artist = async (filter) => {
    try {

        var artist = await Artist
            .find(filter, {
                "first_name": 1,
                "last_name": 1,
                "gender": 1,
                "music_type": 1,
                "status": 1,
                "no_of_tracks": 1,
                "no_of_votes": 1,
                "no_of_likes": 1,
                "no_of_followers": 1,
                "no_of_comments": 1,
            })

        if (artist && artist.length > 0) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};

artist_helper.update_artist_status = async (artist_id, status) => {

    try {
        var artist = await Artist.findOneAndUpdate({ "_id": new ObjectId(artist_id) }, { "status": status })

        if (artist) {
            return { "status": 1, "message": "artist status updated", };
        } else {
            return { "status": 2, "message": "artist status found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating artist status", "error": err }
    }
};

artist_helper.delete_artist_image = async (artist_id) => {

    try {
        var artist = await Artist.update({ "_id": (artist_id) }, { $unset: { "image": null } })
        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};
artist_helper.delete_artist_cover_image = async (artist_id) => {

    try {
        var artist = await Artist.update({ "_id": (artist_id) }, { $unset: { "cover_image": null } })
        if (artist) {
            return { "status": 1, "message": "artist details found", "artist": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


artist_helper.update_artist_email = async (artist_id, email) => {
    try {
        let artist = await Artist.findOneAndUpdate({ _id: artist_id }, { "email": email });
        if (!artist) {
            return { "status": 2, "message": "email has not updated" };
        } else {
            return { "status": 1, "message": "email has been updated", "artist": artist };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating artist", "error": err }
    }
};


artist_helper.update_artist_password = async (artist_id, password) => {
    try {
        let artist = await Artist.findOneAndUpdate({ _id: artist_id }, password);
        if (!artist) {
            return { "status": 2, "message": "password has not updated" };
        } else {
            return { "status": 1, "message": "password has been updated", "artist": artist };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating artist", "error": err }
    }
};


artist_helper.get_new_uploads = async (filter = {}) => {
    try {
        var artist = await Artist
            .find(filter)
            .populate('music_type')
            .sort({ "no_of_likes": - 1 })
            .limit(24)
        if (artist) {
            return { "status": 1, "message": "artist details found", "results": artist };
        } else {
            return { "status": 2, "message": "artist not found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while finding artist", "error": err }
    }
};


artist_helper.update_download = async (artist_id, track_id, is_downloadable) => {
    try {
        var artist = await Track.findOneAndUpdate({ "_id": new ObjectId(track_id), "artist_id": new ObjectId(artist_id) }, { "is_downloadable": is_downloadable });
        if (artist) {
            return { "status": 1, "message": "Download status updated", };
        } else {
            return { "status": 2, "message": "artist status found" };
        }
    } catch (err) {
        return { "status": 0, "message": "Error occured while updating artist status", "error": err }
    }
};



module.exports = artist_helper;