// --- 1 uzd. ---
console.log("_____ 1 uzd. _____")

const arr = [
    "some",
    "more",
    "words",
    "here",
    "to",
    "count"
]

// iterate through items in array and log:
// length if each item
console.log("LENGTH")
for (let item of arr){
    console.log(item.length)
}

// first letter of each item
console.log("FIRST LETTER")
for (let item of arr){
    console.log(item[0])
}

// last letter of each item
console.log("LAST LETTER")
for (let item of arr){
    console.log(item[item.length-1])
}

// item in upperCase
console.log("TO UpperCase")
for (let item of arr){
    console.log(item.toUpperCase())
}


// --- 2 uzd. ---
console.log("_____ 2 uzd. _____")

// Create a function that takes an array and returns the types of values (data types) in a new array.
//
// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]
//
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
//
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes (arr){
    let emptyArr = []
    for (let item of arr ){
        emptyArr.push(typeof item)
    }
    console.log(emptyArr)
}

arrayValuesTypes([1, 2, "null", []])
arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])

// --- 3 uzd. ---
console.log("_____ 3 uzd. _____")

// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
//
//     Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
//
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
//
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr){
    let emptyArr = []
    for (let item of arr ){
        if (typeof item === "number" ){
            emptyArr.push(item)
        }
    }
    console.log(emptyArr)
}

filterArray([1, 2, 3, "a", "b", 4])
filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])
filterArray(["Nothing", "here"])

// --- 4 uzd. ---
console.log("_____ 4 uzd. _____")

// Create a function that takes an array and a string as arguments and returns the index of the string.
//
//     Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
//
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
//
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
//
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function findIndex (arr, find){
    for (let index in arr){
        if (arr[index] === find)
            console.log(index)
    }
}

findIndex(["hi", "edabit", "fgh", "abc"], "fgh")
findIndex(["Red", "blue", "Blue", "Green"], "blue")
findIndex(["a", "g", "y", "d"], "d")
findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")


// --- 5 uzd. ---
console.log("_____ 5 uzd. _____")

// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
//
// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
//
// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
//
// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

function  addIndexes (arr){
    let empty = []
    for (let index in arr){
        empty.push(arr[index]+Number(index))
    }
    console.log(empty)
}

addIndexes([0, 0, 0, 0, 0])
addIndexes([1, 2, 3, 4, 5])
addIndexes([5, 4, 3, 2, 1])


// --- 6 uzd. ---
console.log("_____ 6 uzd. _____")

// Given an integer n. Your task is to find how many digits this integer contains without using String or Array methods!
//
//     Examples
// sumDigits(100) ➞ 3
//
// sumDigits(1000) ➞ 4
//
// sumDigits(1) ➞ 1

function sumDigits (num){
    console.log(num.toString().length) /*** console.log((num + "").length) ***/
}

sumDigits(100)
sumDigits(1000)
sumDigits(1)

// --- 7 uzd. ---
console.log("_____ 7 uzd. _____")

// Create a function that takes an array of numbers. Return the largest number in the array.
//
//     Examples
// findLargestNum([4, 5, 1, 3]) ➞ 5
//
// findLargestNum([300, 200, 600, 150]) ➞ 600
//
// findLargestNum([1000, 1001, 857, 1]) ➞ 1001

function findLargestNum (arr){
    console.log(Math.max(...arr))

    /***
     let num = 0
     for (let index in arr ) {
     if (arr[index]>num) num = arr[index]
     }
     console.log(num)
     }
     ***/
}

findLargestNum([4, 5, 1, 3])
findLargestNum([300, 200, 600, 150])
findLargestNum([1000, 1001, 857, 1])

// --- 8 uzd. ---
console.log("_____ 8 uzd. _____")

// Hamming distance is the number of characters that differ between two strings.
//
//     To illustrate:
//
//     String1: "abcbba"
// String2: "abcbda"
//
// Hamming Distance: 1 - "b" vs. "d" is the only difference.
//     Create a function that computes the hamming distance between two strings.
//
//     Examples
// hammingDistance("abcde", "bcdef") ➞ 5
//
// hammingDistance("abcde", "abcde") ➞ 0
//
// hammingDistance("strong", "strung") ➞ 1

function hammingDistance (str1, str2){
    let counter = 0
    for (const index in str1) {
        if (str1[index] !== str2[index]){
            counter++
        }
    }
    console.log(counter)
}

hammingDistance("abcde", "bcdef")
hammingDistance("abcde", "abcde")
hammingDistance("strong", "strung")


// --- 9 uzd. ---
console.log("_____ 9 uzd. _____")

// Given a letter and an array of words, return whether the letter does not appear in any of the words.
//
// Notes
// All inputs given will be in lowercase.
//     You will always be given a forbidden letter, but there may be empty arrays.

//     Examples
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
//
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
//
// forbiddenLetter("m", []) ➞ true

function forbiddenLetter (letter, arr){

    for (const index in arr) {
        let result = true
        if (arr[index].includes(letter)) result = false
        console.log(result)
    }

}

forbiddenLetter("r", ["rock", "paper", "scissors"])
forbiddenLetter("a", ["spoon", "fork", "knife"])
forbiddenLetter("m", [])
