let score = "33"

// console.log(typeof score)
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

let score2 = "33abc"
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2); //gives NaN which is not a number 
//but the datatype shown will be number

let score3 = null
let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);// null gives the value 0

let score4 = undefined
let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4);// gives NaN(not a number)

let score5 = true
let valueInNumber5 = Number(score5)
// console.log(typeof valueInNumber5);
// console.log(valueInNumber5);
//gives 1 when true and 0 when false

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
//same wrapper can be used for other datatypes also
// 1 => true
// 0 => false
// "" => false
// "aakarsh" => true

// ******** Operations **************

let value =3
let negValue = -value
// console.log(negValue);

let str1 = "Hello"
let str2 = " Aakarsh"
let str3 = str1 + str2
//console.log(str3);

// console.log("1" +2); //12
// console.log(1 + "2"); //22
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

console.log(+true) //gives 1 '+' converts into number
//console.log(true+) // gives error
console.log(+"") // gives 0 



