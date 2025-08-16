/*
On the basis of how to store data in memory or access.
*/


// Primitive - call by Value

// 7types : String , number , boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) 


// Reference Type (Non-Primitive) - call by Reference

// Arrays , Object , Function

const heros = ["Batman","Superman","IronMan"];

let myObj = {
    name: "Chetan",
    age: 21,
}

const myFunction = function(){
    console.log("hello World");
    
}


// console.log(typeof(score))
// console.log(typeof(scoreValue))
// console.log(typeof(isLoggedIn))
// console.log(typeof(outsideTemp))
// console.log(typeof(userEmail))
// console.log(typeof(heros))
// console.log(typeof(myObj))
// console.log(typeof(myFunction))


// number => number
// boolean => boolean
// null => Object
// undefined => undefined
// object => object
// array => array
// function => function | function object




//  ********************************************************


// Stack(primitive) - Copy of variable 
// Heap(non-primitive) - reference of variable

let Personname = "Chetan"
let anotherName = Personname

anotherName = "Sharma"

// console.log(Personname);
// console.log(anotherName);


const userOne = {
    email: "chetan@gmail.com",
    upi: "chetan@ibl"
}

const userTwo = userOne

userTwo.email = "Sharma@gmail.com"

// console.log(userTwo.email);
// console.log(userOne.email);





