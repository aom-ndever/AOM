var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var moment = require("moment");

var Followers = require("../models/follow");
var follower_helper = {};

follower_helper.follow_artist = async (object) => {
  let follow = new Followers(object);
  try {
    let follows = await follow.save();
    return { status: 1, message: "Record inserted", follows: follow };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while inserting bookmark",
      error: err,
    };
  }
};

follower_helper.get_artist_followers_by_gender = async (artist_id, day) => {
  var to = moment();
  var from = moment(to).subtract(day, "days");

  var aggregate = [
    {
      $match: {
        created_at: { $gt: new Date(from), $lt: new Date(to) },
        artist_id: new ObjectId(artist_id),
      },
    },
    {
      $lookup: {
        from: "user",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
    {
      $group: {
        _id: "$user.gender",
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: null,
        gender: { $push: "$$ROOT" },
        total: { $sum: "$count" },
      },
    },
  ];

  let result = await Followers.aggregate(aggregate);
  if (result && result.length > 0) {
    result[0].gender = result[0].gender.map((gender_data) => {
      gender_data.percentage_value = parseFloat(
        (gender_data.count * 100) / result[0].total
      ).toFixed(2);
      return gender_data;
    });

    return {
      status: 1,
      message: "followers  found",
      results: result[0].gender,
    };
  } else {
    return { status: 2, message: "No  available followers" };
  }
};

follower_helper.get_artist_followers_by_day = async (artist_id, day) => {
  var to = moment().utcOffset(0);
  var from = moment(to).subtract(day, "days").utcOffset(0);
  var aggregate = [
    {
      $match: {
        created_at: { $gt: new Date(from), $lt: new Date(to) },
        artist_id: new ObjectId(artist_id),
      },
    },
    {
      $group: {
        _id: { days: { $dayOfWeek: "$created_at" } },
        count: { $sum: 1 },
      },
    },
  ];

  let result = await Followers.aggregate(aggregate);
  if (result && result.length > 0) {
    return { status: 1, message: "followers  found", results: result };
  } else {
    return { status: 2, message: "No  available followers" };
  }
};

follower_helper.get_artist_followers_by_age = async (artist_id, day) => {
  var to = moment().utcOffset(0);
  var from = moment(to).subtract(day, "days").utcOffset(0);
  var aggregate = [
    {
      $match: {
        created_at: { $gt: new Date(from), $lt: new Date(to) },
        artist_id: new ObjectId(artist_id),
      },
    },
    {
      $lookup: {
        from: "user",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
  ];
  let result = await Followers.aggregate(aggregate);
  if (result && result.length > 0) {
    return { status: 1, message: "followers  found", results: result };
  } else {
    return { status: 2, message: "No  available followers" };
  }
};

follower_helper.get_artist_followers_by_location = async (artist_id, day) => {
  var to = moment().utcOffset(0);
  var from = moment(to).subtract(day, "days").utcOffset(0);
  var aggregate = [
    {
      $match: {
        created_at: { $gt: new Date(from), $lt: new Date(to) },
        artist_id: new ObjectId(artist_id),
      },
    },
    {
      $lookup: {
        from: "user",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },

    // {
    //     $lookup: {
    //         from: "state",
    //         localField: "user.state",
    //         foreignField: "_id",
    //         as: "state"
    //     }
    // },
    // {
    //     $unwind: "$state"
    // },
    {
      $group: {
        _id: {
          _id: "$user.state",
          // /name: "$state.short_name"
        },
        value: { $sum: 1 },
      },
    },
    {
      $sort: { value: -1 },
    },
  ];

  let result = await Followers.aggregate(aggregate);
  if (result && result.length > 0) {
    return { status: 1, message: "followers  found", results: result };
  } else {
    return { status: 2, message: "No  available followers" };
  }
};

follower_helper.get_all_followers = async (id) => {
  try {
    var artist = await Followers.find({ artist_id: id })
      .populate({ path: "user_id" })
      .populate({ path: "artist_id", populate: { path: "music_type" } });
    if (artist) {
      let data = [];
      await artist.map((result) => {
        if (
          result &&
          result.user_id &&
          result.user_id.is_del === false &&
          result.user_id.is_deactivate === false
        ) {
          data.push(result);
        }
      });
      return { status: 1, message: "artist details found", artist: data };
    } else {
      return { status: 2, message: "artist not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

follower_helper.delete_follow = async (artist_id, user_id) => {
  try {
    let user = await Followers.findOneAndRemove({
      user_id: new ObjectId(user_id),
      artist_id: new ObjectId(artist_id),
    });
    if (!user) {
      return { status: 2, message: "Record has not Deleted" };
    } else {
      return { status: 1, message: "Bookmark has been Deleted" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while deleting user",
      error: err,
    };
  }
};

follower_helper.get_all_followers_of_user = async (id) => {
  try {
    var artist = await Followers.find({ user_id: id }, { artist_id: 1 });
    if (artist) {
      return { status: 1, message: "artist details found", artist: artist };
    } else {
      return { status: 2, message: "artist not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

follower_helper.get_all_artist_followers = async (id) => {
  try {
    var artist = await Followers.find({ artist_id: id });
    if (artist) {
      return { status: 1, message: "artist details found", artist: artist };
    } else {
      return { status: 2, message: "artist not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

follower_helper.get_all_followers_of_artist = async (id) => {
  try {
    var artist = await Followers.find({ artist_id: ObjectId(id) })
      .populate("user_id")
      .populate("artist_id");
    if (artist) {
      return { status: 1, message: "artist details found", artist: artist };
    } else {
      return { status: 2, message: "artist not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

follower_helper.get_all_follows = async (id, userid) => {
  try {
    var user = await Followers.find({ artist_id: id, user_id: userid })
      .populate("user_id")
      .populate("artist_id")
      .lean();
    if (user) {
      return { status: 1, message: "user details found", user: user };
    } else {
      return { status: 2, message: "user not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding user",
      error: err,
    };
  }
};

follower_helper.get_all_followers_by_user_id = async (id) => {
  try {
    var user = await Followers.find({
      user_id: id,
    })
      .populate({ path: "user_id", populate: { path: "music_type" } })
      .populate({ path: "artist_id", populate: { path: "music_type" } })
      // .populate({ path: 'user_id', populate: { path: 'state' } })
      // .populate({ path: 'artist_id', populate: { path: 'state' } })
      .lean();
    if (user) {
      let data = [];
      await user.map((result) => {
        if (
          result.artist_id.is_del === false &&
          result.artist_id.is_deactivate === false
        ) {
          data.push(result);
        }
      });
      return { status: 1, message: "user details found", user: data };
    } else {
      return { status: 2, message: "user not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding user",
      error: err,
    };
  }
};

module.exports = follower_helper;
