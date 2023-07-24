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

computerChoice = getComputerChoice();
playerChoice = getPlayerChoice();

function playRound(playerChoice, computerChoice){
    let text;
    if (playerChoice == "rock"){
        if (computerChoice == "paper"){
            text = `You lost! ${playerChoice} loses to ${computerChoice}`;
            console.log(text);
        }

        if (computerChoice == "rock"){
            text = `Draw ${playerChoice} draws ${computerChoice}`;
            console.log(text);
        }

        if (computerChoice == "scissors"){
            text = `You Win! ${playerChoice} beats ${computerChoice}`;
            console.log(text);
        }

    }

    if (playerChoice == "paper"){
        if (computerChoice == "scissors"){
            text = `You lost! ${playerChoice} loses to ${computerChoice}`;
            console.log(text);
        }

        if (computerChoice == "paper"){
            text = `Draw ${playerChoice} draws ${computerChoice}`;
            console.log(text);
        }

        if (computerChoice == "rock"){
            text = `You Win! ${playerChoice} beats ${computerChoice}`;
            console.log(text);
        }

    }

    if (playerChoice == "scissors"){
        if (computerChoice == "rock"){
            text = `You lost! ${playerChoice} loses to ${computerChoice}`;
            console.log(text);
        }

        if (computerChoice == "scissors"){
            text = `Draw ${playerChoice} draws ${computerChoice}`;
            console.log(text);
        }

        if (computerChoice == "paper"){
            text = `You Win! ${playerChoice} beats ${computerChoice}`;
            console.log(text);
        }

    }


    
    
}

playRound(playerChoice, computerChoice);


