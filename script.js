const buttons = document.querySelectorAll('button');
let loses = 0;
let wins = 0;


buttons.forEach((button) => {

  button.addEventListener('click', function(e){
    let playerChoice = e.target.textContent;
    let outcome = playRound(playerChoice);
    if(outcome == "win"){
        wins++;
    }
    if(outcome == "lose"){
        loses++;
    }

    if(wins == 5 || loses == 5){
        winner(wins, loses);
    }

  });
});

function playRound(playerChoice){

    playerChoice = playerChoice.toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];

    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];

    if(playerChoice == "rock"){
        if(computerChoice == "rock"){
            return "draw";
        }
        if(computerChoice == "scissors"){
            return "win";
        }
        if(computerChoice == "paper"){
            return "lose";
        }
    }

    if(playerChoice == "paper"){
        if(computerChoice == "paper"){
            return "draw";
        }
        if(computerChoice == "rock"){
            return "win";
        }
        if(computerChoice == "scissors"){
            return "lose";
        }
    }

    if(playerChoice == "scissors"){
        if(computerChoice == "scissors"){
            return "draw";
        }
        if(computerChoice == "paper"){
            return "win";
        }
        if(computerChoice == "rock"){
            return "lose";
        }
    }


}

function winner(wins, loses){
    const body = document.body;
    let paragraph = document.createElement('p');
    paragraph.style.color = "white";
    if(loses == 5){
        paragraph.textContent = "You lost lmao";
    }
    else if(wins == 5){
        paragraph.textContent = "you win!";
    }
    body.append(paragraph);
}

