var Comment = require("./../models/comment");
var Vote = require("./../models/vote_comment");
var Track = require("./../models/track");

var comment_helper = {};
var vote_helper = {};
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

comment_helper.insert_comment_on_artist = async (object) => {
  let comment = new Comment(object);
  try {
    let data = await comment.save();
    return { status: 1, message: "Record inserted", comment: data };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while inserting bookmark",
      error: err,
    };
  }
};

comment_helper.get_comment = async (user_id, track_id) => {
  try {
    var comment = await Comment.find({
      user_id: new ObjectId(user_id),
      track_id: new ObjectId(track_id),
    });
    if (comment) {
      return {
        status: 1,
        message: "comment details found",
        comment: comment.length,
      };
    } else {
      return { status: 2, message: "comment not found" };
    }
  } catch (err) {
    return { status: 0, message: "Error occured while   ", error: err };
  }
};

comment_helper.get_all_artist_comment_by_user_id = async (user_id) => {
  try {
    var comment = await Comment.find({ user_id: new ObjectId(user_id) });
    if (comment) {
      return { status: 1, message: "comment details found", comment: comment };
    } else {
      return { status: 2, message: "comment not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

comment_helper.get_all_comment_by_comment_id = async (comment_id) => {
  try {
    var comment = await Comment.find({ _id: new ObjectId(comment_id) });
    if (comment) {
      return { status: 1, message: "comment details found", comment: comment };
    } else {
      return { status: 2, message: "comment not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

comment_helper.get_all_comments = async (comment_id) => {
  try {
    var track = await Comment.findOne({ _id: new ObjectId(comment_id) });
    if (track) {
      return { status: 1, message: "Track details found", track: track };
    } else {
      return { status: 2, message: "track not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding track",
      error: err,
    };
  }
};

comment_helper.delete_comment = async (user_id, bookmark_id) => {
  try {
    let comment = await Comment.findOneAndRemove({
      user_id: new ObjectId(user_id),
      _id: new ObjectId(bookmark_id),
    });
    if (!comment) {
      return { status: 2, message: "Record has not Deleted" };
    } else {
      return { status: 1, message: "Record has been Deleted" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while deleting comment",
      error: err,
    };
  }
};

comment_helper.delete_comment_by_artist = async (artist_id, comment_id) => {
  try {
    let comment = await Comment.findOneAndRemove({
      artist_id: new ObjectId(artist_id),
      _id: new ObjectId(comment_id),
    });
    if (!comment) {
      return { status: 2, message: "Record has not Deleted" };
    } else {
      return { status: 1, message: "Record has been Deleted" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while deleting comment",
      error: err,
    };
  }
};

comment_helper.delete_comment_by_track = async (track_id) => {
  try {
    let comment = await Comment.deleteMany({
      track_id: new ObjectId(track_id),
    });
    if (!comment) {
      return { status: 2, message: "Record has not Deleted" };
    } else {
      return { status: 1, message: "Record has been Deleted" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while deleting comment",
      error: err,
    };
  }
};

comment_helper.update_votes = async (comment_id, no_votes) => {
  try {
    var vote = await Comment.findOneAndUpdate(
      { _id: new ObjectId(comment_id) },
      { no_of_votes: no_votes }
    );
    if (vote) {
      return { status: 1, message: "voting done" };
    } else {
      return { status: 2, message: "vote not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding vote",
      error: err,
    };
  }
};

comment_helper.get_all_track_by_track_id = async (track_id) => {
  try {
    var track = await Track.findOne({ _id: new ObjectId(track_id) });

    if (track) {
      return { status: 1, message: "Track details found", track: track };
    } else {
      return { status: 2, message: "track not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding track",
      error: err,
    };
  }
};

comment_helper.update_comment = async (track_id, no_comment) => {
  try {
    var track = await Track.findOneAndUpdate(
      { _id: new ObjectId(track_id) },
      { no_of_comments: no_comment }
    );
    if (track) {
      return { status: 1, message: "voting updated" };
    } else {
      return { status: 2, message: "track not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding track",
      error: err,
    };
  }
};

comment_helper.get_all_comment_by_track = async (artist_id) => {
  try {
    var aggregate = [
      {
        $match: {
          artist_id: new ObjectId(artist_id),
        },
      },
    ];
    var comment = await Comment.aggregate(aggregate);
    if (comment && comment.length > 0) {
      return { status: 1, message: "media found", comment: comment };
    } else {
      return { status: 2, message: "No media available" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding media",
      error: err,
    };
  }
};

comment_helper.get_all_comment_by_artist_id = async (artist_id) => {
  try {
    var aggregate = [
      {
        $match: {
          artist_id: new ObjectId(artist_id),
        },
      },
      {
        $lookup: {
          from: "user",
          localField: "user_id",
          foreignField: "_id",
          as: "user_id",
        },
      },
      {
        $unwind: "$user_id",
      },
      {
        $match: {
          $and: [
            { "user_id.is_del": false },
            { "user_id.is_deactivate": false },
          ],
        },
      },
      {
        $lookup: {
          from: "artist",
          localField: "artist_id",
          foreignField: "_id",
          as: "artist_id",
        },
      },
      {
        $unwind: "$artist_id",
      },
      {
        $lookup: {
          from: "track",
          localField: "track_id",
          foreignField: "_id",
          as: "track_id",
        },
      },
      {
        $unwind: "$track_id",
      },
      {
        $sort: { created_at: -1 },
      },
    ];
    var comment = await Comment.aggregate(aggregate);
    if (comment) {
      return { status: 1, message: "comment details found", comment: comment };
    } else {
      return { status: 2, message: "comment not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};

comment_helper.get_all_comment_by_track_id = async (track_id) => {
  try {
    var aggregate = [
      {
        $match: {
          track_id: new ObjectId(track_id),
        },
      },
      {
        $lookup: {
          from: "user",
          localField: "user_id",
          foreignField: "_id",
          as: "user_id",
        },
      },
      {
        $unwind: "$user_id",
      },
      {
        $match: {
          $and: [
            { "user_id.is_del": false },
            { "user_id.is_deactivate": false },
          ],
        },
      },
      {
        $lookup: {
          from: "artist",
          localField: "artist_id",
          foreignField: "_id",
          as: "artist_id",
        },
      },
      {
        $unwind: "$artist_id",
      },
      {
        $lookup: {
          from: "track",
          localField: "track_id",
          foreignField: "_id",
          as: "track_id",
        },
      },
      {
        $unwind: "$track_id",
      },
      {
        $sort: { created_at: -1 },
      },
    ];
    var comment = await Comment.aggregate(aggregate);

    // var comment = await Comment.find({ track_id: new ObjectId(track_id) })
    //   .sort({ created_at: -1 })
    //   .populate("user_id")
    //   .populate("artist_id")
    //   .populate("track_id")
    //   .lean();
    if (comment) {
      return { status: 1, message: "comment details found", comment: comment };
    } else {
      return { status: 2, message: "comment not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding artist",
      error: err,
    };
  }
};
module.exports = comment_helper;
