const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


// const all_new_heros = [...marvel_heros,...dc_heros]  // using spread over concat is useful when you merge more than two array
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(1)  // flat is used to print individual element irespect how they are placed(array inside array)
// const real_another_array = another_array.flat(Infinity)  // flat is used to print individual element irespect how they are placed(array inside array)
// console.log(real_another_array);        // infinity represents depth


// console.log(Array.isArray("Chetan"))
// console.log(Array.from("Chetan"))       // converts into an array
// console.log(Array.from({name: "Chetan"}))       // it returns null an empty array because we have to assign which element you convert key or value


const score1 = 100
const score2 = 100
const score3 = 100

// console.log(Array.of(score1,score2,score3))   // return a new array from a set of element
