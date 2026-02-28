// Primitive datatype 
/* this is call by value mtlb jo bhi value hum copy 
krte hai to original data reference na deke ye uski
ek copy provide krta hai and usme jo bhi hum changes
krte hai wo copy me changes hote hai.
*/
// 7 types : String, Number, Boolean, null, undefined, Symbol,
// BigInt

/* JavaScript is a dynamically typed language, not a 
statically typed one. This means that the type of a 
variable is determined at runtime based on its value,
 rather than being explicitly declared during 
 development.
 */
const score =100 // number
const scoreValue = 100.3 //number
const isLoggedIn = false  //boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123') // Symbol
const anotherid = Symbol('123')

console.log(id === anotherid); // false
/* It is false because we used symbol that makes 
every variable unique even if the value is same
*/
const bigNumber  = 3747437484344334n // BigInt

// Reference (Non Primitive)
// isme direct value ka reference allocate kiya ja
//skta hai

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // Array
let myObj = {
    name: "aakarsh",
    age: 22,
}; // Object

const myFunction = function() {
    console.log("hello world");  
} // function

console.log(typeof myFunction) // object function datatype