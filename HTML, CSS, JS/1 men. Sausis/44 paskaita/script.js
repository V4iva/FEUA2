const main = document.querySelector('.main')
const photoSection = document.querySelector('.photo')
const inputs = document.querySelectorAll('input')
const button = document.querySelectorAll('button')

let topText = 'TOP TEXT'
let bottomText = 'BOTTOM TEXT'
let imageUrl = ''
function getData () {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            allMemes(data)
        })
}
getData()

function allMemes (data){
    data.data.memes.map(item => {
        main.innerHTML += `
        <div class="box gap d-flex flex-d-column">
            <div class="">
                <img id="${item.id}" src="${item.url}" alt="">
            </div>
            <div>${item.name}</div>
        </div>  
    `
    })
    inputs[0].onkeyup = function(){
        document.querySelector('.top').innerHTML = inputs[0].value;
    }
    inputs[1].onkeyup = function(){
        document.querySelector('.bottom').innerHTML = inputs[1].value;
    }


    const photoClick = document.querySelectorAll('.main img')
    photoClick.forEach(btn => btn.onclick = (event) =>{
        console.log(event.target.currentSrc)
        imageUrl =event.target.currentSrc

        photoSection.innerHTML = `
        <div class="box2">
            <h1 class="top">${topText.toUpperCase()}</h1>
            <img id="${event.target.id}" src="${event.target.currentSrc}" alt="">
            <h1 class="bottom">${bottomText.toUpperCase()}</h1>
        </div>
    `
    })

    button[1].onclick = (event) =>{
        console.log(event)
        const item ={
            "topText": inputs[0].value,
            "bottomText": inputs[1].value,
            "imageUrl": imageUrl
        }
        const options ={
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(item)
        }
        fetch('http://167.99.138.67:9191/generate', options)
            .then(res => res.json())
            .then(data =>{
                console.log(data.data)
                photoSection.innerHTML += `
                    <a href="${data.data.url}" download>ATSISIUSTI</a>
                `
            })

    }
}



