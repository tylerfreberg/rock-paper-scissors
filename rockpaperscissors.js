// Classic Rock, Paper, Scissors. This game is played entirely via the console. Best of 3.


// Computer prompts user for a choice: rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock.
// If the user makes the same choice as the computer, it's a tie, and no points are given.

// Scores. Best of 3.
let playerScore = 0
let cpuScore = 0
let playerNum;
let validchoice;
let choices = ["rock", "paper", "scissors"];

while(true) {
    // "validchoice" checks if a valid answer was given or not. Otherwise, we alert the user that either an invalid answer or no answer was given and loop.
    validchoice = false;

    while(validchoice == false) {
        // Display a message: "Rock, Paper, Scissors, Shoot:" and get user input of one of the three options
        playerNum = prompt("Rock, Paper, Scissors, Shoot!");

        // Convert to numbers as indicated next to the "play" variable
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

    // picks a random integer between 0-2. O = "Rock", 1 = "Paper", 2 = "Scissors".
    let cpuNum = (Math.floor(Math.random() * 3));

    // possible outcomes after choices are made
    switch (true) {
        // equal numbers means a tie
        case (playerNum == cpuNum):
            alert(`You both played ${choices[playerNum]}.\nTie!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;
        
        // if playerNum is less than cpuNum, and cpuNum is not 3 (scissors), then cpu beats player
        case (playerNum < cpuNum && cpuNum - playerNum == 1):
            cpuScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n Computer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;

        // if cpuNum is less than playerNum, and playerNum is not 3 (scissors), then player beats cpu
        case (cpuNum < playerNum && playerNum - cpuNum == 1):
            playerScore += 1
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n You win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;

        // if cpuNum is less than playerNum, and playerNum is 3 (scissors), then cpu beats player
        // case strictly for rock vs scissors
        case (cpuNum < playerNum && playerNum - cpuNum == 2):
            cpuScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n Computer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;
        
        // if playerNum is less than cpuNum, and cpuNum is 3 (scissors), then player beats cpu
        // case strictly for rock vs scissors
        case (playerNum < cpuNum && cpuNum - playerNum == 2):
            playerScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\n You win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
    }
}