const main = document.querySelector('.main')
const btn = document.querySelector('.btn')
const input = document.querySelectorAll('input')

const activities = localStorage.getItem('ToList')
let searchActiv = []

JSON.parse(activities).map(activ =>{

    firstMain (activ)

    btn.onclick = (activ) => {
        const type = input[0].value
        const participants = Number(input[1].value)
        const price = Number(input[2].value)

        const findType = JSON.parse(activities).filter(activ => activ.type === type)
        const findParticipants = JSON.parse(activities).filter(activ => activ.participants === participants)
        const findPrice = JSON.parse(activities).filter(activ => activ.price === price)

        if (findPrice === 0 && findParticipants === 0 && findType === 0){

        }
        if (findType.length !== 0){
            searchActiv.push(findType)
            main.innerHTML = ''
            search(searchActiv)
        }else {
            main.innerHTML = ''
            firstMain ()
        }
        if (findParticipants.length !== 0){
            searchActiv.push(findParticipants)
            main.innerHTML = ''
            search(searchActiv)
        }else {
            main.innerHTML = ''
            firstMain ()
        }
        if (findPrice.length !== 0){
            searchActiv.push(findPrice)
            main.innerHTML = ''
            search(searchActiv)
        }else {
            main.innerHTML = ''
            firstMain ()
        }
    }
})
const deleteBtn = document.querySelectorAll('.delete')
deleteBtn.forEach(btn => btn.onclick = (event) =>{
    let key = event.target.id
    const findID = JSON.parse(activities).filter(activ => activ.key !== key)
    console.log(findID)
})

function firstMain (activ) {
    main.innerHTML += `
        <div class="box2 border d-flex gap j-center a-center txt-center j-spc-btw">
            <div class="d-flex flex-d-column gap p10">
                <h1 class="activity">${activ.activity}</h1>
                <div class="type">Type: ${activ.type}</div>
                <div class="participants">Participants: ${activ.participants}</div>
                <div class="price">Price: ${activ.price}€</div>
                <div class="link">${activ.link}</div>
            </div>
            
            <button id="${activ.key}" class="delete p10">DELETE</button>
        </div>
    `
}
function search (searchActiv){
    searchActiv[0].map(activ =>{
        main.innerHTML += `
        <div class="box2 border d-flex gap j-center a-center txt-center j-spc-btw">
            <div class="d-flex flex-d-column gap p10">
                <h1 class="activity">${activ.activity}</h1>
                <div class="type">Type: ${activ.type}</div>
                <div class="participants">Participants: ${activ.participants}</div>
                <div class="price">Price: ${activ.price}€</div>
                <div class="link">${activ.link}</div>
            </div>
            
            <button id="${activ.key}" class="delete p10">DELETE</button>
        </div>
    `
    })
}