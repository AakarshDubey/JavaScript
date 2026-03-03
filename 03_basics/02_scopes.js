
{} // --> this is scope(not object rn)
// when used with functions and if else it becomes the scope of them

if(true){
    let a = 10
    const b = 20
    //var c = 30
}
//console.log(a); // here not defined
//console.log(b); // here not defined
//console.log(c); // 30

/* This happpened because let and const are 
scope binded variables that is we can only use
them inside the scope where they have been 
declared.

On the other hand var is not scope binded variable 
so here even if it was declared in the scope of 
if condition the console.log still gives the value.
*/

let a = 200 // this is inside global scope 
if(true){
    let a = 10 // this is inside a block scope
    const b = 20
    //var c = 30
    console.log("Inner scope: ", a);
    
}
console.log("Global scope: ",a);

// INTERVIEW
/*
NOTE -> The global scope we check through 
the browser is different from the global 
scope we check in the code environment from node.
*/