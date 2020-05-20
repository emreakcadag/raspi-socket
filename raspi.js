const io = require("socket.io-client")("http://localhost:3001");

io.on("lightOn", res => {
    const {socketId, data} = res;
    console.log(socketId);
    console.log(data);
});