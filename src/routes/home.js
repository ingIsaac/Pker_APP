const express = require('express');
const router = express.Router();

module.exports = function(IO) 
{  
    router.get('/', (req, res) => {
        res.render('links/home', {online: Object.keys(IO.sockets.sockets).length});
    });
    
    return router;
}