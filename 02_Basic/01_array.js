const arr = [0,1,2,3,4,5]   // array creates shallow copy (changes copy as well as original)

const arr2 = new Array(3,2,5,6,2,9)
// console.log(arr[3])


// arr.push(44)
// console.log(arr)
// arr.pop()
// console.log(arr);

// arr.unshift(90)   to add value in begining of an array  
// console.log(arr)

// arr.shift()  to remove first element from an array 
// console.log(arr)


// console.log(arr.indexOf(54))
// console.log(arr.includes(33))

const newArr = arr.join()  // convert array to string
// console.log(newArr)
// console.log(typeof newArr)


// slice splice
// slice do not manipulate original array
// splice manipulate original array

// A [0,1,2,3,4,5]
// [1,2]
// B [0,1,2,3,4,5]
// C [0,4,5]

console.log("A" ,arr)
const mynarr = arr.slice(1,3)
console.log(mynarr);
console.log("B" ,arr);
const mynarr1 = arr.splice(1,3)
console.log(mynarr1);
console.log("C" ,arr);




