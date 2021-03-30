const { Socket } = require("dgram");
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);

app.use(express.static(path.join(__dirname,"src")))
const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>console.log(`server is running ${PORT}`))

io.on("connection", (socket)=>{
    socket.on("chatting",(data)=>{
        console.log(data);
        io.emit("chatting", `Mucho gusto ${data}`)
    })//("채팅아이디","내용 데이터!")
});