const express = require('express');
const router = express.Router();
const uid = require('uid');

module.exports = function(app, IO) 
{
    async function checkRooms(IO)
    {
        let Rooms = app.locals.Rooms;
        let u = null;
        let v = [];
        if(Rooms)
        {
            for(let i=0; i < Rooms.length; i++)
            {
                u = IO.sockets.adapter.rooms[Rooms[i].id];
                if(u)
                {
                    if(u.length == 0)
                    {
                        v = Rooms.filter(r => r.id != Rooms[i].id)
                    }
                }
                else
                {
                    v = Rooms.filter(r => r.id != Rooms[i].id)
                }     
            }    
            app.locals.Rooms = v;
        }
    }

    router.get('/', (req, res) => {
        res.render('links/home', {online: Object.keys(IO.sockets.sockets).length});
    });
    
    router.get('/created', (req, res) => {
        const r = req.query.r;
        res.render('links/home', {url: process.env._APP_URL, room: r, online: Object.keys(IO.sockets.sockets).length});
    });
    
    router.post('/create', (req, res) => {
        checkRooms(IO); //Delete Empty Rooms
        const room_id = uid(50);
        req.app.locals.Rooms.push({id: room_id, settings: {available: true, game_in_course: false, deck_splited: false, n_turn: 0, p_turn: null, pivote: null, p_knock: null, p_cantake: null, widows: 2, j_jugados: 0, comodin: null, c_ronda: false, c_table: [], chats: []}});
        res.redirect('/created?r=' + room_id);
    });
    
    return router;
}