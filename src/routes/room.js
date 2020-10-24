const express = require('express');
const router = express.Router();
const cards = [
    {value: 14, type: "h", wildcard_value: 1, type_value: 30, img: "ace_of_hearts.svg"},
    {value: 2, type: "h", wildcard_value: 2, type_value: 30, img: "2_of_hearts.svg"},
    {value: 3, type: "h", wildcard_value: 3, type_value: 30, img: "3_of_hearts.svg"},
    {value: 4, type: "h", wildcard_value: 4, type_value: 30, img: "4_of_hearts.svg"},
    {value: 5, type: "h", wildcard_value: 5, type_value: 30, img: "5_of_hearts.svg"},
    {value: 6, type: "h", wildcard_value: 6, type_value: 30, img: "6_of_hearts.svg"},
    {value: 7, type: "h", wildcard_value: 7, type_value: 30, img: "7_of_hearts.svg"},
    {value: 8, type: "h", wildcard_value: 8, type_value: 30, img: "8_of_hearts.svg"},
    {value: 9, type: "h", wildcard_value: 9, type_value: 30, img: "9_of_hearts.svg"},
    {value: 10, type: "h", wildcard_value: 10, type_value: 30, img: "10_of_hearts.svg"},
    {value: 11, type: "h", wildcard_value: 11, type_value: 30, img: "jack_of_hearts.svg"},
    {value: 12, type: "h", wildcard_value: 12, type_value: 30, img: "queen_of_hearts.svg"},
    {value: 13, type: "h", wildcard_value: 13, type_value: 30, img: "king_of_hearts.svg"},
    {value: 14, type: "d", wildcard_value: 1, type_value: 10, img: "ace_of_diamonds.svg"},
    {value: 2, type: "d", wildcard_value: 2, type_value: 10, img: "2_of_diamonds.svg"},
    {value: 3, type: "d", wildcard_value: 3, type_value: 10, img: "3_of_diamonds.svg"},
    {value: 4, type: "d", wildcard_value: 4, type_value: 10, img: "4_of_diamonds.svg"},
    {value: 5, type: "d", wildcard_value: 5, type_value: 10, img: "5_of_diamonds.svg"},
    {value: 6, type: "d", wildcard_value: 6, type_value: 10, img: "6_of_diamonds.svg"},
    {value: 7, type: "d", wildcard_value: 7, type_value: 10, img: "7_of_diamonds.svg"},
    {value: 8, type: "d", wildcard_value: 8, type_value: 10, img: "8_of_diamonds.svg"},
    {value: 9, type: "d", wildcard_value: 9, type_value: 10, img: "9_of_diamonds.svg"},
    {value: 10, type: "d", wildcard_value: 10, type_value: 10, img: "10_of_diamonds.svg"},
    {value: 11, type: "d", wildcard_value: 11, type_value: 10, img: "jack_of_diamonds.svg"},
    {value: 12, type: "d", wildcard_value: 12, type_value: 10, img: "queen_of_diamonds.svg"},
    {value: 13, type: "d", wildcard_value: 13, type_value: 10, img: "king_of_diamonds.svg"},
    {value: 14, type: "c", wildcard_value: 1, type_value: 20, img: "ace_of_clubs.svg"},
    {value: 2, type: "c", wildcard_value: 2, type_value: 20, img: "2_of_clubs.svg"},
    {value: 3, type: "c", wildcard_value: 3, type_value: 20, img: "3_of_clubs.svg"},
    {value: 4, type: "c", wildcard_value: 4, type_value: 20, img: "4_of_clubs.svg"},
    {value: 5, type: "c", wildcard_value: 5, type_value: 20, img: "5_of_clubs.svg"},
    {value: 6, type: "c", wildcard_value: 6, type_value: 20, img: "6_of_clubs.svg"},
    {value: 7, type: "c", wildcard_value: 7, type_value: 20, img: "7_of_clubs.svg"},
    {value: 8, type: "c", wildcard_value: 8, type_value: 20, img: "8_of_clubs.svg"},
    {value: 9, type: "c", wildcard_value: 9, type_value: 20, img: "9_of_clubs.svg"},
    {value: 10, type: "c", wildcard_value: 10, type_value: 20, img: "10_of_clubs.svg"},
    {value: 11, type: "c", wildcard_value: 11, type_value: 20, img: "jack_of_clubs.svg"},
    {value: 12, type: "c", wildcard_value: 12, type_value: 20, img: "queen_of_clubs.svg"},
    {value: 13, type: "c", wildcard_value: 13, type_value: 20, img: "king_of_clubs.svg"},
    {value: 14, type: "s", wildcard_value: 1, type_value: 40, img: "ace_of_spades.svg"},
    {value: 2, type: "s", wildcard_value: 2, type_value: 40, img: "2_of_spades.svg"},
    {value: 3, type: "s", wildcard_value: 3, type_value: 40, img: "3_of_spades.svg"},
    {value: 4, type: "s", wildcard_value: 4, type_value: 40, img: "4_of_spades.svg"},
    {value: 5, type: "s", wildcard_value: 5, type_value: 40, img: "5_of_spades.svg"},
    {value: 6, type: "s", wildcard_value: 6, type_value: 40, img: "6_of_spades.svg"},
    {value: 7, type: "s", wildcard_value: 7, type_value: 40, img: "7_of_spades.svg"},
    {value: 8, type: "s", wildcard_value: 8, type_value: 40, img: "8_of_spades.svg"},
    {value: 9, type: "s", wildcard_value: 9, type_value: 40, img: "9_of_spades.svg"},
    {value: 10, type: "s", wildcard_value: 10, type_value: 40, img: "10_of_spades.svg"},
    {value: 11, type: "s", wildcard_value: 11, type_value: 40, img: "jack_of_spades.svg"},
    {value: 12, type: "s", wildcard_value: 12, type_value: 40, img: "queen_of_spades.svg"},
    {value: 13, type: "s", wildcard_value: 13, type_value: 40, img: "king_of_spades.svg"},
    {value: 0, type: "j", wildcard_value: 0, type_value: 0, img: "red_joker.svg"}
]

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
    let deck = []
    let player_count = 0

    const _Rooms = IO.sockets.adapter.rooms[room];
    if(_Rooms){player_count = _Rooms.length}
    while(deck.length < ((player_count*5) + 5))
    {
        const _c = cards[getRandomInt(0,52)]
        const t = deck.find(c => (c.value+c.type) === (_c.value+_c.type))
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
                k.emit('set_player_cards', k.juego);
                k.emit('player_data', k.juego);
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
            for(let i=(player_count*5); i < ((player_count*5)+5); i++)
            {
                Room.settings.c_table.push(deck[i]);                
            }
            //Other Settings
            Room.settings.c_ronda = false;
            Room.settings.n_turn = 0;
            Room.settings.p_knock = null;
            Room.settings.p_cantake = null;
            const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
            Room.settings.pivote = u[getRandomInt(0, u.length-1)];
            Room.settings.p_turn = Room.settings.pivote;       
            //Send Data
            IO.to(room).emit('room_data', Room.settings);
            IO.to(room).emit('init');
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
            if(Room.settings.p_knock == next)
            {
                return endGame(IO, room, socket, req);
            }
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

function pickCard(IO, room, socket, req, data)
{
    //Set Card Table => Player
    const v = socket.juego.hand.findIndex(c => (c.value + c.type) === data.p_card);
    socket.juego.hand[v] = cards.find(c => (c.value + c.type) === data.t_card);
    //Send
    socket.emit('set_player_cards', socket.juego);

    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        //Set Card Player => Table
        const _v = Room.settings.c_table.findIndex(c => (c.value + c.type) === data.t_card);
        Room.settings.c_table[_v] = cards.find(c => (c.value + c.type) === data.p_card);
        //Send
        IO.to(room).emit('set_table_cards', Room.settings);
    }
}

function swapCard(socket, data)
{
    const p = socket.juego.hand.findIndex(c => (c.value + c.type) === data.prev_card);
    const n = socket.juego.hand.findIndex(c => (c.value + c.type) === data.new_card);
    socket.juego.hand[n] = cards.find(c => (c.value + c.type) === data.prev_card);
    socket.juego.hand[p] = cards.find(c => (c.value + c.type) === data.new_card);
    socket.emit('set_player_cards', socket.juego);
}

function tocar(IO, room, req, socket)
{
    if(IO.sockets.adapter.rooms[room]){
        const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        const t = u.findIndex(p => p == socket.id)
        let canTake = null;
        if(t === 0){
            canTake = u[u.length-1];
        }
        else{
            canTake = u[t-1];
        }

        const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
        if(Room)
        {
            Room.settings.p_knock = socket.id;
            Room.settings.p_cantake = canTake;
            //Send
            nextTurn(IO, room, socket, req);
        }
    }
}

function takeAll(IO, room, req, socket)
{
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        const c_table = Room.settings.c_table;
        const c_player = socket.juego.hand;
        
        Room.settings.c_table = c_player;
        Room.settings.c_ronda = true;

        socket.juego.hand = c_table;

        socket.emit('set_player_cards', socket.juego);
        IO.to(room).emit('room_data', Room.settings);
    }
}

function buyWidow(IO, room, socket, req)
{
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        const cost = 500;
        if(socket.juego.points >= cost)
        {
            socket.juego.points -= 500;
            socket.juego.chips += 1;
            Room.settings.widows -= 1;
        }       

        socket.emit('player_data', socket.juego);
        IO.to(room).emit('room_data', Room.settings);
    }
}

function endGame(IO, room, socket, req)
{
    if(IO.sockets.adapter.rooms[room]){
        const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        const scores = [];
        const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
        if(Room)
        {
            for(let i=0; i < u.length; i++)
            {          
                const k = IO.sockets.connected[u[i]];
                if(k)
                {
                    const score = scoreHand(k.juego.hand, Room);
                    console.log(score);
                    k.juego.points += score;
                    scores.push({id: u[i], score: score});
                }                   
            }
        }
    }
}

function scoreHand(hand, Room)
{
    const orderType = getOrderType(hand, Room);
    const repetedType = getRepetedType(hand, Room);
    if(orderType > 0)
    {
        return orderType;
    }
    else if(repetedType > 0)
    {
        return repetedType;
    }

    return 0;
}

function isComodin(card, Room)
{
    if(card.value === 0 || card.wildcard_value === Room.settings.j_jugados){return true}
}

function getOrderType(hand, Room)
{
    let r = 400;      
    let v = hand[0];
    let s = 0;
    let q = 0;
    let k = v.value;
    for(let i=0; i < hand.length; i++)
    {       
        if(s >= 14 && hand[i].value < s)
        {
            k = hand[i].value;
        }
        s = hand[i].value;
        if(hand[i].value !== (k+i))
        {
            if(!isComodin(hand[i], Room))
            {
                r = 0;
                break;
            }
            else
            {
                q = (k+i);
            }         
        }
        else
        {
            q = hand[i].value;
        }
    }    
    if(r > 0)
    {      
        r += q;
        for(let i=0; i < hand.length; i++)
        {
            if(isComodin(hand[i], Room))
            {
                hand[i].type = v.type;
                hand[i].type_value = v.type_value;
                r += hand[i].type_value;
            }
        }
        if(!hand.find(c => c.type !== v.type))
        {
            r += 500;
            if(v.value === 10)
            {
                r += 1000;
            }
        }
    }
    return r
}

function getRepetedType(hand, Room)
{
    let r = 100;
    let t = 1;
    let u = null;
    let n = [];
    let _hand = hand;
    for(let i=0; i < _hand.length; i++)
    {
        if(u !== null)
        {
            console.log(_hand[i]);
            if(u.value === _hand[i].value || isComodin(_hand[i], Room))
            {
                t++;
                if(isComodin(_hand[i], Room))
                {
                    _hand[i].value = u.value;
                    _hand[i].type = u.type;
                    _hand[i].type_value = u.type_value;
                }
                if(i === _hand.length-1)
                {
                    if(t > 1)
                    {
                        n.push({c: _hand[i-1], t: t})
                    }   
                }
            }
            else
            {        
                if(t > 1)
                {
                    n.push({c: _hand[i-1], t: t})
                }              
                t = 1;
            }
        }
        else
        {
            if(isComodin(_hand[i], Room))
            {
                for(let v=0; v < _hand.length; v++)
                {
                    if(!isComodin(_hand[v], Room))
                    {
                        _hand[i].value = _hand[v].value;
                        _hand[i].type = _hand[v].type;
                        _hand[i].type_value = _hand[v].type_value;
                    }
                }               
            }
        }
        u = _hand[i];
    }
    console.log(n);
    if(n.length == 1)
    {
        if(n[0].t == 5)
        {
            r += ((r*10) + ((n[0].c.value+n[0].c.type_value) * n[0].t));        
        }
        else if(n[0].t == 4)
        {
            r += ((r*8) + ((n[0].c.value+n[0].c.type_value) * n[0].t)); 
        }
        else if(n[0].t == 3)
        {
            r += ((r*3) + ((n[0].c.value+n[0].c.type_value) * n[0].t)); 
        }
        else if(n[0].t == 2)
        {
            r += ((r*1) + ((n[0].c.value+n[0].c.type_value) * n[0].t)); 
        }
        else
        {
            r = 0;
        }
    }
    else if(n.length == 2)
    {
        if(n[0].t == 3)
        {
            r += ((r*3) + ((n[0].c.value+n[0].c.type_value) * n[0].t));
            r += 200;
        }
        else if(n[0].t == 2)
        {
            r += ((r*1) + ((n[0].c.value+n[0].c.type_value) * n[0].t)); 
        }
        else
        {
            r = 0;
        }
        //----------------->
        if(n[1].t == 3)
        {
            r += ((r*3) + ((n[0].c.value+n[0].c.type_value) * n[0].t));
            r += 200;
        }
        else if(n[1].t == 2)
        {
            r += ((r*1) + ((n[0].c.value+n[0].c.type_value) * n[0].t)); 
        }
        else
        {
            r = 0;
        }
    }
    else if(n.length == 0)
    {
        r = 0;
        u = null;
        for(let i=0; i < hand.length; i++)
        {
            if(u !== null)
            {
                if(u.type === hand[i].type || isComodin(hand[i], Room))
                {
                    if(isComodin(hand[i], Room))
                    {
                        hand[i].value = u.value;
                        hand[i].type = u.type;
                    }
                    r += hand[i].type_value;
                }
                else
                {
                    r = 0;
                    break;
                }
            }
            u = hand[i];
        }
        if(r > 0)
        {
            r += (100*5);
        }
        else
        {
            hand.sort((a, b) => {
                return a.value - b.value
            })
            r += (hand[hand.length-1].value + hand[hand.length-1].type_value);
        }
    }
    return r;
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
            //Set Next Turn
            nextTurn(IO, room, socket, req)
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
        socket.on('end_turn', () => {
            nextTurn(IO, room, socket, req);
        });
        socket.on('tocar', () => {
            tocar(IO, room, req, socket)
        });
        socket.on('pick', data => {
            pickCard(IO, room, socket, req, data);
        });
        socket.on('take_all', () => {
            takeAll(IO, room, req, socket)
        });
        socket.on('swap_card', data => {
            swapCard(socket, data);
        }); 
        socket.on('viuda_b', () => {
            buyWidow(IO, room, socket, req)
        });   
    });
    res.render('links/room', {room_id: room});
});

module.exports = router;
