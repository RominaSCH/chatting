"use strict"
const socket = io();
//DOM
const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", ()=>{
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("chatting", param);
})
//emit 보낸다! on 받는다!


socket.on("chatting", (data)=>{
    const li = document.createElement("li");
    li.innerText = `${data.name} : ${data.msg}`;
    chatList.appendChild(li);
})