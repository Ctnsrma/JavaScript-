function sayMyName(){
    console.log("C")
    console.log("H")
    console.log("E")
    console.log("T")
    console.log("A")
    console.log("N")
}

// sayMyName -> function referenece
// sayMyName() -> function execution

// function addTwwoNumber(number1, number2){       // Parameter
//     console.log(number1 + number2)
// }
function addTwwoNumber(number1, number2){       // Parameter
    // const result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwwoNumber(3,4)        // Argument 
// console.log("Result : ", result)



// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Chetan"));
// console.log(loginUserMessage());     undefined just logged in

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter name")
//         return
//     }
//     return `${username} just logged in`
// }

// const message = loginUserMessage()
// console.log(message)


// function loginUserMessage(username="Sam"){
//     if(!username){
//         console.log("Please Enter name")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())



// function calculateCartPrice(...num1){  // rest operator
//     return num1
// }
function calculateCartPrice(val1,val2,...num1){  // rest operator
    return num1
}

// console.log(calculateCartPrice(20,40,20,50,31,200));

const user = {
    username: "Chetan",
    price: 299
}
function handleObject(anybject){
    console.log(`Username is ${anybject.username} and price is ${anybject.price}`);
}

// handleObject(user)
// direct pass object as argument...
// handleObject({
//     username: "Chetan",
//     price: 300
// })


const newArray = [100,200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([100,500,800,900]))