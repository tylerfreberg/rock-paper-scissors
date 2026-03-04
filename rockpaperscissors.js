// Classic Rock, Paper, Scissors. This game is played entirely via the console. Best of 5.


// Computer prompts user for a choice: rock, paper, or scissors. Rock beats scissors, scissors beats paper, and paper beats rock.
// If the user makes the same choice as the computer, it's a tie, and no points are given.

// returns a random integer between 0-2. O = "Rock", 1 = "Paper", 2 = "Scissors".
function getComputerChoice() {
    return(Math.floor(Math.random() * 3));
}

// returns a number based on player input. O = "Rock", 1 = "Paper", 2 = "Scissors".
function getHumanChoice() {
    let buttons = document.querySelectorAll("#buttoncontainer button");

    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            const id = event.target.id;

            switch (id) {
                case ("rock"):
                    playRound(0);
                    break;
                case ("paper"):
                    playRound(1);
                    break;
                case ("scissors"):
                    playRound(2);
                    break;
    }
        })
    })
}

// plays a round of Rock, Paper, Scissors
function playRound(num) {
    let playerNum = 0;
    let cpuNum = 0;
    let choices = ["rock", "paper", "scissors"];

    let gameplan = document.querySelector("#gameplan")
    let playerChoice = document.createElement("p");
    let cpuChoice = document.createElement("p");
    let winner = document.createElement("p");

    // Using numbers for comparison instead of strings, as it amounts to less potential cases when you use a little math.
    switch (true) {
        // equal numbers means a tie
        case (playerNum == cpuNum):
            playerChoice.textContent = `You played ${choices[playerNum]}.`
            cpuChoice.textContent = `Computer played ${choices[cpuNum]}.`
            winner.textContent = `It's a tie! No points given.`
            
            gameplan.appendChild(playerChoice)
            gameplan.appendChild(cpuChoice)
            gameplan.appendChild(winner)
            break;
        
        // if playerNum is less than cpuNum, and cpuNum is not 2 (scissors), then cpu beats player
        case (playerNum < cpuNum && cpuNum - playerNum == 1):
            cpuScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nComputer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;

        // if cpuNum is less than playerNum, and playerNum is not 2 (scissors), then player beats cpu
        case (cpuNum < playerNum && playerNum - cpuNum == 1):
            playerScore += 1
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nYou win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;

        // if cpuNum is less than playerNum, and playerNum is 2 (scissors), then cpu beats player
        // case strictly for rock vs scissors
        case (cpuNum < playerNum && playerNum - cpuNum == 2):
            cpuScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nComputer wins!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
            break;
        
        // if playerNum is less than cpuNum, and cpuNum is 2 (scissors), then player beats cpu
        // case strictly for rock vs scissors
        case (playerNum < cpuNum && cpuNum - playerNum == 2):
            playerScore += 1;
            alert(`You played ${choices[playerNum]}.\nComputer played ${choices[cpuNum]}.\nYou win!\nYou: ${playerScore}\nCPU: ${cpuScore}`);
    }

    if (playerScore == 5 || cpuScore == 5) {
        let playAgain = prompt(`Game Over! ${playerScore > cpuScore ? "You win!" : "You lose!"}\nYou: ${playerScore}\nCPU: ${cpuScore}\nPlay again? (Y/N)`);
        
        if(playAgain.toLowerCase() == 'y') {
            playerScore = 0;
            cpuScore = 0;
        }

        else if(playAgain.toLowerCase() == 'n') {
            alert("Thank you for playing! Refresh to play again. Goodbye.");
        }

        else {
            alert("Unexpected input. Ending game. Refresh to play again. Goodbye.");
        }
    }
}

let playerScore = 0;
let cpuScore = 0;

getHumanChoice();



