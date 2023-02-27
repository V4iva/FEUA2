
let name = "Vaiva";
let num3 = 55;
let bln = false;
let arr10 = [4, 5, 6, 7, "abc"];
let obj = {
    name: "Vaiva",
    surname: "Dobro... ",
    age: 27
};
const surname1 = "Dobrovol...";



let myName = "Vaiva";
let mySurname = "Dobrovolskyte";
let city = "Vilnius";
let age = 27;

console.log("Mano vardas "+ myName + ", pavarde " +mySurname + ". Gyvenu mieste pavadinimu: "+ city + ". Man yra " + age + " metai." );


console.log(myName[0])

const task = "sd4fTm6nOsaosnd$358"

console.log(task[4]+task[11]+task[5]+task[10]+task[0]+task[18]+task[2])
console.log(task.length)
console.log(task[task.length-1])

// add all of len variables, count their length.
// create one more variable and console log all so result would be "total length is: ___"
let len1 = "sdfsdf"
let len2 = "356456"
let len3 = "45645"
let total = len1.length + len2.length + len3.length

console.log("total length is: " + total)


/// Uzduotis

const amountOfShoes = 2
const leftShoe = "blue"
const rightShoe = "yellow"

const task1 = `i have ${amountOfShoes} shoes, one is ${leftShoe} other is ${rightShoe}.`

console.log(task1)

// make this:
// "length is tas1 is _ length is tas2 is _, first symbols of tas1 and tas2 is __,
// last symbols of tas1 and tas2 is __. tas1 length multiplied by tas2 is _"

const tas1 = "1234567890"
const tas2 = "abdefghijklmnoprstvuz"

let answ = `length is tas1 is ${tas1.length} length is tas2 is ${tas2.length}, first symbols of tas1 and tas2 is ${tas1[0] + ', ' + tas2[0]}`
console.log(answ)
let answ2 = `last symbols of tas1 and tas2 is ${tas1[tas1.length-1] + ', ' + tas2[tas2.length-1]}. tas1 length multiplied by tas2 is ${tas1.length*tas2.length}`
console.log(answ2)


// multiply first element by last element
// take 83 and divide it by 22 (both from arr)
// take each of nums from arr and add arr length to them
const arr1 = [1, 4, 6, 83, 46, 22]

console.log(arr1[0]*arr1[arr1.length-1])
console.log(arr1[3]/arr1[5])
console.log((arr1[0]+arr1.length)+','+(arr1[1]+arr1.length)+','+(arr1[2]+arr1.length)+','+(arr1[3]+arr1.length)+','+(arr1[4]+arr1.length)+','+(arr1[5]+arr1.length))
console.log(
    arr1[0]+arr1.length,
    arr1[1]+arr1.length,
    arr1[2]+arr1.length,
    arr1[3]+arr1.length,
    arr1[4]+arr1.length,
    arr1[5]+arr1.length,
)


// "LABAS7765"
const arr = [
    "hbLasBAsdS",
    "1234567890"
]

console.log(arr[0][2]+arr[0][6]+arr[0][5]+arr[0][6]+arr[0][9]+arr[1][6]+arr[1][6]+arr[1][5]+arr[1][4])

const word = arr[0][2]+arr[0][6]+arr[0][5]+arr[0][6]+arr[0][arr[0].length-1]
const num = arr[1][6]+arr[1][6]+arr[1][5]+arr[1][4]
console.log(word+num)


// console log result should be: "vejas man pasake tavo varda, bet taves surasti as negaliu"

const arr2 = [["as", "vejas"], "man", [46, 67, ["pasake"]], 'tavo', 57, "varda"  ]
const word1 = "bet taves surasti as negaliu"

console.log(arr2[0][1]+' ' +arr2[1]+' '+arr2[2][2][0]+' '+arr2[3]+' '+arr2[5]+' '+word1)
console.log(arr2[0][1],arr2[1],arr2[2][2][0],arr2[3],arr2[5],word1)

//1. get all numbers and sum then up
//2. get all words and sum their length up
//3. create result with "Vilnius ir Kaunas yre miestai is lietuvos" (takes some words from arr)
//4. log first letters of both cities
const arr3 = [
    45,
    78,
    ["Vilnius", "Kaunas"],
    "sldkns",
    [
        67,
        43,
        ["miestai"]
    ]
]
//1.
console.log(arr3[0],arr3[1],arr3[4][0],arr3[4][1])
console.log(arr3[0]+arr3[1]+arr3[4][0]+arr3[4][1])

//2.
console.log(arr3[2][0],arr3[2][1],arr3[3],arr3[4][2][0])
console.log(arr3[2][0].length,arr3[2][1].length,arr3[3].length,arr3[4][2][0].length)
console.log(arr3[2][0].length+arr3[2][1].length+arr3[3].length+arr3[4][2][0].length)

//3.
console.log(arr3[2][0]+' ir '+arr3[2][1]+' yra '+arr3[4][2][0]+ 'is lietuvos')

//4.
console.log(arr3[2][0][0]+' '+arr3[2][1][0])