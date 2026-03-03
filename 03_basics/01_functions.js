// Functions

//keyword--name
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");  
}

//sayMyName ------> this is function refernce
//sayMyName() -----> this is function execution
//                    [----parameters----]
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }//          [arguements](3,4)
// addTwoNumbers(3, 4)

//const result = addTwoNumbers(3,5)
/* undefined value for result because there is
no return type for the above function 
*/
//console.log("result: ", result);


function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log("result: ", result);

//                                (default value)
function loginUserMessage(username = "sam"){
/* sam is the default value give */
    
    
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // } OR
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aakarsh"))
console.log(loginUserMessage()) // if we do not pass any value it gives undefined