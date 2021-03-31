"use strict"
const socket = io();
//DOM
const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainder = document.querySelector(".display-container");

chatInput.addEventListener("keypress",(event)=>{
    if(event.keyCode === 13){
        send();
    }
})
sendButton.addEventListener("click", send);

function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }//emit 보낸다! on 받는다!
    socket.emit("chatting", param);
}

socket.on("chatting", (data)=>{
    const {name, msg, time} = data; 
    const item = new LiModel(name, msg, time);//LiModel을 인스턴스화 초기화?
    item.makeLi();
    displayContainder.scrollTo(0, displayContainder.scrollHeight);
})

function LiModel(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;
    this.makeLi = ()=>{
        const li = document.createElement("li");
        li.classList.add(nickname.value === this.name ? "sent" : "received");
        const dom = `<span class="profile">
        <span class="user">${name}</span>
        <img class="image" src="https://placeimg.com/50/50/any" alt="any"/>
        </span>
        <span class="message">${msg}</span>
        <span class="time">${time}</span>`;
        li.innerHTML = dom;
        chatList.appendChild(li);
    }
}