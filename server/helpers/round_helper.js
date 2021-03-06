var Round = require("./../models/round");
var RoundTracks = require("./../models/round_tracks");
var round_helper = {};
var mongoose = require("mongoose");
var _ = require("underscore");
var moment = require("moment");

var ObjectId = mongoose.Types.ObjectId;

round_helper.insert_round = async (object) => {
  let contest = new Round(object);
  try {
    let contests = await contest.save();
    return { status: 1, message: "Record inserted", contest: contests };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while inserting contest",
      error: err,
    };
  }
};

round_helper.get_contest_by_id = async (id) => {
  try {
    var contest = await Round.findOne({ _id: new ObjectId(id) });
    if (contest) {
      return { status: 1, message: "contest details found", contest: contest };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};

round_helper.get_round_by_id = async (id) => {
  try {
    var contest = await Round.findOne({ contest_id: new ObjectId(id) });
    if (contest) {
      return { status: 1, message: "contest details found", contest: contest };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.get_rounds = async (id, condtion) => {
  try {
    var contest = await Round.find({ _id: new ObjectId(id), condition });
    if (contest) {
      return { status: 1, message: "contest details found", contest: contest };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.get_rounds_by_contestid = async (id) => {
  try {
    var contest = await Round.find({ contest_id: new ObjectId(id) })
      .populate({ path: "contest_id", populate: { path: "music_type" } })
      .populate("region");
    // .populate('state')
    if (contest) {
      return { status: 1, message: "contest details found", contest: contest };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.get_last_round = async (id) => {
  try {
    var contest = await Round.findOne({ contest_id: new ObjectId(id) })
      .sort({ created_at: -1 })
      .populate({ path: "contest_id", populate: { path: "music_type" } })
      .populate("region");
    // .populate('state')
    if (contest) {
      return { status: 1, message: "contest details found", contest: contest };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.update_hip_hop_participant = async (
  id,
  no_participants,
  music,
  artist
) => {
  try {
    var contest = await Round.update(
      { contest_id: new ObjectId(id) },
      {
        $set: {
          hip_hop_participants: no_participants,
          hip_hop_track: music.hiphop_tracks_id,
          artist_id: artist,
        },
      }
    );
    if (contest) {
      return { status: 1, message: "contest updated" };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};

round_helper.update_pop_participant = async (
  id,
  no_participants,
  music,
  artist
) => {
  try {
    var contest = await Round.update(
      { contest_id: new ObjectId(id) },
      {
        $set: {
          pop_participants: no_participants,
          pop_track: music.pop_tracks_id,
          artist_id: artist,
        },
      }
    );
    if (contest) {
      return { status: 1, message: "contest updated" };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.update_rb_participant = async (
  id,
  no_participants,
  music,
  artist
) => {
  try {
    var contest = await Round.update(
      { contest_id: new ObjectId(id) },
      {
        $set: {
          rb_participants: no_participants,
          rb_track: music.rb_tracks_id,
          artist_id: artist,
        },
      }
    );
    if (contest) {
      return { status: 1, message: "contest updated" };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.update_ele_participant = async (
  id,
  no_participants,
  music,
  artist
) => {
  try {
    var contest = await Round.update(
      { contest_id: new ObjectId(id) },
      {
        $set: {
          country_participants: no_participants,
          country_track: music.country_track_id,
          artist_id: artist,
        },
      }
    );
    if (contest) {
      return { status: 1, message: "contest updated" };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.update_latin_participant = async (
  id,
  no_participants,
  music,
  artist
) => {
  try {
    var contest = await Round.update(
      { contest_id: new ObjectId(id) },
      {
        $set: {
          latin_participants: no_participants,
          latin_track: music.latin_track_id,
          artist_id: artist,
        },
      }
    );
    if (contest) {
      return { status: 1, message: "contest updated" };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};
round_helper.update_rock_participant = async (
  id,
  no_participants,
  music,
  artist
) => {
  try {
    var contest = await Round.update(
      { contest_id: new ObjectId(id) },
      {
        $set: {
          rock_participants: no_participants,
          rock_track: music.rock_tracks_id,
          artist_id: artist,
        },
      }
    );
    if (contest) {
      return { status: 1, message: "contest updated" };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};

round_helper.add_participant_in_next_round = async (condition, object) => {
  try {
    var round = await Round.findOneAndUpdate(condition, object);
    if (round) {
      return { status: 1, message: "round updated" };
    } else {
      return { status: 2, message: "round not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding round",
      error: err,
    };
  }
};

round_helper.get_all_round = async (start, length, sort = {}) => {
  try {
    var contests = await Round.find();
    var tot_cnt = contests.length;

    var participate = await Round.find()
      .populate({ path: "contest_id", populate: { path: "music_type" } })
      .populate("region")
      // .populate('state')
      .sort(sort)
      .skip(start)
      .limit(length);

    var sorting = _.each(participate, (p) => {});
    var filter_cnt = participate.length;
    if (participate) {
      return {
        status: 1,
        message: "participants details found",
        participate: participate,
        recordsFiltered: filter_cnt,
        recordsTotal: tot_cnt,
      };
    } else {
      return { status: 2, message: "participants not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding participants",
      error: err,
    };
  }
};

round_helper.get_all_contests = async () => {
  try {
    var participate = await Round.find().populate({
      path: "contest_id",
      populate: { path: "music_type" },
    });
    // .populate('state')

    if (participate) {
      return {
        status: 1,
        message: "contest details found",
        contest: participate,
      };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};

round_helper.get_all_round_tracks = async (round) => {
  try {
    var participate = await RoundTracks.find({}, { round1: round }).populate({
      path: "contest_id",
      populate: { path: "music_type" },
    });
    // .populate('state')
    if (participate) {
      return {
        status: 1,
        message: "contest details found",
        contest: participate,
      };
    } else {
      return { status: 2, message: "contest not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};

round_helper.get_current_round_of_contest = async (id) => {
  console.log(" : id ==> ", id);
  var round = await Round.aggregate([
    {
      $match: {
        contest_id: new ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "contest",
        localField: "contest_id",
        foreignField: "_id",
        as: "contest_id",
      },
    },
    {
      $unwind: "$contest_id",
    },
    // {
    //   $match: {
    //     "contest_id.status": {
    //       $eq: "started",
    //     },
    //   },
    // },
    {
      $match: {
        $or: [
          {
            "contest_id.status": "started",
          },
          { "contest_id.status": "finished" },
        ],
      },
    },
    {
      $sort: {
        created_at: -1,
      },
    },
    {
      $limit: 1,
    },
  ]);
  if (round) {
    return { status: 1, message: "round details found", round: round };
  } else {
    return { status: 2, message: "contest not found" };
  }
};

round_helper.get_finished_round_of_contest = async (id) => {
  let current = moment().toISOString();
  var round = await Round.findOne({
    contest_id: new ObjectId(id),
    end_date: {
      $lt: current,
    },
  });
  if (round) {
    return { status: 1, message: "round details found", round: round };
  } else {
    return { status: 2, message: "contest not found" };
  }
};

round_helper.get_track_selected = async (music_type, limit) => {
  try {
    var aggregate = [
      {
        $lookup: {
          from: "track",
          localField: "round1_track",
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
      {
        $match: {
          "music_type.alias": music_type,
        },
      },
      {
        $sort: {
          "track.no_of_votes": -1,
        },
      },
      {
        $limit: limit,
      },
      {
        $project: {
          "artist._id": 1,
          "track._id": 1,
        },
      },
    ];
    let data = await RoundTracks.aggregate(aggregate);
    var filter_cnt = data.length;
    if (data) {
      return { status: 1, message: "data details found", data: data };
    } else {
      return { status: 2, message: "data not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding data",
      error: err,
    };
  }
};

// next round track by artist id and contest id
round_helper.get_track_selected_by_id = async (artist_id, contest_id) => {
  try {
    let data = await RoundTracks.findOne({
      contest_id: ObjectId(contest_id),
      artist_id: ObjectId(artist_id),
    });
    if (data) {
      return { status: 1, message: "data found", data: data };
    } else {
      return { status: 2, message: "data not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding data",
      error: err,
    };
  }
};

round_helper.get_tracks_selected = async (
  artist_id,
  music_type,
  round,
  limit
) => {
  try {
    var aggregate = [
      {
        $match: {
          artist_id: { $in: artist_id },
        },
      },
      {
        $lookup: {
          from: "track",
          localField: round,
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
          localField: "artist_id",
          foreignField: "_id",
          as: "artist",
        },
      },
      {
        $unwind: "$artist",
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
      {
        $match: {
          "music_type.alias": music_type,
        },
      },
      {
        $project: {
          "track._id": 1,
          "artist._id": 1,
        },
      },
      {
        $sort: {
          "track.no_of_votes": -1,
        },
      },
      {
        $limit: limit,
      },
    ];
    let data = await RoundTracks.aggregate(aggregate);
    var filter_cnt = data.length;
    if (data) {
      return { status: 1, message: "data details found", data: data };
    } else {
      return { status: 2, message: "data not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding data",
      error: err,
    };
  }
};

round_helper.get_special_tracks_selected = async (artist_id, round) => {
  try {
    var aggregate = [
      {
        $match: {
          artist_id: { $in: artist_id },
        },
      },
      {
        $lookup: {
          from: "track",
          localField: round,
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
          localField: "artist_id",
          foreignField: "_id",
          as: "artist",
        },
      },
      {
        $unwind: "$artist",
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
      //     $match: {
      //         "music_type.alias": music_type
      //     }
      // },
      {
        $project: {
          "track._id": 1,
          "artist._id": 1,
        },
      },
      {
        $sort: {
          "track.no_of_votes": -1,
        },
      },
      {
        $limit: 1,
      },
    ];
    let data = await RoundTracks.aggregate(aggregate);
    var filter_cnt = data.length;
    if (data) {
      return { status: 1, message: "data details found", data: data };
    } else {
      return { status: 2, message: "data not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding data",
      error: err,
    };
  }
};

round_helper.update_start_date = async (id, obj) => {
  try {
    var contest = await Round.update(
      { contest_id: new ObjectId(id) },
      {
        $set: {
          start_date: obj.start_date,
        },
      }
    );
    if (contest) {
      return { status: 1, message: "Round start date updated" };
    } else {
      return { status: 2, message: "round not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while updating round start date",
      error: err,
    };
  }
};

round_helper.nextDate = async (number, startDate) => {
  if (Number.isInteger(number)) {
    return {
      date: moment(startDate).add(number, "days").format("YYYY-MM-DD HH:MM"),
    };
  } else {
    let hours = 0;
    let minutes = 0;
    let days = 0;
    if (Number(number.toFixed(2)) === 9.33) {
      days = 9;
      hours = 7;
      minutes = 12;
    } else if (Number(number.toFixed(2)) === 10.5) {
      days = 10;
      hours = 12;
    } else if (Number(number.toFixed(2)) === 17.5) {
      days = 17;
      hours = 12;
    } else if (Number(number.toFixed(2)) === 11.67) {
      days = 11;
      hours = 14;
      minutes = 24;
    } else if (Number(number.toFixed(2)) === 8.75) {
      days = 8;
      hours = 18;
    } else if (Number(number.toFixed(2)) === 8.4) {
      days = 8;
      hours = 9;
      minutes = 36;
    } else if (Number(number.toFixed(2)) === 24.5) {
      days = 24;
      hours = 12;
    } else if (Number(number.toFixed(2)) === 16.33) {
      days = 16;
      hours = 7;
      minutes = 12;
    } else if (Number(number.toFixed(2)) === 12.25) {
      days = 12;
      hours = 6;
    } else if (Number(number.toFixed(2)) === 9.8) {
      days = 9;
      hours = 19;
      minutes = 12;
    } else if (Number(number.toFixed(2)) === 8.17) {
      days = 8;
      hours = 3;
      minutes = 50;
    }
    return {
      date: moment(startDate)
        .add(days, "days")
        .add(hours, "hours")
        .add(minutes, "minutes")
        .format("YYYY-MM-DD HH:MM"),
    };
  }
};
module.exports = round_helper;
