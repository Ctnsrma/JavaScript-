// const tinderUser = new Object()  // singleton object 
const tinderUser = {} // non singleton

tinderUser.name = "Chetan"
tinderUser.id = 1
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    email: "Chetan@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Chetan",
            lastName: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName)
// console.log(regularUser.fullname?.userFullName.firstName) ->   ? -> chaining checks if fullname exists or not


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({} ,obj1,obj2,obj3)   // {} -> target , obj -> source
const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);



// array object coming from server
const users = [
    {
    id: 1,
        email: "some@gmail.com"
    },
    {
    id: 1,
        email: "some@gmail.com"
    },
    {
    id: 1,
        email: "some@gmail.com"
    },
]
// console.log(users[0].email);


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// ****************  destructuring ********************'

const course = {
    courseName: "Js in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course 
// console.log(courseInstructor);
// console.log(instructor)


// ***************  API Json ****************

// Values are coming from backend using API calling in the form of JSON


// JSON syntax 
// Object Format....
// {
//     "name": "Chetan",
//     "courseName": "Js in Hindi",
//     "price": "free"
// }

// Array format 
// [
//     {},
//     {},
//     {}
// ]

