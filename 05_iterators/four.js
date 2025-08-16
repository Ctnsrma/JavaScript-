// reduce()

// const array1 = [1,2,3,4]
// const initialValue = 0
// const sumWithInitial = array1.reduce(
//     (accumulator,currentValue) => accumulator + currentValue,initialValue
// )


// const myNum = [1,2,3,4]
// // const total = myNum.reduce(
// //     function (acc,currVal) {
// //         return acc + currVal
// //     },0
// // )

// const total = myNum.reduce( (acc,curr) => acc+curr ,0)

// console.log(total)


const shoppingCat = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "data Science course",
        price: 1999
    },
]

const priceToPay = shoppingCat.reduce( (acc,item) => acc + item.price,0 )
console.log(priceToPay)