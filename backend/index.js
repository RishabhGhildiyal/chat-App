const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  socket.on("join", (data) => {
    console.log("join: ", data.roomName);
    socket.join(data.roomName);
    console.log(data,"zzz")
  });


  console.log('a user connected');

  socket.on('message', (data) => {
    console.log(data , 'llll');
    // io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    io.in(data.roomName).emit('new message',data.message)
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });

});


httpServer.listen(port, () => console.log(`listening on port ${port}`));
