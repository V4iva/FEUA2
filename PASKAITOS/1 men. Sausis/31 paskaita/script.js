const button = document.querySelector('.box')
const counter = document.querySelector('.count')

let count =  0

// const int = setInterval(countSec, 1000);

function countSec () {
    count++
    counter.innerText = count
}

button.onclick = () => {
    setInterval(countSec, 1000);
}

// button.onclick = () => {
//     clearInterval(int)
// }

/*************************** *******************************/

const buttn = document.querySelectorAll('.buy')
const house = document.querySelectorAll('.house')
const boxes = document.querySelectorAll('.box1')
const startBtn = document.querySelector('.start')
const moneyText = document.querySelector('.money')

let money = 0
let buyOrNot1 = false
let buyOrNot2 = false
let buyOrNot3 = false

function riseMoney (){
    money +=1
    moneyText.innerText = `MONEY: ${money}`
}
function biggerIncome(){
    if (buyOrNot1)money++
    moneyText.innerText = `MONEY: ${money}`

    if (buyOrNot2)money++
    moneyText.innerText = `MONEY: ${money}`

    if (buyOrNot3)money++
    moneyText.innerText = `MONEY: ${money}`
}

startBtn.onclick= () => {
    riseMoney()
}
buttn[0].onclick = () => {
    if (money >= 10 && !buyOrNot1){
        money -= 10
        buyOrNot1 = true
        moneyText.innerText = `MONEY: ${money}`
        boxes[0].appendChild(house[0])
        setInterval(biggerIncome, 1000)
    }
}
buttn[1].onclick = () => {
    if (money >= 50 && !buyOrNot2){
        money -= 50
        buyOrNot2 = true
        moneyText.innerText = `MONEY: ${money}`
        boxes[1].appendChild(house[1])
        setInterval(biggerIncome, 1000)
    }
}
buttn[2].onclick = () => {
    if (money >= 100 && !buyOrNot3){
        money -= 100
        buyOrNot3 = true
        moneyText.innerText = `MONEY: ${money}`
        boxes[2].appendChild(house[2])
        setInterval(biggerIncome, 1000)
    }
}

/*************************** *******************************/

const btn = document.querySelector('.box4')
const time = document.querySelector('.time')

let timeSec = 0
let timeMin = 0


function countTime (){
    timeSec++
    time.innerText = `${timeMin}:${timeSec}`

    if (timeSec === 60){
        timeSec-=60
        timeMin+=1
    }
}

btn.onclick = () => {
    const timer = setInterval(countTime, 1000)
}