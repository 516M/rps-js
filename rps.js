const rps = ["rock", "paper", "scissors"];
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let rng_value = Math.floor(Math.random()*10) % 3;    
    return rps[rng_value];
}

function game() {
    // play 5 rounds
    for (i=0;i<5;i++) {
        playRound()
    }
}

// Plays a single round
function playRound(playerSelection, computerSelection) {
    let player_pick = playerSelection.toLowerCase();
    let computer_pick = computerSelection.toLowerCase();

    // 0: Tie
    // 1: Player wins
    // 2: Computer wins
    // -1 : You screwed something up

    if (player_pick == computer_pick) return 0 
    // Player picked rock
    else if (player_pick == "rock" && computer_pick == "paper") return 2
    else if (player_pick == "rock" && computer_pick == "scissors") return 1
    // Player picked paper
    else if (player_pick == "paper" && computer_pick == "rock") return 1
    else if (player_pick == "paper" && computer_pick == "scissors") return 2
    // Player picked scissors
    else if (player_pick == "scissors" && computer_pick == "paper") return 1
    else if (player_pick == "scissors" && computer_pick == "rock") return 2
    else return -1 

}
console.log(playRound(playerSelection, computerSelection));
