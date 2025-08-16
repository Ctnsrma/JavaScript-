const accountId = 12324177;
let accountEmail = "chetan@gmail.com"
var accountPassword = "12345"
accountCity = "Etawah"
let accountState;  // undefined
// accountId = 23; const can't change once it is declared.
console.log(accountId);
// Prefer not use var
// beacause issue in block scope and functional scope
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

