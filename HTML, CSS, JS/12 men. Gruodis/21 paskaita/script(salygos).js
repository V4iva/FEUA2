///////////////////////////////////////////////////////////////////////////////////
// SPARGALKE PRADZIA................................................................
/*
let name = "Vaiva"
let num = 56

if (name === "Laura") {
    console.log('TAIP LAURA')
} else {
    console.log('NE NE LAURA')
}


if(num > 100){
   console.log('MORE THAN 100')
}
if(num < 100){
   console.log('LESS THAN 100')
}
if(num >= 100){
   console.log('= OR MORE THAN 100')
}
if(num <= 100){
   console.log('100 OR LESS')
}

*/
// SPARGALKE PABAIGA................................................................
////////////////////////////////////////////////////////////////////////////////////





// --- 1 uzd. ---
console.log("_____ 1 uzd. _____")

const obj = {
    age: 60,
    old: false,
    name: "John",
    hasChildren: false
}

// check if:
// age is more than 50, if yes set "old" to true
if (obj.age > 50){
    obj.old = true
    console.log(obj.old + " OLD")
}

// check what is first letter of "name" if it is K, console log "FIRST IS K"
if (obj.name[0] === 'K'){
    console.log("FIRST IS K")
}

// check if "hasChildren" is true, if yes log, "_NAME_ is _OLD_ years old and has children"
// if "hasChildren" is false, log "_NAME_ does not have children and it is too late now"

if (obj.hasChildren){  /*  ARBA GALIMA RASYTI if (obj.hasChildren === tre) IR TAI YRA VIENAS IR TAS PATS */
    console.log(obj.name + ' is ' +  obj.old + 'ears old and has children')
} else {
    console.log(`${obj.name} does not have children and it is too late now`)
}





// --- 2 uzd. ---
console.log("_____ 2 uzd. _____")

const some = {
    products: ["milk", "bred", "water", "sugar"],
    money: 15,
    bought: [],
    spend: 0
}

// if money is more than 10, take last item from products and put it to bought
// subtract 2.99 from money and add it to spend
if (some.money > 10){
    /* const lastItem = some.products.pop()
    * some.bought.push(lastItem) */
   some.bought.push(some.products.pop())
    console.log(some.bought)

    some.money = some.money-2.99
    /*  some.money -= 2.99 */
    some.spend = some.spend + 2.99
    /* some.spend += 2.99*/
    console.log(some.money)
    console.log(some.spend)
}


// check if money more than 10 if yes take first item from products and put to bought
// subtract 3.99 from money and add it to spend
if (some.money > 10){
    some.bought.push(some.products.shift())
    console.log(some.bought)

    some.money = some.money-3.99
    /*  some.money -= 3.99 */
    some.spend = some.spend + 3.99
    /* some.spend += 3.99*/
    console.log(some.money)
    console.log(some.spend)
}





// --- 3 uzd. ---
console.log("_____ 3 uzd. _____")

const car = {
    wheels: 3,
    fix: false,
    driver: null,
    passengers: ['tom', "john", "jammy"],
    fuel: 10
}

// check if car has 4 wheels, if not, set "fix" true
if (car.wheels === 4){   /* if (car.wheels !== 4) SAUKTUKAS APVERCIA BOOLEAN I PRIESINGA REIKSME tada nebereikia rasyti else */
    console.log(car.fix)
}else {
    car.fix = true
    console.log(car.fix)
}

// check if "fix" is true or false
///// IF FIX IS TRUE - subtract 3 from fuel
///// IF FIX IS FALSE - remove last passenger
if (car.fix){
    car.fuel -= 3
    console.log(car.fuel)
} else {
    car.passengers.pop()
    console.log(car.passengers)
}

// check passengers length if it is more than 2, take first passenger from array and put it to "driver"
if (car.passengers.length > 2 ){
    car.driver = car.passengers.shift()
    console.log(car.driver)
}

// check if driver is "tom" if yes console log "_driver_ is very good driver"
if (car.driver === "tom"){
    console.log(`${car.driver} is very good drive`)
}





// --- 4 uzd. ---
console.log("_____ 4 uzd. _____")

let items = [
    {
        words: ['some', 'random', 'words', 'in', 'the', 'array'],
        nums: [4, 6, 7, 8, 3, 2, 7, 8],
        bul: true
    },
    false,
    [
        "snow", "sun", "rain"
    ],
    "red",
    {
        names: ['tomas', "jonas", "petras"]
    }
]

// last item in array is object, check if 'names' length is more than 2
//// if it is true, log each of names
if (items[items.length-1].names.length > 2){
    console.log(items[items.length-1].names[0], items[items.length-1].names[1], items[items.length-1].names[2] )
}

// check if second item in "items" array is true of false, if false,
///// take 4th item from "item" array and console log it in upperCase (google how)
if (!items[1]){
    console.log(items[3].toUpperCase())
}

// first item in array has key "bul", check if it is true
//// if true, take last item from "words" and put it to 3rd item in "items" array


if ('bul' in items[0]){                 /* if (items[0].bul === true)*/
    items[2].push(items[0].words.pop()) /* const item = items[0].words.pop()*/
    console.log(items[2])               /* items[2].push(item) */
}

// check if 4th item in array is "red"
//// if true create variable and put first item from "items" array as value of this variable
// check if newly created variable key "nums" length is less than 20,
///// if yes add one more key to newly created variable, which will have empty array as value
///// to newly created key array, push 3 random numbers from same object "nums" array
if (items[3] === "red"){
    const newVar = items[0]

    if (newVar.nums.length < 20){
        newVar.newArr = []
        newVar.newArr.push(newVar.nums[1], newVar.nums[3], newVar.nums[5])
    }

    console.log(items[0])
}





// --- 5 uzd. ---
console.log("_____ 5 uzd. _____")

const movies = {
    watchedAll: true,
    list: ["home alone", "top gun", "hitmen"],
    time: "20:00"
}

// check if time is "20:00" if yes add one more key to object "moviesIWatch" as  empty array
// set time to 21:40, remove one movie from list, add it to "moviesIWatch"
if (movies.time === "20:00"){
    movies.moviesIWatch = []
    movies.time = "21:40"
    movies.moviesIWatch.push(movies.list.pop())
    console.log(movies.time)
}

// check if time is 21:40 if yes set time to 23:20, take one movie from list and put to "moviesIWatch"
if (movies.time === "21:40"){
    movies.time = "23:20"
    movies.moviesIWatch.push(movies.list.shift())
    console.log(movies)
}


// check if watchedAll is true, if yes, set it to false and make "list" to be empty array
if (movies.watchedAll){
    movies.watchedAll = false
    movies.list = []
    console.log(movies)
}