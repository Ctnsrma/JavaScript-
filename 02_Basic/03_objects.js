// to declare object we have to methods - literals and constructor

//  constructor - singleton
// Object.create (constructor way)


//  literals way - not singleton(multiple)

const mySym = Symbol("Key1")

const jsUser = {
    name: "Chetan",
    "full name": "chetan sharma",
    age: 21,
    [mySym]: "MyKey1",
    location: "India",
    email: "Chetan@gmail.com",
    isLoggedIn: false,
    loggedInDays: ["Monday","Sunday"]
} 


// console.log(jsUser.email)
// console.log(jsUser["email"])

// console.log(jsUser["full name"])

// console.log(jsUser[mySym]);



// jsUser.email = "chetan@chatgpt.com"
// console.log(jsUser);

// Object.freeze(jsUser)   // to lock object so that no other can change it further
// jsUser.email = "chetan@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Everyone");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}` );  // using this to access object attribute
}

console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())
