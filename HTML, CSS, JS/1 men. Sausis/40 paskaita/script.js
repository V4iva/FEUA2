const input = document.querySelectorAll('input')
const button = document.querySelector('button')
const main  = document.querySelector('.main')
const text  = document.querySelectorAll('p')

let postsInfo = []

button.onclick = () => {

    let posts = {
        photo: input[0].value,
        title: input[1].value,
        description: input[2].value,
    }
    postsInfo.push(posts)

    if (input[0].value.length === 0) {
        input[0].style.border = '2px solid red'
        text[0].innerText = "Photo can't be empty"
    }
    if (input[1].value === '') {
        input[1].style.border = '2px solid red'
        text[1].innerText = "Title can't be empty"
    }
    if (input[2].value === '') {
        input[2].style.border = '2px solid red'
        text[2].innerText = "Description can't be empty"
    }

    setTimeout(() => {
        input[0].style.border = '1px solid darkgrey'
        input[1].style.border = '1px solid darkgrey'
        input[2].style.border = '1px solid darkgrey'
    }, 2000)

    if (posts.photo.length !== 0 && posts.title.length !== 0 && posts.description.length !== 0 ) appendHtml()

    setTimeout(() => {
        input[0].value = ''
        input[1].value = ''
        input[2].value = ''
    }, 1000)

}

function appendHtml () {
    main.innerHTML = ""
    postsInfo.map(item =>{
        main.innerHTML += `
            <div class="box border">
                <img src="${item.photo}" alt="">
                <h1>${item.title}</h1>
                <div>${item.description}</div>
            </div>
        `
    })
}