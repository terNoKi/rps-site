let choices = ["Rock", "Paper", "Scissors"];
let counterComputer = 0;
let counterPlayer = 0;
let winner = "";
let gameOver = false;
let pick = "";

let btnRock = document.getElementById("Rock");
let btnPaper = document.getElementById("Paper");
let btnScissors = document.getElementById("Scissors");

btnRock.addEventListener("click", function(){
    pick = btnRock.innerHTML;
    getPlayerChoice(pick);
    game();
});

btnPaper.addEventListener("click", function(){
    pick = btnPaper.innerHTML;
    getPlayerChoice(pick);
    game();
});

btnScissors.addEventListener("click", function(){
    pick = btnScissors.innerHTML;
    getPlayerChoice(pick);
    game();
});

let i = 1;

document.getElementById("rounds").innerHTML = i;
document.getElementById("Player").innerHTML = counterPlayer;
document.getElementById("Computer").innerHTML = counterComputer;

function game() {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice(pick);
  let play = playRound(playerChoice, computerChoice);

  if (play === "computer win") {
    counterComputer++;
  } else if (play === "player win") {
    counterPlayer++;
  }

  i++;
  document.getElementById("rounds").innerHTML = i;

  if (counterPlayer === 3) {
    winner = "Player";
    gameOver = true;
  } else if (counterComputer === 3) {
    winner = "Computer";
    gameOver = true;
  }

  document.getElementById("Player").innerHTML = counterPlayer;
  document.getElementById("Computer").innerHTML = counterComputer;

  if (gameOver) {
    document.getElementById("texth").innerHTML = "Game Over!";
    document.getElementById("textp").innerHTML = `${winner} wins!`;
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
  }
}

function getComputerChoice() {
  let index = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[index];
  console.log(`Computer chooses ${computerChoice}`);
  return computerChoice;
}

function getPlayerChoice(pick) {
  let choice;
  if (pick === "ROCK") {
    choice = "Rock";
  } else if (pick === "PAPER") {
    choice = "Paper";
  } else if (pick === "SCISSORS") {
    choice = "Scissors";
  }
  console.log(`Player chooses ${choice}`);
  return choice;
}

function playRound(playerChoice, computerChoice) {
  let state = "";
  if (playerChoice === computerChoice) {
    state = "draw";
    console.log("It's a draw");
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    state = "computer win";
    console.log("Computer wins!");
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    state = "computer win";
    console.log("Computer wins!");
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    state = "computer win";
    console.log("Computer wins!");
  } else {
    state = "player win";
    console.log("Player wins!");
  }
  return state;
}