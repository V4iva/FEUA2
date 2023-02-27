const main = document.querySelector('.main')
const btn = document.querySelector('.btn')


let allActivity = []
let addToList = []

btn.onclick = () =>{
    function getActivityData () {
        fetch('https://www.boredapi.com/api/activity')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                randomActivity(data)
                allActivity = data
            })
    }
    getActivityData()
}

function randomActivity (data){
    main.innerHTML = `
        <div class="box border d-flex flex-d-column gap j-center a-center txt-center">
            <h1 class="activity">${data.activity}</h1>
            <div class="type">Type: ${data.type}</div>
            <div class="participants">Participants: ${data.participants}</div>
            <div class="price">Price: ${data.price}</div>
            <div class="link">${data.link}</div>
            <button class="add">ADD TO LIST</button>
        </div>
    `
    const btnAdd = document.querySelector('.add')
    btnAdd.onclick = () =>{
        addToList.push(allActivity)

        console.log(allActivity, addToList)
        localStorage.setItem('ToList',JSON.stringify(addToList))
    }

}

