const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result = "" ; 

possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissor";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice){
        result = "It's a draw"
    }
    else if (computerChoice ==="paper" && userChoice === "rock" ){
        result = "you lost!"
    }
    else if (computerChoice ==="paper" && userChoice === "scissor" ){
        result = "you win!"
    }
    else if (computerChoice ==="rock" && userChoice === "scissor" ){
        result = "you lost!"
    }
    else if (computerChoice ==="rock" && userChoice === "paper" ){
        result = "you win!"
    }
    else if (computerChoice ==="scissor" && userChoice === "rock" ){
        result = "you win!"
    }
    else if (computerChoice ==="Scissor" && userChoice === "paper" ){
        result = "you lost!"
    }
    resultDisplay.innerHTML = result
}