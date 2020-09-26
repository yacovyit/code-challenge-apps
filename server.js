const express = require('express');
const socket = require('socket.io');
const app = express();
const PORT =  process.env.PORT || 3000;
const server = app.listen(PORT);

app.use(express.static('public'));

const io = socket(server);

io.on('connect', (socket) => {
    console.log(socket.id);

    socket.on('mouse', (msg) =>{
        socket.broadcast.emit('mouse', msg)
        console.log(msg)
    })
})



