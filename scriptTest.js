function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const computerSelection = getComputerChoice();

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", function() {let playerSelection = "rock";});
paper.addEventListener("click", function() {let playerSelection = "paper";});
scissors.addEventListener("click", function() {let playerSelection = "scissors";});

function round(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == "rock" && computerSelection == "scissors"):
            console.log("You won! Rock beats scissors!");
            break;

        case (playerSelection == "paper" && computerSelection == "rock"):
            console.log("You won! Paper beats rock!");
            break;

        case (playerSelection == "scissors" && computerSelection == "paper"):
            console.log("You won! Scissors beats paper!");
            break;
    
        case (playerSelection == "rock" && computerSelection == "paper"):
            console.log("You lost! Rock loses to paper!");
            break;

        case (playerSelection == "paper" && computerSelection == "scissors"):
            console.log("You lost! Paper loses to scissors!");
            break;

        case (playerSelection == "scissors" && computerSelection == "rock"):
            console.log("You lost! Scissors loses to rock!");
            break;

        case (playerSelection == computerSelection):
            console.log("It's a tie!");
            break;
    }
}