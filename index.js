let points=0;
let cardEl = document.getElementById("cards");
let msgEl = document.getElementById("msg");
let startPanelEl = document.getElementById("start-panel");
let pointsPanelEl = document.getElementById("points-panel");
let started=false
let cards
let playerEl = document.getElementById("player-el");
let player={
    name: "Player",
    chips: 200,
    sayHello: function(){
        console.log("Hello!");
    }
}
playerEl.textContent = player.name+": "+player.chips

player.sayHello();

function addPlayerName(){

}

function getCard(){
    let card = Math.floor(Math.random()*10)+2;
    return card;
}

function addCard(){
    if(started){
    let card=getCard();
    points+=card
    cards.push(card);
    render()
    }
}
function startGame() {
    points=0
    let firstCard=getCard()
    let secondCard=getCard()
    cards=[firstCard,secondCard]
    points =cards[0]+cards[1]
    started=true;
    render()
}

function render(){
    pointsPanelEl.textContent= "Points: "+points
    cardEl.textContent= "Cards:"
    for (let index = 0; index < cards.length; index++) {
        cardEl.textContent+= " "+cards[index]
    }
    startPanelEl.textContent= "Good luck!"
    if(points<21){
        msgEl.textContent = "Do you want to try and get closer?"
    } else if(points===21){
        startPanelEl.textContent= "Blackjack<!"
        msgEl.textContent = "You win!"
    } else{
        startPanelEl.textContent="Press start to play again."
        msgEl.textContent = "You lost!"
    }
}