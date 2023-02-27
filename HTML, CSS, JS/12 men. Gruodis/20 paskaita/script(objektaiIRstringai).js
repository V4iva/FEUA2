// --- 1 uzd. ---
console.log("_____ 1 uzd. _____")



// create object with these keys:
// you full name
// city you where born in
// you animal name (if there is no, leave it as empty string - "")
// name of you school

//Take this from object and log it:
// first letter of you full name
// length of your ful name
// last letter of city you where born in

const myUser = {
    name: "Vaiva Dobrovolskytė",
    city: "Kupiškis",
    animalName: "Teja",
    shoolName: "Kupiškio Lauryno Stuokos-Gucevičiaus gimnazija",
}

console.log(myUser.name[0])
console.log(myUser.name.length)
console.log(myUser.city[myUser.city.length-1])





// --- 2 uzd. ---
console.log("_____ 2 uzd. _____")



// update shopping info object:
const arr = ["pienas", "sienas", "vanduo", "kakava"]
const prices = [2.99, 100, 20, 5]
const shops = {
    first: "maxima",
    second: "iki",
    third: "norfa"
}

shops.fourth = "lidl"
shops.fifth = "rimi"

const shoppingInfo = {}

// add any shop to it,
shoppingInfo.shop = shops.first

// add array of products you bought
shoppingInfo.products = arr

// add array of prices
shoppingInfo.prices = prices

// create key where all prices are summed up
shoppingInfo.totalPrices = prices[0]+prices[1]+prices[2]+prices[3]

// create key which has value "i wen to shop and bought _____products___"
shoppingInfo.bought = `i wen to shop and bought ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} products`

console.log(shoppingInfo)






// --- 3 uzd. ---
console.log("_____ 3 uzd. _____")



// add keys to object:
const myItems = [
    "ball",
    "tv",
    "shoes",
    "snow",
    "milk",
    "beans"
]

const obj = {}
// key which will hold all words combined from items array
obj.allWords = myItems[0]+' '+myItems[1]+' '+myItems[2]+' '+myItems[3]+' '+myItems[4]+' '+myItems[5]
// key which will have total sum of all words lengths
obj.wordLengths = myItems[0].length+myItems[1].length+myItems[2].length+myItems[3].length+myItems[4].length+myItems[5].length
// key which will have second letter of third item from array
obj.secondLetter = myItems[2][1]

console.log(obj)

//after all this done, change all values in array to "null"
myItems[0] = null
myItems[1] = null
myItems[2] = null
myItems[3] = null
myItems[4] = null
myItems[5] = null



///////////////////////////////////////////////////////////////////////////////////
// SPARGALKE PRADZIA................................................................


// let arr = [1, 2, 3, 4, 5, 6]

// arr.unshift("item")
// arr.push("item")

//const item = arr.pop()
//const item = arr.shift()

// .push("some") - add item to end of array
// .unshift("some") - add item to start of array

// arr.pop() - takes last item from array and returns his value
// arr.shift() - takes first item from array and returns his value


// SPARGALKE PABAIGA................................................................
////////////////////////////////////////////////////////////////////////////////////



// --- 4 uzd. ---
console.log("_____ 4 uzd. _____")



// using array methods, do this:
const animals = ["cat", "dog", "cow", "snow"]
const notAnimals = ["rain", "clouds", "summer"]

const rainAndSnow = []

const lengthsOfAnimals = []

const obj1 = {
    lastAnimal: []
}

// take snow from animals arr and put to notAnimals
notAnimals.push(animals.pop())
console.log(notAnimals)

// take rain and snow from notAnimals and put to "rainAndSnow"
rainAndSnow.push(notAnimals.pop(), notAnimals.shift())
console.log(rainAndSnow)

// to "lengthsOfAnimals" add every animal word length, one by one
lengthsOfAnimals.push(animals[0].length,animals[1].length, animals[2].length)
console.log(lengthsOfAnimals)

// to obj with lastAnimal push last animal word
obj1.lastAnimal.push(animals[animals.length-1])
console.log(obj1.lastAnimal)





// --- 5 uzd. ---
console.log("_____ 5 uzd. _____")


const som = {
    names: ["tomas", "jonas", "petras", "onute"],
    party: [],
    lettersFromNamesInParty: [],
    firstInNames: []
}

// take two names from names arr and put it to party arr
som.party.push(som.names[2], som.names[0])
console.log(som.party)

// put first letters of names from party to "lettersFromNamesInParty"
som.lettersFromNamesInParty.push(som.party[0][0], som.party[1][0])
console.log(som.lettersFromNamesInParty)

// take first name from names and put to "firstInNames"
som.firstInNames.push(som.names.shift())
console.log(som.firstInNames)

// create variable and make it sum to be all lengths of arrays of som object
const sum1 = som.names.length + som.party.length + som.lettersFromNamesInParty.length + som.firstInNames.length
console.log(sum1)

// console log lengths of all arrays in som object
console.log(som.names.length, som.party.length, som.lettersFromNamesInParty.length, som.firstInNames.length)

