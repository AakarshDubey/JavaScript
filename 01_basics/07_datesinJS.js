// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2026,2, 2)
// let myCreateDate = new Date(2026,2, 2, 5, 3)
//let myCreateDate = new Date("2026-02-14")
let myCreateDate = new Date("02-03-2026")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp) //in ms
// console.log(myCreateDate.getTime()); // in ms
// to convert into seconds from ms
// console.log(Math.floor(Date.now()/1000));
// divide my 1000 for seconds
// Math.floor to remove decimals

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
//`${newDate.getDay()}` and time is ---- we can write string like this too

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))
// we can also manipulte date methods 