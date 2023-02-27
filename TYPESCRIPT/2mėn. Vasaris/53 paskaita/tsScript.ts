// Drink Sorting

interface drinkInterface {
    name: string
    price: number
}
 let drinks:drinkInterface[] = [
     {name: "lemonade", price: 50},
     {name: "lime", price: 10}
 ]

function sortDrinkByPrice (aaa:drinkInterface[]):drinkInterface[] {
    aaa.sort((a, b) => (a.price > b.price ? 1 : -1));
    console.log(aaa)
    return aaa
}
sortDrinkByPrice(drinks)


// Slightly Superior
function isFirstSuperior (aaa:any[], bbb:any[]){
    let answer = true
    if (aaa[0] === bbb[0] && aaa[1] === bbb[1] && aaa[2] === bbb[2]){
        answer = false
    } else {
        answer = true
    }
    console.log(answer)
    return answer
}
isFirstSuperior([1, 2, 4], [1, 2, 3])
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.
isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])
isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])
isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])

// No Conditionals?
function flip (num:number):number {
    let ret = 0
    if (num === 1) ret = 0
    if (num === 0) ret = 1
    console.log(ret)
    return ret

}
flip(1)
flip(0)

///////
//////
/////
////
///
//
///
///
////
/////
////// UZDUOTIS

/***
const main = document.querySelector('.main') as HTMLElement
const button = document.querySelector('button') as HTMLElement **

interface itemInterface {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}
const item:itemInterface = {
    "id": 9,
    "title": "Infinix INBOOK",
    "description": "Infinix Inbook X1 Ci3 10th 8GB...",
    "price": 1099,
    "discountPercentage": 11.83,
    "rating": 4.54,
    "stock": 96,
    "brand": "Infinix",
    "category": "laptops",
    "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg"    ]
}

button.onclick = () => {
    main.innerHTML += `
        <div> 
            <img src="${item.thumbnail}" alt="">
            <div>${item.title}</div>
            <div>Description: ${item.description}</div>
            <div>Brand: ${item.brand}</div>
            <div>Price: ${item.price}</div>
            <div>Stock: ${item.stock}</div>
            <div>Discount:${item.discountPercentage}%</div>
        </div>
    
    `
} // Galima dar pastylint kad atrodytu graziau


///////
//////
/////
////
///
//
///
///
////
/////
////// UZDUOTIS Cars

const main2 = document.querySelector('.main2') as HTMLElement
// const btn = document.querySelector('.btn') as HTMLElement
const model = document.querySelector('.model') as HTMLInputElement
const color = document.querySelector('.color')as HTMLInputElement
const year = document.querySelector('.year')as HTMLInputElement
const gear = document.querySelector('.gear')as HTMLInputElement
const gas = document.querySelector('.gas')as HTMLInputElement
const tech = document.querySelector('.tech')as HTMLInputElement
const foWD = document.querySelector('.foWD')as HTMLInputElement

interface carInterface {
    model:string,
    color:string,
    year:number,
    gear:string,
    gas:number,
    tech:boolean,
    fourWD:boolean,
}

function appendHtml (createCar: carInterface):void{
    main2.innerHTML += `
        <div> 
            <div>Model: ${createCar.model}</div>
            <div>Color: ${createCar.color}</div>
            <div>Year: ${createCar.year}</div>
            <div>Gearbox: ${createCar.gear}</div>
            <div>Gasoline consumption: ${createCar.gas}</div>
            <div class="tech">Has tech: ${createCar.tech ? "has TEch" : "do not have tech"}</div>
            <div class="fowd">4WD: ${createCar.fourWD ? "4 wheel":"2wheel"}</div>
        </div>
    `
}
// btn.onclick = () => {

    const createCar: carInterface = {
        model: model.value,
        color:color.value,
        year:Number(year.value),
        gear:gear.value,
        gas:Number(gas.value),
        tech: Boolean(tech.checked),
        fourWD: Boolean(foWD.checked),
    }
    appendHtml(createCar)
// }

***/
