const io = require("socket.io-client")("http://localhost:3001");

io.emit("lightOn", 10);