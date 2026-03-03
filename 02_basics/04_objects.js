const tinderUser1 = new Object() // singleton
const tinderUser = {} // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aakarsh",
            lastname: "dubey"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


// merging objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const onj3 = { obj1, obj2} // gives object into object not merging
const obj4 = Object.assign({}, obj1, obj2)
/* we gave empty parenthesis so that the merging is 
confirmed and it will be the target and other objects
will be resources will are going t be stored
in the target.
*/
//spread operator
const obj5 = {...obj1, ...obj2}
//console.log(obj5);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
user[1].email // this is how we can access data from database which come as an array

console.log(tinderUser);

console.log(Object.keys(tinderUser));
//get keys of the object
console.log(Object.values(tinderUser));
// get values of the object
console.log(Object.entries(tinderUser));
//key value pair ko arrays bna deta hai, so 2d array bn jata
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// to check if the key is available in the object