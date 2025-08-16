const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())


// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))  -> converts to seconds


let newDate = new Date()
// console.log(newDate.getMonth()+1)    //  In single value month started with 0.
// console.log(newDate.getDay())

// newDate.toLocaleString('dafault',{
//     // weekday: "long",  -> MON , MONDAY, .. 
// })