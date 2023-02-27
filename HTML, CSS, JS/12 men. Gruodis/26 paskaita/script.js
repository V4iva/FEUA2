// --- 1 uzd. ---
console.log("_____ 1 uzd. _____")

const arr = [2, 4, 5, 6, 7, 8, 5,5, 5, 7]


// using for loop, add all numbers from arr
console.log("ALL NUMBERS")

function addNumbers(){
    let result = 0

    for (const index in arr) {
        result += arr[index]
    }
    console.log(result)
}
addNumbers()

// using for loop, multiply each number by its neighbour on the right (2x4, 4x5, 5x6...)
///// if number is last, multiply it by zero
console.log("MULTIPLY NEIGBOUR")

function multi(){
    for (const index in arr) {

        /*** console.log(arr[index] * arr[Number(index +1)]) ***/

        const inx = Number(index)

        if (inx < arr.length-1){
            console.log(arr[inx] * arr[inx+1])
        } else {
            console.log(arr[inx] * 0)
        }
    }
}

multi()

// convert each number to string and add all of them to variable which will look like it "24567..."

console.log("ALL NUMBERS IN STRING")

let result = ""

for (const index in arr) {
    result += arr[index.toString()]
    // let array = arr[index].toString()
    // let toString = arr.join('')
    // console.log(toString)
}

console.log(result)

// to new array put all numbers which are divisible by 2
console.log("ARRAY DIVISIBLE OF 2")

function div () {
    const newArr = []

    for (const index in arr) {
        if (arr[index] % 2 === 0) {
            newArr.push(arr[index])
        }
    }
    console.log(newArr)
}

div()


// --- 2 uzd. ---
console.log("_____ 2 uzd. _____")

// You're in the midst of creating a typing game.
//
// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
//
// Inputs:
//     User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
//
// Output: [1, 1, -1, -1, 1]
// Examples
// correctStream(
//     ["it", "is", "find"],
//     ["it", "is", "fine"]
// ) ➞ [1, 1, -1]
//
// correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
// ) ➞ [1, -1, 1, 1, 1]

function correctStream (arr1, arr2){

    const newArr = []

    for (const index in arr1) {
        if (arr1[index] === arr2[index]){
            newArr.push(1)
        } else {
            newArr.push(-1)
        }
    }
    console.log(newArr)
}

correctStream(["it", "is", "find"],["it", "is", "fine"])
correctStream(["april", "showrs", "bring", "may", "flowers"],["april", "showers", "bring", "may", "flowers"])


// --- 3 uzd. ---
console.log("_____ 3 uzd. _____")

// Create a function that adds a string ending to each member in an array.
//
//     Examples
// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
//
// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]
//
// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]
 function addEnding (arr, end){

    const newArr = []

     for (const index in arr) {
         newArr.push(arr[index] + end)

     }
     console.log(newArr)
 }

addEnding(["clever", "meek", "hurried", "nice"], "ly")
addEnding(["new", "pander", "scoop"], "er")
addEnding(["bend", "sharpen", "mean"], "ing")


// --- 4 uzd. ---
console.log("_____ 4 uzd. _____")

// Create a function to multiply all of the values in an array by the amount of values in the given array.
//
//     Examples
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
//
// multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
//
// multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
//
// multiplyByLength([0]) ➞ ([0])

function multiplyByLength (arr){

    const newArr = []

    for (const index in arr) {
        newArr.push(arr[index]*arr.length)
    }
    console.log(newArr)
}

multiplyByLength([2, 3, 1, 0])
multiplyByLength([4, 1, 1])
multiplyByLength([1, 0, 3, 3, 7, 2, 1])
multiplyByLength([0])


/****************************** MAZIAUSIAS SKAICIUS ******************************/
/****************************** MAZIAUSIAS SKAICIUS ******************************/
// --- 5 uzd. ---
console.log("_____ 5 uzd. _____")

// Create a function that takes an array of numbers and returns the smallest number in the set.
//
//     Examples
// findSmallestNum([34, 15, 88, 2]) ➞ 2
//
// findSmallestNum([34, -345, -1, 100]) ➞ -345
//
// findSmallestNum([-76, 1.345, 1, 0]) ➞ -76
//
// findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999
//
// findSmallestNum([7, 7, 7]) ➞ 7

function findSmallestNum (arr){
    console.log(Math.min(...arr))
}

findSmallestNum([34, 15, 88, 2])
findSmallestNum([34, -345, -1, 100])
findSmallestNum([-76, 1.345, 1, 0])
findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])
findSmallestNum([7, 7, 7])

/****************************** ******************************/
/****************************** ******************************/
// --- 6 uzd. ---
console.log("_____ 6 uzd. _____")

// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
//
//     Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
//
// countdown(1) ➞ [1, 0]
//
// countdown(0) ➞ [0]

function countdown (num){
    const newArr = []

    for(let i = 0; i <= num; i++) {
        newArr.push(num - i)
    }
    console.log(newArr)
}

countdown(5)
countdown(1)
countdown(0)

/****************************** ******************************/
/****************************** ******************************/
// --- 7 uzd. ---
console.log("_____ 7 uzd. _____")

// Write a function that turns a comma-delimited list into an array of strings.
//
//     Examples
// toArray("watermelon, raspberry, orange")
// ➞ ["watermelon", "raspberry", "orange"]
//
// toArray("x1, x2, x3, x4, x5")
// ➞ ["x1", "x2", "x3", "x4", "x5"]
//
// toArray("a, b, c, d")
// ➞ ["a", "b", "c", "d"]
//
// toArray("")
// ➞ []

function toArray (str){
    let sntnc = str.split(" ")

    console.log(sntnc)
}

toArray("watermelon, raspberry, orange")
toArray("x1, x2, x3, x4, x5")
toArray("a, b, c, d")
toArray("")

/****************************** ******************************/
/****************************** ******************************/
// --- 8 uzd. ---
console.log("_____ 8 uzd. _____")

// In this exercise you will have to:
//
//     Take a list of names.
//     Add "Hello" to every name.
//     Make one big string with all greetings.
//     The solution should be one string with a comma in between every "Hello (Name)".
//
//     Examples
// greetPeople(["Joe"]) ➞ "Hello Joe"
//
// greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"
//
// greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"

function greetPeople (arr){
    const newArr = []

    for (const index in arr) {
        newArr.push(" Hello " + arr[index])
    }
    console.log(newArr.toString())
}

greetPeople(["Joe"])
greetPeople(["Angela", "Joe"])
greetPeople(["Frank", "Angela", "Joe"])


// --- 9 uzd. ---
console.log("_____ 9 uzd. _____")

// Write a function that takes an array of elements and returns only the integers.
//
//     Examples
// returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ➞ [9, 2, 16]
//
// returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ➞ [81, 123]
//
// returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ➞ [10, 56, 20, 3]
//
// returnOnlyInteger(["String",  true,  3.3,  1]) ➞ [1]

function returnOnlyInteger (arr){
    const result = []

    for (const index in arr) {
        if (typeof arr[index] === 'number'){
            result.push(arr[index])
        }
    }

    console.log(result)
}

returnOnlyInteger([9, 2, "space", "car", "lion", 16])
returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])
returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])
returnOnlyInteger(["String",  true,  3.3,  1])


// --- 10 uzd. ---
console.log("_____ 10 uzd. _____")

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
//
//     Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
//
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
//
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

function filterArray (arr){
    const result = []

    for (const index in arr) {
        if (typeof arr[index] === 'number'){
            result.push(arr[index])
        }
    }

    console.log(result)
}

filterArray([1, 2, "a", "b"])
filterArray([1, "a", "b", 0, 15])
filterArray([1, 2, "aasf", "1", "123", 123])

/****************************** REAPEAT LETTERS ******************************/
/****************************** REAPEAT LETTERS ******************************/
// --- 11 uzd. ---
console.log("_____ 11 uzd. _____")

// Create a function that repeats each character in a string n times.
//
//     Examples
// repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"
//
// repeat("hello", 3) ➞ "hhheeellllllooo"
//
// repeat("stop", 1) ➞ "stop"

function repeat (str, times){
    const result = []

    for (const index in str) {
        result.push(str[index].repeat(times))
    }

    console.log(result.toString().split(',').join(''))
}

repeat("mice", 5)
repeat("hello", 3)
repeat("stop", 1)

/****************************** ******************************/
/****************************** ******************************/
// --- 12 uzd. ---
console.log("_____ 12 uzd. _____")

// Create a function that filters out an array of state names into two categories based on the second parameter.
//
//     Abbreviations abb
// Full names full
// Examples
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
// ➞ ["CA", "NY"]
//
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
// ➞ ["Arizona", "Nevada"]
//
// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
// ➞ ["MT", "NJ", "TX", "ID", "IL"]
//
// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
// ➞ []

function filterStateNames (arr, name){

    const resultAbb = []
    const resultFull = []

    for (const index in arr) {
        if (name === "abb" && arr[index].length < 3) {
            resultAbb.push(arr[index])
        } else if (name === "full" && arr[index].length > 3){
            resultFull.push(arr[index])
        }
    }
    console.log(resultAbb, resultFull)
}

filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")


// --- 13 uzd. ---
console.log("_____ 13 uzd. _____")

// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
//
//     [1, 3, 3, 5, 5, 5]
// // original array
//
//     [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.
//
//     Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
//
// set([4, 4, 4, 4]) ➞ [4]
//
// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
//
// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]

function set (arr){

    const result = []

    for(i=0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
        console.log(result)
}

/*** function set (arr){
     const mySet = new Set()

    for (const index in arr) {
        mySet.add(arr[index])
    }

    const result = Array.from(mySet)

    console.log(result)
}
***/

set([1, 3, 3, 5, 5])
set([4, 4, 4, 4])
set([5, 7, 8, 9, 10, 15])
set([3, 3, 3, 2, 1])


// --- 14 uzd. ---
console.log("_____ 14 uzd. _____")



// --- 15 uzd. ---
console.log("_____ 15 uzd. _____")



// --- 16 uzd. ---
console.log("_____ 16 uzd. _____")



// --- 17 uzd. ---
console.log("_____ 17 uzd. _____")



// --- 18 uzd. ---
console.log("_____ 18 uzd. _____")



// --- 19 uzd. ---
console.log("_____ 19 uzd. _____")



// --- 20 uzd. ---
console.log("_____ 20 uzd. _____")



// --- 21 uzd. ---
console.log("_____ 21 uzd. _____")



// --- 22 uzd. ---
console.log("_____ 22 uzd. _____")



// --- 23 uzd. ---
console.log("_____ 23 uzd. _____")



// --- 24 uzd. ---
console.log("_____ 24 uzd. _____")