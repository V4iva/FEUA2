// --- 1 uzd. ---
console.log("_____ 1 uzd. _____")

// Create a function that accepts an array and returns the last item in the array.
//
//     Examples
// getLastItem([1, 2, 3]) ➞ 3
//
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
//
// getLastItem([true, false, true]) ➞ true

function getLastItem (array){
    console.log(array[array.length-1])
}

getLastItem([1, 2, 3])
getLastItem(["cat", "dog", "duck"])
getLastItem([true, false, true])

// --- 2 uzd. ---
console.log("_____ 2 uzd. _____")

// Create a function to concatenate two integer arrays.
//
//     Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

function concat(arr1, arr2){
    console.log(arr1.concat(arr2)) /*** console.log ( [...arr1, ...arr2])***/
}

concat([1, 3, 5], [2, 6, 8])
concat([7, 8], [10, 9, 1, 1, 2])
concat([4, 5, 1], [3, 3, 3, 3, 3])

// --- 3 uzd. ---
console.log("_____ 3 uzd. _____")

// Create a function that takes an array of numbers or letters and returns a string.
//
//     Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
//
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
//
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString (arr){
    console.log(arr.join(''))
}

arrayToString([1, 2, 3, 4, 5, 6])
arrayToString(["a", "b", "c", "d", "e", "f"])
arrayToString([1, 2, 3, "a", "s", "dAAAA"])

// --- 4 uzd. ---
console.log("_____ 4 uzd. _____")

// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
//
//     Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
//
// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
//
// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

function halfQuarterEighth (num){
    console.log([(num/2), (num/4), (num/8)])
}

halfQuarterEighth(6)
halfQuarterEighth(22)
halfQuarterEighth(25)

// --- 5 uzd. ---
console.log("_____ 5 uzd. _____")

// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.
//
//     function isOdd(num){
//     ret n % 19 += 123;
// }
// Examples
// isOdd(-5) ➞ true
//
// isOdd(25) ➞ true
//
// isOdd(0) ➞ false

function isOdd (num){
    console.log(!num % 2 === 0)
}

isOdd(-5)
isOdd(25)
isOdd(0)

// --- 6 uzd. ---
console.log("_____ 6 uzd. _____")

// The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.
//
//     The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//
// Examples
// getContainer("Bread") ➞ "bag"
//
// getContainer("Beer") ➞ "bottle"
//
// getContainer("Candy") ➞ "plastic"
//
// getContainer("Cheese") ➞ null

function getContainer (food){
    if (food === "Bread"){
        console.log("bag")
    } else if (food === "Beer" , "Milk"){
        console.log("bottle")
    } else if (food === "Cerials"){
        console.log("box")
    }else if (food === "Eggs"){
        console.log("carton")
    } else {
        console.log(null)
    }
}

getContainer("Bread")
getContainer("Beer")
getContainer("Candy")
getContainer("Cheese")


// --- 7 uzd. ---
console.log("_____ 7 uzd. _____")

// Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.
//
// Look at the examples below to get an idea of what the function should do:
//
//     Examples
// basicCalculator(2, '+',  4) ➞ 6
//
// basicCalculator(6, '-', 5) ➞ 1
//
// basicCalculator(12, '/', 3) ➞ 4
//
// basicCalculator(3, '*', 4) ➞ 12
//
// basicCalculator(1, '/', 0) ➞ null
// // Division by zero is not possible
//
// basicCalculator(1, 'x', 0) ➞ null
// // 'x' is not an operator

function basicCalculator (num1, operator, num2){
   if (operator === '+'){
       console.log(num1 + num2)
   } else if (operator === '-'){
       console.log(num1 - num2)
   } else if (operator === '/' ) {
       console.log(num1 / num2)
   } else if (operator === '*') {
       console.log(num1 * num2)
   } else if (operator === '/' && num2 === 0 ){
       console.log(null)
   }else {
       console.log(null)
   }

   /*** if( operator === '+' ) console.log( num1 + num2 )
    *   if( operator === '-' ) console.log( num1 - num2 )
    *   if( operator === '/' && ) console.log( num1 / num2 )
    *   if( operator === '*' ) console.log( num1 * num2 )
    ***/
}

basicCalculator(2, '+',  4)
basicCalculator(6, '-', 5)
basicCalculator(12, '/', 3)
basicCalculator(3, '*', 4)
basicCalculator(1, '/', 0)
basicCalculator(1, 'x', 0)

// --- 8 uzd. ---
console.log("_____ 8 uzd. _____")

// Here is a trainwreck of a photo:
//
//     You FAILEDPASSED the Exam Required mark is 85% Your score 85%
//
// The challenge is to fix all of the bugs in this incredibly messy code, which the code in the image might've actually looked like (probably not)! The code given will output the same middle two lines as in the image shown above.
//
// First parameter is the user's score.
// Second parameter is the required score.
//     Examples
// gradePercentage("85%", "85%") ➞ "You PASSED the Exam"
//
// gradePercentage("99%", "85%") ➞ "You PASSED the Exam"
//
// gradePercentage("65%", "90%") ➞ "You FAILED the Exam"
function gradePercentage (userScore, requiredScore){
    userScore = userScore.replace('%', '')
    requiredScore = requiredScore.replace('%', '')

    userScore = Number(userScore)
    requiredScore = Number(requiredScore)

    if (userScore >= requiredScore){
        console.log("You PASSED the Exam")
    } else {
        console.log("You FAILED the Exam")
    }
}

gradePercentage("85%", "85%")
gradePercentage("99%", "85%")
gradePercentage("65%", "90%")

// --- 9 uzd. ---
console.log("_____ 9 uzd. _____")

// Create a function that returns a number, based on the string provided. Here is a list of all digits:
//
//     String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0

// Examples
// word("one") ➞ 1
//
// word("two") ➞ 2
//
// word("nine") ➞ 9

function word (numWord){
    if (numWord === "one") console.log(1)
    if (numWord === "two") console.log(2)
    if (numWord === "nine") console.log(9)
}
word("one")
word("two")
word("nine")


// --- 10 uzd. ---
console.log("_____ 10 uzd. _____")

// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//
//     Create a function that returns the opposite of the given boolean, as a number.
//
//     Examples
// flipBool(true) ➞ 0
//
// flipBool(false) ➞ 1
//
// flipBool(1) ➞ 0
//
// flipBool(0) ➞ 1

function flipBool (sentence){
    if (sentence === true || sentence > 0) console.log(0)
    if (sentence === false || sentence <= 0) console.log(1)
}

flipBool(true)
flipBool(false)
flipBool(1)
flipBool(0)

// --- 11 uzd. ---
console.log("_____ 11 uzd. _____")

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
//
//     Examples
// isLastCharacterN("Aiden") ➞ true
//
// isLastCharacterN("Piet") ➞ false
//
// isLastCharacterN("Bert") ➞ false
//
// isLastCharacterN("Dean") ➞ true

function isLastCharacterN (sentence){
    if (sentence[sentence.length-1] === 'n') {
        console.log(true)
    } else {
        console.log(false)
    }
}

isLastCharacterN("Aiden")
isLastCharacterN("Piet")
isLastCharacterN("Bert")
isLastCharacterN("Dean")

// --- 12 uzd. ---
console.log("_____ 12 uzd. _____")

// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
//
//     Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."
//
// relationToLuke("Leia") ➞ "Luke, I am your sister."
//
// relationToLuke("Han") ➞ "Luke, I am your brother in law."

function relationToLuke (name){
    if (name === "Darth Vader") console.log("Luke, I am your father.")
    if (name === "Leia") console.log("Luke, I am your sister.")
    if (name === "Han") console.log("Luke, I am your brother in law.")
}

relationToLuke("Darth Vader")
relationToLuke("Leia")
relationToLuke("Han")


// --- 13 uzd. ---
console.log("_____ 13 uzd. _____")

// Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".
//
//     Examples
// fifth(1, 2, 3, 4, 5) ➞ "number"
//
// fifth("a", 2, 3, true, "five") ➞ "string"
//
// fifth() ➞ "Not enough arguments"

function fifth (one, two, three, four, five){
    /*** console.log(typeof) ***/

    if (five >=0 ) console.log("Number")
    if (typeof five === 'string') console.log("String")
    if (!five) console.log("Not enough arguments") /*** if(arguments.lenght < 5) console.log ( "Not enough arguments" ) ***/
}

fifth(1, 2, 3, 4, 5)
fifth("a", 2, 3, true, "five")
fifth()

// --- 14 uzd. ---
console.log("_____ 14 uzd. _____")

// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
//
//     Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.
//
// Examples
// journeyDistance(3) ➞ 1
// // The first kilometer costs $3
//
// journeyDistance(9) ➞ 4
// // The first kilometer costs $3 plus the other three kilometers (costing $2 each)
//
// journeyDistance(5) ➞ 2

function journeyDistance (moneyHave){
    moneyHave -= 3
    moneyHave = (moneyHave / 2) +1
    console.log(moneyHave)
}

journeyDistance(3)
journeyDistance(9)
journeyDistance(5)

// --- 15 uzd. ---
console.log("_____ 15 uzd. _____")

// Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.
//
//     Examples
// damage(40, 5, "second") ➞ 200
//
// damage(100, 1, "minute") ➞ 6000
//
// damage(2, 100, "hour") ➞ 720000

function damage (dmg, speed, count){
    let times = speed
    if (count === "second") times *= 1
    if (count === "minute") times *= 60
    if (count === "hour") times *= 360

    console.log(dmg * times)
}

damage(40, 5, "second")
damage(100, 1, "minute")
damage(2, 100, "hour")

// --- 16 uzd. ---
console.log("_____ 16 uzd. _____")

// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.
//
//     Examples
// isBoiling("212F") ➞ true
//
// isBoiling("100C") ➞ true
//
// isBoiling("0F") ➞ false

function isBoiling (temp){

    if (temp.includes("F")){
        temp = temp.replace('F', '')
        temp = Number(temp)
        if (temp >= 212) console.log(true)
    } else {
        console.log(false)
    }

    if (temp.includes("C")) {
        temp = temp.replace('C', '')
        temp = Number(temp)
        if (temp >= 100) console.log(true)
    } else {
        console.log(false)
    }
}

isBoiling("212F")
isBoiling("100C")
isBoiling("0F")

