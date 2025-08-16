// var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
    
    // var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);


//  scope is different in window and terminal 


function one(){
    const username = "Chetan"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }

    console.log(website);
    // two()
}
// one()


// ++++++++++++++++++++++ mini Hoisting +++++++++++++++++++++++

addOne(5)
function addOne(num){
    return num + 1
}

console.log(addNum(5)) // error calling function before initialization....
const addNum = function (num){
    return num + 2
}