const main = document.querySelector('.main2')
const button = document.querySelectorAll('button')


const myItem = localStorage.getItem('product')
console.log(JSON.parse(myItem))

JSON.parse(myItem).map( item=>{
    console.log(item)
    main.innerHTML += `
    <div class="box2 border d-flex gap j-spc-btw">
        <img class="f-5" src="${item.thumbnail}" alt="">
        <div class="txt-center f-3">
            <h2>${item.title}</h2>
            <h1>${item.price}€</h1>
        </div>
        <h3 id="${item.id}" class="f-1 end">Quantity: ${item.id}</h3>
        <div class="f-1 d-flex j-center p10">
            <button>+</button>
            <button>-</button>
        </div>
    </div>
    `
})
for (let i = 0; i < myItem.length; i++) {

}
button[0].onclick =()=>{

}
button[1].onclick =()=>{

}


