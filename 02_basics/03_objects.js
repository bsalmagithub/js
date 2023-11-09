//singleton =>construntion bantha hay woh 
//Object.create  // constructor method using this we can declear the object this is another method. we use singleton in this method


//object literals

//use symbol
const mySym=Symbol("key1")

const jsUser={
    name:'Salma',
    'full name':'salma babu',
    [mySym]: "mykey1", //symbol syntax
    age:18,
    location:"blore",
    email:"salma@google.com",
    isLoggedIn:false,
    lastLoginDays:["Mon","Sat"]
}
//two types are there to access

//console.log(jsUser.email); //salma@google.com
//console.log(jsUser['email']);//in object name is string

// console.log(jsUser.full name); we can't acces in dot 
console.log(jsUser["full name"]);// this is correct way to use

//symbol access

//console.log(jsUser[mySym]); // mykey1


//changing values
jsUser.email="Salma@gmail.com"

//if we don't want any changes in our object 
//Object.freeze(jsUser)
//console.log(jsUser);


//functions
jsUser.greeting=function(){
    console.log("Hello js user");//Hello js user
}

jsUser.greetingtwo=function(){
    console.log(`Hello JS user, ${this.name}`); // same object ku refernce karna hay this // Hello JS user, Salma
}
console.log(jsUser.greeting); //[Function (anonymous)]
console.log(jsUser.greeting());//undefined
console.log(jsUser.greetingtwo());//undefined