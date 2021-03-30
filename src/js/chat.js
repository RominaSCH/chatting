"use strict"

const socket = io();
//emit 보낸다! on 받는다!
socket.emit("chatting", "from front");

socket.on("chatting", (data)=>{
    console.log(data);
})