const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography network

    setTimeout(function(){
        console.log("Async task is completed")
        resolve()   // connected to then
    },1000)
});
promiseOne.then(function(){
    console.log("Promise Consumed");
})


//  promiseTwo

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task Two")
        resolve()
    },1000)
}).then(function(){
    console.log("Async resolved")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chetan", email: "chetan@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  = false;
        if(!error){
            resolve({username: "Chetan", pass: "123"})
        }else {
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("Promise either resolved or rejected")
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Chetan", pass: "123"})
        }else {
            reject("ERROR: JS went wrong...")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



// async function getallUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/ctnsrma')
//         const data = await response.json()
//         console.log(data);   
//     } catch (error) {
//         console.log("E: ",error);        
//     }
// }

// getallUser()

fetch('https://api.github.com/users/ctnsrma')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=> console.log(error))