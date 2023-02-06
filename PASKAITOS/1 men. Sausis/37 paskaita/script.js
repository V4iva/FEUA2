const body = document.querySelector('body')
const main = document.querySelector('.main')
const btn = document.querySelector('button')
const progressBar = document.querySelector('.progressBar')
const progress = document.createElement('div')
progress.classList.add('progress')
progressBar.appendChild(progress)
progress.style.backgroundColor = 'green'

let jokesArr = []
let barColor = 0

btn.onclick = (event) => {
    progress.style.height = barColor+"px"
    getData()
    console.log(jokesArr.length)
}

function append (data) {
    main.innerHTML += `
        <div class="box">
             <h3>${data.created_at}</h3>
             <img src="https://ih1.redbubble.net/image.1856915711.1204/flat,128x,075,f-pad,128x128,f8f8f8.jpg" >
             <div>${data.value}</div>
        </div>       
        `

}
function getData () {
    if (barColor === 880) {
        progress.style.backgroundColor = 'red'
    }
    if (jokesArr.length === 300) return;

    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {

            append(data)
            barColor += 44
            jokesArr += data

    })
}

/**************************************** ********************/






