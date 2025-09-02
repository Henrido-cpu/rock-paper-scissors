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

function getHumanChoice(){
   let humanChoice = prompt("Enter choice", "Rock, Paper or perhaps Scissors?").toLowerCase();
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
    switch(true){
        case humanChoice === "rock" && computerChoice === "scissors":
            console.log("You win! Rock beats Scissors");
            humanScore += 1;
            break;
        case humanChoice === "scissors" && computerChoice === "rock":
            console.log("You lose! Rock beats Scissors");
            computerScore +=1;
            break;
        case humanChoice === "paper" && computerChoice === "rock":
            console.log("You win! Paper beats Rock");
            humanScore += 1;
            break;
        case humanChoice === "rock" && computerChoice === "paper":
            console.log("You lose! Paper beats Rock");
            computerScore +=1;
            break;
        case humanChoice === "scissors" && computerChoice === "paper":
            console.log("You win! Scissors beats Paper");
            humanScore += 1;
            break;
        case humanChoice === "paper" && computerChoice === "scissors":
            console.log("You lose! Scissors beats Paper");
            computerScore +=1;
            break;
        default: 
            console.log("Choices equal! No scores distributed")
    }
}


/*
GET full game of 5 rounds
    GET round and GET score variables
        LOOP rounds until someone with a score of 5 wins.
    PRINT winner 
*/

function playGame(){
    while(humanScore < 5 && computerScore < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Your choice: ${humanSelection}, Computer choice: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Your score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    if(humanScore === 5){
        alert("You win, woohoo!");
        const choice = prompt("Wanna play again, yes or no").toLowerCase();
        if(choice === "yes"){
            humanScore = 0;
            computerScore = 0;
            playGame();
        }else if (choice === "no"){
            return;
        }

    }else if(computerScore === 5){
        alert("You lost, oh no!");
        const choice = prompt("Wanna play again, yes or no").toLowerCase();
        if(choice === "yes"){
            humanScore = 0;
            computerScore = 0;
            playGame();
        }else if (choice === "no"){
            return;
        }
    }
}
playGame();