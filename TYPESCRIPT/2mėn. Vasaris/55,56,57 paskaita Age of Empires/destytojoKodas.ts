const shop = document.querySelector('.shop') as HTMLElement
const landsContainer = document.querySelector('.building')

interface ProductsInterface {
    name: string,
    img: string,
    price: {
        gold: number,
        wood: number,
        stone: number
    },
    workers: number,
    level: number,
}
const products: ProductsInterface[] = [
    {
        name: 'LAND',
        img: '',
        price: {
            gold: 10,
            wood: 0,
            stone: 0
        },
        workers: 0,
        level: 0,
    },
    {
        name: 'SMALL HOUSE',
        img: '',
        price: {
            gold: 10,
            wood: 0,
            stone: 0
        },
        workers: 0,
        level: 0,
    },
    {
        name: 'MEDIUM HOUSE',
        img: '',
        price: {
            gold: 10,
            wood: 0,
            stone: 0
        },
        workers: 0,
        level: 0,
    },
    {
        name: 'WOOD CUTER',
        img: '',
        price: {
            gold: 10,
            wood: 0,
            stone: 0
        },
        workers: 0,
        level: 0,
    },
    {
        name: 'MINE',
        img: '',
        price: {
            gold: 10,
            wood: 0,
            stone: 0
        },
        workers: 0,
        level: 0,
    },
    {
        name: 'MARKETPLACE',
        img: '',
        price: {
            gold: 10,
            wood: 0,
            stone: 0
        },
        workers: 0,
        level: 0,
    },
    {
        name: 'HUNTER HOUSE',
        img: '',
        price: {
            gold: 10,
            wood: 0,
            stone: 0
        },
        workers: 0,
        level: 0,
    }
] /*** sudeti kainas, img url ir dar ko truksta ***/
const landss: ProductsInterface[] = []

let goldd:number = 100
let woodd:number = 100
let stonee:number = 100
let populationn:number = 3
let foodd:number = 10
let counterr:number = 0

const appendLands = () => [
    // landsContainer.innerHTML = ''
    // landss.map()
]
const buyProduct = (index:number) => {
    const prod = products[index]

    if (landss.length === 0 && prod.name !== 'LAND') return
    if (prod.name === 'LAND'){
        if (goldd >= prod.price.gold){
            goldd -= prod.price.gold
            landss.push(prod)
        }
    }
    if (prod.name !== 'LAND'){
        const hasEmpty = landss.filter(item => item.name === 'LAND')
        if (hasEmpty.length > 0){
            const emptyIndex = landss.findIndex(item => item.name === 'LAND')

            if (goldd >= prod.price.gold &&
                woodd >= prod.price.wood &&
                stonee >= prod.price.stone){

                /*** KAZKO TRUKSTA ***/
            }
        }
    } /*** viduj kazko truksta ***/

}
const appendShop = () => {
    products.map(prod => {
        shop.innerHTML += `
            <div class="product">
                <div class="f-1">
                    <img src="" alt="">
                </div>
                <div></div>
                <h4></h4>
            </div>
        `
    })
    const btn = document.querySelectorAll<HTMLElement>('button')
    btn.forEach((item, index) => item.onclick = () => buyProduct)

}  /*** isikelti destytojo kodo gabaliuka cia ***/
appendShop()