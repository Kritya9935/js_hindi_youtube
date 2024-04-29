// Primitive 
// 7 types: String, Number, Boolean ,Null, Symbol, Bigint,undefined

// const score = 100
// const scorevalue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 2837284778473894n

//Reference (non primitive)
//Array,Object,Function

// const heros = ["shaktiman", "naagraj", "doga"];
// let myobj={
//       name:"kashish",
//       age:22,
// }
// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log( myFunction);
// console.log(typeof heros);
// console.log(typeof anotherId);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive),heap(non-primitive)

let myYoutubeName = "asdflkjasdflkjsadflkjasdflkj"
let anotherName = "myYoutubeName"
anotherName= "bbbbbbbbb"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email:"dj@gmail.com",
    upi:"1234566@oksbi"
}
console.log(userOne);

let userTwo = userOne

userTwo.email = "kg@gk.com"
console.log(userOne);
console.log(userTwo);

 
