const express = require('express');
const router = express.Router();
const uid = require('uid');

router.get('/room', (req, res) => {
    let room = req.query.r;
    let rooms = req.app.locals.Rooms;

    //-------------------------------->
    const IO = req.app.locals.IO;
    let Players = req.app.locals.Players;
    
    IO.on('connection', (socket) => {
        console.log("User connected: " + socket.id);
        const t = Players.find(player => {
            if(player)
            {
               return player.id === socket.id         
            }
        });
        if(!t)
        {
            Players.push({id: socket.id});
        }
        //Set to a Room
        const _r = IO.sockets.adapter.rooms[room];
        if(_r)
        {
            if(_r.length < 8)
            {
                socket.join(room);
            }
            else
            {
                room = uid(25);
                rooms.push(room);
                socket.join(room);
            }
        }
        else
        {
            socket.join(room);
        }
        
        IO.to(room).emit('message', socket.id + " se ha unido a esta partida.");

        //Disconnect
        socket.on('disconnect', () => {
            console.log("User disconnected: " + socket.id);
            let t = []
            t = Players.filter(player => {
                if(player)
                {
                    return player.id !== socket.id
                }
            })
            Players = t;
            IO.to(room).emit('message', socket.id + " ha abandonado esta partida.");
        })
    });
    res.render('links/room', {id: room});
});

module.exports = router;
