const element = document.querySelectorAll('.box')
const main = document.querySelector('.main')
const winTxx = document.querySelector('.winning')

let trigger = true
let playX = []
let playO = []



element.forEach(btn => btn.onclick = (event) => {
    console.log(event.target.id)

    if (trigger){
        event.target.innerText = 'X'
        playX += event.target.id
        trigger = false
    } else {
        event.target.innerText = 'O'
        playO += event.target.id
        trigger = true
    }
    console.log(playX, playO)

})

const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

possibleWins.map(item =>{
    if (playX.inludes === item[0] || playX === item[1] || playX === item[2] || playX === item[3] || playX === item[4] || playX === item[5] || playX === item[6] || playX === item[7]){
        playX.style.backgroundColor = 'green'
        winTxx.innerText = "Player One Wins"
    }
    if (playO === item[0] || playO === item[1] || playO === item[2] || playO === item[3] || playO === item[4] || playO === item[5] || playO === item[6] || playO === item[7]){
        playO.style.backgroundColor = 'green'
        winTxx.innerText = "Player Two Wins"
    }
})
