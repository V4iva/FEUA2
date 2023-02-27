const main = document.querySelector('.main')
function getData (){
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(data => {
            allPosts(data)
        })

}
getData()
function allPosts (data){

    containerMain(data)

    const userNameClick = document.querySelectorAll('.username')
    userNameClick.forEach(btn => btn.onclick = (event) =>{
        fetch('http://167.99.138.67:1111/getuserposts/' + event.target.innerHTML)
            .then(res => res.json())
            .then(data =>{
                oneUserPost(data)
            })
    })
}
function oneUserPost (data){
    main.innerHTML= ''
    containerMain(data)

    const fromId = document.querySelectorAll('.box')
    fromId.forEach(btn => btn.onclick = (event) =>{
        fetch('http://167.99.138.67:1111/getsinglepost/'+event.target.innerHTML+"/"+event.target.id)
            .then(res => res.json())
            .then(data =>{
                onePost(data)
            })
    })
}
function onePost (data){
    main.innerHTML= ''
        main.innerHTML = `
        <div  class="box border ov-hidden txt-center">
            <h1 id="${data.data.id}" class="username">${data.data.username}</h1>
            <div class="title">${data.data.title}</div>
            <img src="${data.data.image}" alt="">
            <div class="description">${data.data.description}</div>
            <div class="timestamp">${data.data.timestamp}</div>
        </div>
        `
}
function containerMain (data){
    data.data.map(item =>{
        main.innerHTML += `
        <div  class="box border ov-hidden txt-center">
            <h1 id="${item.id}" class="username">${item.username}</h1>
            <div class="title">${item.title}</div>
            <img src="${item.image}" alt="">
            <div class="description">${item.description}</div>
            <div class="timestamp">${item.timestamp}</div>
        </div>
        `
    })
}


const inputs = document.querySelectorAll('input')
const button = document.querySelectorAll('button')
const container = document.querySelector('.container')

button[0].onclick = () => {

    const newUserInfo = {
        name: inputs[0].value,
        passwordOne: inputs[1].value,
        passwordTwo: inputs[2].value,
    }
    const fetchOptions = {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newUserInfo)
    }
    fetch('http://167.99.138.67:1111/createaccount', fetchOptions)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

    if (newUserInfo.name.length<5){
        inputs[0].classList.add('invalid')
        let textBox = document.createElement('div')
        textBox.innerText = "Name has to be at least 5 symbols length"
        container.appendChild(textBox)
    } else {
        inputs[0].classList.remove('invalid')
    }
    if (newUserInfo.passwordOne !== newUserInfo.passwordTwo){
        inputs[1].classList.add('invalid')
        inputs[2].classList.add('invalid')
        let textBox = document.createElement('div')
        textBox.innerText = "Both passwords should match"
        container.appendChild(textBox)
       // alert("Passwords not match")
    } else {
        inputs[1].classList.remove('invalid')
        inputs[2].classList.remove('invalid')
    }

}
button[1].onclick = () => {
    const newUser = {
        name: inputs[3].value,
        password: inputs[4].value,
    }
    const fetchOptions = {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(newUser)
    }
    fetch('http://167.99.138.67:1111/login', fetchOptions)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("SecretKey", data.secretKey)
            console.log(data)
        })
}

button[2].onclick = () =>{
    const postInfo = {
        secretKey: localStorage.getItem('SecretKey'),
        title: inputs[5].value,
        image: inputs[6].value,
        description: inputs[7].value,
    }
    console.log(postInfo)
    const fetchOptions = {
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(postInfo)
    }

    fetch('http://167.99.138.67:1111/createpost', fetchOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            editing(data)
        })

}

function editing (data){
    onePost(data)
    console.log(data)
    button[3].onclick = () =>{
        const editInfo = {
            secretKey: localStorage.getItem('SecretKey'),
            title: inputs[8].value,
            image: inputs[9].value,
            description: inputs[10].value,
            id: data.id
        }
        console.log(editInfo)

        const fetchOptions = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editInfo)
        }

        fetch('http://167.99.138.67:1111/createpost', fetchOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

}

