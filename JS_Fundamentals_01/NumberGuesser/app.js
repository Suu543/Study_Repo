/**
 * Game Function
 * Player must guess a number between a min and max
 * Player gets a certain amount of guesses
 * Notify player of guesses remaining
 * Notify the player of the correct answer if loose
 * Let player choose to play again
 */

// Game Values
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// UI Elements;
const game = document.getElementById("game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// Assign UI
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // // Game Over - won
    // // Disable Input
    // guessInput.disabled = true;
    // // Change border color
    // guessInput.style.borderColor = "green";
    // // Set message
    // setMessage(`${winningNum} is correct! YOU WIN!`, "green");

    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else {
    // Wrong Number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //   // Game Over - lost

      //   // Disable input
      //   guessInput.disabled = true;
      //   // Change border color
      //   guessInput.style.borderColor = "red";
      //   // Set message
      //   setMessage(
      //     `Game Over, YOU LOST. The Correct Number was ${winningNum}`,
      //     "green"
      //   );

      gameOver(
        false,
        `Game Over, YOU LOST. The Correct Number was ${winningNum}`
      );
    } else {
      // Clear Input
      guessInput.value = "";

      // Game Continues - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable Input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play Again
  guessBtn.value = "Play Aagin";
  guessBtn.className += "play-again";
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
