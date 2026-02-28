// console.log(2>1);
// console.log(2 >=1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(null > 0); //false
// console.log(null == 0); // false
// console.log(null >= 0); // true

/* the reason is that an equality check == and 
comparision > <>= <=works differently.
Comparisions convert null to a number, treating 
it as 0.
Thats why(3) null >= 0 is true and (1) null >0 
is false.
*/
// console.log(undefined == 0); // false
// console.log(undefined < 0); // false
// console.log(undefined > 0); // false

// strict check ===
console.log("2" == 2); // this will convert datatype
console.log("2" === 2); // this will check value as
// well as datatype no conversion happen here






