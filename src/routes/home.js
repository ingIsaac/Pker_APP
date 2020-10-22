const express = require('express');
const router = express.Router();
const uid = require('uid');

router.get('/', (req, res) => {
    res.render('links/home');
});

router.get('/created', (req, res) => {
    const r = req.query.r;
    res.render('links/home', {url: process.env._APP_URL, room: r});
});

router.post('/create', (req, res) => {
    const room_id = uid(50);
    req.app.locals.Rooms.push({id: room_id, settings: {available: true, n_turn: 0, p_turn: null, pivote: null, p_knock: null, widows: 2, j_jugados: 0, c_ronda: false, c_table: [], winners_list: []}});
    res.redirect('/created?r=' + room_id);
});

module.exports = router;