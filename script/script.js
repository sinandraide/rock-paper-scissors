Math.random();

const CHOICES = ["rock", "paper", "scissors"];
let p1Score = 0;
let cpScore = 0;

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

const game = (pointsNeeded) => {
  while (p1Score !== pointsNeeded && cpScore !== pointsNeeded) {
    let p1Choice = prompt("rock, paper or scissors: ").toLowerCase();
    let cpChoice = getComputerChoice();
    if (!CHOICES.includes(p1Choice)) {
      console.log("wrong choice! Select again!");
      continue;
    }

    let winner = singleRound(p1Choice, cpChoice);
    if (winner === "DRAW") {
      console.log("DRAW! Select again!");
    } else if (winner === "P1") {
      console.log(p1Victory(p1Choice, cpChoice));
      p1Score++;
    } else {
      console.log(cpVictory(p1Choice, cpChoice));
      cpScore++;
    }

    console.log(`P1 Score: ${p1Score}, CP Score: ${cpScore}`);
  }

  if (p1Score > cpScore) console.log("YOU WIN!");
  else console.log("YOU LOSE!");
};

game(5);
