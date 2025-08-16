const score = 100
// console.log(score)

const newNumber  = new Number(100)
// console.log(newNumber)

// console.log(newNumber.toString()) -> it make string 
// console.log(newNumber.toString().length)  -> you can use string 
// console.log(newNumber.toFixed(2)) -> 100.00

const otherNumber = new Number(29.8920)
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) -> by default it gives as US standard
// console.log(hundreds.toLocaleString('en-IN')) -> you can give your language as a parameter.


// ********************************* Maths *************************************

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(2.2))   // Top of Value
// console.log(Math.floor(4.9))  // Bottom of Value

// console.log(Math.max(4,2,6,1,9,30))
// console.log(Math.min(4,2,6,1,9,30))


// console.log(Math.random())   // 0-1
// console.log((Math.random()*10)+1)
// console.log(Math.floor((Math.random()*10)+1))


// const min = 10
// const max = 20
// console.log(Math.floor((Math.random()*(max- min + 1)))+ min)


const min = 100;
const max = 120;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)