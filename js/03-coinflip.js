
let coinFlip = Math.round(Math.random())
let choice = prompt('Select Heads or Tails').toLowerCase()

if (coinFlip === 0) {
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else if (choice === "tails") {
        alert("The flip was heads but you chose tails...you lose!");
    } else {
        alert("Invalid input. Please choose either 'Heads' or 'Tails'.");
    }
} else if (coinFlip === 1) {
    if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!");
    } else if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("Invalid input. Please choose either 'Heads' or 'Tails'.");
    }
} 


 
/*
Updated version: 

let coinFlip = Math.round(Math.random())
let choice = prompt('Select Heads or Tails').toLowerCase()
let result = coinFlip === 0 ? 'heads' : 'tails'

if (choice === 'heads' || choice === 'tails') {
    if (choice === result) {
        alert(`The flip was ${result} and you chose ${choice}.. you win`)
    } else {
            alert(`The flip was ${result} and you chose ${choice}.. you lose`)
        }
    } else {
        alert('Invalid input')
    }
*/
