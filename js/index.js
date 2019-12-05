const allFourSuits = ["hearts", "spades", "diamonds", "clubs"]; // Sam variable for all suits;
const cardsWrapper = document.querySelector('.cards-wrapper');

const cards = [];
function createCards() {
  
  // Create an array with objects containing the value and the suit of each card
  for (let x = 0; x < allFourSuits.length; x += 1) {
    const suitsIndex = allFourSuits[x];
        for (let i = 1; i <= 13; i += 1) {
          const cardObject = {
            value: i,
            suit: suitsIndex
          };
          cards.push(cardObject);
        }
      }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 25;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  makeDisappear = document.getElementById("start-game");
  shuffleBtn = document.getElementById("Shuffle");
  showHideBtn = document.getElementById("Show-Hide");
  magicBtn = document.getElementById("Magic");

  makeDisappear.parentElement.removeChild(makeDisappear);
  makeDisappear.style.display = "none";

  if (makeDisappear.style.display === "none") {
    shuffleBtn.classList.remove("invisible");
    showHideBtn.classList.remove("invisible");
    magicBtn.classList.remove("invisible");
  }
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

const a = cards;//just to make code more readable
function getShuffled() {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  cardsWrapper.innerHTML = ""; //to empty the previous array
  cards.forEach((card, i) => {
    const positionFromLeft = i * 25;
    const cardElement = document.createElement("div");
    cardElement.setAttribute("data-value", card.value);
    cardElement.classList.add("card", `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });

document.getElementById('start-game').addEventListener('click', startGame);
  //my EventListeners
document.getElementById("Shuffle").addEventListener("click", getShuffled);
