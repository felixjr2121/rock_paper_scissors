function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice == "rock" && computerChoice == "scissors"):
            console.log("You won! Rock beats scissors!");
            break;

        case (playerChoice == "paper" && computerChoice == "rock"):
            console.log("You won! Paper beats rock!");
            break;

        case (playerChoice == "scissors" && computerChoice == "paper"):
            console.log("You won! Scissors beats paper!");
            break;

        case (playerChoice == "rock" && computerChoice == "paper"):
            console.log("You lost! Rock loses to paper.");
            break;

        case (playerChoice == "paper" && computerChoice == "scissors"):
            console.log("You lost! Paper loses to scissors.");
            break;

        case (playerChoice == "scissors" && computerChoice == "rock"):
            console.log("You lost! Scissors loses to rock.");
            break;

        case (playerChoice == computerChoice):
            console.log("It's a tie!");
            break;
    }
}

/*function getPlayerChoice(event) {
    let playerChoice;
    if (event.target.classList.contains("rock")) {
        playerChoice = "rock";
    } else if (event.target.classList.contains("paper")) {
        playerChoice = "paper";
    } else if (event.target.classList.contains("scissors")) {
        playerChoice = "scissors";
    }
}*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function(event) {
        let playerChoice;
        if (event.target.classList.contains("rock")) {
            playerChoice = "rock";
        } else if (event.target.classList.contains("paper")) {
            playerChoice = "paper";
        } else if (event.target.classList.contains("scissors")) {
            playerChoice = "scissors";
        }
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
});