let myNum:number = 17
let myStr:string = 'sdjsdjjs'
let myBool:boolean = false
let myNumArr:number[] = [5, 5, 8, 9]
let myStrArr:string[] = ['sfsaf', 'adadsa', 'saads']

myBool= true
myNum = 66454
myStr = ''
myNumArr = [4, 5, 6]
myStrArr = ['asa', 'dsa', 'asd']

interface bigObjInterface {
    id: number,
    firstName: string,
    lastName:string,
    maidenName:string,
    age:number
    gender: string,
    email:string,
    phone: string,
    username: string,
    password: string | number,
    birthDate: boolean,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: string[],
    domain: string,
    ip: string[],
    address:{
        address: string,
        city: string,
        coordinates: {
            lat: number,
            lng: number,
        }
        postalCode: number[],
        state: boolean,
    },
    macAddress:boolean,
    university:string,
    company: {
        address: {
            address: string,
            city: string,
            coordinates: {
                lat: number,
                lng: number,
        },
        postalCode: string,
        state: string,
    }
}
}
const bigUser:bigObjInterface = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh", // string or number
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
    "ip": ["str", "str", "srt"], //only strings
    "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
            "lat": 38.867033,
            "lng": -76.979235
        },
        "postalCode": [1,3,4,5], // numbers only
        "state":  true
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
}

function saySome (word:string, num:number):string{
    return word + num
}
function saySomeTwo (word:string, word2:string, arr:any[]):void{
    arr.push(word, word2)
    console.log(arr)
}

//  UŽDUOTIS
function createFunction (num:number, arr: number[]):number[]{
    for (let i = 0; i < 100; i++) {
        arr.push(num)
    }
    return arr
}


interface MyUserInterface {
    readonly name: string,
    age: number,
    height: number,
    hasCat?: boolean,
    city: string,
    readonly hobbies: string[],
    address: {
        phone: number,
        street: string
    },
    some: [string, number, boolean]
}
let userObj:MyUserInterface = {
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
}
function userObjFunc (usr:MyUserInterface):MyUserInterface{
    usr.age = 46
    usr.height = 185
    usr.hasCat = false
    usr.city = "Vilnius"
    usr.address.phone = 4646731522
    usr.address.street = "kazkur kazkas"
    usr.some = ["asdsafsaf", 56464, false]
    return userObj
}
console.log(userObjFunc(userObj))

//// Find the Smallest and Biggest Numbers
function minMax (arr: number[]){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    console.log(min, max)
}
minMax([1, 2, 3, 4, 5])
minMax([2334454, 5])
minMax([1])

/// Largest Swap
function largestSwap (num:number):boolean{
    const str = num.toString()
    const swap = Number(str[1]+str[0])

    return num >= swap
    console.log(num >= swap)
}

largestSwap(14)
largestSwap(53)
largestSwap(99)


/// What's Hiding Amongst the Crowd?
function detectWord (txt:string){
    let remove = txt.replace(/[^a-z]/g, '')
    console.log(remove)
}
detectWord("UcUNFYGaFYFYGtNUH")
detectWord("bEEFGBuFBRrHgUHlNFYaYr")
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")