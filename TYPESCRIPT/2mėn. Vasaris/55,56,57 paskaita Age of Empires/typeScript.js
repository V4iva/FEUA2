"use strict";
const gold = document.querySelector('.gold');
const wood = document.querySelector('.wood');
const stone = document.querySelector('.stone');
const population = document.querySelector('.population');
const food = document.querySelector('.food');
const building = document.querySelector('.building');
const land = document.querySelector('.land');
const smallHouse = document.querySelector('.smallHouse');
const mediumHouse = document.querySelector('.mediumHouse');
const woodCuter = document.querySelector('.woodCuter');
const stoneMine = document.querySelector('.stoneMine');
const marketPlace = document.querySelector('.marketPlace');
const hunterHut = document.querySelector('.hunterHut');
let houseLands = [];
let goldBar = 100;
let woodBar = 100;
let stonedBar = 100;
let populationBar = 3;
let foodBar = 10;
let counter = 0;
setInterval(() => {
    foodBar -= populationBar;
    food.innerText = `FOOD: ${foodBar}`;
}, 10000);
function seeToolbar() {
    gold.innerText = `GOLD: ${goldBar}`;
    wood.innerText = `WOOD: ${woodBar}`;
    stone.innerText = `STONE: ${stonedBar}`;
    population.innerText = `POPULATION: ${populationBar}`;
    food.innerText = `FOOD: ${foodBar}`;
}
seeToolbar();
function buy() {
    if (goldBar >= 10) {
        land.onclick = () => {
            goldBar -= 10;
            seeToolbar();
            let objects = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            };
            counter++;
            objects.id += counter;
            objects.name = "LAND";
            objects.img = "https://media.tenor.com/ejVqHXq7FQMAAAAM/aoe-aoe-farm.gif";
            houseLands.unshift(objects);
            addBuilding();
        };
    }
    else
        return;
    if (goldBar >= 10 && woodBar >= 50 && stonedBar >= 30) {
        smallHouse.onclick = () => {
            goldBar -= 10;
            woodBar -= 50;
            stonedBar -= 30;
            populationBar += 3;
            seeToolbar();
            let objects = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            };
            let index = houseLands.findIndex((item) => item.name === "LAND");
            houseLands[index] = {
                id: houseLands[index].id,
                name: "SMALL HOUSE",
                img: "https://media4.giphy.com/media/dUBQvWHBY94CmyN2TB/giphy.gif",
                worker: 0
            };
            addBuilding();
        };
    }
    else
        return;
    if (goldBar >= 30 && woodBar >= 50 && stonedBar >= 100) {
        mediumHouse.onclick = () => {
            goldBar -= 30;
            woodBar -= 50;
            stonedBar -= 100;
            populationBar += 5;
            seeToolbar();
            let objects = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            };
            let index = houseLands.findIndex((item) => item.name === "LAND");
            houseLands[index] = {
                id: houseLands[index].id,
                name: "MEDIUM HOUSE",
                img: "https://i.gifer.com/origin/73/73698da4f2345c0b7a52cfff07a8c75d_w200.gif",
                worker: 0
            };
            addBuilding();
        };
    }
    else
        return;
    if (goldBar >= 10 && woodBar >= 10 && stonedBar >= 10) {
        woodCuter.onclick = () => {
            goldBar -= 10;
            woodBar -= 10;
            stonedBar -= 10;
            seeToolbar();
            let objects = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            };
            let index = houseLands.findIndex((item) => item.name === "LAND");
            houseLands[index] = {
                id: houseLands[index].id,
                name: "WOOD CUTER",
                img: "https://thumbs.gfycat.com/IdealAmbitiousBobwhite-max-1mb.gif",
                worker: 0
            };
            addBuilding();
        };
    }
    else
        return;
    if (goldBar >= 10 && woodBar >= 10 && stonedBar >= 10) {
        stoneMine.onclick = () => {
            goldBar -= 10;
            woodBar -= 10;
            stonedBar -= 10;
            seeToolbar();
            let objects = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            };
            let index = houseLands.findIndex((item) => item.name === "LAND");
            houseLands[index] = {
                id: houseLands[index].id,
                name: "STONE MINE",
                img: "https://media.tenor.com/vUE_Djz6dUMAAAAd/aoe2-mining.gif",
                worker: 0
            };
            addBuilding();
        };
    }
    else
        return;
    if (goldBar >= 50 && woodBar >= 50 && stonedBar >= 30) {
        marketPlace.onclick = () => {
            goldBar -= 50;
            woodBar -= 50;
            stonedBar -= 30;
            seeToolbar();
            let objects = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            };
            let index = houseLands.findIndex((item) => item.name === "LAND");
            houseLands[index] = {
                id: houseLands[index].id,
                name: "MARKETPLACE",
                img: "https://thumbs.gfycat.com/CraftyGlamorousApisdorsatalaboriosa-size_restricted.gif",
                worker: 0
            };
            addBuilding();
        };
    }
    else
        return;
    if (goldBar >= 20 && woodBar >= 10 && stonedBar >= 15) {
        hunterHut.onclick = () => {
            goldBar -= 20;
            woodBar -= 10;
            stonedBar -= 15;
            seeToolbar();
            let objects = {
                id: 0,
                img: '',
                name: '',
                worker: 0
            };
            let index = houseLands.findIndex((item) => item.name === "LAND");
            houseLands[index] = {
                id: houseLands[index].id,
                name: "HUNTER HUT",
                img: "https://media.tenor.com/-FSP1RiJPJYAAAAM/aoe2-bush.gif",
                worker: 0
            };
            addBuilding();
        };
    }
    else
        return;
}
buy();
function addBuilding() {
    building.innerHTML = "";
    houseLands.map((data) => {
        building.innerHTML += `
        <div class="d-flex flex-d-column gap">
            <img src="${data.img}" alt="">
            <div class="name">${data.name}</div>
            <div class="display d-flex gap txt-center">
                <button class="add">ADD</button>
                <button class="delete">DELETE</button>
            </div>
        </div>
    `;
        addAndDelete(data);
    });
}
function addAndDelete(data) {
    const btnSection = document.querySelectorAll('.display');
    if (data.name !== "LAND" && data.name !== "SMALL HOUSE" && data.name !== "MEDIUM HOUSE") {
        for (let i = 0; i < btnSection.length; i++) {
            btnSection[i].style.display = 'block';
        }
    }
}
