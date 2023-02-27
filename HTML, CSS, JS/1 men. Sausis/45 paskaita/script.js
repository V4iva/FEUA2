const main = document.querySelector('.main')
const link = document.querySelector('a')


let allProducts = []
let cartProducts = []
function getData (){
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            allProductsFun(data)
            allProducts = data.products
        })
}
getData()

function allProductsFun (data){
    data.products.map(item =>{
        main.innerHTML += `
    <div class="box d-flex flex-d-column gap txt-center">
        <img src="${item.thumbnail}" alt="">
        <h2>${item.title}</h2>
        <h1>${item.price}€</h1>
        <br>
        <button id="${item.id}" class="btn">Add to cart</button>
    </div>
    `
    })

    const addToCart = document.querySelectorAll('.btn')
    addToCart.forEach(btn => btn.onclick=(event)=>{
        console.log(event.target.id)
        const myProduct = allProducts.find(allProducts => allProducts.id === Number(event.target.id))
        cartProducts.push(myProduct)

        localStorage.setItem('product', JSON.stringify(cartProducts))
    })
}
