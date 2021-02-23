var Purchase = require("./../models/purchased_track");
var purchase_helper = {};
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

purchase_helper.purchase_track = async (object) => {
  let track = new Purchase(object);
  try {
    let data = await track.save();
    return { status: 1, message: "Track Purchased Successfully", track: data };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while purchasing track",
      error: err,
    };
  }
};

purchase_helper.get_purchased_track = async (user_id, start, length) => {
  try {
    var aggregates = [
      {
        $match: {
          user_id: new ObjectId(user_id),
        },
      },
      {
        $lookup: {
          from: "track",
          localField: "track_id",
          foreignField: "_id",
          as: "track",
        },
      },
      {
        $unwind: "$track",
      },
      {
        $lookup: {
          from: "artist",
          localField: "track.artist_id",
          foreignField: "_id",
          as: "artist",
        },
      },
      {
        $unwind: "$artist",
      },
      {
        $match: {
          $and: [{ "artist.is_del": false }, { "artist.is_deactivate": false }],
        },
      },
      {
        $lookup: {
          from: "music_type",
          localField: "artist.music_type",
          foreignField: "_id",
          as: "music_type",
        },
      },
      {
        $unwind: "$music_type",
      },
      // {
      //     '$lookup': {
      //         from: 'state',
      //         localField: 'artist.state',
      //         foreignField: '_id',
      //         as: 'state'
      //     }
      // },
      // {
      //     '$unwind': '$state'
      // },

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
        $lookup: {
          from: "music_type",
          localField: "user.music_type",
          foreignField: "_id",
          as: "music_type",
        },
      },
      {
        $unwind: "$music_type",
      },
      // {
      //     '$lookup': {
      //         from: 'state',
      //         localField: 'user.state',
      //         foreignField: '_id',
      //         as: 'state'
      //     }
      // },
      // {
      //     '$unwind': '$state'
      // },
      {
        $project: {
          "artist.music_type": 0,
          //'artist.state': 0,
          "track.artist_id": 0,
        },
      },
    ];
    var tracks = await Purchase.aggregate(aggregates);

    var tot_cnt = tracks.length;

    var aggregate = [
      {
        $match: {
          user_id: new ObjectId(user_id),
        },
      },
      {
        $lookup: {
          from: "track",
          localField: "track_id",
          foreignField: "_id",
          as: "track",
        },
      },
      {
        $unwind: "$track",
      },
      {
        $lookup: {
          from: "artist",
          localField: "track.artist_id",
          foreignField: "_id",
          as: "artist",
        },
      },
      {
        $unwind: "$artist",
      },
      {
        $match: {
          $and: [{ "artist.is_del": false }, { "artist.is_deactivate": false }],
        },
      },
      {
        $lookup: {
          from: "music_type",
          localField: "artist.music_type",
          foreignField: "_id",
          as: "music_type",
        },
      },
      {
        $unwind: "$music_type",
      },
      // {
      //     '$lookup': {
      //         from: 'state',
      //         localField: 'artist.state',
      //         foreignField: '_id',
      //         as: 'state'
      //     }
      // },
      // {
      //     '$unwind': '$state'
      // },

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
        $lookup: {
          from: "music_type",
          localField: "user.music_type",
          foreignField: "_id",
          as: "music_type",
        },
      },
      {
        $unwind: "$music_type",
      },
      // {
      //     '$lookup': {
      //         from: 'state',
      //         localField: 'user.state',
      //         foreignField: '_id',
      //         as: 'state'
      //     }
      // },
      // {
      //     '$unwind': '$state'
      // },
      {
        $project: {
          "artist.music_type": 0,
          //'artist.state': 0,
          "track.artist_id": 0,
        },
      },

      {
        $skip: start,
      },
      {
        $limit: length,
      },
    ];
    var track = await Purchase.aggregate(aggregate);
    var filter_cnt = track.length;
    if (track) {
      return {
        status: 1,
        message: "Purchased Track found",
        track: track,
        recordsFiltered: filter_cnt,
        recordsTotal: tot_cnt,
      };
    } else {
      return { status: 2, message: "No track available" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding track",
      error: err,
    };
  }
};

purchase_helper.get_purchased_track_by_track_id = async (user_id, track_id) => {
  try {
    var artist = await Bookmark.find({
      user_id: new ObjectId(user_id),
      track_id: new ObjectId(track_id),
    }).populate("artist");
    if (artist) {
      return { status: 1, message: "Artist details found", user: artist };
    } else {
      return { status: 2, message: "Artist not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

module.exports = purchase_helper;
