const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// Concat operator

 const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// spread operator

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

// Flat operator
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
/* this operator gives a single array from nested 
array
*/

console.log(Array.isArray("Aakarsh"))
//gives true or false 
console.log(Array.from("Aakarsh"))
// converts into array
console.log(Array.from({name:"Aakarsh"})) // interesting
//gives empty array cannot convert

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
