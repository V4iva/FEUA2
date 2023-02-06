
const boxRed = document.getElementById('red')
const boxBlue = document.getElementById('blue')
const boxPurple = document.getElementById('purple')

const head = document.getElementById('header')

boxRed.onclick = () => {
    console.log('RED')
    head.innerText = 'RED'
}
boxBlue.onclick = () => {
    console.log('BLUE')
    head.innerText = 'BLUE'
}
boxPurple.onclick = () => {
    console.log('PURPLE')
    head.innerText = 'PURPLE'
}


/******************* **************************/
/******************* **************************/
/******************* **************************/

const add = document.getElementById('add')
const minus = document.getElementById('minus')

const plusMinus = document.getElementById('num')

let number = 0

add.onclick = () => {
    number +=10
    plusMinus.innerText = number
}

minus.onclick = () =>{
    number -= 10
    plusMinus.innerText = number
}


/******************* **************************/
/******************* **************************/
/******************* **************************/

const button = document.querySelector('#set')
const random = document.querySelector('h2')

console.log(button)
const arr = [
    "cia",
    "yra",
    "random",
    "zodziai",
    "labai",
    "nedaug",
    "itemu"
]
function setword (){
    button.onclick = () => {
        let randomText = arr[Math.floor(Math.random() * arr.length)]
        random.innerText = randomText

    }
}
setword()
