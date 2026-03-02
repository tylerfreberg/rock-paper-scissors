// Classic Rock, Paper, Scissors. This game is played entirely via the console. Best of 5.


// Computer prompts user for a choice: rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock.
// If the user makes the same choice as the computer, it's a tie, and no points are given.

// returns a random integer between 0-2. O = "Rock", 1 = "Paper", 2 = "Scissors".
function getComputerChoice() {
    return(Math.floor(Math.random() * 3));
}

// returns a number based on player input. O = "Rock", 1 = "Paper", 2 = "Scissors".
function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors, Shoot!");

    // Convert to numbers as indicated next to the "play" variable
    switch (true) {
        case (choice == null || choice == ""):
            alert("No answer given. Please try again.");
            return(getHumanChoice())

        case (choice.toLowerCase() == "rock"):
            return(0);

        case (choice.toLowerCase() == "paper"):
            return(1);

        case (choice.toLowerCase() == "scissors"):
            return(2);

        default:
            alert("Invalid answer. Please try again.");
            return(getHumanChoice())
    }
}

// plays a round of Rock, Paper, Scissors
function playRound() {
    let playerNum = getHumanChoice();
    let cpuNum = getComputerChoice();
    let choices = ["rock", "paper", "scissors"];

    // Using numbers for comparison instead of strings, as it amounts to less potential cases when you use a little math.
    switch (true) {
        // equal numbers means a tie
        case (playerNum == cpuNum):
            alert(`You both played ${choices[playerNum]}.\nTie!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;
        
        // if playerNum is less than cpuNum, and cpuNum is not 3 (scissors), then cpu beats player
        case (playerNum < cpuNum && cpuNum - playerNum == 1):
            cpuScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nComputer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;

        // if cpuNum is less than playerNum, and playerNum is not 3 (scissors), then player beats cpu
        case (cpuNum < playerNum && playerNum - cpuNum == 1):
            playerScore += 1
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nYou win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;

        // if cpuNum is less than playerNum, and playerNum is 3 (scissors), then cpu beats player
        // case strictly for rock vs scissors
        case (cpuNum < playerNum && playerNum - cpuNum == 2):
            cpuScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nComputer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;
        
        // if playerNum is less than cpuNum, and cpuNum is 3 (scissors), then player beats cpu
        // case strictly for rock vs scissors
        case (playerNum < cpuNum && cpuNum - playerNum == 2):
            playerScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nYou win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
    }

    if (playerScore == 3 || cpuScore == 3) {
        let playAgain = prompt(`Game Over! ${playerScore > cpuScore ? "You win!" : "You lose!"}\nYou: ${playerScore}\nCPU: ${cpuScore}\nPlay again? (Y/N)`);
        
        if(playAgain.toLowerCase() == 'y') {
            playerScore = 0;
            cpuScore = 0;
        }

        else if(playAgain.toLowerCase() == 'n') {
            alert("Thank you for playing! Goodbye.");
        }

        else {
            alert("Unexpected input. Ending game. Goodbye.");
        }
    }
}

let playerScore = 0
let cpuScore = 0

while (playerScore != 3 && cpuScore != 3) {
    // "validchoice" checks if a valid answer was given or not. Otherwise, we alert the user that either an invalid answer or no answer was given and loop.
    playRound();
 
}

