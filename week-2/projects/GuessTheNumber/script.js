let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

const prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Plese enter a valid number");
    return;
  }

  prevGuess.push(guess);
  if (numGuess == 10) {
    dispalyGuess(guess);
    displayMessage(`game Over, Random number was ${randomNumber}`);
    endGame();
  } else {
    dispalyGuess(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right the number was ${guess}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else {
    displayMessage(`Number is too high`);
  }
}
function displayMessage(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}
function dispalyGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML = prevGuess.toString();
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess.length = 0;
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMessage("");
    playGame = true;
  });
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;

  newGame();
}
