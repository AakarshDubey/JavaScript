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
// console.log(loginUserMessage()) // if we do not pass any value it gives undefined


// Rest Operator (...)

/* Here the rest operator is used in functions 
where we dont know the amount of values that will
be passed inside the function.

The Rest Operator binds all the passed values 
and convert them into an array of values through
which we can access and use them easily.
*/
// function calculateCartPrice(...num1){
//     return num1
// }
function calculateCartPrice(val1, val2, ...num1){
    return num1
} 

//console.log(calculateCartPrice(200, 400, 500));


// HOW  TO PASS OBJECT AS A PARAMETER IN FUNCTION
const user = {
    username: "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
}) // can pass the object directly without making one




// PASSING ARRAYS IN FUNCTION

const myNewArray = [200, 400, 500, 700]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray)); // passing through array variable
console.log(returnSecondValue([200, 400, 500, 700])); // passing value directly


