const main = document.querySelector('.main')
const inputs = document.querySelectorAll('input')
const btn = document.querySelectorAll('button')

let allUsers = []
let searchUser = []
function getUsersData (){
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            userPosts(data)
            allUsers = data.users
            console.log(allUsers)


            btn[0].onclick = (data) => {
                const age = Number(inputs[0].value)
                const height = Number(inputs[1].value)
                const weight = Number(inputs[2].value)
                const gender = inputs[3].value

                const findAge = allUsers.filter(user => user.age === age)
                const findHeight = allUsers.filter(user => user.height === height)
                const findWeight = allUsers.filter(user => user.weight === weight)
                const findGender = allUsers.filter(user => user.gender)

                if (findAge !== 0) {
                    main.innerHTML = ''
                    searchUser.push(findAge)
                    search(searchUser)
                }
                if (findHeight !== 0) {
                    main.innerHTML = ''
                    searchUser.push(findHeight)
                    search(searchUser)
                }
                if (findWeight !== 0) {
                    main.innerHTML = ''
                    searchUser.push(findHeight)
                    search(searchUser)
                }
                if (findGender !== 0) {
                    main.innerHTML = ''
                    searchUser.push(findHeight)
                    search(searchUser)
                }

            }
            btn[1].onclick = () =>{
                searchUser = []
                userPosts(data)
            }

            // const allUsers = data.users
            // const nameMiles = allUsers.find(user => user.firstName === 'Miles')
            // console.log(nameMiles)
            //
            // const hairChestnut = allUsers.filter(user => user.hair.color === 'Chestnut')
            // console.log(hairChestnut)
            //
            // const lastNameAbbott = allUsers.findIndex(user => user.lastName === 'Abbott')
            // allUsers[lastNameAbbott].age = 40

        })
}
getUsersData()

function userPosts (data){
    data.users.map(user =>{
        main.innerHTML += `
            <div class="box border txt-center d-flex flex-d-column gap">
                <img src="${user.image}" alt="">
                <div>Age: ${user.age}</div>
                <div>Name: ${user.firstName}</div>
                <div>Height: ${user.height}</div>
                <div>Wight: ${user.weight}</div>
            </div>
        `
    })
}
function search (searchUser){
    console.log(searchUser)
    searchUser[0].map(user =>{
        main.innerHTML += `
            <div class="box border txt-center d-flex flex-d-column gap">
                <img src="${user.image}" alt="">
                <div>Age: ${user.age}</div>
                <div>Name: ${user.firstName}</div>
                <div>Height: ${user.height}</div>
                <div>Wight: ${user.weight}</div>
            </div>
        `
    })
}





