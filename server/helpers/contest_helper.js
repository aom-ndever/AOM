var Contest = require("./../models/contest");
var RoundTracks = require("./../models/round_tracks");
var contest_helper = {};
var mongoose = require("mongoose");
var _ = require("underscore");
const round_helper = require("./round_helper");
const Round = require("../models/round");
var ObjectId = mongoose.Types.ObjectId;

contest_helper.insert_contest = async (object) => {
  let contest = new Contest(object);
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

contest_helper.get_contest_by_id = async (id) => {
  try {
    var contest = await Contest.findOne({ _id: new ObjectId(id) });
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

contest_helper.get_contest_All_Detail_by_id = async (id) => {
  try {
    var round = await Round.find({ contest_id: new ObjectId(id) })
      .populate("contest_id")
      .sort({
        created_at: -1,
      });
    if (round) {
      if (round.length > 0) {
        obj = {
          _id: round[0].contest_id._id,
          name: round[0].contest_id.name,
          admin_id: round[0].contest_id.admin_id,
          music_type: round[0].contest_id.music_type,
          contest_type: round[0].contest_id.contest_type,
          duration: round[0].contest_id.duration,
          round: round[0].round,
          totalRound: round[0].totalRound,
          start_date: round[0].start_date,
          created_at: round[0].contest_id.created_at,
        };

        return { status: 1, message: "contest details found", contest: obj };
      } else {
        return { status: 2, message: "contest not found" };
      }
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

contest_helper.update_participant = async (id, no_participants) => {
  try {
    var contest = await Contest.update(
      { _id: new ObjectId(id) },
      { $set: { no_of_participant: no_participants } }
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

contest_helper.get_all_contest_and_participant = async (
  start,
  length,
  sort = {}
) => {
  try {
    var contests = await Contest.find();
    var tot_cnt = contests.length;
    var participate = await Contest.find()
      .populate("music_type")
      .populate("region")
      .populate("state")
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

contest_helper.get_all_contests_for_vote = async (filter) => {
  var aggregate = [
    {
      $project: {
        name: 1,
      },
    },
    {
      $sort: {
        name: 1,
      },
    },
  ];
  if (filter) {
    aggregate.push({
      $match: filter,
    });
  }
  let winner = await Contest.aggregate(aggregate);
  if (winner) {
    return { status: 1, message: "Artist  found", winner: winner };
  } else {
    return { status: 2, message: "No  available Artist" };
  }
};

contest_helper.get_all_contests = async (music) => {
  try {
    var participate = await Contest.find().populate("music_type");
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

contest_helper.get_all_contests_inProgress = async (music) => {
  try {
    var participate = await Contest.find({ status: "in_progress" }).populate(
      "music_type"
    );
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

contest_helper.get_current_contest_round = async (music) => {
  try {
    var participate = await Contest.find({ created_at: 1 }).populate(
      "music_type"
    );
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

contest_helper.get_all_contest = async () => {
  try {
    var participates = await Contest.find({
      status: { $ne: "complete" },
    }).populate("music_type");
    var tot_cnt = participates.length;

    var participate = await Contest.find().populate("music_type");

    var filter_cnt = participate.length;
    if (participate) {
      return {
        status: 1,
        message: "contest details found",
        contest: participate,
        recordsFiltered: filter_cnt,
        recordsTotal: tot_cnt,
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

contest_helper.get_all_contests_list = async (start, length) => {
  try {
    var participates = await Contest.find().populate("music_type");
    var tot_cnt = participates.length;

    var participate = await Contest.find()
      .skip(start)
      .limit(length)
      .populate("music_type");

    var filter_cnt = participate.length;
    if (participate) {
      return {
        status: 1,
        message: "contest details found",
        contest: participate,
        recordsFiltered: filter_cnt,
        recordsTotal: tot_cnt,
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

contest_helper.update_status = async (id, obj) => {
  try {
    var contest = await Contest.update(
      { _id: new ObjectId(id) },
      { $set: { status: obj.status } }
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

module.exports = contest_helper;
