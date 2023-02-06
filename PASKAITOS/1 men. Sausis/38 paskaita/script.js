const main = document.querySelector('.main')

let postId = 0
let userId = 0

function getData (){

    fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            seePosts(data)
    })

}
getData()

function seePosts (data){
    for (let i = 0; i < 30; i++) {
        main.innerHTML += `
        <div class="box">
            <div class="">${data.posts[i].title}</div>
            <div>
                <button class="user" id="${data.posts[i].userId}" >Get User</button>
                <button class="card" id="${data.posts[i].id}" >Get posts</button>
            </div>
        </div>
        `
    }
    const cards = document.querySelectorAll('.card')
    cards.forEach(btn => btn.onclick =(event)=> {
        console.log(event.composedPath()[0].id)
        postId = event.composedPath()[0].id

        if (postId > 0){
            fetch("https://dummyjson.com/posts/"+ postId)
                .then(res => res.json())
                .then(data2 => {
                    console.log(data2)
                    singlePost(data2)
            })
        }
    })

    const users = document.querySelectorAll('.user')
    users.forEach(btn => btn.onclick =(event)=> {
        console.log(event.target.id)
        userId = event.target.id

        if (userId > 0){
            fetch("https://dummyjson.com/users/"+ userId)
                .then(res => res.json())
                .then(data3 => {
                    console.log(data3)
                    userData (data3)
                })
        }
    })
}

function singlePost (data2) {
    main.innerHTML = ""
        main.innerHTML = `
        <div class="box2">
            <div>Title: ${data2.title}</div>
            <div>Description: ${data2.body}</div>
            <div>Tags: ${data2.tags}</div>
        </div>
        <button class="goBack">Go BAck</button>
       `
    const button = document.querySelector('.goBack')
    button.onclick = () => {
        main.innerHTML = ''
        getData()
    }
}

function userData (data3) {
    main.innerHTML = ""
    main.innerHTML = `
        <div class="box3">
            <img src="${data3.image}">
            <div>
                <div>First Name: ${data3.firstName}</div>
                <div>Last Name: ${data3.lastName}</div>
                <div>Age: ${data3.age}</div>
                <div class="gender">Gender: ${data3.gender}</div>
                <div>Hair Color: ${data3.hair.color}</div>
                <div>Adress: ${data3.address.address}</div>
                <div>City: ${data3.address.city}</div>
            </div>
        </div>
        <button class="goBackk">Go BAck</button>
       `
    const button = document.querySelector('.goBackk')
    button.onclick = () => {
        main.innerHTML = ''
        getData()
    }

    const box   =   document.querySelector('.box3')
    if (data3.gender === "male") box.style.backgroundColor = '#87c8fa'
    if (data3.gender === "female") box.style.backgroundColor = '#fcbdd3'
}

