"use strict";
const dropdown = document.querySelector('.dropdown');
const startBtn = document.querySelector('.start');
const shutDownBtn = document.querySelector('.shutDown');
const visualScreen = document.querySelector('.screen');
const folders = document.querySelectorAll('.folders');
const dateAndTime = document.querySelector('.time');
const images = {
    one: 'https://www.pixelstalk.net/wp-content/uploads/images6/Cool-Funny-Backgrounds-for-Desktop.jpg',
    two: 'https://getwallpapers.com/wallpaper/full/d/8/f/1157101-large-world-map-desktop-wallpaper-hd-1920x1080-tablet.jpg',
    three: 'https://wallpaper.dog/large/5484677.jpg',
    four: 'https://images3.alphacoders.com/669/66997.jpg',
    five: 'https://images5.alphacoders.com/321/thumb-1920-321139.jpg',
    six: 'https://wallpaperaccess.com/full/143811.jpg',
};
let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;
let isStart = false;
let isShutDown = false;
let openFolder = false;
function startBar() {
    startBtn.onclick = () => {
        if (!isStart) {
            dropdown.style.display = "block";
            isStart = true;
        }
        else {
            dropdown.style.display = "none";
            isStart = false;
        }
    };
    shutDownBtn.onclick = () => {
        if (!isStart) {
            isShutDown = true;
        }
        else {
            isShutDown = false;
        }
    };
    dateAndTime.innerText = `Time: ${dateTime}`;
}
startBar();
function allFolders(el) {
    folders.forEach(item => item.onclick = (event) => {
        if (!openFolder) {
            if (event.target.id === "images") {
                visualScreen.innerHTML += `
                <div class="folderImages">
                    <div class="toolbar d-flex j-end">
                        <button>X</button>
                    </div>
                    <div class="d-flex f-wrap">
                        <img src="${el.one}" alt="">
                        <img src="${el.two}" alt="">
                        <img src="${el.three}" alt="">
                        <img src="${el.four}" alt="">
                        <img src="${el.five}" alt="">
                        <img src="${el.six}" alt="">
                    </div>
                </div>
            `;
                const folderImages = document.querySelector('.folderImages');
                const btn = document.querySelector('button');
                btn.onclick = () => {
                    folderImages.style.display = 'none';
                    openFolder = false;
                };
            }
            openFolder = true;
        }
        else
            return;
    });
}
allFolders(images);
