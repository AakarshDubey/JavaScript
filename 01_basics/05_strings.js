const name = "aakarsh"
const repoCount = 50

// console.log(name + repoCount + " value");

// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
/* here intead on adding + to concatinate strings 
we use backticks `` instead and inside that we use 
${} to add variables and there values.
 This is more professional way.
*/

// Another way to define string
const gameName = new String('kazut-o-com')
// here we made string by using ojects

console.log(gameName[0]);
//here the object has made the string into key value pairs.
// 0 is the key and k is the value
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
//can give negative values
console.log(anotherString);

const newStringOne = "    aakarsh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aakarsh.com/aakarsh%20dubey"
console.log(url.replace('%20','-'));

console.log(url.includes('aakarsh'));

console.log(gameName.split('-'));
