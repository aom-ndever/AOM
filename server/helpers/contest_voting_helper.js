var ContestVoting = require("./../models/contest_voting");
var Round = require("./../models/round");
var contest_voting_helper = {};
var mongoose = require("mongoose");
var _ = require("underscore");
var ObjectId = mongoose.Types.ObjectId;

contest_voting_helper.insert_contest_voting_record = async (object) => {
  let contest_voting = new ContestVoting(object);
  try {
    let contest_votings = await contest_voting.save();
    return { status: 1, message: "Record inserted", result: contest_votings };
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while inserting contest voting record",
      error: err,
    };
  }
};

contest_voting_helper.getTracks = async (
  contest_id,
  round,
  search,
  start,
  length
) => {
  try {
    const RE = { $regex: new RegExp(`${search}`, "gi") };
    var aggregate = [
      {
        $match: {
          contest_id: ObjectId(contest_id),
          round: round,
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
        $lookup: {
          from: "artist",
          localField: "track_id.artist_id",
          foreignField: "_id",
          as: "track_id.artist_id",
        },
      },
      {
        $unwind: "$track_id.artist_id",
      },
      {
        $lookup: {
          from: "music_type",
          localField: "track_id.artist_id.music_type",
          foreignField: "_id",
          as: "track_id.artist_id.music_type",
        },
      },
      {
        $unwind: "$track_id.artist_id.music_type",
      },
      {
        $sort: { number_of_vote: -1 },
      },
      {
        $project: {
          artist_id: 0,
          round: 0,
          // contest_id: 0,
          created_at: 0,
        },
      },
    ];
    if (search !== "" && search !== undefined && typeof search === "string") {
      aggregate.push({
        $match: {
          $or: [
            { "track_id.artist_id.first_name": RE },
            { "track_id.name": RE },
          ],
        },
      });
    }

    let tracks = await ContestVoting.aggregate(aggregate);
    var recordsTotal = tracks.length;
    if (start) {
      aggregate.push({
        $skip: start,
      });
    }
    if (length) {
      aggregate.push({
        $limit: length,
      });
    }
    let filterTracks = await ContestVoting.aggregate(aggregate);
    var recordsFiltered = filterTracks.length;

    if (tracks && filterTracks) {
      return {
        status: 1,
        message: "Tracks  found",
        tracks: filterTracks,
        recordsFiltered: recordsFiltered,
        recordsTotal: recordsTotal,
      };
    } else {
      return { status: 2, message: "No  available Track" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding contest",
      error: err,
    };
  }
};

contest_voting_helper.get_track_by_track_id = async (id) => {
  try {
    var track = await ContestVoting.findOne({
      _id: new ObjectId(id),
    });
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

contest_voting_helper.update_votes = async (id, no_votes) => {
  try {
    var vote = await ContestVoting.update(
      { _id: new ObjectId(id) },
      { $set: { number_of_vote: no_votes } }
    );
    if (vote) {
      return { status: 1, message: "voting updated" };
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

contest_voting_helper.topArtist = async (
  contest_id,
  round,
  limit,
  music_type
) => {
  try {
    var aggregate = [
      {
        $match: {
          contest_id: ObjectId(contest_id),
          round: round,
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
          from: "music_type",
          localField: "artist_id.music_type",
          foreignField: "_id",
          as: "artist_id.music_type",
        },
      },
      {
        $unwind: "$artist_id.music_type",
      },
      {
        $match: {
          "artist_id.music_type.alias": music_type,
        },
      },
      {
        $sort: { number_of_vote: -1 },
      },
      {
        $limit: limit,
      },
    ];
    let result = await ContestVoting.aggregate(aggregate);

    if (result) {
      return { status: 1, message: "Top contestant found", result: result };
    } else {
      return { status: 2, message: "contestant not found" };
    }
  } catch (err) {
    return {
      status: 0,
      message: "Error occured while finding top contestant",
      error: err,
    };
  }
};

module.exports = contest_voting_helper;
