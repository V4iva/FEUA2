const arrEnemyPhotos = ['http://hd.wallpaperswide.com/thumbs/deep_sea_monster-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/fish_monster-t2.jpg', 'http://hd.wallpaperswide.com/thumbs/godzilla_monsters-t2.jpg']

const progressBars = document.querySelectorAll('.progress')
const attackButton = document.querySelector('button')
const barsHP = document.querySelectorAll('.prBar')
const changeImg = document.querySelector('.change')
const moneyMaker = document.querySelector('h2')
const potion = document.querySelector('.potion')
const gunSelector = document.querySelectorAll('.guns')

barsHP[0].style.width = '100%'
barsHP[0].style.height = '100%'
barsHP[0].style.backgroundColor = 'green'

barsHP[1].style.width = '100%'
barsHP[1].style.height = '100%'
barsHP[1].style.backgroundColor = 'green'

let heroHP = 100
let enemyHP = 100
let money = 0

let weaponSelect = ''

// gunSelector[0].onclick = () => {
//     if (!allGuns1){
//         gunSelector[0].style.border = '4px solid red'
//         gunSelector[1].style.border = 'none'
//         gunSelector[2].style.border = 'none'
//     }
//     allGuns1 = true
//     allGuns2 = false
//     allGuns3 = false
// }
// gunSelector[1].onclick = () => {
//     if (!allGuns2){
//         gunSelector[1].style.border = '4px solid red'
//         gunSelector[0].style.border = 'none'
//         gunSelector[2].style.border = 'none'
//     }
//     allGuns2 = true
//     allGuns3 = false
//     allGuns1 = false
// }
// gunSelector[2].onclick = () => {
//     if (!allGuns3){
//         gunSelector[2].style.border = '4px solid red'
//         gunSelector[1].style.border = 'none'
//         gunSelector[0].style.border = 'none'
//     }
//     allGuns3 = true
//     allGuns2 = false
//     allGuns1 = false
// }

attackButton.onclick = () => {



    let heroDamage = Math.floor(2 +(Math.random()*(13 - 2)))
    let enemyDamage = Math.floor(1 +(Math.random()*10))

    money += Math.floor(1 +(Math.random()*5))
    moneyMaker.innerText = `MONEY: ${money}`

    enemyHP -= heroDamage
    barsHP[1].style.width = enemyHP + '%'

    setTimeout(() => {
        heroHP -= enemyDamage
        barsHP[0].style.width = heroHP + '%'
    }, 1000)

    if (enemyHP < 0)enemyHP = 0
    if (heroHP < 0)heroHP = 0
    if (enemyHP === 0){
        enemyHP = 100
        barsHP[1].style.width = enemyHP + '%'
        changeImg.src = arrEnemyPhotos[Math.floor(Math.random() * arrEnemyPhotos.length)]
    }
    // if (heroHP === 0){
    //     const over = document.createElement('h1')
    //     over.innerText = 'GAME OVER'
    //     over.style.color = 'red'
    //     progressBars[0].appendChild(over)
    // }

    let additionalDamage = 0

    if (weaponSelect === 'first')additionalDamage = Math.floor(5 +(Math.random()*(15 - 5)))
    if (weaponSelect === 'second')additionalDamage = Math.floor(10 +(Math.random()*(30 - 10)))
    if (weaponSelect === 'third') additionalDamage = Math.floor(15 +(Math.random()*(50 - 15)))

    const prob = Math.ceil(Math.random()*100)
    if (weaponSelect === 'first' && prob <= 30) heroDamage += heroDamage
    if (weaponSelect === 'second' && prob <= 40) enemyDamage = 0
    if (weaponSelect === 'third' && prob <= 35) heroHP +=5

}

potion.onclick = () => {
    if (money >= 40){
        money -= 40
        moneyMaker.innerText = `MONEY: ${money}`
        heroHP = 100
        barsHP[0].style.width = heroHP + '%'
    }
}

const removeBorders = () => {
    gunSelector.forEach((el) =>{
        el.classList.remove('border')
    })
}
gunSelector[0].onclick = (event) =>{
    weaponSelect = 'first'
    removeBorders()
    event.target.classList.add('border')
}
gunSelector[1].onclick = (event) =>{
    weaponSelect = 'second'
    removeBorders()
    event.target.classList.add('border')
}
gunSelector[2].onclick = (event) =>{
    weaponSelect = 'third'
    removeBorders()
    event.target.classList.add('border')
}

