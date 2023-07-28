const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let rng_value = Math.round(Math.random()*10) % 3;
    return rps[rng_value];
}

function game() {
    let player_score = 0;
    let computer_score = 0;


    // play 5 rounds
    for (i=0;i<5;i++) {
        let playerChoice = ""; 

        loop:
        while(true) {
            playerChoice = prompt("Rock, paper, scissors?").toLowerCase();
            if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
                break loop;
            } else {
                alert("Please enter one of the three: Rock, paper, scissors");
            }
        }

        let result = playRound(playerChoice, getComputerChoice());
        if (result.includes("Lose")) {
            alert("You lost this round!");
            computer_score += 1;
        } else if (result.includes("Win")) {
            alert("You won this round!");
            player_score += 1;
        } else {
            alert("You tied this round");
        }
        console.log(`${result}`);
    }
    if (computer_score > player_score) console.log(`You lose the game...`);
    else if (player_score > computer_score) console.log(`You win the game`);
    else console.log(`The game was tied.`);
}

// Plays a single round
function playRound(playerSelection, computerSelection) {
    // lowercase letters regardless of case
    let player_pick = playerSelection.toLowerCase();
    let computer_pick = computerSelection.toLowerCase();

    if (player_pick == computer_pick) return "It's a tie!"
    
    // Player picked rock
    else if (player_pick == "rock" && computer_pick == "paper") return "You Lose! Rock loses to paper"
    else if (player_pick == "rock" && computer_pick == "scissors") return "You Win! Rock beats scissors"

    // Player picked paper
    else if (player_pick == "paper" && computer_pick == "rock") return "You Win! Paper beats rock"
    else if (player_pick == "paper" && computer_pick == "scissors") return "You Lose! Paper loses to Scissors"

    // Player picked scissors
    else if (player_pick == "scissors" && computer_pick == "paper") return "You Win! Scissor beats paper"
    else if (player_pick == "scissors" && computer_pick == "rock") return "You Lose! Scissor loses to rock"
    else return "?"
}

// Play game
game();
