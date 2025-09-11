/*
Rock paper scissors game played through console with a computer.
/* 


/* Make sure that Results container is empty at start of game */
const resultContainer = document.querySelector(".results-container")
resultContainer.classList.add("hidden");


/*
GET for computer choice:
    INITIALIZE a random number variable that RETURNS a random number between 1-3.
    IF random number is 1
        RETURN Rock
    IF random number is 2
        RETURN Scissors
    IF random number is 3
        RETURN Paper
*/



function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch(randomNum){
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
        case 3:
            return "paper";
            break;
    }
}


/*
GET for Human choice
    INITIALIZE variable for Human choice that RETURNS user INPUT.
    IF human choice is scissors
        RETURN scissors
    IF human choice is paper
        RETURN paper
    IF human choice is rock
        RETURN rock
*/

function getHumanChoice(target){

    const humanChoice = target;

   switch (humanChoice){
        case "scissors":
            return "scissors";
            break;
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
   }
}


/*
INITIALIZE 2 variables to keep track of human scores and computer scores
SET variable values to 0;
*/

let humanScore = 0;
let computerScore = 0;

/*
GET one round of game
    GET human choice
    GET computer choice
        IF Rock vs scissors
            scissors lose, INCREMENT winner score by 1 and PRINT winner
        IF Rock vs paper
            rock lose, INCREMENT winner score by 1 and PRINT winner
        IF paper vs scissors
            paper lose, INCREMENT winner score by 1 and PRINT winner
        ELSE
            Don't increment score, choices equal.
*/

function playRound(humanChoice, computerChoice){
    switch(true){
        case humanChoice === "rock" && computerChoice === "scissors":
            results.textContent = "You win! Rock beats Scissors";
            humanScoreText.textContent = `Your score: ${humanScore += 1}`;
            computerScoreText.textContent = `Computer score: ${computerScore}`;
            break;
        case humanChoice === "scissors" && computerChoice === "rock":
            results.textContent = ("You lose! Rock beats Scissors");
            humanScoreText.textContent = `Your score: ${humanScore}`;
            computerScoreText.textContent = `Computer score: ${computerScore += 1}`;
            break;
        case humanChoice === "paper" && computerChoice === "rock":
            results.textContent = ("You win! Paper beats Rock");
            humanScoreText.textContent = `Your score: ${humanScore += 1}`;
            computerScoreText.textContent = `Computer score: ${computerScore}`;
            break;
        case humanChoice === "rock" && computerChoice === "paper":
            results.textContent = ("You lose! Paper beats Rock");
            humanScoreText.textContent = `Your score: ${humanScore}`;
            computerScoreText.textContent = `Computer score: ${computerScore += 1}`;
            break;
        case humanChoice === "scissors" && computerChoice === "paper":
            results.textContent = ("You win! Scissors beats Paper");
            humanScoreText.textContent = `Your score: ${humanScore += 1}`;
            computerScoreText.textContent = `Computer score: ${computerScore}`;
            break;
        case humanChoice === "paper" && computerChoice === "scissors":
            results.textContent = ("You lose! Scissors beats Paper");
            humanScoreText.textContent = `Your score: ${humanScore}`;
            computerScoreText.textContent = `Computer score: ${computerScore += 1}`;
            break;
        default: 
            results.textContent = ("Choices equal! No scores distributed")
    }
    determineWinner();
}


/*
CREATE function for restarting the game by checking if winner function returns true;
STOP code execution by removing Event listener for buttons.
IF play again button pressed, add Event listeners
RESET scores
*/

function determineWinner(){
    if(humanScore === 5 || computerScore === 5){
        buttons.forEach(button => button.removeEventListener("click", handleButtons));
        playAgainButton.classList.remove("hidden");  
        winnerText.classList.remove("hidden");
        setTimeout(() => results.classList.add("hidden"), 1000);
        if(humanScore === 5)winnerText.textContent = "Winner: Human";
        if(computerScore === 5)winnerText.textContent = `Winner: Computer`; 
    }

}

/*
GET elements for displaying results
GET function that handles play again logic.
*/
    const buttons = document.querySelectorAll(".buttons-container button")
    const winnerText = document.querySelector(".winner");
    const results = document.querySelector(".result");
    const scoreContainer = document.querySelector(".scores");
    const humanScoreText = scoreContainer.firstElementChild;
    const computerScoreText = scoreContainer.lastElementChild;


function playAgain(){
    buttons.forEach(button => button.addEventListener("click", handleButtons));
    humanScore = 0;
    computerScore = 0;
    humanScoreText.textContent = `Your score: ${humanScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    playAgainButton.classList.add("hidden");
    winnerText.textContent = "";
    results.classList.add("hidden");
    winnerText.classList.add("hidden");
}

/*
GET function to handle buttons logic to target them in other functions.
*/

function handleButtons(e){
    const target = e.target.id;
    const humanChoice = getHumanChoice(target);
    const computerChoice = getComputerChoice();
    results.classList.remove("hidden");
    resultContainer.classList.remove("hidden");
    scoreContainer.firstElementChild.textContent = `Your score: ${humanScore}`;
    scoreContainer.lastElementChild.textContent = `Computer score ${computerScore}`;
    playRound(humanChoice, computerChoice);
}

/*
INITIALIZE event listeners for buttons to listen for a lick and execute the event handler function.
*/ 

buttons.forEach(button => button.addEventListener("click", handleButtons));

const playAgainButton = document.querySelector(".play-again")
playAgainButton.addEventListener("click", playAgain);