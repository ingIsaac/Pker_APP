const express = require('express');
const router = express.Router();
const uid = require('uid');

router.get('/', (req, res) => {
    res.render('links/home');
});

router.get('/created', (req, res) => {
    const r = req.query.r;
    res.render('links/home', {room: r});
});

router.post('/create', (req, res) => {
    const room_id = uid(50);
    req.app.locals.Rooms.push({id: room_id});
    res.redirect('/created?r=' + room_id);
});

module.exports = router;