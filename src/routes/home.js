const express = require('express');
const router = express();
const socketio = require('socket.io');
const io = socketio(express);

io.onconnection(socket => {
    socket.id;
});

router.get('/', (req, res) => {
    res.render('/links/home');
});

module.exports = router;