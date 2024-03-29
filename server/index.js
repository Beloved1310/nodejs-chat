const app = require('express')();
const http = require('http').createServer(app);

const socketio = require('socket.io')
const io = socketio(http);
const { addUser } = require('./helper');
const PORT = process.env.PORT || 6000

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('create-room', name => {
        console.log('Then room name received is ', name)
    })
    socket.on('join', ({ name, room_id, user_id }) => {
        const { error, user } = addUser({
            socket_id: socket.id,
            name,
            room_id,
            user_id
        })
        if (error) {
            console.log('join error', error)
        } else {
            console.log('join user', user)
        }
    })
});

http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});