// --- 1 uzd. ---
console.log("_____ 1 uzd. _____")

const items = [
    "ball", "car", "snow", "wind", "rain", // "cat", "bat", "rat", "dog", "cow", "sheep"
]

// check if first item in array is "ball" and last item in array is "rain"
// if yes log last item
// if no, check array length, if it is more than 4 and less than 10, log array length

if (items[0] === 'ball' && items[items.length-1] === 'rain'){
    console.log(items[items.length-1])
} else if ( 4 < items.length > 10) { //
        console.log(items.length)
}

/*** else{
    if (items.length > 4 && items.length < 10) console.log(items.length)
} ***/


// --- 2 uzd. ---
console.log("_____ 2 uzd. _____")

const stuff = {
    two: [5,2,2,2,2,2,2,3],
    three: [3,3,3,3,3,3,5],
    five: [2,5,5,5,5]
}

// check if in array "two" first item and last item is number 2
// if not, take first item and put to "five" array, also take last item and put to "three" array
if (stuff.two[0] === 2 && stuff.two[stuff.two.length-1] === 2){

} else {
    stuff.five.push(stuff.two.shift())
    stuff.three.unshift(stuff.two.pop())
    console.log(1.)
    console.log(stuff)
}

/*** if (stuff.two[0] !== 2 && stuff.two[stuff.two.length-1] !== 2){
            stuff.five.push(stuff.two.shift())
            stuff.three.push(stuff.two.pop())
            console.log(stuff)
} ***/

// check if "three" array last item is number 3, if not, take that number and put to "five array"
if (stuff.three[stuff.three.length-1] !== 3){
    stuff.five.push(stuff.three.pop())
    console.log(2.)
    console.log(stuff)
}


// check if "five" array first item is number five, if not, take the number ant put to array "two"
if (stuff.five[0] !== 5){
    stuff.two.push(stuff.five.shift())
    console.log(3.)
    console.log(stuff)
}



// --- 3 uzd. ---
console.log("_____ 3 uzd. _____")

const shop = {
    rentPrice: 200,
    budget: 50,
    itemsToSell: [
        "car", "windows", "computer", "old microwave"
    ],
    bankrupt: false
}

// check if "budget" is more than "rentPrice" and bankrupt is false
// if true, log "all good, we are in business"
// if false, remove items from itemsToSell, for each item removed add 50 to budget
if (shop.budget > shop.rentPrice && shop.bankrupt === false){
    console.log(`All good, we are in business`)
} else {
    shop.budget += 50*shop.itemsToSell.length
    shop.itemsToSell = []

    // const remove = shop.itemsToSell.splice(0,shop.itemsToSell.length)

    console.log(shop)
}

// check if itemsToSell is empty and "budget" is more than "rentPrice"
/// if yes, subtract rent price from budget and set bankrupt to false
if (shop.itemsToSell.length === 0 && shop.budget > shop.rentPrice){
    shop.budget = shop.budget - shop.rentPrice
    // shop.budget -= shop.rentPrice
    shop.bankrupt = false
    console.log(shop)
}




// --- 4 uzd. ---
console.log("_____ 4 uzd. _____")

const myStuff = {
    arr: ['lamp', "car", "dog", "pc", "tv"],
    hasAnimals: false,
    hasBoat: true,
    hasKids: true
}

// check if "arr" includes (google it) dog or cat if true, set hasAnimals to true
if (myStuff.arr.includes('dog') || myStuff.arr.includes('cat')){
    myStuff.hasAnimals = true
    console.log(1)
    console.log( myStuff.hasAnimals)
}

/*** GALIMA RASYTI TIK VIENA EILUTE
 * if (myStuff.arr.includes('dog') || myStuff.arr.includes('cat')) myStuff.hasAnimals = true ****/

// check if last item in array is "kid" or first item in array is "children" if yes set "hasKids" to true
///// if no, set has kids to false
if (myStuff.arr[myStuff.arr.length-1] === 'kid' || myStuff.arr[0] === "children") {
    myStuff.hasKids = true
    console.log(2)
    console.log(myStuff.hasKids)
} else {
    myStuff.hasKids = false
    console.log(2)
    console.log(myStuff.hasKids)
}

/*** GALIMA RASYTI TIK VIENA EILUTE
 * myStuff.arr[myStuff.arr.length-1] === 'kid' || myStuff.arr[0] === "children") ***/

// add "boat" to array, with method "includes" check if there is a boat in array
// if yes set hasBoat to true, if no, set to false

myStuff.arr.push("boat")


if (myStuff.arr.includes('boat')){
    myStuff.hasBoat = true
    console.log(3)
    console.log(myStuff.hasBoat)
} else {
    myStuff.hasBoat = false
    console.log(3)
    console.log(myStuff.hasBoat)
}

/*** GALIMA RASYTI TIK VIENA EILUTE
 * myStuff.arr.includes('boat') ***/



// --- 5 uzd. ---
console.log("_____ 5 uzd. _____")

const user = {
    name: "tomas",
    age: 45,
    hobbies: ['swim', "run", "sleep"],
    animals: false
}

// from inside the function do this:
// change name to any random name
// remove first hobby add random one to the back of hobbies array
// check if has animals, if not, create one more key in object "myAnimals", with empty array
//// to empty "myAnimals" array add goldFish and dog
// check if myAnimals has dog and goldFish in array
//// if yes log both of the animals

function allItems(){
    user.name = "Anzelmas"
    user.hobbies.shift()
    user.hobbies.push("Gaming")

    if (!user.animals){
        user.myAnimals = []
        user.myAnimals.push("Gold fish", "Dog")
    }

    if (user.myAnimals.includes("Gold fish") && user.myAnimals.includes("Dog")){
        console.log(user.myAnimals[0],user.myAnimals[1])
    }
}

allItems()





// --- 6 uzd. ---
console.log("_____ 6 uzd. _____")

// create function which receives word as an argument and logs only first and last letter of word

// call function with these arguments - milk, snow, rain, grain, sun

function firstLast(word){
    console.log(word[0],word[word.length-1])
}
firstLast("milk")
firstLast("snow")
firstLast("rain")
firstLast("grain")
firstLast("sun")




// --- 7 uzd. ---
console.log("_____ 7 uzd. _____")

//Create a function that takes two numbers as arguments and returns their sum.
//
// addition(3, 2) ➞ 5
//
// addition(-3, -6) ➞ -9
//
// addition(7, 3) ➞ 10

function sum(num1, num2){
    console.log(num1+num2)
}
sum(3, 2)
sum(-3, -6)
sum(7, 3)



// --- 8 uzd. ---
console.log("_____ 8 uzd. _____")

// Write a function that takes an integer minutes and converts it to seconds.
//
//  Examples
// convert(5) ➞ 300
//
// convert(3) ➞ 180
//
// convert(2) ➞ 120

function minToSec(min){
    const sec = 60
    console.log(min*sec) // min * 60
}
minToSec(5)
minToSec(3)
minToSec(2)



// --- 9 uzd. ---
console.log("_____ 9 uzd. _____")

// Create a function that takes an array containing only numbers and return the first element.
//
//     Examples
// getFirstValue([1, 2, 3]) ➞ 1
//
// getFirstValue([80, 5, 100]) ➞ 80
//
// getFirstValue([-500, 0, 50]) ➞ -500

function arr(array){
    console.log(array[0])
}
arr([1, 2, 3])
arr([80, 5, 100])
arr([-500, 0, 50])


// --- 10 uzd. ---
console.log("_____ 10 uzd. _____")

//Write a function that returns the string "something" joined with a space " " and the given argument a.
//
//     Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
//
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
//
// giveMeSomething("something") ➞ "something something"

function text(allText){
    const sentence = "something"
    console.log(sentence + ' ' + allText) /// "something " + allText
}

text("is better than nothing")
text("Bob Jane")
text("something")