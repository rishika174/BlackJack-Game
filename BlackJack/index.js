
let cards = [] // array - ordered list of items
let sum = 0;
let hasBlackJack = false
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player={
    name:"rish",
    chips:174
}
let playerEl=document.getElementById("playerin");
playerEl.textContent=player.name+": $"+player.chips;
function getrandom() {
    let ran = Math.floor(Math.random() * 13) + 1
    if (ran === 1) return 11     // Ace
    else if (ran > 10) return 10 // Jack, Queen, King
    else return ran              // 2 through 10
}

function startGame() {
    let firstCard = getrandom();
    isAlive=true;
let secondCard = getrandom();
cards = [firstCard, secondCard]
sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    // // render out firstCard and secondCard
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    // render out ALL the cards we have
    cardsEl.textContent = "Cards: "; // clear previous content

    for(let i=0;i<cards.length;i++) {
        cardsEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive===true && hasBlackJack===false){
        let card = getrandom();
        cards.push(card);
        sum += card
        renderGame()

    }
}

