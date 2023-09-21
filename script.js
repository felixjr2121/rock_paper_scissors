function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    const score = document.querySelector("#score");
    const result = document.querySelector("#result");

    switch (true) {
        case (playerChoice == "rock" && computerChoice == "scissors"):
            ++playerWins
            result.textContent = "You won! Rock beats scissors!";
            break;

        case (playerChoice == "paper" && computerChoice == "rock"):
            ++playerWins
            result.textContent = "You won! Paper beats rock!";
            break;

        case (playerChoice == "scissors" && computerChoice == "paper"):
            ++playerWins
            result.textContent = "You won! Scissors beats paper!";
            break;

        case (playerChoice == "rock" && computerChoice == "paper"):
            ++computerWins
            result.textContent = "You lost! Rock loses to paper.";
            break;

        case (playerChoice == "paper" && computerChoice == "scissors"):
            ++computerWins
            result.textContent = "You lost! Paper loses to scissors.";
            break;

        case (playerChoice == "scissors" && computerChoice == "rock"):
            ++computerWins
            result.textContent = "You lost! Scissors loses to rock.";
            break;

        case (playerChoice == computerChoice):
            result.textContent = "It's a tie!";
            break;
    }
    score.textContent = `Your score: ${playerWins} Computer score: ${computerWins}`;
}


const buttons = document.querySelectorAll("button");
let playerWins = 0;
let computerWins = 0;

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