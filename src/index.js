const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const colors = require('colors');
require('dotenv').config({path: path.join(__dirname, '.env')});

//setting
app.use (function (req, res, next) { //HTTPS ReDirect
    if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
        next();
    } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
        res.redirect('https://' + req.hostname + req.url);
    }
});
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

//middlewares
app.use(flash());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

//locals
app.locals.appName = process.env._APP_NAME;

//routes
app.use(require('./routes/home'));

//Not Found Error
app.use(function(req, res){
    res.status(404).send(require('./lib/utilities').sendStatusRenderString(404, 'Página no encontrada.'));
});

//starting server
app.listen(app.get('port'), () => {
    console.log("Server on port:".yellow, app.get('port').red);
});
