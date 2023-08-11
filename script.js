let playerScore = 0;
let computerScore = 0;

const ROCKBUTTON = document.getElementById('ROCK')
const PAPERBUTTON = document.getElementById('PAPER')
const SCISSORSBUTTON = document.getElementById('SCISSORS')

const SCOREELEMENT = document.getElementById("score")
const TEXTELEMENT = document.getElementById("text")


// let validatePlayersChoice = function () {
//     if (playersChoice === "ROCK" || playersChoice === "PAPER" || playersChoice === "SCISSORS") {
//         console.log(playersChoice);
//         return true;
//     } else {
//         playersChoice = prompt("Choose again! Your last choice was invalid").toUpperCase();
//         console.log(playersChoice);
//         validatePlayersChoice();
//     }
// }
let getComputerChoice = function () {
    let computerChoice = ["ROCK", "PAPER", "SCISSORS"]
    let randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum);
    // console.log(`Computer: ${computerChoice[randomNum]}`);
    return computerChoice[randomNum];
}
let resetGame = function(){
    playerScore = 0;
    computerScore = 0;
    SCOREELEMENT.textContent = "";
    TEXTELEMENT.textContent = "";
    TEXTELEMENT.style.color = "black"
};


let playRound = function (playersChoice) {
    // playersChoice = prompt("What do you choose?").toUpperCase();
    // console.log(playersChoice);
    // validatePlayersChoice()
    if (playersChoice === "ROCK") {
        switch (getComputerChoice()) {
            case "ROCK":
                TEXTELEMENT.textContent="It's a tie!";
                break;
            case "PAPER":
                TEXTELEMENT.textContent="You lose! PAPER beats ROCK";
                computerScore++;
                break;
            case "SCISSORS":
                TEXTELEMENT.textContent="You win! ROCK beats SCISSORS";
                playerScore++;
                break;
        }
    } else if (playersChoice === "PAPER") {
        switch (getComputerChoice()) {
            case "ROCK":
                TEXTELEMENT.textContent="You win! PAPER beats ROCK";
                playerScore++;
                break;
            case "PAPER":
                TEXTELEMENT.textContent="It's a tie!";
                break;
            case "SCISSORS":
                TEXTELEMENT.textContent="You lose! SCISSORS beat PAPER";
                computerScore++;
                break;
        }
    } else {
        switch (getComputerChoice()) {
            case "ROCK":
                TEXTELEMENT.textContent="You lose! ROCK beats SCISSORS";
                computerScore++;
                break;
            case "PAPER":
                TEXTELEMENT.textContent="You win! SCISSORS beat PAPER";
                playerScore++;
                break;
            case "SCISSORS":
                TEXTELEMENT.textContent="It's a tie!";
                break;
        }
    }
    if (computerScore === 5) {
        TEXTELEMENT.style.color = "red";
        TEXTELEMENT.textContent = "You lose! Computer wins!"
        resetGame();
    }
    if (playerScore === 5) {
        TEXTELEMENT.style.color = "green";
        TEXTELEMENT.textContent = "You win! Computer loses!"
        resetGame();
    }
    SCOREELEMENT.textContent =`YOU: ${playerScore} COMPUTER: ${computerScore}`;
}

// let playGame = function () {
//     while (playerScore < 5 && computerScore < 5) {
//         playRound()
//     }
//     if (playerScore > computerScore) {
//         console.log(`YOU WIN THE GAME: ${playerScore} : ${computerScore}`);
//     } else {
//         console.log(`YOU LOSE THE GAME: ${playerScore} : ${computerScore}`);
//     }
// }
ROCKBUTTON.addEventListener("click", function (){
    playRound("ROCK")
})
PAPERBUTTON.addEventListener("click", function (){
    playRound("PAPER")
})
SCISSORSBUTTON.addEventListener("click", function (){
    playRound("SCISSORS")
})