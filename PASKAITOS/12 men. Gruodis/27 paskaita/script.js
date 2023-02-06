console.log("_____ 1 uzd. _____")

// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

// using regular for loop, make 1000 iterations, log each index of iteration

console.log("1000 NUMBERS")
function tousand (){
    const result = []

    for (let i = 0; i < 1000; i++) {
        result.push(i)
    }
    console.log(result)
}
tousand()

// create 50 iterations, add each iteration index to single variable (so you get sum of all indexes)

console.log("50 SUM")
function fifty (){

    let result = 0

    for (let i = 0; i < 50; i++) {
        result += i
    }
    console.log(result)
}

fifty()

// create array of 50 random numbers

console.log("RANDOM")
function random (){

    const result = []

    for (let i =0 ; i < 50; i++) {
        const rnd = Math.random()*100
        result.push(Math.round(rnd))
    }
    console.log(result)
}

random()


console.log("_____ 2 uzd. _____")

const words = [
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
    "abscdefg",
]

let counter = 0

for (let i = 0; i < words.length; i++) {
    console.log(words[i][counter])
    counter++
    if (counter === 3) counter = 0
}
// go through array, on each iteration log different letter from word
// first iteration letter index should be 0

// second iteration letter index 1
// third iteration letter index 2
// fourth iteration letter index 0 again
// max letter index is 2, when 2 is reached start from zero again


console.log("_____ 3 uzd. _____")

// Create a function which returns the length of a string, WITHOUT using String.length property.
//
//     Examples
// length("Hello World") ➞ 11
//
// length("Edabit") ➞ 6
//
// length("wash your hands!") ➞ 16

function length (str){

    let result = 0

    for (let i = 0; i < str.length ; i++) {
        result++
    }
    console.log(result)
}

length("Hello World")
length("Edabit")
length("wash your hands!")

console.log("_____ 4 uzd. _____")

// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
//
//     Examples
// addUpTo(3) ➞ 6
// // 1 + 2 + 3 = 6
//
// addUpTo(10) ➞ 55
// // 1 + 2 + 3 + ... + 10 = 55
//
// addUpTo(7) ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28

function addUpTo(num){

    let result = 0

    for (let i = 0; i <= num; i++) {
        result += i
    }
    console.log(result)
}

addUpTo(3)
addUpTo(10)
addUpTo(7)

console.log("_____ 5 uzd. _____")

// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
//
//     Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]
//
// integerBoolean("10") ➞ [true, false]
//
// integerBoolean("001") ➞ [false, false, true]

function integerBoolean (str){

    const newArr = []

    for (let i = 0; i <str.length; i++) {
        if (str[i] === "1"){
            newArr.push(true)
        } else {
            newArr.push(false)
        }
    }
    console.log(newArr)
}

integerBoolean("100101")
integerBoolean("10")
integerBoolean("001")


console.log("_____ 6 uzd. _____")

// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:
//
//     The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
//     Examples
// makeRug(3, 5) ➞ [
//     "#####",
//     "#####",
//     "#####"
// ]
//
// makeRug(3, 5, '$')  ➞ [
//     "$$$$$",
//     "$$$$$",
//     "$$$$$"
// ]
//
// makeRug(2, 2, 'A')  ➞ [
//     "AA",
//     "AA"
// ]

function makeRug (height, width, element = '#'){

/***    let result = new Array(height)

    for (let i = 0; i < height; i++) {
        result[i] = new Array(width);
    }

    for (let a = 0; a < width; a++) {
        for (let b = 0; b < height; b++) {
            result[b][a] = element;
        }
    }
    console.log(result)
***/
    const arr = []

    for (let i = 0; i < height; i++) {
        let str = ''

        for (let j = 0; j < width; j++) {
            if (element === undefined){
                str += '#'
            } else {
                str += element
            }
        }
        arr.push(str)
    }

    console.log(arr)
}

makeRug(3, 5)
makeRug(3, 5, '$')
makeRug(2, 2, 'A')


console.log("_____ 7 uzd. _____")

// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.
//
//     Examples
// sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
// ]) ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

function sumMinimums (arr){

    let count = 0

    for (let i = 0; i < arr.length; i++) {
        arr[i]= Math.min(...arr[i])
        count += arr[i]
    }
    console.log(count)
}

sumMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]])


console.log("_____ 8 uzd. _____")

// Given a string of letters, how many capital letters are there?
//
//     Examples
//     capitalLetters("fvLzpxmgXSDrobbgMVrc") ➞ 6
//
// capitalLetters("JMZWCneOTFLWYwBWxyFw") ➞ 14
//
// capitalLetters("mqeytbbjwqemcdrdsyvq") ➞ 0

function capitalLetters (str) {

    let uppercase = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") uppercase++;
    }
    console.log(uppercase)
}



capitalLetters("fvLzpxmgXSDrobbgMVrc")
capitalLetters("JMZWCneOTFLWYwBWxyFw")
capitalLetters("mqeytbbjwqemcdrdsyvq")

console.log("_____ 9 uzd. _____")

// Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.
//
//     Examples
// sumEvenNumsInRange(10, 20) ➞ 90
// // 10, 12, 14, 16, 18, 20
//
// sumEvenNumsInRange(51, 150) ➞ 5050
//
// sumEvenNumsInRange(63, 97) ➞ 1360

function sumEvenNumsInRange (num1, num2){

}

sumEvenNumsInRange(10, 20)
sumEvenNumsInRange(51, 150)
sumEvenNumsInRange(63, 97)

console.log("_____ 10 uzd. _____")

// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).
//
// Examples
// getSequence(1, 5) ➞ [1, 2, 3, 4, 5]
//
// getSequence(98, 100) ➞ [98, 99, 100]
//
// getSequence(1000, 1000) ➞ [1000]

function getSequence (num1, num2){

}

getSequence(1, 5)
getSequence(98, 100)
getSequence(1000, 1000)


console.log("_____ 11 uzd. _____")



console.log("_____ 12 uzd. _____")





console.log("_____ 13 uzd. _____")



console.log("_____ 14 uzd. _____")



console.log("_____ 15 uzd. _____")


