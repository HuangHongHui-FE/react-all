let express = require('express');
const app = express();
const Cors = require("cors");



const router = require('./router');

// socket.io
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use(Cors({
    origin: '*', // 默认是*
    credentials: true
}));

app.all('/*', (req, res, next) => {
    if (req.headers.origin) {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    }

    // // 透传的server绑定
    // 注意这个透传的是io，而不是serve
    req.io = io;

    next();
})



app.use(express.json());

app.use('/api', router);


server.listen(8000, () => {
    console.log('http://localhost:8000')
})