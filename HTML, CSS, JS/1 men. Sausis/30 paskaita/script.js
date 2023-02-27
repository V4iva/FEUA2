const boxes = document.querySelectorAll('.box')
const points = document.querySelector('h1')
const pointsBox = document.querySelector('.points')
const changeBox = document.querySelector('.changeSize')

let plusMinus = 0
const getNewColor = () => {
    if (plusMinus >= 10 && plusMinus < 20){
        pointsBox.style.backgroundColor = "green"
    } else if (plusMinus >= 20 && plusMinus < 30){
        pointsBox.style.backgroundColor = "yellow"
    } else if (plusMinus >= 30 && plusMinus < 40){
        pointsBox.style.backgroundColor = "orange"
    } else if (plusMinus >= 40 && plusMinus < 50){
        pointsBox.style.backgroundColor = "pink"
    }

    if (plusMinus < 10 ){
        pointsBox.style.backgroundColor = "white"
    }
}


boxes[0].onclick = () => {
    plusMinus--
    points.innerText = `Points: ${plusMinus}`
    getNewColor()
    getSize()
}
boxes[1].onclick = () => {
    plusMinus++
    points.innerText = `Points: ${plusMinus}`
    getNewColor()
    getSize()
}

/****************************** ******************************/

const getSize = () => {
    pointsBox.style.height = `${plusMinus}px`
}

/****************************** ******************************/

const buttons = document.querySelectorAll('.btn')
const boxes1 = document.querySelectorAll('.box1')

let displaySetting = "none"
const visibleNotVisible = (index) => {


    if (displaySetting === 'block') {
        displaySetting = 'none'
        boxes1[index].style.backgroundColor = 'black'
        boxes1[index].style.display = 'none';
        buttons[index].innerHTML = 'ON';
    } else {
        displaySetting = 'block'
        boxes1[index].style.backgroundColor = 'black'
        boxes1[index].style.display = 'block';
        buttons[index].innerHTML = 'OFF';
    }

}

buttons[0].onclick = () => {
    visibleNotVisible(0)
}
buttons[1].onclick = () => {
    visibleNotVisible(1)
}
buttons[2].onclick = () => {
    visibleNotVisible(2)
}

/****************************** ******************************/
const button = document.querySelector('.buton')
const drop = document.querySelectorAll('some')

let display = 'none'

const notVisible = () => {

    if (display === 'none') {
        display = 'block'
        drop.style.display = 'none';
        button.innerHTML = '---->';
    } else {
        display = 'none'
        drop.style.display = 'block';
        buttons.innerHTML = '<----';
    }


}

button.onclick = () => {
    notVisible()
}
