const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const colors = require('colors');
const uid = require('uid');
require('dotenv').config({path: path.join(__dirname, '.env')});

/*setting
app.use (function (req, res, next) { //HTTPS ReDirect
    if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
        next();
    } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
        res.redirect('https://' + req.hostname + req.url);
    }
});
*/
    
app.set('port', process.env.PORT || process.env._APP_PORT);
app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
   defaultLayout: 'main',
   layoutsDir: path.join(app.get('views'), 'layouts'),
   partialsDir: path.join(app.get('views'), 'partials'),
   extname: '.hbs',
   helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

//Locals
app.locals.appName = process.env._APP_NAME;
app.locals.Rooms = [];
app.locals.precioViuda = process.env._APP_PRECIO_VIUDA;
app.locals.server_url = process.env._APP_URL;

//Starting server
const server = app.listen(app.get('port'), () => {
    console.log("Server on port:".yellow, app.get('port').red);
});

//WebSockets
const IO = require('socket.io')(server);

//Routes
app.use(require('./routes/home'));
app.use(require('./routes/room')(IO));

//Not Found Error
app.use(function(req, res){
    res.status(404).send(require('./lib/utilities').sendStatusRenderString(404, 'Página no encontrada.'));
});

//Delete Unused Rooms
checkRooms(IO);
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