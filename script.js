
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, paper, or scissors?", ""); 

        function playRound(playerSelection, computerSelection) {

            const playerSelectionLower = playerSelection.toLowerCase();

            switch (true) {
                case (playerSelectionLower == "rock" && computerSelection == "scissors"):
                    playerWins++
                    return ("You won! Rock beats scissors!");
                    break;

                case (playerSelectionLower == "paper" && computerSelection == "rock"):
                    playerWins++
                    return ("You won! Paper beats rock!");
                    break;

                case (playerSelectionLower == "scissors" && computerSelection == "paper"):
                    playerWins++
                    return ("You won! Scissors beats paper!");
                    break;
            
                case (playerSelectionLower == "rock" && computerSelection == "paper"):
                    computerWins++
                    return ("You lost! Rock loses to paper!");
                    break;

                case (playerSelectionLower == "paper" && computerSelection == "scissors"):
                    computerWins++
                    return ("You lost! Paper loses to scissors!");
                    break;

                case (playerSelectionLower == "scissors" && computerSelection == "rock"):
                    computerWins++
                    return ("You lost! Scissors loses to rock!");
                    break;

                case (playerSelectionLower == computerSelection):
                    return ("It's a tie!");
                    break;

                default:
                    return ("You must enter rock, paper, or scissors.");
            }
        }
        console.log(playRound(playerSelection,computerSelection));
    }
    if (playerWins > computerWins) {
        console.log("You won the game!");
    } else if (playerWins < computerWins) {
        console.log("You lost the game :(");
    } else if (playerWins == computerWins) {
        console.log("The game was a tie!");
    }
}









//function playRound(compChoice, userChoice) {
//    if ((userChoice === "rock" && compChoice === "scissors") || (userChoice === "scissors" && compChoice == "paper") || (userChoice === "paper" && compChoice === "rock")) {
//        return "You won the round!";
//    } else if ((userChoice === "rock" && compChoice === "paper") || (userChoice === "scissors" && compChoice == "rock") || (userChoice === "paper" && compChoice === "scissors")) {
//        return "You lost the round :(";
//    } else if (compChoice === userChoice) {
//        return "It's a tie";
//    } else {
//        return "You must enter rock, paper, or scissors.";
//    }
//}

