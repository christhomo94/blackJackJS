let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let player = {

  name: 'Chris',
  chips: 150

}
let playerEl = document.getElementById('player-el');
playerEl.textContent = `${player.name}: $${player.chips}`


// This function generates a random number. 
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1){
    return 11;
  } else if (randomNumber >10) {
    return 10;
  } else {
    return randomNumber
  }
}

// This function 'Starts' the game. Which initialises a function 'Render Game'
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

// This function takes the Card Element and replaces it with 'Cards' + random card from the Cards Array. 
function renderGame() {
cardsEl.innerText = "Cards: "; 
for(let i = 0; i<cards.length; i += 1){
  cardsEl.textContent += cards[i] + " "
}

// This piece of code displays the Sum Variable in the sumEl variable. 
sumEl.innerText = `Sum: ${sum}`;

  if (sum <= 20){
      msg = "Do you want to draw a new card?"
  } else if (sum === 21) {
      msg = "Well done, you got Blackjack."
      hasBlackJack = true;
  } else{ 
      msg = "You're out of the game!";
      isAlive = false;
  }
  messageEl.textContent = msg;
}


// This function draws a new card if the button is pressed. The 'card' variable equates to getRandomCard() and adds sum onto it. This new card is then PUSHED onto the cards array and renderGame() is this invoked.  
function newCard(){

  if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card;
    cards.push(card);
    renderGame()
  }
}
 


