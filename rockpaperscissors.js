// Classic Rock, Paper, Scissors. This game is played entirely via the console. Best of 3.


// Computer prompts user for a choice: rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock.
// If the user makes the same choice as the computer, it's a tie, and no points are given.

// Scores. Best of 3.
let playerScore = 0
let cpuScore = 0
let validchoice = false;
let playerNum = "";
let choices = ["rock", "paper", "scissors"];

let cpuNum = (Math.floor(Math.random() * 3)); // picks a random integer between 0-2. O = "Rock", 1 = "Paper", 2 = "Scissors".

// Display a message: "Rock, Paper, Scissors, Shoot:" and get user input of one of the three options
// Convert to numbers as indicated next to the "play" variable
// "validchoice" checks if a valid answer was given or not. Otherwise, we alert the user that either an invalid answer or no answer was given and loop.
while(validchoice == false) {
    playerNum = prompt("Rock, Paper, Scissors, Shoot!");

    if (playerNum == null || playerNum == "") {
        alert("No answer given. Please try again.");
    }

    else if (playerNum.toLowerCase() == "rock") {
        playerNum = 0;
        validchoice = true;
    }

    else if (playerNum.toLowerCase() == "paper") {
        playerNum = 1;
        validchoice = true;
    }

    else if (playerNum.toLowerCase() == "scissors") {
        playerNum = 2
        validchoice = true;
    }

    else {
        alert("Invalid answer. Please try again.")
    }
}
// if player number == computer number:
//      return "Tie", no score increment
// if player number < computer number and player number != 0:
//      computer wins, increment score by 1.
// else if player number > computer number and player number != 2:
//      Player wins, increment score by 1
// else if player number < computer number:
//      computer wins, increment score by 1
// else if player number > computer number:
//      player wins, increment score by 1

console.log(cpuNum);
console.log(playerNum);

switch (true) {
    case (playerNum == cpuNum):
        alert(`You both played ${choices[playerNum]}.\nTie!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
        break;
    case (playerNum < cpuNum && cpuNum - playerNum == 1):
        alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n Computer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
        cpuScore += 1;
        break;
    case (cpuNum < playerNum && playerNum - cpuNum == 1):
        alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n You win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
        playerScore += 1
        break;
    case (playerNum < cpuNum && cpuNum - playerNum == 2):
        alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n Computer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
        cpuScore += 1;
        break;
    case (cpuNum < playerNum && playerNum - cpuNum == 2):
        alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n You win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
        playerScore += 1;
}

