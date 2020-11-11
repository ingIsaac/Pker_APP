const express = require('express');
const router = express.Router();
const cards = [
    {value: 14, type: "h", wildcard_value: 1, type_value: 3, img: "ace_of_hearts.svg"},
    {value: 2, type: "h", wildcard_value: 2, type_value: 3, img: "2_of_hearts.svg"},
    {value: 3, type: "h", wildcard_value: 3, type_value: 3, img: "3_of_hearts.svg"},
    {value: 4, type: "h", wildcard_value: 4, type_value: 3, img: "4_of_hearts.svg"},
    {value: 5, type: "h", wildcard_value: 5, type_value: 3, img: "5_of_hearts.svg"},
    {value: 6, type: "h", wildcard_value: 6, type_value: 3, img: "6_of_hearts.svg"},
    {value: 7, type: "h", wildcard_value: 7, type_value: 3, img: "7_of_hearts.svg"},
    {value: 8, type: "h", wildcard_value: 8, type_value: 3, img: "8_of_hearts.svg"},
    {value: 9, type: "h", wildcard_value: 9, type_value: 3, img: "9_of_hearts.svg"},
    {value: 10, type: "h", wildcard_value: 10, type_value: 3, img: "10_of_hearts.svg"},
    {value: 11, type: "h", wildcard_value: 11, type_value: 3, img: "jack_of_hearts.svg"},
    {value: 12, type: "h", wildcard_value: 12, type_value: 3, img: "queen_of_hearts.svg"},
    {value: 13, type: "h", wildcard_value: 13, type_value: 3, img: "king_of_hearts.svg"},
    {value: 14, type: "d", wildcard_value: 1, type_value: 1, img: "ace_of_diamonds.svg"},
    {value: 2, type: "d", wildcard_value: 2, type_value: 1, img: "2_of_diamonds.svg"},
    {value: 3, type: "d", wildcard_value: 3, type_value: 1, img: "3_of_diamonds.svg"},
    {value: 4, type: "d", wildcard_value: 4, type_value: 1, img: "4_of_diamonds.svg"},
    {value: 5, type: "d", wildcard_value: 5, type_value: 1, img: "5_of_diamonds.svg"},
    {value: 6, type: "d", wildcard_value: 6, type_value: 1, img: "6_of_diamonds.svg"},
    {value: 7, type: "d", wildcard_value: 7, type_value: 1, img: "7_of_diamonds.svg"},
    {value: 8, type: "d", wildcard_value: 8, type_value: 1, img: "8_of_diamonds.svg"},
    {value: 9, type: "d", wildcard_value: 9, type_value: 1, img: "9_of_diamonds.svg"},
    {value: 10, type: "d", wildcard_value: 10, type_value: 1, img: "10_of_diamonds.svg"},
    {value: 11, type: "d", wildcard_value: 11, type_value: 1, img: "jack_of_diamonds.svg"},
    {value: 12, type: "d", wildcard_value: 12, type_value: 1, img: "queen_of_diamonds.svg"},
    {value: 13, type: "d", wildcard_value: 13, type_value: 1, img: "king_of_diamonds.svg"},
    {value: 14, type: "c", wildcard_value: 1, type_value: 2, img: "ace_of_clubs.svg"},
    {value: 2, type: "c", wildcard_value: 2, type_value: 2, img: "2_of_clubs.svg"},
    {value: 3, type: "c", wildcard_value: 3, type_value: 2, img: "3_of_clubs.svg"},
    {value: 4, type: "c", wildcard_value: 4, type_value: 2, img: "4_of_clubs.svg"},
    {value: 5, type: "c", wildcard_value: 5, type_value: 2, img: "5_of_clubs.svg"},
    {value: 6, type: "c", wildcard_value: 6, type_value: 2, img: "6_of_clubs.svg"},
    {value: 7, type: "c", wildcard_value: 7, type_value: 2, img: "7_of_clubs.svg"},
    {value: 8, type: "c", wildcard_value: 8, type_value: 2, img: "8_of_clubs.svg"},
    {value: 9, type: "c", wildcard_value: 9, type_value: 2, img: "9_of_clubs.svg"},
    {value: 10, type: "c", wildcard_value: 10, type_value: 2, img: "10_of_clubs.svg"},
    {value: 11, type: "c", wildcard_value: 11, type_value: 2, img: "jack_of_clubs.svg"},
    {value: 12, type: "c", wildcard_value: 12, type_value: 2, img: "queen_of_clubs.svg"},
    {value: 13, type: "c", wildcard_value: 13, type_value: 2, img: "king_of_clubs.svg"},
    {value: 14, type: "s", wildcard_value: 1, type_value: 4, img: "ace_of_spades.svg"},
    {value: 2, type: "s", wildcard_value: 2, type_value: 4, img: "2_of_spades.svg"},
    {value: 3, type: "s", wildcard_value: 3, type_value: 4, img: "3_of_spades.svg"},
    {value: 4, type: "s", wildcard_value: 4, type_value: 4, img: "4_of_spades.svg"},
    {value: 5, type: "s", wildcard_value: 5, type_value: 4, img: "5_of_spades.svg"},
    {value: 6, type: "s", wildcard_value: 6, type_value: 4, img: "6_of_spades.svg"},
    {value: 7, type: "s", wildcard_value: 7, type_value: 4, img: "7_of_spades.svg"},
    {value: 8, type: "s", wildcard_value: 8, type_value: 4, img: "8_of_spades.svg"},
    {value: 9, type: "s", wildcard_value: 9, type_value: 4, img: "9_of_spades.svg"},
    {value: 10, type: "s", wildcard_value: 10, type_value: 4, img: "10_of_spades.svg"},
    {value: 11, type: "s", wildcard_value: 11, type_value: 4, img: "jack_of_spades.svg"},
    {value: 12, type: "s", wildcard_value: 12, type_value: 4, img: "queen_of_spades.svg"},
    {value: 13, type: "s", wildcard_value: 13, type_value: 4, img: "king_of_spades.svg"}
]

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function joinPlayerRoom(IO, socket, room, chips)
{
    socket.join(room);
    socket.juego = {points: 0, bet: 0, chips: chips, hand: []};
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

function setupGame(IO, room, app, data)
{   
    let deck = []
    let player_count = 0

    const _Rooms = IO.sockets.adapter.rooms[room];
    if(_Rooms){player_count = _Rooms.length}
    
    if(IO.sockets.adapter.rooms[room]){
        let k = null;
        let u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        let m = null;
        let _cards = JSON.parse(JSON.stringify(cards));

        while(deck.length < ((player_count*2) + 5))
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
            for(let v=i*2; v < ((i+1)*2); v++)
            {
                hand.push(deck[v]);
            }
            k = IO.sockets.connected[u[i]];
            if(k)
            {                             
                k.juego.hand = hand;                               
                k.emit('set_player_cards', k.juego);
                k.emit('player_data', k.juego);
            }                   
        }        
        //Room Settings
        const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
        if(Room)
        {
            //Disable Room
            Room.settings.available = false;
            //Set table Cards
            Room.settings.c_table = [];
            for(let i=(player_count*2); i < ((player_count*2)+5); i++)
            {            
                Room.settings.c_table.push({card: deck[i], phase: 1});                
            }
            Room.settings.c_table[3].phase = 2;
            Room.settings.c_table[4].phase = 3;
            //Other Settings
            const min = parseInt(data);
            Room.settings.pool = 0;
            Room.settings.game_phase = 1;
            Room.settings.n_turn = 0;
            Room.settings.min_bet = min > 0 ? min : 0;
            Room.settings.max_bet = Room.settings.min_bet*2; 
            Room.settings.dealer = setNewDealer(IO, room, Room.settings.dealer);      
            //Send Data
            IO.to(room).emit('players_data', getPlayersData(IO, room, app, u));
            nextTurn(IO, room, app, {id: Room.settings.dealer})
            IO.to(room).emit('init');
        }
    }
}

function setNewDealer(IO, room, dealer)
{
    let r = null;
    if(IO.sockets.adapter.rooms[room])
    {
        const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);

        if(!dealer)
        {
            r = u[getRandomInt(0, u.length)]
        }
        else
        {
            const t = u.findIndex(p => p == dealer)
            if(t < u.length-1)
            {
                r = u[t+1];
            }
            else
            {
                r = u[0];
            }
        }       
    }
    return r;
}

function nextTurn(IO, room, app, socket)
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

        const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
        if(Room)
        {
            Room.settings.p_turn = next;
            Room.settings.n_turn += 1;
            if(Room.settings.n_turn == u.length)
            {
                changeGamePhase(IO, room, app);
            }
            IO.to(room).emit('room_data', Room.settings);
        }
    }
}

function changeGamePhase(IO, room, app)
{
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        if(Room.settings.game_phase <= 3)
        {
            Room.settings.game_phase += 1;
            const phase = Room.settings.game_phase;
            Room.settings.c_table[phase+1].phase = phase;
        }
        else
        {
            endGame(IO, room, app);
        }
    }
}

function getPlayerResponse(IO, room, app, socket, data)
{
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {
        const max_bet = Room.settings.max_bet;
        if(socket.bet < max_bet && data === 0)
        {
            Room.settings.max_bet = data;
            Room.settings.pool += data;
            if(socket.chips < data)
            {
                lose(IO, room, app, socket)
            }
            else
            {
                socket.chips -= data;
                socket.bet = data;
                nextTurn(IO, room, app, socket);
            }
        }
        else
        {
            nextTurn(IO, room, app, socket);
        }
    }
}

function pickCard(IO, room, app, socket, data)
{  
    socket.juego.hand = data.player_cards;
    socket.emit('set_player_cards', socket.juego);
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
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

function endGame(IO, room, app)
{
    if(IO.sockets.adapter.rooms[room]){
        const u = Object.keys(IO.sockets.adapter.rooms[room].sockets);
        const scores = [];
        const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
        if(Room)
        {
            for(let i=0; i < u.length; i++)
            {          
                const k = IO.sockets.connected[u[i]];
                if(k)
                {
                    const hand = JSON.parse(JSON.stringify(k.juego.hand));
                    const score = scoreHand(hand, Room);
                    k.juego.points += score.score;
                    scores.push({id: u[i], nombre: k.nombre, score: score.score, g_type: score.g_type, hand: hand});
                    k.emit('player_data', k.juego);                                                         
                }                   
            }
            scores.sort((a, b) => {
                return b.score - a.score;
            });
            if(scores.length > 0)
            {
                const _k = IO.sockets.connected[scores[0].id];
                if(_k.juego.chips > 0)
                {
                    _k.juego.chips += Room.settings.pool;
                }
                _k.emit('player_data', _k.juego);                                          
            }
            IO.to(room).emit('end_game', scores);     
            IO.to(room).emit('players_data', getPlayersData(IO, room, app, u));
        }
    }
}

function getPlayersData(IO, room, app, socketIdList)
{
    const players_data = [];
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
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
    const orderType = getOrderType(JSON.parse(JSON.stringify(hand)), Room);
    const colorType = getRepetedColor(JSON.parse(JSON.stringify(hand)), Room);
    const repetedType = getRepetedValues(JSON.parse(JSON.stringify(hand)), Room);
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

function isComodin(card)
{
    if(card.wildcard_value === 0){return true}
}

function getOrderType(hand, Room)
{
    const w = hand.filter(c => c.wildcard_value === 0);
    if(w.length > 2)
    {
        return 0;
    }
    //-----------------> Wilcard Filter
    let r = 400; 
    let g_type = '';     
    let v = hand[0];
    let s = 0;
    let _s = 0;
    let q = 0;
    let k = v.value;
    for(let i=0; i < hand.length; i++)
    {          
        if(s >= 14)
        { 
            if(i != 1 && i != hand.length - 2)
            {
                r = 0;
                break;
            }
        }
        //--------------------------------->   
        if(!isComodin(hand[i]))
        {
            if(s >= 14 && hand[i].value < s)
            {
                k = (2 - i);
            }          
        }
        if(hand[i].value !== (k+i))
        {
            if(!isComodin(hand[i]))
            {
                r = 0;
                break;
            }
            else
            {
                hand[i].value = (k+i);
                s = hand[i].value;
                q += (hand[i].value + hand[i].type_value);
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
                if(isComodin(hand[i]))
                {
                    for(let v=0; v < hand.length; v++)
                    {
                        if(!isComodin(hand[v]))
                        {
                            hand[i].value = hand[v].value - v;              
                            break;
                        }
                    }
                    k = hand[i].value;
                    _s++;
                }
            }
            q += (hand[i].value + hand[i].type_value);
            s = hand[i].value;
        }
    }
    if(r > 0)
    {      
        g_type = 'Escalera';
        r += q;
        for(let i=0; i < hand.length; i++)
        {
            if(isComodin(hand[i]))
            {
                for(let v=0; v < hand.length; v++)
                {
                    if(!isComodin(hand[v]))
                    {
                        hand[i].type = hand[v].type;
                        hand[i].type_value = hand[v].type_value;
                        r += hand[i].type_value;                                                
                        break;
                    }
                }
            }
        }
        if(!hand.find(c => c.type !== v.type))
        {
            r += 400;
            g_type = 'Flor';
            if(v.value === 10 && _s <= 1) //-----------------> Wilcard Filter
            {
                g_type = 'Flor Imperial';
                r += 100;
            }
        }
    }
    return {score: r, g_type: g_type}
}

function getRepetedColor(hand, Room)
{
    const w = hand.filter(c => c.wildcard_value === 0);
    if(w.length > 2)
    {
        return 0;
    }
    //-----------------> Wilcard Filter
    let r = 0;
    let u = null;
    let g_type = '';
    for(let i=0; i < hand.length; i++)
    {
        if(u !== null)
        {
            if(u.type === hand[i].type || isComodin(hand[i]))
            {
                if(isComodin(hand[i]))
                {
                    hand[i].value = u.value;
                    hand[i].type = u.type;
                    hand[i].type_value = u.type_value;
                }
                r += (hand[i].value + hand[i].type_value);
            }
            else
            {
                r = 0;
                break;
            }
        }
        else
        {
            if(isComodin(hand[i]))
            {
                for(let v=0; v < hand.length; v++)
                {
                    if(!isComodin(hand[v]))
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
    let _hand = JSON.parse(JSON.stringify(hand));
    for(let i=0; i < _hand.length; i++)
    {
        if(u !== null)
        {
            if(u.value === _hand[i].value || isComodin(_hand[i]))
            {
                if(isComodin(_hand[i]))
                {
                    _hand[i].value = u.value;
                    if(_hand[i].wildcard_value == 0)
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
            if(isComodin(_hand[i]))
            {
                for(let v=0; v < _hand.length; v++)
                {
                    if(!isComodin(_hand[v]))
                    {
                        _hand[i].value = _hand[v].value;
                        if(_hand[i].wildcard_value == 0)
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
        if(n[0].sub_hand.length == 4)
        {
            r += 700;
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
            g_type = 'Un Par'
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
            //Plus Full House
            for(let i=0; i < n[0].sub_hand.length; i++)
            {
                r += n[0].sub_hand[i].value + n[0].sub_hand[i].type_value;
            }
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
            //Plus Full House
            for(let i=0; i < n[1].sub_hand.length; i++)
            {
                r += n[1].sub_hand[i].value + n[1].sub_hand[i].type_value;
            }
        }
        else if(n[1].sub_hand.length == 2)
        {
            r += 100;
        }
     
        //---------------------------------------->

        //Plus Dos Pares
        if(n[0].sub_hand.length == 2 && n[1].sub_hand.length == 2)
        {
            if(n[0].sub_hand[0].value > n[1].sub_hand[0].value)
            {
                for(let i=0; i < n[0].sub_hand.length; i++)
                {
                    r += n[0].sub_hand[i].value + n[0].sub_hand[i].type_value;
                }
            }
            else
            {
                for(let i=0; i < n[1].sub_hand.length; i++)
                {
                    r += n[1].sub_hand[i].value + n[1].sub_hand[i].type_value;
                }
            }
        }   

        //---------------------------------------->
 
        if(r >= 600)
        {
            g_type = 'Full House'
        }
        else
        {
            g_type = 'Dos Pares'
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

function lose(IO, room, app, socket)
{
    IO.to(room).emit('send_loser_msg', {id: socket.id, nombre: socket.nombre});
}

function setNewValuesOnDisconnection(IO, room, app, socket)
{
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
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

            //Refresh Dealer
            if(Room.settings.dealer == socket.id)
            {
                const next = u.findIndex(p => p == Room.settings.dealer);
                if(next < u.length-1)
                {
                    Room.settings.dealer = u[next+1]; 
                }
                else
                {
                    Room.settings.dealer = u[0];
                }
            }           
        }      
    } 
}

function chat(IO, room, app, data)
{
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {    
        Room.settings.chats.push(data);
        IO.to(room).emit('chat_messages', Room.settings.chats);
    }
}

function getChatMessages(IO, room, app)
{
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {    
        IO.to(room).emit('chat_messages', Room.settings.chats);
    }
}

function refreshPlayerNameList(IO, room, app, socket)
{
    const Room = app.locals.Rooms[app.locals.Rooms.findIndex(r => r.id === room)];
    if(Room)
    {    
        IO.to(room).emit('change_player_name', {id: socket.id, nombre: socket.nombre});
    }
}

//IO Request Handler
module.exports = function(app, IO) {
    //Get all players connected
    const Players = Object.keys(IO.sockets.sockets);

    //User Connection
    IO.on('connection', (socket) => {
        if(socket.handshake.headers.referer.search('TexasHoldem') < 0)
        {
            return
        }
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
            const room = socket.handshake.query.r; 
            //Add User to a Room
            const Rooms = IO.sockets.adapter.rooms[room];
            if(Rooms)
            {
                if(Rooms.length < process.env._APP_MAX_PLAYER_PER_ROOM)
                {
                    joinPlayerRoom(IO, socket, room, process.env._APP_TEXAS_HOLDEM_INIT_CHIPS)
                }        
            }
            else
            {
                joinPlayerRoom(IO, socket, room, process.env._APP_TEXAS_HOLDEM_INIT_CHIPS)
            }      
            
            //Send List of Players
            sendPlayerList(IO, room)
        }
        
        //User Disconnect
        socket.on('disconnect', () => {
            const room = socket.handshake.query.r;
            //Get player => Players          
            console.log("User disconnected: " + socket.id);
            IO.to(room).emit('disconnected', socket.id + " ha abandonado esta partida.");
            setNewValuesOnDisconnection(IO, room, app, socket)
            //Send List of Players
            sendPlayerList(IO, room)
            //Set Next Turn
            nextTurn(IO, room, app, socket)
        }) 
        
        //Get Data
        socket.on('init', data => {
            setupGame(IO, socket.handshake.query.r, app, data)
        });
        socket.on('nombre', nombre => {
            socket.nombre = nombre;
            refreshPlayerNameList(IO, socket.handshake.query.r, app, socket);
        });
        socket.on('pick', data => {
            pickCard(IO, socket.handshake.query.r, app, socket, data);
        });
        socket.on('swap_card', data => {
            swapCard(socket, data);
        }); 
        socket.on('request_next_game', () => {
            setupGame(IO, socket.handshake.query.r, app, data)
        });   
        socket.on('get_player_response', () => {
            getPlayerResponse(IO, socket.handshake.query.r, app, socket, data)
        });     
        socket.on('lose', () => {
            lose(IO, socket.handshake.query.r, app, socket)
        });
        socket.on('reload_player_data', () => {
            socket.emit('player_data', socket.juego); 
            IO.to(socket.handshake.query.r).emit('players_data', getPlayersData(IO, socket.handshake.query.r, app, Object.keys(IO.sockets.adapter.rooms[socket.handshake.query.r].sockets)));
        });
        socket.on('chat_message', data => {
            chat(IO, socket.handshake.query.r, app, data)
        });
        socket.on('get_chat_message', data => {
            getChatMessages(IO, socket.handshake.query.r, app)
        });
    });

    //Route
    router.get('/TexasHoldem/room', (req, res) => {
        const room = req.query.r;
        const Rooms = req.app.locals.Rooms;

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
        res.render('links/TexasHoldem/room', {room: room});
    });

    return router;
}
