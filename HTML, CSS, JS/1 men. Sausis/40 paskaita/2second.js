const input = document.querySelectorAll('input')
const select = document.querySelector('select')
const button = document.querySelector('button')
const main  = document.querySelector('.main')
const someColor = document.querySelector('.box')

let userInfo = []

button.onclick = () => {
    let user = {
        name: input[0].value,
        email: input[1].value,
        age: input[2].value,
        gender: select.value,
    }
    let ivalid = false

    if (user.name.length < 3 ||user.name.length > 20 || user.name.length === 0){
        input[0].classList.add('invalid')
        ivalid= true
    }else {
        input[0].classList.remove('invalid')
    }
    if (!user.email.includes('@') || !user.email.includes('.') || user.email.length === 0){
        input[1].classList.add('invalid')
        ivalid= true
    }else {
        input[1].classList.remove('invalid')
    }
    if (user.age.length === 0){
        input[2].classList.add('invalid')
        ivalid= true
    }else {
        input[2].classList.remove('invalid')
    }

    if (ivalid)return

    userInfo.push(user)
    if (user.name.length !==0 && user.email.length !==0 && user.age.length !==0 && user.gender.length !==0) appendUser()


    if (user.gender === "male") main.innerHTML += `<div class="color male"></div>`
    if (user.gender === "female") main.innerHTML += `<div class="color female"></div>`
}

function appendUser(){
    main.innerHTML = ''
    userInfo.map(item =>{

        const myColor = item.gender === 'male' ? '#1e9bff' : 'lightpink'

        main.innerHTML += `
            <div class="box border">
                <h1>${item.name}</h1>
                <h3>${item.email}</h3>
                <h3>${item.age}</h3>
                <h3>${item.gender}</h3>
                <div style="background-color: ${myColor}" class="color"></div>
            </div>
        `
    })
}