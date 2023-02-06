//
// const elements = document.querySelectorAll('.boxPlayer')
// const elementsComputer = document.querySelectorAll('.boxComputer')
// const play = document.querySelector('button')
// const points = document.querySelectorAll('h1')
//
// let playerSymbol = ""
// let computerSymbol = ""
//
// let playerPoint = 0
// let computerPoint = 0
//
// const rockPaperScissors = (index) => {
//     elements[0].style.border = "1px solid darkorange"
//     elements[1].style.border = "1px solid darkorange"
//     elements[2].style.border = "1px solid darkorange"
//
//     elements[index].style.border = "5px solid darkorange"
// }
// const updateComputerSymbol = () => {
//     const rnd = Math.ceil(Math.random()*3)
//
//     if (rnd === 1 ) {
//         computerSymbol = 'rock'
//         elementsComputer[0] = "5px solid darkorange"
//     }
//     if (rnd === 2 ) {
//         computerSymbol = 'paper'
//         elementsComputer[1] = "5px solid darkorange"
//     }
//     if (rnd === 3 ) {
//         computerSymbol = 'scissors'
//         elementsComputer[2] = "5px solid darkorange"
//     }
// }
//
//
// elements[0].onclick = () => {
//     rockPaperScissors(0)
//     playerSymbol = 'rock'
// }
// elements[1].onclick = () => {
//     rockPaperScissors(1)
//     playerSymbol = 'paper'
// }
// elements[2].onclick = () => {
//     rockPaperScissors(2)
//     playerSymbol = 'scissors'
// }
//
// play.onclick = () => {
//     if (playerSymbol){
//         updateComputerSymbol()
//     }
// }




const playerImg = document.querySelectorAll(".boxPlayer")
const computerImg = document.querySelectorAll(".boxComputer")
const button = document.querySelector("button")
const points = document.querySelectorAll('h1')

let playerSymbol = ""
let computerSymbol = ""

let playerPoints = 0
let computerPoints = 0

const updateBorder = (index) => {
    playerImg[0].style.border = "1px solid darkorange"
    playerImg[1].style.border = "1px solid darkorange"
    playerImg[2].style.border = "1px solid darkorange"
    playerImg[index].style.border = "5px solid darkorange"
}
const updateComputerSymbol = () => {
    const rnd = Math.ceil(Math.random()*3)

    if(rnd === 1) {
        computerSymbol = "rock"
        computerImg[0].style.border = "5px solid darkorange"
    }
    if(rnd === 2) {
        computerSymbol = "paper"
        computerImg[1].style.border = "5px solid darkorange"
    }
    if(rnd === 3) {
        computerSymbol = "scissors"
        computerImg[2].style.border = "5px solid darkorange"
    }
}

const comparesymbols = () =>{
    const pl = playerSymbol
    const pc = computerSymbol


    //player wins
    if (pl === "scissors" && pc === "paper") playerPoints += 1
    if (pl === "scissors" && pc === "paper") playerPoints += 1
    if (pl === "scissors" && pc === "paper") playerPoints += 1

    //computer wins
    if (pl === "scissors" && pc === "paper") playerPoints += 1
    if (pl === "scissors" && pc === "paper") playerPoints += 1
    if (pl === "scissors" && pc === "paper") playerPoints += 1

    points.innerText = `Player: ${playerPoints} Computer: ${computerPoints}`
}

playerImg[0].onclick = () => {
    playerSymbol = "rock"
    updateBorder(0)
}
playerImg[1].onclick = () => {
    playerSymbol = "paper"
    updateBorder(1)
}
playerImg[2].onclick = () => {
    playerSymbol = "scissors"
    updateBorder(2)
}

button.onclick = () => {
    if(playerSymbol) {
        updateComputerSymbol()

        /// CREATE FUNCTION TO COMPARE PLAYER
        /// AND COMPUTER SYMBOLS
        // WHICH ONE WINS< GETS POINTS
        // ALSO UPDATE POINTS COUNTER IN HTML

    }
}


