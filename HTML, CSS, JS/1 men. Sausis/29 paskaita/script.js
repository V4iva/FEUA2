
const button = document.querySelector('#set')
const random = document.querySelector('h2')

button.onclick = () => {
    let rnd = Math.round(Math.random() * 10)
    random.innerText = rnd
}

/************************ **************************/

const boxes = document.querySelectorAll('.box')

/*** boxes[0].onclick = () => {
    boxes[0].style.border = "5px solid red"
    boxes[1].style.border = "none"
    boxes[2].style.border = "none"
}
boxes[1].onclick = () => {
    boxes[1].style.border = "5px solid red"
    boxes[0].style.border = "none"
    boxes[2].style.border = "none"
}
boxes[2].onclick = () => {
    boxes[2].style.border = "5px solid red"
    boxes[1].style.border = "none"
    boxes[0].style.border = "none"
}
***/

const removeBorders = () =>{
    boxes[0].style.border = "none"
    boxes[1].style.border = "none"
    boxes[2].style.border = "none"

    boxes[index].style.border = "5px solid red"
}

const updateBorder = (index) => {

}

boxes[0].onclick = () => {
    removeBorders()
    boxes[0].style.border = "5px solid red"
}
boxes[1].onclick = () => {
    removeBorders()
    boxes[1].style.border = "5px solid red"
}
boxes[2].onclick = () => {
    removeBorders()
    boxes[2].style.border = "5px solid red"
}




