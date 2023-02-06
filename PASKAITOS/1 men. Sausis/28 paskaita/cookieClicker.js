const cookie = document.getElementById('cook')
const points = document.getElementById('points')


// const oneHundred = document.getElementById('oneHundred')
// const threeHundred = document.getElementById('threeHundred')
// const fiveHundred = document.getElementById('fiveHundred')
// const five2Hundred = document.getElementById('five2Hundred')

const buttons = document.querySelectorAll("button")
const body = document.querySelectorAll("body")


let pointsPlus = 0
let clickCount = 1

cookie.onclick = () => {
    pointsPlus += clickCount
    points.innerText = "Points: " + pointsPlus
}


buttons[0].onclick = () =>{
    if (pointsPlus >= 100){
        clickCount += 2
        pointsPlus -= 100
        points.innerText = "Points: " + pointsPlus
    }
}
buttons[1].onclick = () =>{
    if (pointsPlus >= 300){
        clickCount += 3
        pointsPlus -= 300
        points.innerText = "Points: " + pointsPlus
    }
}
buttons[2].onclick = () =>{
    if (pointsPlus >= 500){
        pointsPlus -= 500
        points.innerText = "Points: " + pointsPlus
        body.style.backgroundColor = "gray"
    }
}
buttons[3].onclick = () =>{
    if (pointsPlus >= 500){
        pointsPlus -= 500
        points.innerText = "Points: " + pointsPlus
        // cookie.src = /*** naujas linkas ***/
    }
}



