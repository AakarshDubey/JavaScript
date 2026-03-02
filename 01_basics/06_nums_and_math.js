const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
/*by using this type of variable defining we get
certain protoype methods which we can use
for example in string we get split,trim,length etc.
*/

// console.log(balance.toString().length);
//changed into string then length we are fetching

// console.log(balance.toFixed(2));
//by this we can fix the number for places after decimal

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));
//this will give 23.9 gave 3 values
const otherNumberTwo = 123.8966
// console.log(otherNumberTwo.toPrecision(3));
// gives 124 rounded off to 3 values

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
//give comma seperated in indian style to easily read

//MIN_VALUE, MAX_VALUE, MIN_SAFEVALUE, MAX_SAFEVALUE

//+++++++++++ MATHS+++++++++++++++++++++++++++++++++++
// this is a library which comes by default with JS
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(3,5,6,2));


console.log(Math.random())
//values will be between 0 and 1
console.log(Math.random()*10);
// 10 will be multiplied
console.log((Math.random()*10) + 1);
//'+1'did this because value can also be 0.0---

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);
/*did Math.floor for floor value
did Math.random for random value
did +1 to not get 0
did +min because we wanted values greater than min
*/