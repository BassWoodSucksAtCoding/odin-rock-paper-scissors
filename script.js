function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*98) + 1
    let computerChoice = null
    if (randomNum % 3 === 0){
        computerChoice = "Rock"
    } else if (randomNum % 2 === 0) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }


    console.log(computerChoice)
    return computerChoice
}

function getHumanChoice() {
    return prompt("Enter your move: ")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()

    if (humanChoice === "ROCK") {
        if (computerChoice === "ROCK") {
            console.log("Tie! Both users chose rock")
        } else if (computerChoice === "PAPER") {
            console.log("You lose! Paper beats Rock")
            ++computerScore
        } else {
            console.log("You win! Rock beats Scissors")
            ++humanScore
        }
    } else if (humanChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            console.log("You win! Paper beats Rock")
            ++humanScore
        } else if (computerChoice === "PAPER") {
            console.log("Tie! Both users chose paper")
        } else {
            console.log("You lose! Scissors beats Paper")
            ++computerScore
        }
    } else if (humanChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            console.log("You lose! Rock beats Scissors")
            ++computerScore
        } else if (computerChoice === "PAPER") {
            console.log("You win! Scissors beats Paper")
            ++humanScore
        } else {
            console.log("Tie! Both users chose Scissors")
        }
    }

    console.log(`Your score ${humanScore}`)
    console.log(`Computer score ${computerScore}`)
}

function playGame() {
    for (let i=0; i<=4; i++){
        console.log(`Round ${i+1}`)
        playRound(getHumanChoice(),getComputerChoice())
    }

    console.log("=========")
    console.log("Calculating winner...")

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (computerScore > humanScore) {
        console.log("You lose!")
    } else {
        console.log("Tie")
    }
}

let humanScore = 0
let computerScore = 0

playGame()


