let points=0;
let cardEl = document.getElementById("cards");
let pointsEl = document.getElementById("points");
let msgEl = document.getElementById("msg");
let startPanelEl = document.getElementById("start-panel");
let pointsPanelEl = document.getElementById("points-panel");

let started=false
let cards


function getCard(){
    let card = Math.floor(Math.random()*10)+2;
    return card;
}

function addCard(){
    if(started){
    let card=getCard();
    cardEl.textContent+=" "+card
    points+=card
    cards.push(card);
    pointsEl.textContent = points
    if(points<21){
        msgEl.textContent = "Do you want to try and get closer?"
    } else if(points===21){
        msgEl.textContent = "Blackjack!"
    } else{
        startPanelEl.textContent="Press start to play again."
        msgEl.textContent = "You lost!"
    }
    }
}
function startGame() {
    points=0
    cardEl.textContent = ""
    let firstCard=getCard()
    let secondCard=getCard()
    cards=[firstCard,secondCard]
    points =cards[0]+cards[1]
    started=true;
    cardEl.textContent="Cards:"+cards[0]+" "+cards[1]
    pointsPanelEl.textContent= "Points: "
    pointsEl.textContent=points
    msgEl.textContent = "Do you want to try and get closer?"
    startPanelEl.textContent= "Good luck!"
}