const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

http.listen(3001, () => {
    console.log("Listening on 3001")
});

let socketIo;

app.get("/", (req, res, next) => res.json("OK"));

io.on("connect", (socket) => {
    socketIo = socket;
    console.log("a user connected");

    socket.on("lightOn", data => socket.broadcast.emit("lightOn", {
        socketId: socket.id,
        data: data
    }));

    socket.on("disconnect", () => console.log("a user disconnected"));
});