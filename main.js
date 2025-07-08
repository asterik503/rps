function getComputerChoice(){
    if ((Math.random() * 100) < 33.3) {
        return "rock";
    }
    else if (Math.random() * 100 < 66.6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let input=prompt("Enter your choice : ");
    return input;
}

let humanScore=0 , computerScore=0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore +=1;
            }
        else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore +=1;
            }
        else {
            console.log("Its a draw");
            }
    }

    else if (humanChoice == "paper") {
     if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore +=1;
            }
        else if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore +=1;
            }
        else {
            console.log("Its a draw");
            }
    }
    
    else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore +=1;
            }
        else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Rock");
            humanScore +=1;
            }
        else {
            console.log("Its a draw");
            }
    }
}


function playGame() {
    for (i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection.toLowerCase(),computerSelection)
    }
    if (humanScore > computerScore) {
        console.log("You won")
    }
    else if (computerScore > humanScore){
        console.log("Computer Won")
    }
    else {
        console.log("It is a draw")
    }
}

playGame()

