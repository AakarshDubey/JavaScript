// array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);


// Array Methods
myArr.push(6) //to add element in array
myArr.push(7)
// console.log(myArr);
myArr.pop() // to remove last element in array
// console.log(myArr);

// myArr.unshift(9) // add the starting of the array
myArr.shift() // shift one postion to left
//console.log(myArr);

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()//convert arr into string comma separated

// console.log(myArr);
// console.log(newArr);// converted into string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);
/*
So in slice we get the values of the range we have 
given which does not include the last index of the 
range and it also does not manipulate the original 
array.

But in splice we get the values for the range we 
have given which includes the last index of the range
but here it manipulates the original array and remove
the range we spliced from the original array.
e.g originalArray = [1,2,3,4,5]
const anotherArray = originalArray.splice(1,3)
log(anotherArray) => [2,3,4]
log(originalArray) => [1,5]
*/