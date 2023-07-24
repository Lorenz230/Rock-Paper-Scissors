function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        return "rock";
    }
    if (x == 1) {
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getPlayerChoice(){
    let choice = prompt("Pick rock, paper or scissors");
    choice = choice.toLowerCase();
    console.log(choice);
    return choice;
    
}

function playRound(playerChoice, computerChoice){
    let text;
    if (playerChoice == "rock"){
        if (computerChoice == "paper"){
            text = `You lost! ${playerChoice} loses to ${computerChoice}`;
            return "lose";
        }

        if (computerChoice == "rock"){
            text = `Draw ${playerChoice} draws ${computerChoice}`;
            return "draw";
        }

        if (computerChoice == "scissors"){
            text = `You Win! ${playerChoice} beats ${computerChoice}`;
            return "win";
        }

    }

    if (playerChoice == "paper"){
        if (computerChoice == "scissors"){
            text = `You lost! ${playerChoice} loses to ${computerChoice}`;
            return "lose";
        }

        if (computerChoice == "paper"){
            text = `Draw ${playerChoice} draws ${computerChoice}`;
            return "draw";
        }

        if (computerChoice == "rock"){
            text = `You Win! ${playerChoice} beats ${computerChoice}`;
            return "win";
        }

    }

    if (playerChoice == "scissors"){
        if (computerChoice == "rock"){
            text = `You lost! ${playerChoice} loses to ${computerChoice}`;
            return "lose";
        }

        if (computerChoice == "scissors"){
            text = `Draw ${playerChoice} draws ${computerChoice}`;
            return "draw";
        }

        if (computerChoice == "paper"){
            text = `You Win! ${playerChoice} beats ${computerChoice}`;
            return "win";
        }

    }

}

function game(){
    let wins = 0;
    let loses = 0;

    for(let x = 0; x < 5; x++){
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();

        outcome = playRound(playerChoice, computerChoice);
        if(outcome == "win"){
            wins++;
        }
        if(outcome == "lose"){
            loses++;
        }
    }

    if(wins > loses){
        console.log("Congradulaitons! you won!");
    }
    else if(loses > wins){
        console.log("You lost! LMAO!");
    }
    else{
        console.log("It's a draw");
    }
}

game();
