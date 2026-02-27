const accountId = 144553
let accountEmail = "aakrsh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId =2 //not allowed

accountEmail = "ad@ad.com"
accountPassword = "2212331"
accountCity = "Bangalore"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 
