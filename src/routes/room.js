const express = require('express');
const router = express.Router();
const uid = require('uid');

function joinPlayerRoom(IO, socket, room)
{
    socket.join(room);
    IO.to(room).emit('connected', socket.id + " se ha unido a esta partida.");
}

function sendPlayerList(IO, room)
{
    if(IO.sockets.adapter.rooms[room]){
        let p = [];
        let k = null;
        let u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        for(let i=0; i < u.length; i++)
        {
            k = IO.sockets.connected[u[i]];
            if(k){
                if(k.nombre){
                    p.push({id: u[i], nombre: k.nombre});
                }else{
                    p.push({id: u[i], nombre: ''});
                }
            }                   
        }
        IO.to(room).emit('players', p);
    }
}

router.get('/room', (req, res) => {
    let room = req.query.r;
    let Rooms = req.app.locals.Rooms;
    let _Rooms = null;
    //-------------------------------->
    const IO = req.app.locals.IO;
    const Players = Object.keys(IO.sockets.sockets);
    
    //Check if a valid room
    const r = Rooms.find(_room => {
        if(_room)
        {
           return _room.id === room        
        }
    });
    if(!r)
    {
       return res.redirect('/')
    }

    //User Connection
    IO.once('connection', (socket) => {

        //Add User to Players
        const t = Players.find(player => {
            if(player)
            {
               return player === socket.id         
            }
        });
        if(!t)
        {
            console.log("User connected: " + socket.id);
            
            //Add User to a Room
            _Rooms = IO.sockets.adapter.rooms[room];
            if(_Rooms)
            {
                if(_Rooms.length < 8)
                {
                    joinPlayerRoom(IO, socket, room)
                }
                else
                {
                    room = {id: uid(25)};
                    Rooms.push(room);
                    joinPlayerRoom(IO, socket, room)
                }
            }
            else
            {
                joinPlayerRoom(IO, socket, room)
            }
            
            //Send List of Players
            sendPlayerList(IO, room)
        }
        
        //User Disconnect
        socket.on('disconnect', () => {
            //Get player => Players          
            console.log("User disconnected: " + socket.id);
            IO.to(room).emit('disconnected', socket.id + " ha abandonado esta partida.");
            //Send List of Players
            sendPlayerList(IO, room)
        }) 
        
        //Get Data
        socket.on('status', data => {
            console.log(data);
        });
        socket.on('nombre', nombre => {
            socket.nombre = nombre;
            //Send List of Players
            sendPlayerList(IO, room)
        });

        //Send Data
        
    });
    res.render('links/room', {room_id: room});
});

module.exports = router;
