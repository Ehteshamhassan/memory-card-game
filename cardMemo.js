const gameBoard = document.getElementById("gameBoard");
const cardsArray = ["#","#","@","@","+","+","A","A","?","?","$","$","%","%","*","*"];
let flippedCards = [];
let matchedCards = [];

// Shuffle cards
cardsArray.sort(() => 0.5 - Math.random());

// Create cards
cardsArray.forEach((Symbol, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-Symbol", Symbol);
  card.setAttribute("data-index", index);

  card.addEventListener("click", () => flipCard(card));
  gameBoard.appendChild(card);
});

function flipCard(card) {
  if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
    card.textContent = card.getAttribute("data-Symbol");
    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.getAttribute("data-Symbol") === card2.getAttribute("data-Symbol")) {
    matchedCards.push(card1, card2);
    flippedCards = [];
    if (matchedCards.length === cardsArray.length) {
      setTimeout(() => alert("!!! You won !!!"), 300);
    }
  } else {
    setTimeout(() => {
      card1.textContent = "";
      card2.textContent = "";
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 800);
  }
}
