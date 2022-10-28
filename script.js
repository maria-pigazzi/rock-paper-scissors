const selectionButton = document.querySelectorAll(".selection");
const options = ["rock", "paper", "scissors"];

function computerPlay() {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
};

selectionButton.forEach(selectionButton => {
  selectionButton.addEventListener("click", function() {
    const playerSelection = selectionButton.selection;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
  });
});

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "rock" && computerSelection === "scissors")
  || (playerSelection === "paper" && computerSelection === "rock")
  || (playerSelection === "scissors" && computerSelection === "paper")) {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    alert( "Looks like a draw!" );
  } else  {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
};

playRound();


// Remove logic that plays 5 rounds

/* function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    // console.log(computerSelection);
    // console.log(playerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
};

game() */
