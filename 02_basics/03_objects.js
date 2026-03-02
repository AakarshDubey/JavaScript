// singleton
Object.create;
/* agr object constructor se bn rha hai to wo 
singleton hoga
*/

// objects literals
const mySym = Symbol("key1") // Symbol

const JsUser = {
    name: "Aakarsh",
    "full name": "Aakarsh Dubey",
    age: 18,
    [mySym]: "myKey1", // Symbol are used by using [] only
    location: "Balrampur",
    email: "aakarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
//normally used to fetch values
// console.log(JsUser["email"]);
// better way to fetch values because we can also 
// fetch keys which are in string
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
/*In interview it is asked that how do we use 
Symbol as a key. So we use [mySym] square brackets
to represent Symbol as a key and fetch in the 
same manner
*/

JsUser.email = "aakarsh@chatgpt.com"
//Object.freeze(JsUser) 
// freezed the object cannot change anything after this
JsUser.email = "aakarsh@yootube.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");   
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);   
}
console.log(JsUser.greeting); // fucntion[anonymous] reference oof function is given not value
console.log(JsUser.greeting()); // undefined
console.log(JsUser.greetingTwo());



