// User inputs either rock, paper, or scissors. Case insensitive.
let input = () => {
    let selection = prompt("Type rock, paper, or scissors: ");
    let refined = selection[0].toUpperCase() + selection.slice(1).toLowerCase();
    console.log(`You chose ${refined}.`);
    return refined;
}

// CPU randomly returns rock, paper, or scissors.
let selectWeapon = () => {
    let rng = Math.floor(Math.random() * 100);
    if ( 0 <= rng && rng < 33) {
        console.log("CPU chose Rock.");
        return "Rock";
    } else if (33 <= rng && rng < 66) {
        console.log("CPU chose Paper.");
        return "Paper";
    } 
    console.log("CPU chose Scissors.");
    return "Scissors";
}

// User selection and CPU selection are compared for a winner. rock = 4, paper = 5, scissors = 8
// Message is displayed based on win/loss and includes chosen weapons.
let compareWeapons = (userWeapon, cpuWeapon) => {
    let difference = userWeapon.length - cpuWeapon.length;
    if (userWeapon === cpuWeapon) {
        console.log("Tie. Try again?")
        return "Tie";
    } else if (
        difference === 1 ||
        difference === -4 ||
        difference === 3
        ) {
        console.log(`You won! ${userWeapon} beats ${cpuWeapon}.`)
        return "Win";
    } else {
        console.log(`You lost! ${cpuWeapon} beats ${userWeapon}.`)
        return "Loss";
    }
}

let rockPaperScissors = () => compareWeapons(input(), selectWeapon());

// A best-of-five game that will loop until either user or CPU has three wins.
let playGame = () => {
    let userWins = 0;
    let cpuWins = 0;
    while (userWins < 3 && cpuWins < 3) {
        let result = "";
        result = rockPaperScissors();
        if (result === "Win") userWins++;
        else if (result ==="Loss") cpuWins++;
    }
    if (userWins >= 3) console.log("You won the Match!!");
    else if (cpuWins >= 3) console.log("Oh no, the computer won the match!");
    else console.log("Something went wrong.");
}