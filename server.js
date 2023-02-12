const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const next = require('next');




const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;


app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = socketIO(httpServer);

  io.on('connection', (socket) => {
    console.log('A user connected!');
    
    socket.emit("verify_connection", "A message from the server!")
    console.log('Emmeted first message successfully!');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
