//  comparing same data type

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);



//  comparing diff data type 

console.log("02" > 1)
console.log("2" > 1)


//  not gives predictable result
console.log(null > 0)   // Comparison Operator              // Equality and Comparison Operator both work differently.
console.log(null == 0)   // Equality Check                  // comparisons convert null to a number, treating it as 0.
console.log(null >= 0)  // Comparison Operator              // that's why null >= 0 is true and null > 0 is false.

// console.log(undefined == 0)  false
// console.log(undefined > 0)   false
// console.log(undefined < 0)   false


// === 
console.log("2"===2)