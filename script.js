function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*98) + 1

    if (randomNum % 3 === 0){
        return "Rock"
    } else if (randomNum % 2 === 0) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter your move: ")
}

console.log(getComputerChoice())
console.log(getHumanChoice())