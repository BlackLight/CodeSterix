// Initialize exports in case we include this file
// on client-side using require.js
var clientSide = false;
if (typeof window !== "undefined") {
    clientSide = true;
    var exports = {};
}

exports.MessageTypes = {
    HANDSHAKE_REQUEST  : "Handshake request",
    HANDSHAKE_RESPONSE : "Handshake response",
    HEARTBEAT_REQUEST  : "Heartbeat request",
    HEARTBEAT_RESPONSE : "Heartbeat response",
    ROOM_REGISTRATION  : "Room registration",
    ROOM_SYNC          : "Room sync",
    ROOM_INFO_UPDATE   : "Room info update",
    CONNECTION_CLOSE   : "Connection close",
    USER_LIST_CHANGED  : "User list changed",
    PLAYLIST_CHANGED   : "Playlist changed",
    CHAT_MSG           : "Chat message",
    VIDEO_PLAY         : "Video play",
    VIDEO_PAUSE        : "Video pause",
    VIDEO_RESUME       : "Video resume",
    VIDEO_END          : "Video end",
    VIDEO_SEEK         : "Video seek",
    SEEK_CORRECTION    : "Video seek correction",
    HANDSHAKE_ERROR    : "Error",
    SESSION_ERROR      : "Session error",
    HTTP_ERROR         : "HTTP error",
    ROOM_TYPING_START  : "Room typing start",
    ROOM_TYPING_END    : "Room typing end",
};

exports.VideoStatus = {
    PLAY      : "Play",
    PAUSE     : "Pause",
    END       : "End",
    UNSTARTED : "Unstarted",
    CUE       : "Cue",
    BUFFER    : "Buffer",
};

exports.Events = {
    USER_CONNECT      : "User connection",
    USER_DISCONNECT   : "User disconnection",
    VIDEO_ADD         : "Video added",
    ROOM_MSG          : "Room message",
    ROOM_TYPING_START : "Room typing start",
    ROOM_TYPING_END   : "Room typing end",
};

exports.HeartBeatTimeout = 2000;
exports.HeartBeatInterval = 2000;
exports.MaxSocketID = Math.pow(2, 31) - 1;

if (clientSide) {
    define("protocol", [], function() {
	   "use strict";
	   return exports;
    });
}

