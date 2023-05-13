/**Your game is going to play against the computer, so begin with a function 
called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ 
or ‘Scissors’. We’ll use this function in the game to make the computer’s 
play. Tip: use the console to make sure this is returning the expected 
output before moving to the next step!*/

function getComputerChoice() {
    let Chioce = ['rock', 'paper', 'scissors'];
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
        return 'its a tie';
    }

   else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else{
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }};

       

      /*  Write a NEW function called game(). Use the previous function inside of this 
        one to play a 5 round game that keeps score and reports a winner or loser at the end.
        You have not officially learned how to “loop” over code to repeat function calls… if 
        you already know about loops from somewhere else (or if you feel like doing some more learning) 
        feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. 
        Loops are covered in the next lesson.*/

        function game(){
        for (i=0; i < 5; i++){
           
            let computerChoice = getComputerChoice();
            let playerChoice = prompt('Write rock, paper or scissors', 'input here');
            let result = gamePlay(playerChoice, computerChoice);
            let computerScore = 0;
            let playerScore = 0;

            if (result === `You Win! ${playerChoice} beats ${computerChoice}`){
                playerScore++;
                console.log(`Round ${i+1}: Player Wins!`);
            }
            else if (result === `You Lose! ${computerChoice} beats ${playerChoice}`){

                console.log(`Round ${i+1}: Computer Wins!`)
            } 
            else if (result === 'its a tie'){
                console.log(`Round ${i+1}: 'its a tie`)
            }
    
            }
    
            }
            game()

        


/*Important note: you want to return the results of this function call, not console.log() them. 
You’re going to use what you return later on, so let’s test this function by using console.log 
to see the results:*/



