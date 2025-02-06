const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('views')); // Serve static files (HTML, JS, CSS)

io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming offer
    socket.on('offer', (offer) => {
        console.log('Received offer');
        socket.broadcast.emit('offer', offer);
    });

    // Handle incoming answer
    socket.on('answer', (answer) => {
        console.log('Received answer');
        socket.broadcast.emit('answer', answer);
    });

    // Handle incoming ice candidates
    socket.on('ice-candidate', (candidate) => {
        console.log('Received ice candidate');
        socket.broadcast.emit('ice-candidate', candidate);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});