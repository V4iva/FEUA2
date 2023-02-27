const main = document.querySelector('.main')


function photoData () {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            seeAllPhotos(data)
        })
}
photoData()

function seeAllPhotos (data) {
    for (let i = 0; i < 100; i++) {
        main.innerHTML += `
    <div class="box">
        <img src="${data[i].url}" alt="">
        <p>${data[i].title}</p>
    </div>
    `
    }

}
seeAllPhotos()
