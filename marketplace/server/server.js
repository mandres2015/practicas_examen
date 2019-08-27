const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
var session = require('express-session')

const indexRoutes = require('./routes/route');

app.set('port', process.env.PORT || 3000);
app.set('views', './server/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "mandresdeveloper",
    resave: false,
    saveUninitialized: false
}))

// routes
app.use('/', indexRoutes);
app.use(express.static("client"))

io.on('connection', function (socket) {
    console.log('Conectado');    
    socket.on('bar', () => {
        socket.emit('bar_data', {})
    })
})

//Run server
server.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});