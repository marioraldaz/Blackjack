let points=0;
let cardEl = document.getElementById("cards");
let pointsEl = document.getElementById("points");
let msgEl = document.getElementById("msg");

let started=false


function getCard(){
    let card = Math.floor(Math.random()*10)+2;
    return card;
}

function addCard(){
    if(started){
    let card=getCard();
    cardEl.textContent+=" "+card
    points+=card
    pointsEl.textContent = points
    if(points<21){
        msgEl.textContent = "Do you want to try and get closer?"
    } else if(points===21){
        msgEl.textContent = "Blackjack!"
    } else{
        msgEl.textContent = "You lost!"
    }
    }
}
function startGame() {
    let firstCard=getCard()
    let secondCard=getCard()
    points =firstCard+secondCard
    started=true;
    cardEl.textContent+= firstCard+" "+secondCard
    pointsEl.textContent= points
    msgEl.textContent = "Do you want to try and get closer?"
}