const user = {
    username: "Chetan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)
        // console.log(this) // gives the context of user scope
    }
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this) // returns a empty curly parenthesis means empty object in node while in browser it gives window as a global scope.

// function chai(){
//     const username = "Chetan"
//     console.log(this.username) // undefined
// }
// chai()

// const chai = function (){
//     const username = "Chetan"
//     console.log(this.username)   //  undefined
// }

// Arrow function....
const chai =  () => {
    const username = "Chetan"
    // console.log(this.username) // undefined
    console.log(this) // empty object {}
}
// chai()


// const code = (num1,num2) => {
//     return num1 + num2
// }
// implicit arrow function..
// const code = (num1,num2) =>  (num1 + num2)
// console.log(code(3,4))

const code = (num1,num2) =>  ({username: "Chetan"})
console.log(code())