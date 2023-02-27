"use strict";
let myNum = 17;
let myStr = 'sdjsdjjs';
let myBool = false;
let myNumArr = [5, 5, 8, 9];
let myStrArr = ['sfsaf', 'adadsa', 'saads'];
myBool = true;
myNum = 66454;
myStr = '';
myNumArr = [4, 5, 6];
myStrArr = ['asa', 'dsa', 'asd'];
const bigUser = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": true,
    "image": "https://robohash.org/hicveldicta.png",
    "bloodGroup": "A−",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "hair": [
        "Black",
        "red",
        "blue"
    ],
    "domain": "slashdot.org",
    "ip": ["str", "str", "srt"],
    "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
            "lat": 38.867033,
            "lng": -76.979235
        },
        "postalCode": [1, 3, 4, 5],
        "state": true
    },
    "macAddress": false,
    "university": "Capitol University",
    "company": {
        "address": {
            "address": "629 Debbie Drive",
            "city": "Nashville",
            "coordinates": {
                "lat": 36.208114,
                "lng": -86.58621199999999
            },
            "postalCode": "37076",
            "state": "TN"
        }
    }
};
function saySome(word, num) {
    return word + num;
}
function saySomeTwo(word, word2, arr) {
    arr.push(word, word2);
    console.log(arr);
}
//  UŽDUOTIS
function createFunction(num, arr) {
    for (let i = 0; i < 100; i++) {
        arr.push(num);
    }
    return arr;
}
let userObj = {
    name: "Edita",
    age: 15,
    height: 156,
    hasCat: true,
    city: "kaunas",
    hobbies: ['tenisas', 'saskes', 'motociklai'],
    address: {
        phone: 64646456456,
        street: 'labanadienio k. '
    },
    some: ["kazkas", 465, true]
};
function userObjFunc(usr) {
    usr.age = 46;
    usr.height = 185;
    usr.hasCat = false;
    usr.city = "Vilnius";
    usr.address.phone = 4646731522;
    usr.address.street = "kazkur kazkas";
    usr.some = ["asdsafsaf", 56464, false];
    return userObj;
}
console.log(userObjFunc(userObj));
//// Find the Smallest and Biggest Numbers
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log(min, max);
}
minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1]);
/// Largest Swap
function largestSwap(num) {
    const str = num.toString();
    const swap = Number(str[1] + str[0]);
    return num >= swap;
    console.log(num >= swap);
}
largestSwap(14);
largestSwap(53);
largestSwap(99);
/// What's Hiding Amongst the Crowd?
function detectWord(txt) {
    let remove = txt.replace(/[^a-z]/g, '');
    console.log(remove);
}
detectWord("UcUNFYGaFYFYGtNUH");
detectWord("bEEFGBuFBRrHgUHlNFYaYr");
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");
