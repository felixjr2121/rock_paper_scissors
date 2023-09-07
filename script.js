
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    switch (true) {
        case (playerSelection == "rock" && computerSelection == "scissors"):
            alert("You won! Rock beats scissors!");
            break;

        case (playerSelection == "paper" && computerSelection == "rock"):
            alert("You won! Paper beats rock!");
            break;

         case (playerSelection == "scissors" && computerSelection == "paper"):
            alert("You won! Scissors beats paper!");
            break;
        
        case (playerSelection == "rock" && computerSelection == "paper"):
            alert("You lost! Rock loses to paper!");
            break;

        case (playerSelection == "paper" && computerSelection == "scissors"):
            alert("You lost! Paper loses to scissors!");
            break;

        case (playerSelection == "scissors" && computerSelection == "rock"):
            alert("You lost! Scissors loses to rock!");
            break;

        case (playerSelection == computerSelection):
            alert("It's a tie!");
            break;

        default:
            alert("You must enter rock, paper, or scissors.");
    }
    
    //if (player chooses rock and comp chooses scissors) or (player chooses paper and comp chooses rock) or (player chooses scissors and comp chooses paper)
        //return a winning message
    //otherwise if (player chooses rock and comp chooses paper) or (player chooses paper and comp chooses scissors) or (player chooses scissors and comp chooses rock)
        //return a losing message
    //otherwise if player and comp make the same choice
        //return a tie message
    //otherwise return a message letting the player know that they must choose rock, paper, or scissors
  }

 const computerSelection = getComputerChoice();
 const playerSelection = "paper"; 






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

