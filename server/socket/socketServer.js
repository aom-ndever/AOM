var io = require("socket.io")();
var jwtDecode = require("jwt-decode");
var notification_helper = require("./../helpers/notification_helper");
var ArtistNotification = require("./../models/artist_notification");

var myIo = {};
var users = new Map();
var socketToUsers = new Map();
myIo.init = function (server) {
  io.attach(server);
  io.on("connection", function (socket) {
    /**
     * @api {socket on} join Join user to socket
     * @apiName Join user to socket
     * @apiGroup  Sokets
     */

    socket.on("join", async function (token) {
      var decoded = jwtDecode(token);
      var userId = decoded.id;
      var user = users.get(userId);
      if (user) {
        if (user.socketIds.indexOf(socket.id) < 0) {
          user.socketIds.push(socket.id);
        }
      } else {
        var obj = {
          socketIds: [socket.id],
        };
        users.set(userId, obj);
      }
      socketToUsers.set(socket.id, userId);
    });

    /**
     * @api {socket on} disconnect Disconnect Socket
     * @apiName Disconnect Socket
     * @apiGroup  Sokets
     * @apiSuccess (Success 200) {String} flag flag
     */
    socket.on("disconnect", async function () {
      var socketId = this.id;
      var socketToUser = socketToUsers.get(socketId);
      if (socketToUser) {
        var user = users.get(socketToUser);
        if (user) {
          var index = user.socketIds.indexOf(socketId);
          if (index >= 0) {
            user.socketIds.splice(index, 1);
          }
        }
        socketToUsers.delete(socketId);
      }
    });

    socket.on("here", async function (data) {
      console.log("data", data);
    });

    socket.on("user_notifications_count", async function (token) {
      var decoded = jwtDecode(token);
      var userId = decoded.id;
      var user = users.get(userId);
      var count = await ArtistNotification.countDocuments({ isSeen: 1 });
      var socketIds = user ? user.socketIds : [];
      socketIds.forEach((socketId) => {
        io.to(socketId).emit("receive_user_notification_count", {
          count: count,
        });
      });
      console.log("count", count);
    });
  });

  myIo.io = io;
  myIo.users = users;
  myIo.socketToUser = socketToUsers;
};

module.exports = myIo;
