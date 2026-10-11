function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3) + 1
    let computerChoice = null
    if (randomNum === 1){
        computerChoice = "Rock"
    } else if (randomNum === 2) {
        computerChoice = "Paper"
    } else if (randomNum === 3) {
        computerChoice = "Scissors"
    } else {
        console.log("An error occurred")
    }

    return computerChoice
}

function getHumanChoice() {
    return prompt("Enter your move: ")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()

    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.lastChild)
    }

    const title = document.createElement('h2')
    const computerSelectionText = document.createElement('p')
    const humanSelectionText = document.createElement('p')

    computerSelectionText.textContent = `Computer selected: ${computerChoice}`
    humanSelectionText.textContent = `You selected: ${humanChoice}`
    title.textContent = 'Results'

    resultsDiv.appendChild(title)
    resultsDiv.appendChild(computerSelectionText)
    resultsDiv.appendChild(humanSelectionText)

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

    humanScoreParagraph.textContent = `Your Score: ${humanScore}`
    computerScoreParagraph.textContent = `Computer Score: ${computerScore}`
    playGame()
}

function announceWinner(text) {
    const winText = document.createElement('p')
    winText.textContent = text
    scoreDiv.appendChild(winText)

    inputButtons.forEach(element => element.disabled = true)
}

function playGame() {

    if (humanScore === 5) {
        announceWinner('You win!')
    } else if (computerScore === 5) {
        announceWinner('You lose!')
    } 
}

let humanScore = 0
let computerScore = 0

const computerScoreParagraph = document.querySelector('#computerScore')
const humanScoreParagraph = document.querySelector('#humanScore')
const inputButtons = document.querySelectorAll('button')
const scoreDiv = document.querySelector('#score')
const resultsDiv = document.querySelector('#results')


inputButtons.forEach((element) => {
    element.addEventListener('click',(event) => {
        const humanChoice = event.target.textContent
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    })
})

