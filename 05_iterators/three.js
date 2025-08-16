// const coding = ["js","ruby","java","python","cpp"]

// // const value = coding.forEach( (item)=>{
// //     // console.log(item)
// // } )

// // console.log(value) // undefined
// // foreach not return anything....


// const myNum = [1,2,3,4,5,6,7,8,9,10]
// // // const newNum = myNum.filter( (num) => num > 4 )
// // const newNum = myNum.filter( (num) => {
// //     return num > 4 
// // })
// // console.log(newNum)

// const newNum =[]
// myNum.forEach( (num) => {
//     if(num>4){
//         newNum.push(num)
//     }
// } )

// // console.log(newNum)



// chaining....

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num>40)
console.log(newNum)
