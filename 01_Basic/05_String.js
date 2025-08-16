const name = "Chetan"
const repoCount = 50


// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name + repoCount + " Value")  
// string interpolation - String interpolation in JavaScript allows you to embed variables and expressions inside a string using template literals.
// syntax - Use backticks (`) instead of quotes and insert variables with ${}.
// console.log(`My name is  ${name} and my repo count is ${repoCount} value`);

const gameName = new String('Chetan-Rc-com')

// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())


// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))


const newString = gameName.substring(2,4)  
// console.log(newString)

const anotherString = gameName.slice(-6,5)
// console.log(anotherString)

const newStringOne = "    Chetan    "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://chetan.com/chetan%20Sharma";
// console.log(url.replace('%20','-'))

// console.log(url.includes('Hitesh'))

console.log(gameName.split('-'))