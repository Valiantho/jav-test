/**Your game is going to play against the computer, so begin with a function 
called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ 
or ‘Scissors’. We’ll use this function in the game to make the computer’s 
play. Tip: use the console to make sure this is returning the expected 
output before moving to the next step!*/

function getComputerChoice() {
    let Chioce = ['Rock', 'Paper', 'Scissors'];
    let cal = Math.floor(Math.random() * Chioce.length);
    let computerChoice = Chioce[cal];
    
    return computerChoice;
}

/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and 
computerSelection - and then return a string that declares the winner 
of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so 
users can input rock, ROCK, RocK or any other variation).*/

function gamePlay(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log('its a tie');
    }

    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        } else{
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }}

        let computerChoice = getComputerChoice();

gamePlay('rock', computerChoice)

/*Important note: you want to return the results of this function call, not console.log() them. 
You’re going to use what you return later on, so let’s test this function by using console.log 
to see the results:*/

