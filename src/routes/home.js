const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('links/home', {rooms: req.app.locals.Rooms});
});

module.exports = router;