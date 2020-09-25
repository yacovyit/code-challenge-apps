const express = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(3001);

app.use(express.static('public'));

const io = socket(server);

io.on('connect', (socket) => {
    console.log(socket.id);

    socket.on('mouse', (msg) =>{
        socket.broadcast.emit('mouse', msg)
        console.log(msg)
    })
})



