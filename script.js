let playersChoice
let playerScore = 0;
let computerScore = 0;

let validatePlayersChoice = function () {
    if (playersChoice === "ROCK" || playersChoice === "PAPER" || playersChoice === "SCISSORS") {
        console.log(playersChoice);
        return true;
    } else {
        playersChoice = prompt("Choose again! Your last choice was invalid").toUpperCase();
        console.log(playersChoice);
        validatePlayersChoice();
    }
}
let getComputerChoice = function () {
    let computerChoice = ["ROCK", "PAPER", "SCISSORS"]
    let randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
    console.log(`Computer: ${computerChoice[randomNum]}`);
    return computerChoice[randomNum];
}

let playRound = function () {
    playersChoice = prompt("What do you choose?").toUpperCase();
    console.log(playersChoice);
    validatePlayersChoice()
    if (playersChoice === "ROCK") {
        switch (getComputerChoice()) {
            case "ROCK":
                console.log("It's a tie!");
                break;
            case "PAPER":
                console.log("You lose! PAPER beats ROCK");
                computerScore++;
                break;
            case "SCISSORS":
                console.log("You win! ROCK beats SCISSORS");
                playerScore++;
                break;
        }
    } else if (playersChoice === "PAPER") {
        switch (getComputerChoice()) {
            case "ROCK":
                console.log("You win! PAPER beats ROCK");
                playerScore++;
                break;
            case "PAPER":
                console.log("It's a tie!");
                break;
            case "SCISSORS":
                console.log("You lose! SCISSORS beat PAPER");
                computerScore++;
                break;
        }
    } else {
        switch (getComputerChoice()) {
            case "ROCK":
                console.log("You lose! ROCK beats SCISSORS");
                computerScore++;
                break;
            case "PAPER":
                console.log("You win! SCISSORS beat PAPER");
                playerScore++;
                break;
            case "SCISSORS":
                console.log("It's a tie!");
                break;
        }
    }
    console.log(`YOU: ${playerScore} COMPUTER: ${computerScore}`);
}

let playGame = function(){
    while (playerScore < 5 && computerScore < 5) {
        playRound()
    }
    if(playerScore > computerScore){
        console.log(`YOU WIN THE GAME: ${playerScore} : ${computerScore}`);
    }else{
        console.log(`YOU LOSE THE GAME: ${playerScore} : ${computerScore}`);
    }
}
playGame();