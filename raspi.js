const io = require('socket.io-client')("http://192.168.1.102:3001");
const Gpio = require('onoff').Gpio;
const relay = new Gpio(17, 'out'); //use GPIO pin 4 as output
// const pushButton = new Gpio(17, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

io.on("lightOn", res => {
    const {socketId, data} = res;
    console.log(socketId + " - " + data)
    relay.writeSync(data);
});