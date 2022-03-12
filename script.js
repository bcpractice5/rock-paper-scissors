// User inputs either rock, paper, or scissors. Case insensitive.
let input = () => {
    let selection = prompt("Type rock, paper, or scissors: ");
    return selection[0].toUpperCase() + selection.slice(1).toLowerCase();

}
// CPU randomly returns rock, paper, or scissors.
let selectWeapon = () => {
    let rng = Math.floor(Math.random() * 100);
    if ( 0 <= rng < 33) {
        return "Rock";
    } else if (33 <= rng < 66) {
        return "Paper";
    } 
    return "Scissors";
}
// User selection and CPU selection are compared for a winner.
let compareWeapons = (userWeapon, cpuWeapon) => {
    
}
// Message is displayed based on win/loss and includes chosen weapon.