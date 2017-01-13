var messageListener = require("./src/message-listener");

var server = require('./server');
server().then((server) => {
    server.listen(process.env.PORT, process.env.IP);
    messageListener.listen();
    console.log(`server created at ${process.env.IP}:${process.env.PORT}`);
});
