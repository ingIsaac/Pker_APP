const express = require('express');
const router = express.Router();
const uid = require('uid');

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}

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

function setupGame(IO, room, req)
{
    const cards = [
        {value: 1, type: "h", img: "ace_of_hearts.svg"},
        {value: 2, type: "h", img: "2_of_hearts.svg"},
        {value: 3, type: "h", img: "3_of_hearts.svg"},
        {value: 4, type: "h", img: "4_of_hearts.svg"},
        {value: 5, type: "h", img: "5_of_hearts.svg"},
        {value: 6, type: "h", img: "6_of_hearts.svg"},
        {value: 7, type: "h", img: "7_of_hearts.svg"},
        {value: 8, type: "h", img: "8_of_hearts.svg"},
        {value: 9, type: "h", img: "9_of_hearts.svg"},
        {value: 10, type: "h", img: "10_of_hearts.svg"},
        {value: 11, type: "h", img: "jack_of_hearts.svg"},
        {value: 12, type: "h", img: "queen_of_hearts.svg"},
        {value: 13, type: "h", img: "king_of_hearts.svg"},
        {value: 1, type: "d", img: "ace_of_diamonds.svg"},
        {value: 2, type: "d", img: "2_of_diamonds.svg"},
        {value: 3, type: "d", img: "3_of_diamonds.svg"},
        {value: 4, type: "d", img: "4_of_diamonds.svg"},
        {value: 5, type: "d", img: "5_of_diamonds.svg"},
        {value: 6, type: "d", img: "6_of_diamonds.svg"},
        {value: 7, type: "d", img: "7_of_diamonds.svg"},
        {value: 8, type: "d", img: "8_of_diamonds.svg"},
        {value: 9, type: "d", img: "9_of_diamonds.svg"},
        {value: 10, type: "d", img: "10_of_diamonds.svg"},
        {value: 11, type: "d", img: "jack_of_diamonds.svg"},
        {value: 12, type: "d", img: "queen_of_diamonds.svg"},
        {value: 13, type: "d", img: "king_of_diamonds.svg"},
        {value: 1, type: "c", img: "ace_of_clubs.svg"},
        {value: 2, type: "c", img: "2_of_clubs.svg"},
        {value: 3, type: "c", img: "3_of_clubs.svg"},
        {value: 4, type: "c", img: "4_of_clubs.svg"},
        {value: 5, type: "c", img: "5_of_clubs.svg"},
        {value: 6, type: "c", img: "6_of_clubs.svg"},
        {value: 7, type: "c", img: "7_of_clubs.svg"},
        {value: 8, type: "c", img: "8_of_clubs.svg"},
        {value: 9, type: "c", img: "9_of_clubs.svg"},
        {value: 10, type: "c", img: "10_of_clubs.svg"},
        {value: 11, type: "c", img: "jack_of_clubs.svg"},
        {value: 12, type: "c", img: "queen_of_clubs.svg"},
        {value: 13, type: "c", img: "king_of_clubs.svg"},
        {value: 1, type: "s", img: "ace_of_spades.svg"},
        {value: 2, type: "s", img: "2_of_spades.svg"},
        {value: 3, type: "s", img: "3_of_spades.svg"},
        {value: 4, type: "s", img: "4_of_spades.svg"},
        {value: 5, type: "s", img: "5_of_spades.svg"},
        {value: 6, type: "s", img: "6_of_spades.svg"},
        {value: 7, type: "s", img: "7_of_spades.svg"},
        {value: 8, type: "s", img: "8_of_spades.svg"},
        {value: 9, type: "s", img: "9_of_spades.svg"},
        {value: 10, type: "s", img: "10_of_spades.svg"},
        {value: 11, type: "s", img: "jack_of_spades.svg"},
        {value: 12, type: "s", img: "queen_of_spades.svg"},
        {value: 13, type: "s", img: "king_of_spades.svg"},
        {value: 0, type: "j", img: "red_joker.svg"}
    ]
    
    let deck = []
    let player_count = 0

    const _Rooms = IO.sockets.adapter.rooms[room];
    if(_Rooms){player_count = _Rooms.length}
    while(deck.length < ((player_count*5) + 5))
    {
        const _c = cards[getRandomInt(0,52)]
        const t = deck.find(c => {return (c.value+c.type) === (_c.value+_c.type)})
        if(!t)
        {
            deck.push(_c);
        }
    }

    if(IO.sockets.adapter.rooms[room]){
        let k = null;
        let u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        for(let i=0; i < u.length; i++)
        {
            let hand = [];
            for(let v=i*5; v < ((i+1)*5); v++)
            {
                hand.push(deck[v]);
            }
            k = IO.sockets.connected[u[i]];
            if(k){
                k.juego = {points: 0, chips: 2, hand: hand};
                k.emit('init', k.juego);
            }                   
        }
        //Room Settings
        const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
        if(Room)
        {
            //Disable Room
            Room.settings.available = false;
            //Set table Cards
            Room.settings.c_table = [];
            for(let i=((player_count*5)-1); i < (((player_count*5)-1)+5); i++)
            {
                Room.settings.c_table.push(deck[i]);                
            }
            //Other Settings
            Room.settings.c_ronda = false;
            Room.settings.n_turn = 0;
            Room.settings.p_knock = null;
            const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
            Room.settings.pivote = u[getRandomInt(0, u.length-1)];
            Room.settings.p_turn = Room.settings.pivote;       
            //Send Data
            IO.to(room).emit('room_data', Room.settings);
        }
    }
}

function nextTurn(IO, room, socket, req)
{
    if(IO.sockets.adapter.rooms[room]){
        const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        const t = u.findIndex(p => p == socket.id)
        let next = null;
        if(t < u.length-1){
            next = u[t+1];
        }
        else{
            next = u[0];
        }

        const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
        if(Room)
        {
            Room.settings.p_turn = next;
            Room.settings.n_turn += 1;
            if(u.length == Room.settings.n_turn)
            {
                Room.settings.c_ronda = true;
            }
            IO.to(room).emit('room_data', Room.settings);
        }
    }
}

router.get('/room', (req, res) => {
    let room = req.query.r;
    let Rooms = req.app.locals.Rooms;
    //-------------------------------->
    const IO = req.app.locals.IO;
    const Players = Object.keys(IO.sockets.sockets);
    
    //Check if a valid room
    const r = Rooms.find(_room => {
        if(_room)
        {
           return _room.id === room && _room.settings.available       
        }
    });
    if(!r)
    {
        return res.redirect('/')
    }
    else
    {
        const _Rooms = IO.sockets.adapter.rooms[r];
        if(_Rooms)
        {
            if(_Rooms.length >= 8)
            {
                return res.redirect('/')
            }        
        }   
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
            const _Rooms = IO.sockets.adapter.rooms[room];
            if(_Rooms)
            {
                if(_Rooms.length < 8)
                {
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
        socket.on('init', () => {
            setupGame(IO, room, req)
        });
        socket.on('nombre', nombre => {
            socket.nombre = nombre;
            //Send List of Players
            sendPlayerList(IO, room)
        });
        socket.on('end_turn', data => {
            nextTurn(IO, room, socket, req);
        });

        //Send Data
        
    });
    res.render('links/room', {room_id: room});
});

module.exports = router;
