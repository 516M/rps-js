function getComputerChoice() {
    let rng_value = Math.floor(Math.random()*10) % 3;
    let rps = ["rock", "paper", "scissors"];

    return rps[rng_value];
}

