const main = document.querySelector('.main')

let photoNum = 0
function getData () {

    fetch("https://dummyjson.com/products/1")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            photos(data)
    })
}
getData()

function photos (data){
    for (let i = 0; i < 4; i++) {
        main.innerHTML = `
        <div class="box d-flex a-center j-center">
            <img class="" src="${data.images[photoNum]}" alt="">
        </div>
    `}
    const button = document.querySelectorAll('button')
    const image =   document.querySelector('img')

    button[0].onclick = (event) =>{
        photoNum --
        image.src = data.images[photoNum]
        if (photoNum < 0) photoNum =4
    }
    button[1].onclick = (event) =>{
        photoNum++
        image.src = data.images[photoNum]
        if (photoNum === 4)photoNum=0
    }
}




