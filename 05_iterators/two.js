// for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     // console.log(num)
// }


// const greeting = "Hello World!"
// for(const greet of greeting){
//     console.log(greet)
// }


// Maps - maps object are collection of key value pair keys are unique

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

// for(const [key,value] of map){
//     console.log(key, ':- ',value)
// }


const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for(const [key,value] of myObj){
//     console.log(key, ':- ', value)    // not iterable
// }


// For in    ->   extracting keys of an object, in array it return index values[0,1,2,3,4....]

const newObj = {
    js: "Javascript",
    cpp: "c++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for(const key in newObj){
    // console.log(`${key} shortcut for ${newObj[key]}`)
}




// ForEach


const newArr = ["cpp","js","java","py"]
// newArr.forEach(function (val) { // callback function- function name is not assigned
//     console.log(val)
// })

// newArr.forEach((val)=>{
//     console.log(val)
// })

// function printMe(item){
//     console.log(item)
// }

// newArr.forEach(printMe)  // give reference(printMe) of function only not execution (printMe())


// newArr.forEach((val,index,arr) => {
//     console.log(val,index,arr)
// })



const codingArr = [
    {
        programmingName: "Python",
        programmingFileName: "py"
    },
    {
        programmingName: "Java",
        programmingFileName: "java"
    },
    {
        programmingName: "Javascript",
        programmingFileName: "js"
    },
]


codingArr.forEach((items)=>{
    console.log(items.programmingName)
})