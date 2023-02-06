const main = document.querySelector('.main')

let photoId = 0
let cardId = 0
function getData () {

    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data =>{
            seeProducts(data)
    })
}
getData()

function seeProducts (data){
    for (let i = 0; i < data.products.length; i++) {
        main.innerHTML += `
            <div class="box border d-flex gap f-wrap a-center j-center">
                <img src="${data.products[i].images[photoId]}">
                <h3>${data.products[i].title}</h3>
                <div>${data.products[i].price} Eur.</div>
                <button class="button" id="${data.products[i].id}">PRODUCT INFO</button>
            </div>
        `
    }
    const clickAll = document.querySelectorAll('.button')
    clickAll.forEach(btn => btn.onclick=(event)=>{
        cardId = event.composedPath()[0].id

        if (cardId > 0){
            fetch("https://dummyjson.com/products/"+ cardId)
                .then(res => res.json())
                .then(prodInfo => {
                    console.log(prodInfo)
                    singleProduct(prodInfo)
                })
        }
    })

}

function singleProduct (prodInfo) {
    console.log(prodInfo.images)
    main.innerHTML = ""
    main.innerHTML = `
        <div class="box_1 border gap d-flex a-center j-center ">
            <div class="d-flex j-spc-btw flex-d-column gap">
                <button class="prevNext">Prev.</button>
                <img class=" img" src="${prodInfo.images[photoId]}">
                <button class="prevNext">Next.</button>
            </div>  
            <div class="gap2 d-flex a-center j-center flex-d-column">
                <h3>Title: ${prodInfo.title}</h3>
                <div>Description: ${prodInfo.description}</div>
                <div>Price: ${prodInfo.price} Eur.</div>
                <div class="rate">Rating: ${prodInfo.rating}</div>
            </div>
        </div>
        <button class="goBack">Go BAck</button>
       `
    const rate = document.querySelector('.rate')
    let round = Math.round(prodInfo.rating)
    if (round === 5) rate.innerHTML = "Rate: *****"
    if (round === 4) rate.innerHTML = "Rate: ****"
    if (round === 3) rate.innerHTML = "Rate: ***"
    if (round === 2) rate.innerHTML = "Rate: **"
    if (round === 1) rate.innerHTML = "Rate: *"


    const button = document.querySelector('.goBack')
    button.onclick = () => {
        main.innerHTML = ''
        getData()
    }

    const prevNext = document.querySelectorAll('.prevNext')
    const image = document.querySelector('.img')

    prevNext[0].onclick=()=>{
        photoId--
        if (photoId < 0) {
            image.src = prodInfo.images[photoId]
            photoId = prodInfo.images.length-1
            console.log(prodInfo.images[photoId])
        }
    }
    prevNext[1].onclick=()=>{
        photoId++
        if (photoId >= prodInfo.images.length) {
            image.src = prodInfo.images[photoId]
            photoId = 0
            console.log(prodInfo.images[photoId])
        }
    }
}