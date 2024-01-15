const CHOICES = ["rock", "paper", "scissors"];
let p1Score = 0;
let cpScore = 0;
const [scissors, paper, rock] = document.querySelectorAll(".content button");
const result = document.querySelector(".results");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");

/* 
selects a random rock-paper-scissor choice
@returns: the randomly selected choice
*/
const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3);
  return CHOICES[randNum];
};

const p1Victory = (playerSelection, computerSelection) => {
  return `You Win! ${playerSelection} beats ${computerSelection}`;
};

const cpVictory = (playerSelection, computerSelection) => {
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
};
const singleRound = (playerSelection, computerSelection) => {
  const playerSelectionFormatted = playerSelection.toLowerCase();

  // determine victor
  return _determineWinner(playerSelectionFormatted, computerSelection);
};

const _determineWinner = (playerSelection, computerSelection) => {
  const p1Victory = "P1";
  const cpVictory = "CP";
  const draw = "DRAW";

  if (playerSelection === computerSelection) return draw;

  if (playerSelection === "rock") {
    if (computerSelection === "paper") return cpVictory;
    if (computerSelection === "scissors") return p1Victory;
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") return cpVictory;
    if (computerSelection === "rock") return p1Victory;
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") return cpVictory;
    if (computerSelection === "paper") return p1Victory;
  }
};

const game = (event) => {
  let cpChoice = getComputerChoice();
  let p1Choice = event.target.id;
  let winner = singleRound(p1Choice, cpChoice);
  let text = "";
  if (winner === "DRAW") {
    text = "DRAW!";
  } else if (winner === "P1") {
    text = p1Victory(p1Choice, cpChoice);
    p1Score++;
  } else {
    text = cpVictory(p1Choice, cpChoice);
    cpScore++;
  }

  playerScoreDiv.textContent = `Player Score: ${p1Score}`;
  computerScoreDiv.textContent = `CP Score: ${cpScore}`;
  result.textContent = text;
  if (p1Score === 5) {
    alert("YOU WIN!");
    reset();
  } else if (cpScore === 5) {
    alert("YOU LOSE!");
    reset();
  }
};

const reset = () => {
  playerScoreDiv.textContent = "Player Score: ";
  computerScoreDiv.textContent = "CP Score:";
  result.textContent = "";
  p1Score = 0;
  cpScore = 0;
};

scissors.addEventListener("click", game);
paper.addEventListener("click", game);
rock.addEventListener("click", game);
