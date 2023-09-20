function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    const container = document.querySelector("#container");
    const para = document.createElement('p');
    switch (true) {
        case (playerChoice == "rock" && computerChoice == "scissors"):
            para.textContent = "You won! Rock beats scissors!";
            break;

        case (playerChoice == "paper" && computerChoice == "rock"):
            para.textContent = "You won! Paper beats rock!";
            break;

        case (playerChoice == "scissors" && computerChoice == "paper"):
            para.textContent = "You won! Scissors beats paper!";
            break;

        case (playerChoice == "rock" && computerChoice == "paper"):
            para.textContent = "You lost! Rock loses to paper.";
            break;

        case (playerChoice == "paper" && computerChoice == "scissors"):
            para.textContent = "You lost! Paper loses to scissors.";
            break;

        case (playerChoice == "scissors" && computerChoice == "rock"):
            para.textContent = "You lost! Scissors loses to rock.";
            break;

        case (playerChoice == computerChoice):
            para.textContent = "It's a tie!";
            break;
    }
    container.appendChild(para);
}


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