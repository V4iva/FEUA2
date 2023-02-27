const main = document.querySelector('.main')


const progressBar = document.createElement('div')
progressBar.classList.add('progress')
progressBar.style.border = '1px solid black'
progressBar.style.width = '500px'
progressBar.style.height = '50px'
progressBar.style.backgroundColor = 'white'
main.appendChild(progressBar)

const progress = document.createElement('div')
progress.classList.add('prgrs')
progress.style.width = "20px"
progress.style.height = '50px'
progress.style.backgroundColor = 'green'
progressBar.appendChild(progress)



const button = document.createElement('div')
button.classList.add('button')
button.style.border = '1px solid black'
button.style.width = '100px'
button.style.height = '50px'
button.style.backgroundColor = 'black'
button.innerText = 'CLICK'
main.appendChild(button)

button.onclick = (event) => {
    let width1 = progress.offsetWidth
    progress.style.width = (width1+2)+"px"
}