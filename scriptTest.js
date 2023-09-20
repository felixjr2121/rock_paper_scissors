function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const computerSelection = getComputerChoice();

function rockRound(computerSelection) {
    if (computerSelection == "rock") {
        console.log("The computer chose rock! It's a tie!");
    } else if (computerSelection == "paper") {
        console.log("The computer chose paper! You lose :(");
    } else if (computerSelection == "scissors") {
        console.log("The computer chose scissors. You win!");
    }
}

rock.addEventListener("click", rockRound);
