const gold = document.querySelector('.gold') as HTMLElement
const wood = document.querySelector('.wood') as HTMLElement
const stone = document.querySelector('.stone') as HTMLElement
const population = document.querySelector('.population') as HTMLElement
const food = document.querySelector('.food') as HTMLElement
const building = document.querySelector('.building') as HTMLElement
const land = document.querySelector('.land') as HTMLElement
const smallHouse = document.querySelector('.smallHouse') as HTMLElement
const mediumHouse = document.querySelector('.mediumHouse') as HTMLElement
const woodCuter = document.querySelector('.woodCuter') as HTMLElement
const stoneMine = document.querySelector('.stoneMine') as HTMLElement
const marketPlace = document.querySelector('.marketPlace') as HTMLElement
const hunterHut = document.querySelector('.hunterHut') as HTMLElement

interface ObjectInterface {
    id:number,
    img:string,
    name:string,
    worker:number
}
let houseLands:any = []
let goldBar:number = 100
let woodBar:number = 100
let stonedBar:number = 100
let populationBar:number = 3
let foodBar:number = 10
let counter:number = 0

setInterval(() => {
    foodBar -= populationBar
    food.innerText = `FOOD: ${foodBar}`
},  10000);
function seeToolbar (){
    gold.innerText = `GOLD: ${goldBar}`
    wood.innerText = `WOOD: ${woodBar}`
    stone.innerText = `STONE: ${stonedBar}`
    population.innerText = `POPULATION: ${populationBar}`
    food.innerText = `FOOD: ${foodBar}`
}
seeToolbar()
function buy () {
    if (goldBar >= 10) {
        land.onclick = () => {
            goldBar -= 10
            seeToolbar()

            let objects: ObjectInterface = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            }
            counter++
            objects.id += counter
            objects.name = "LAND"
            objects.img = "https://media.tenor.com/ejVqHXq7FQMAAAAM/aoe-aoe-farm.gif"

            houseLands.unshift(objects)
            addBuilding()
        }
    } else return
    if (goldBar >= 10 && woodBar >= 50 && stonedBar >= 30) {
        smallHouse.onclick = () => {
            goldBar -= 10
            woodBar -= 50
            stonedBar -= 30
            populationBar += 3
            seeToolbar()

            let objects: ObjectInterface = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            }
            let index = houseLands.findIndex((item: any) => item.name === "LAND")
            houseLands[index] = {
                id: houseLands[index].id,
                name: "SMALL HOUSE",
                img: "https://media4.giphy.com/media/dUBQvWHBY94CmyN2TB/giphy.gif",
                worker: 0
            }
            addBuilding()
        }
    } else return
    if (goldBar >= 30 && woodBar >= 50 && stonedBar >= 100) {
        mediumHouse.onclick = () => {
            goldBar -= 30
            woodBar -= 50
            stonedBar -= 100
            populationBar += 5
            seeToolbar()
            let objects: ObjectInterface = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            }
            let index = houseLands.findIndex((item: any) => item.name === "LAND")
            houseLands[index] = {
                id: houseLands[index].id,
                name: "MEDIUM HOUSE",
                img: "https://i.gifer.com/origin/73/73698da4f2345c0b7a52cfff07a8c75d_w200.gif",
                worker: 0
            }
            addBuilding()
        }
    } else return
    if (goldBar >= 10 && woodBar >= 10 && stonedBar >= 10) {
        woodCuter.onclick = () => {
            goldBar -= 10
            woodBar -= 10
            stonedBar -= 10
            seeToolbar()
            let objects: ObjectInterface = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            }
            let index = houseLands.findIndex((item: any) => item.name === "LAND")
            houseLands[index] = {
                id: houseLands[index].id,
                name: "WOOD CUTER",
                img: "https://thumbs.gfycat.com/IdealAmbitiousBobwhite-max-1mb.gif",
                worker: 0
            }
            addBuilding()
        }
    } else return
    if (goldBar >= 10 && woodBar >= 10 && stonedBar >= 10) {
        stoneMine.onclick = () => {
            goldBar -= 10
            woodBar -= 10
            stonedBar -= 10
            seeToolbar()
            let objects: ObjectInterface = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            }
            let index = houseLands.findIndex((item: any) => item.name === "LAND")
            houseLands[index] = {
                id: houseLands[index].id,
                name: "STONE MINE",
                img: "https://media.tenor.com/vUE_Djz6dUMAAAAd/aoe2-mining.gif",
                worker: 0
            }
            addBuilding()
        }
    } else return
    if (goldBar >= 50 && woodBar >= 50 && stonedBar >= 30) {
        marketPlace.onclick = () => {
            goldBar -= 50
            woodBar -= 50
            stonedBar -= 30
            seeToolbar()
            let objects: ObjectInterface = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            }
            let index = houseLands.findIndex((item: any) => item.name === "LAND")
            houseLands[index] = {
                id: houseLands[index].id,
                name: "MARKETPLACE",
                img: "https://thumbs.gfycat.com/CraftyGlamorousApisdorsatalaboriosa-size_restricted.gif",
                worker: 0
            }
            addBuilding()
        }
    } else return
    if (goldBar >= 20 && woodBar >= 10 && stonedBar >= 15) {
        hunterHut.onclick = () => {
            goldBar -= 20
            woodBar -= 10
            stonedBar -= 15
            seeToolbar()
            let objects: ObjectInterface = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            }
            let index = houseLands.findIndex((item: any) => item.name === "LAND")
            houseLands[index] = {
                id: houseLands[index].id,
                name: "HUNTER HUT",
                img: "https://media.tenor.com/-FSP1RiJPJYAAAAM/aoe2-bush.gif",
                worker: 0
            }
            addBuilding()
        }
    } else return
}
buy()
function addBuilding ():any{
    building.innerHTML = ""
    houseLands.map((data:ObjectInterface) => {
        building.innerHTML += `
        <div class="d-flex flex-d-column gap">
            <img src="${data.img}" alt="">
            <div class="name">${data.name}</div>
            <div class="display d-flex gap txt-center">
                <button class="add">ADD</button>
                <button class="delete">DELETE</button>
            </div>
        </div>
    `
        addAndDelete(data)
    })
}

function addAndDelete (data:ObjectInterface){
    const btnSection = document.querySelectorAll<HTMLElement>('.display')

    if (data.name !== "LAND" && data.name !== "SMALL HOUSE" && data.name !== "MEDIUM HOUSE"){
        for (let i = 0; i < btnSection.length ; i++) {
            btnSection[i].style.display = 'block'
        }
    }
}