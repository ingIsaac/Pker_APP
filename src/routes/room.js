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
    socket.juego = {points: 0, chips: 2, hand: [], extra: null};
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
    
    if(IO.sockets.adapter.rooms[room]){
        let k = null;
        let u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        let m = null;
        let _cards = [...cards];

        for(let i=0; i < u.length; i++)
        {
            k = IO.sockets.connected[u[i]];
            if(k)
            {
                if(k.juego.extra != null)
                {
                    m = k.juego.extra;
                    break;
                }
            }
        }

        if(m)
        {
            _cards = cards.filter(c => (c.value+c.type) !== (m.value+m.type));
        }

        k = null;

        while(deck.length < ((player_count*5) + 5))
        {
            const _c = _cards[getRandomInt(0, (_cards.length))]
            const t = deck.find(c => (c.value+c.type) === (_c.value+_c.type))
            if(!t)
            {
                deck.push(_c);
            }
        }

        for(let i=0; i < u.length; i++)
        {
            let hand = [];
            for(let v=i*5; v < ((i+1)*5); v++)
            {
                hand.push(deck[v]);
            }
            k = IO.sockets.connected[u[i]];
            if(k){
                k.juego.hand = hand; 
                if(k.juego.extra != null)
                {
                    k.juego.hand.pop();
                    k.juego.hand.push(k.juego.extra);
                }                     
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
            Room.settings.p_turn = Room.settings.pivote;       
            //Send Data
            IO.to(room).emit('players_data', getPlayersData(IO, room, req, u));
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
                return endGame(IO, room, req);
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
    socket.juego.hand = data.player_cards;
    socket.emit('set_player_cards', socket.juego);
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        Room.settings.c_table = data.table_cards;
        IO.to(room).emit('set_table_cards', Room.settings);
    }
}

function swapCard(socket, data)
{   
    socket.juego.hand = data;
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
    const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        const cost = process.env._APP_PRECIO_VIUDA;
        if(socket.juego.points >= cost)
        {
            socket.juego.points -= cost;
            socket.juego.chips += 1;
            Room.settings.widows -= 1;
            IO.to(room).emit('someone_bought_a_window', {id: socket.id, nombre: socket.nombre});
        }       

        socket.emit('player_data', socket.juego);
        IO.to(room).emit('players_data', getPlayersData(IO, room, req, u));
    }
}

function endGame(IO, room, req)
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
                    const hand = [...k.juego.hand];
                    const score = scoreHand(hand, Room);
                    k.juego.points += score.score;
                    k.juego.extra = null;
                    scores.push({id: u[i], nombre: k.nombre, score: score.score, g_type: score.g_type, hand: hand});
                    k.emit('player_data', k.juego);                                                         
                }                   
            }
            scores.sort((a, b) => {
                return b.score - a.score;
            });
            if(scores.length > 0)
            {
                const _k = IO.sockets.connected[scores[scores.length-1].id];
                if(_k.juego.chips > 0)
                {
                    _k.juego.chips -= 1;
                }
                _k.emit('player_data', _k.juego);                                          
            }
            Room.settings.game_in_course = false;
            Room.settings.deck_splited = false;
            IO.to(room).emit('end_game', scores);     
            IO.to(room).emit('players_data', getPlayersData(IO, room, req, u));
        }
    }
}

function getPlayersData(IO, room, req, socketIdList)
{
    const players_data = [];
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        for(let i=0; i < socketIdList.length; i++)
        {
            const player = IO.sockets.connected[socketIdList[i]];
            players_data.push({id: player.id, juego: player.juego, viudas: Room.settings.widows});
        }
    }  
    return players_data;
}

function scoreHand(hand, Room)
{
    const orderType = getOrderType([...hand], Room);
    const colorType = getRepetedColor([...hand], Room);
    const repetedType = getRepetedValues([...hand], Room);
    if(orderType.score > 0)
    {
        return orderType;
    }
    else if(colorType.score > 0)
    {
        return colorType;
    }
    else if(repetedType.score > 0)
    {
        return repetedType;
    }
    return 0;
}

function isComodin(card, Room)
{
    if(card.wildcard_value === 0 || card.wildcard_value === Room.settings.j_jugados){return true}
}

function getOrderType(hand, Room)
{
    let r = 400; 
    let g_type = '';     
    let v = hand[0];
    let s = 0;
    let _s = 0;
    let q = 0;
    let k = v.value;
    for(let i=0; i < hand.length; i++)
    {       
        if(!isComodin(hand[i], Room))
        {
            if(s >= 14 && hand[i].value < s)
            {
                k = hand[i].value - 1;
            }          
        }
        if(hand[i].value !== (k+i))
        {
            if(!isComodin(hand[i], Room))
            {
                r = 0;
                break;
            }
            else
            {
                hand[i].value = (k+i);
                s = hand[i].value;
                q += (k+i);
                _s++;
                if(_s == 5)
                {
                    r = 0;
                    break;
                }
            }         
        }
        else
        {
            if(i == 0)
            {
                if(isComodin(hand[i], Room))
                {
                    for(let v=0; v < hand.length; v++)
                    {
                        if(!isComodin(hand[v], Room))
                        {
                            hand[i].value = hand[v].value - 1;              
                            break;
                        }
                    }
                    k = hand[i].value;
                    _s++;
                }
            }
            q += hand[i].value;
            s = hand[i].value;
        }
    }
    if(r > 0)
    {      
        g_type = 'Escalera';
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
            g_type = 'Flor';
            if(v.value === 10 && _s <= 1)
            {
                g_type = 'Flor Imperial';
                r += 500;
            }
        }
    }
    return {score: r, g_type: g_type}
}

function getRepetedColor(hand, Room)
{
    let r = 0;
    let u = null;
    let g_type = '';
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
                    hand[i].type = u.type_value;
                }
                r += hand[i].type_value;
            }
            else
            {
                r = 0;
                break;
            }
        }
        else
        {
            if(isComodin(hand[i], Room))
            {
                for(let v=0; v < hand.length; v++)
                {
                    if(!isComodin(hand[v], Room))
                    {
                        hand[i].value = hand[v].value;                         
                        hand[i].type = hand[v].type;
                        hand[i].type_value = hand[v].type_value;                                                
                        break;
                    }
                }
            }
        }
        u = hand[i];
    }
    if(r > 0)
    {
        r += 500;
        g_type = 'Color'
    }
    return {score: r, g_type: g_type}
}

function getRepetedValues(hand, Room)
{
    let r = 0;
    let g_type = '';     
    let t = 0;
    let u = null;
    let n = [{sub_hand: []}, {sub_hand: []}];
    let _hand = [...hand];
    for(let i=0; i < _hand.length; i++)
    {
        if(u !== null)
        {
            if(u.value === _hand[i].value || isComodin(_hand[i], Room))
            {
                if(isComodin(_hand[i], Room))
                {
                    _hand[i].value = u.value;
                    if(_hand[i].type === 'j')
                    {
                        _hand[i].type = u.type;
                        _hand[i].type_value = u.type_value;
                    }
                }      
                if(n[t])
                {
                    if(n[t].sub_hand.length == 0)
                    {
                        n[t].sub_hand.push(u);
                        n[t].sub_hand.push(_hand[i]);
                    }
                    else
                    {
                        n[t].sub_hand.push(_hand[i]);
                    }
                }
            }
            else
            {     
                if(n[t])
                {                  
                    if(n[t].sub_hand.length > 0)
                    {
                        t++;
                    } 
                } 
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
                        if(_hand[i].type === 'j')
                        {
                            _hand[i].type = _hand[v].type;
                            _hand[i].type_value = _hand[v].type_value;
                        }                     
                        break;
                    }
                }
            }
        }
        u = _hand[i];
    }
    if(n[0].sub_hand.length > 0 && n[1].sub_hand.length == 0)
    {
        if(n[0].sub_hand.length == 5)
        {
            r += 1000;
            g_type = 'Quintilla'       
        }
        else if(n[0].sub_hand.length == 4)
        {
            r += 800;
            g_type = 'Poker'
        }
        else if(n[0].sub_hand.length == 3)
        {
            r += 300;
            g_type = 'Tercia' 
        }
        else if(n[0].sub_hand.length == 2)
        {
            r += 100;
            g_type = 'Un par'
        }

        for(let i=0; i < n[0].sub_hand.length; i++)
        {
            r += n[0].sub_hand[i].value + n[0].sub_hand[i].type_value;
        }
    }
    else if(n[0].sub_hand.length > 0 && n[1].sub_hand.length > 0)
    {
        if(n[0].sub_hand.length == 3)
        {
            r += 300;
            r += 200;
        }
        else if(n[0].sub_hand.length == 2)
        {
            r += 100;
        }

        //---------------------------------------->

        if(n[1].sub_hand.length == 3)
        {
            r += 300;
            r += 200;
        }
        else if(n[1].sub_hand.length == 2)
        {
            r += 100;
        }
     
        //---------------------------------------->

        if(r == 600)
        {
            g_type = 'Full House'
        }
        else
        {
            g_type = 'Dos Pares'
        }

        //---------------------------------------->

        for(let i=0; i < n[0].sub_hand.length; i++)
        {
            r += n[0].sub_hand[i].value + n[0].sub_hand[i].type_value;
        }

        for(let i=0; i < n[1].sub_hand.length; i++)
        {
            r += n[1].sub_hand[i].value + n[1].sub_hand[i].type_value;
        }
    }
    else if(n[0].sub_hand.length == 0 && n[1].sub_hand.length == 0)
    {    
        hand.sort((a, b) => {
            return a.value - b.value
        })
        r += (hand[hand.length-1].value + hand[hand.length-1].type_value);
        g_type = 'Carta Mayor'      
    }
    return {score: r, g_type: g_type};
}

function nextGame(IO, room, req)
{
    const getRoom = IO.sockets.adapter.rooms[room];
    if(getRoom)
    {
        const u = Object.keys(getRoom.sockets); 
        for(let i=0; i < u.length; i++)
        {
            const socket = IO.sockets.connected[u[i]];
            if(socket.juego.chips == 0)
            {
                socket.emit('check_player_chips');
            }
        }
    }
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {       
        if(!Room.settings.game_in_course)
        {
            Room.settings.game_in_course = true;
            Room.settings.j_jugados++;
            const comodin = cards.find(c => c.wildcard_value === Room.settings.j_jugados);
            Room.settings.comodin = comodin.img;
            IO.to(room).emit('send_next_game');
            selectSplitDeckPlayer(IO, room, req);
        }
    }
}

function selectSplitDeckPlayer(IO, room, req)
{
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {       
        //Set Pivote
        const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        if(Room.settings.pivote == null)
        {
            Room.settings.pivote = u[getRandomInt(0, u.length)];
        }
        else
        {
            const next = u.findIndex(p => p == Room.settings.pivote);
            if(next < u.length-1)
            {
                Room.settings.pivote = u[next+1]; 
            }
            else
            {
                Room.settings.pivote = u[0];
            }
        }
        const socket = IO.sockets.connected[Room.settings.pivote];
        IO.to(room).emit('_send_split_deck_request', {id: socket.id, nombre: socket.nombre});
    }
}

function splitDeck(IO, room, req, socket)
{   
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {    
        if(!Room.settings.deck_splited)
        {
            Room.settings.deck_splited = true;
            const extra = cards[getRandomInt(0, cards.length)];
            if(extra.wildcard_value == Room.settings.j_jugados || extra.wildcard_value == 0)
            {
                socket.juego.extra = extra;              
            }
            IO.to(room).emit('_extra_card', {id: socket.id, juego: socket.juego, extra_img: extra.img});
            setupGame(IO, room, req);
        }
    } 
}

function lose(IO, room, req, socket)
{
    IO.to(room).emit('send_loser_msg', {id: socket.id, nombre: socket.nombre});
    selectSplitDeckPlayer(IO, room, req);
}

function knockMsg(IO, room, data)
{
    const socket = IO.sockets.connected[data];
    IO.to(room).emit('send_knock_msg', {id: socket.id, nombre: socket.nombre});
}

function setNewValuesOnDisconnection(IO, room, req, socket)
{
    const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {    
        const getRoom = IO.sockets.adapter.rooms[room];
        if(getRoom)
        {
            const u = Object.keys(getRoom.sockets);    
            //Set Winner
            if(u.length == 1)
            {
                const _socket = IO.sockets.connected[u[0]];
                _socket.emit('winner', {id: _socket.id, nombre: _socket.nombre, puntos: _socket.juego.points});
            }

            //Refresh Pivote
            if(Room.settings.pivote == socket.id)
            {
                const next = u.findIndex(p => p == Room.settings.pivote);
                if(next < u.length-1)
                {
                    Room.settings.pivote = u[next+1]; 
                }
                else
                {
                    Room.settings.pivote = u[0];
                }
            }

            //Cancel Knocking
            if(Room.settings.p_knock == socket.id)
            {           
                Room.settings.p_knock = null;
                Room.settings.p_cantake = null;
            }

            //Cancel CanTake
            if(Room.settings.p_cantake == socket.id)
            {           
                const next = u.findIndex(p => p == Room.settings.p_cantake);
                if(next == 0)
                {
                    Room.settings.pivote = u[u.length-1]; 
                }
                else
                {
                    Room.settings.pivote = u[next-1];
                }       
            }
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
            setNewValuesOnDisconnection(IO, room, req, socket)
            //Send List of Players
            sendPlayerList(IO, room)
            //Set Next Turn
            nextTurn(IO, room, socket, req)
        }) 
        
        //Get Data
        socket.on('init', () => {
            selectSplitDeckPlayer(IO, room, req)
        });
        socket.on('nombre', nombre => {
            socket.nombre = nombre;
            //Send List of Players
            sendPlayerList(IO, room)
            const Room = req.app.locals.Rooms[req.app.locals.Rooms.findIndex(r => r.id === room)];
            if(Room)
            {
                IO.to(room).emit('room_data', Room.settings);
            }
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
        socket.on('request_next_game', () => {
            nextGame(IO, room, req)
        });
        socket.on('request_split_deck', () => {
            splitDeck(IO, room, req, socket)
        });
        socket.on('lose', () => {
            lose(IO, room, req, socket)
        });
        socket.on('get_knock_msg', data => {
            knockMsg(IO, room, data)
        });
        socket.on('reload_player_data', () => {
            socket.emit('player_data', socket.juego); 
            IO.to(room).emit('players_data', getPlayersData(IO, room, req, Object.keys(IO.sockets.adapter.rooms[room].sockets)));
        });
    });
    res.render('links/room', {room_id: room});
});

module.exports = router;
