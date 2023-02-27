// --- 1 uzd. ---
console.log("_____ 1 uzd. _____")

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
//
//     Examples
// squared(5) ➞ 25
//
// squared(9) ➞ 81
//
// squared(100) ➞ 10000

function square (num){
    console.log(num*num)
}

square(5)
square(9)
square(100)

// --- 2 uzd. ---
console.log("_____ 2 uzd. _____")

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
//
// Examples
// lessThanOrEqualToZero(5) ➞ false
//
// lessThanOrEqualToZero(0) ➞ true
//
// lessThanOrEqualToZero(-2) ➞ true

function lessThanOrEqualToZero(num){
    if (num <= 0){
        console.log("True")
    }else {
        console.log("False")
    }
}

lessThanOrEqualToZero(5)
lessThanOrEqualToZero(0)
lessThanOrEqualToZero(-2)

// --- 3 uzd. ---
console.log("_____ 3 uzd. _____")

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
//
//     Examples
// points(1, 1) ➞ 5
//
// points(7, 5) ➞ 29
//
// points(38, 8) ➞ 100

function points(twoPoints, threePoints){
    console.log(2*twoPoints + 3*threePoints)
}

points(1,1)
points(7,5)
points(38,8)

// --- 4 uzd. ---
console.log("_____ 4 uzd. _____")

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//
//     Examples
// animals(2, 3, 5) ➞ 36
//
// animals(1, 2, 3) ➞ 22
//
// animals(5, 2, 8) ➞ 50

function farm(chicken, cow, pig){
    console.log((chicken*2)+(cow*4)+(pig*4))
}
farm(2, 3, 5)
farm(1, 2, 3)
farm(5, 2, 8)

// --- 5 uzd. ---
console.log("_____ 5 uzd. _____")

// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//
//     Consider a && b:
//
//     a is checked if it is true or false.
//     If a is false, false is returned.
//     b is checked if it is true or false.
//     If b is false, false is returned.
//     Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
//
//     Make a function using the && operator.
//
//     Examples
// and(true, false) ➞ false
//
// and(true, true) ➞ true
//
// and(false, true) ➞ false
//
// and(false, false) ➞ false

function checkAnd(reasonA, reasonB){
    if (reasonA && reasonB){
        console.log(true)
    } else {
        console.log(false)
    }
    /*** console.log( reasonA && reasonB ) ****/
}

checkAnd(true, false)
checkAnd(true, true)
checkAnd(false, true)
checkAnd(false, false)

// --- 6 uzd. ---
console.log("_____ 6 uzd. _____")

// Create a function that returns true when num1 is equal to num2; otherwise return false.
//
//     Examples
// isSameNum(4, 8) ➞ false
//
// isSameNum(2, 2) ➞  true
//
// isSameNum(2, "2") ➞ false

function isSameNum(num1, num2){
    if (num1 === num2){
        console.log(true)
    } else {
        console.log(false)
    }
    /*** console.log( num1 === num2 )***/
}

isSameNum(4, 8)
isSameNum(2, 2)
isSameNum(2, "2")

// --- 7 uzd. ---
console.log("_____ 7 uzd. _____")

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//
//     wins get 3 points
// draws get 1 point
// losses get 0 points
// Examples
// footballPoints(3, 4, 2) ➞ 13
//
// footballPoints(5, 0, 2) ➞ 15
//
// footballPoints(0, 0, 1) ➞ 0

function footballPoints (wins, draws, losses){
    console.log((3*wins)+(1*draws)+(0*losses))
    /*** console.log( (3 * wins) + draws) ***/
}

footballPoints(3, 4, 2)
footballPoints(5, 0, 2)
footballPoints(0, 0, 1)

// --- 8 uzd. ---
console.log("_____ 8 uzd. _____")

// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
//
//     To illustrate:
//
//     profitableGamble(0.2, 50, 9)
// ... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//
// Examples
// profitableGamble(0.2, 50, 9) ➞ true
//
// profitableGamble(0.9, 1, 2) ➞ false
//
// profitableGamble(0.9, 3, 2) ➞ true

function profitableGamble(prob, prize, pay){
    const profit = (prob * prize > pay)
    console.log(profit)
    /*** console.log((prob * prize - pay) > 0) ***/
}

profitableGamble(0.2, 50, 9)
profitableGamble(0.9, 1, 2)
profitableGamble(0.9, 3, 2)

// --- 9 uzd. ---
console.log("_____ 9 uzd. _____")

// Create a function that takes a boolean variable flag and returns it as a string.
//
//     Examples
// boolToString(true) ➞ "true"
//
// boolToString(false) ➞ "false"

function boolToString(variable){
    console.log(variable.toString())
}
boolToString(true)
boolToString(false)

// --- 10 uzd. ---
console.log("_____ 10 uzd. _____")

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
//
// Examples
// makesTen(9, 10) ➞ true
//
// makesTen(9, 9) ➞ false
//
// makesTen(1, 9) ➞ true

function makesTen(numA, numB){
    console.log(numA === 10 || numB === 10 || numA + numB === 10)
}
makesTen(9, 10)
makesTen(9, 9)
makesTen(1, 9)

// --- 11 uzd. ---
console.log("_____ 11 uzd. _____")

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
//
//     Examples
// maxNum(3, 7) ➞ 7
//
// maxNum(-1, 0) ➞ 0
//
// maxNum(1000, 400) ➞ 1000

function maxNum(num1, num2){
    console.log(Math.max(num1, num2))
    /*** if ( num1 > num2 ){
        console.log(num1)
    } else {
        console.log(num2)
    } ***/
}
maxNum(3, 7)
maxNum(-1, 0)
maxNum(1000, 400)

// --- 12 uzd. ---
console.log("_____ 12 uzd. _____")

// Given two arguments, return an array which contains these two arguments.
//
//     Examples
// makePair(1, 2) ➞ [1, 2]
//
// makePair(51, 21) ➞ [51, 21]
//
// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2){
    const arr = [num1, num2]
    console.log(arr)
    /*** console.log([num1, num2]) ***/
}

makePair(1, 2)
makePair(51, 21)
makePair(512124, 215)

// --- 13 uzd. ---
console.log("_____ 13 uzd. _____")

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
//
//     Examples
// comp("AB", "CD") ➞ true
//
// comp("ABC", "DE") ➞ false
//
// comp("hello", "edabit") ➞ false

function comp(ab, bc){
    console.log(ab.length === bc.length)
}

comp("AB", "CD")
comp("ABC", "DE")
comp("hello", "edabit")

// --- 14uzd. ---
console.log("_____ 14 uzd. _____")

// Create a function that returns true if a string is empty and false otherwise.
//
//     Examples
// isEmpty("") ➞ true
//
// isEmpty(" ") ➞ false
//
// isEmpty("a") ➞ false

function isEmpty (string){
    console.log(string === '')
}

isEmpty("")
isEmpty(" ")
isEmpty("a")

// --- 15 uzd. ---
console.log("_____ 15 uzd. _____")

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
//
//     Examples
// divisibleByFive(5) ➞ true
//
// divisibleByFive(-55) ➞ true
//
// divisibleByFive(37) ➞ false

function divisibleByFive (num){
    console.log(num % 5 === 0)
}

divisibleByFive(5)
divisibleByFive(-55)
divisibleByFive(37)

// --- 16uzd. ---
console.log("_____ 16 uzd. _____")

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
//
//     Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
//
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
//
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount (counts){
    console.log(counts.upvotes - counts.downvotes)
}

getVoteCount({ upvotes: 13, downvotes: 0 })
getVoteCount({ upvotes: 2, downvotes: 33 })
getVoteCount({ upvotes: 132, downvotes: 132 })

// --- 17 uzd. ---
console.log("_____ 17 uzd. _____")

// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//
// Examples
// shouldServeDrinks(17, true) ➞ false
//
// shouldServeDrinks(19, false) ➞ true
//
// shouldServeDrinks(30, true) ➞ false

function shouldServeDrinks (age, breaks){
    console.log(age >= 18 && !breaks)
}

shouldServeDrinks(17, true)
shouldServeDrinks(19, false)
shouldServeDrinks(30, true)

// --- 18 uzd. ---
console.log("_____ 18 uzd. _____")

// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
//
//     You must calculate the number of people there will be in three decades from now.
//
//     The variable population is the world population now.
//     Assume that every month, someone gives birth to more people n.
//     Return the number of people there will be when the spaceship is complete.
//
//     Examples
// futurePeople(256, 2) ➞ 976
//
// futurePeople(3248, 6) ➞ 5408
//
// futurePeople(5240, 3) ➞ 6320

function futurePeople (populationNow, inMonthBirth){
    const allBirths = (inMonthBirth * 12) * 30
    console.log(populationNow + allBirths)
}

futurePeople(256, 2)
futurePeople(3248, 6)
futurePeople(5240, 3)

// --- 19 uzd. ---
console.log("_____ 19 uzd. _____")

// Given a string, return true if its length is even or false if the length is odd.
//
//     Examples
// oddOrEven("apples") ➞ true
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.
//
// oddOrEven("pears") ➞ false
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.
//
// oddOrEven("cherry") ➞ true

function oddOrEven (string){
    console.log(string.length % 2 === 0)
}

oddOrEven("apples")
oddOrEven("pears")
oddOrEven("cherry")

// --- 20 uzd. ---
console.log("_____ 20 uzd. _____")

// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
//
//     Examples
// inchesToFeet(324) ➞ 27
//
// inchesToFeet(12) ➞ 1
//
// inchesToFeet(36) ➞ 3

function inchesToFeet (num){
    console.log(num / 12)
}

inchesToFeet(324)
inchesToFeet(12)
inchesToFeet(36)

// --- 21 uzd. ---
console.log("_____ 21 uzd. _____")

// have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
//
// n is the number of square meters I can paint.
//     w and h are the widths and heights of a single wall in meters.
//     Examples
// howManyWalls(100, 4, 5) ➞ 5
//
// howManyWalls(10, 15, 12) ➞ 0
//
// howManyWalls(41, 3, 6) ➞ 2

function howManyWalls (metersCanPaint, width, height){
    console.log(Math.round(metersCanPaint / (width * height)))

    /*** *** .toFixed() *** skliausteliuose rasoma kiek skaiciu po kablelio turi but ***/
}

howManyWalls(100, 4, 5)
howManyWalls(10, 15, 12)
howManyWalls(41, 3, 6)

// --- 22 uzd. ---
console.log("_____ 22 uzd. _____")

// I'd like to calculate how long on average I've lived in a single house.
//
//     Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.
//
// Examples
// yearsInOneHouse(30, 1) ➞ 15
//
// yearsInOneHouse(15, 2) ➞ 5
//
// yearsInOneHouse(80, 0) ➞ 80

function yearsInOneHouse (personAge, movedTimes){
    console.log(personAge / (movedTimes + 1))
}

yearsInOneHouse(30, 1)
yearsInOneHouse(15, 2)
yearsInOneHouse(80, 0)

// --- 23 uzd. ---
console.log("_____ 23 uzd. _____")

// Create a function that takes a word and returns the new word without including the first character.
//
//     Examples
// newWord("apple") ➞ "pple"
//
// newWord("cherry") ➞ "herry"
//
// newWord("plum") ➞ "lum"

// transform string to array, remove first element, and transform array back to string

function newWord (word){
    let arr = [...word]  /*** Array.from(word) ***/
    arr.shift()
    arr = arr.join('')
    console.log(arr)
}

newWord("apple")
newWord("cherry")
newWord("plum")

