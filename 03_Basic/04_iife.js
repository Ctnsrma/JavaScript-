// Immediately Invoked Function Expressions (IIFE)
// Jo function immediately execute hojaye and 
// global scope ke pollution se bachne ke liye (global scope ke variable created function ke variable problem,...)

// ()()  function ki defination and execution


// Named iife
(function chai(){
    console.log("DB CONNECTED")
})();  // to stop execution we have write ';'


// unnamed iife
( () => (console.log("Hello Chetan")))();

// parameter passing in iife function
( (num1,num2)=> (console.log((num1+num2))))(2,4);



 // execution context - in JS code divided into two parts 
 // calls stack 

 // javascript execution context
 
 // {} --> Global EC 
 // |--> Global Execution context 
 // |--> Function Execution context
 // |--> Eval Exxecution context

 