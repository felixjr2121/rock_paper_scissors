
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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

