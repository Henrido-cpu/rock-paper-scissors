/*
Rock paper scissors game played through console with a computer.



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
        default: 
            alert("Type Rock, Paper or Scissors");
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

    const results = document.querySelector(".results").firstElementChild;
    const scoreContainer = document.querySelector(".scores");
    const humanScoreText = scoreContainer.firstElementChild;
    const computerScoreText = scoreContainer.lastElementChild;
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
}



/*
INITIALIZE event listeners for buttons to listen for a lick and execute the event handler function.
*/ 

function handleButtons(e){
    const target = e.target.id;
    const humanChoice = getHumanChoice(target);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", handleButtons));