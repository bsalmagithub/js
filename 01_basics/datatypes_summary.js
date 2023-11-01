// it will help interview also
//in official documentaion we have only 2 types of data types 1)Primitive and 2)Non-primitive or refernces
//how data will store ? and how can we access the data in memory in that base we have two types

// Primitive 
// we have 7 categories: Srting, Number, Boolean, null(empty not 0 not empty string ), undefined, symbol(value is unique), BitInt 

const score=100  
const scoreValue= 100.3

const isLoggedIn=false 
const outsideTemp= null // nothing 
const userEmail=undefined // undefined

const id= Symbol("123")
const anotherId= Symbol('123')
console.log(id === anotherId); // false

const bigNumber= 333333333333333n



//Refernce (Non primitive)
//Array , Objects, Functions


const heros= ["salma", "rakshith", "Abbu", "Ammi"]//Arrays
console.log(typeof heros)

let myObj={
    name: "salma",
    age:22,
}
console.log(typeof myObj);
//Object

//there are so many functuion now we learn Variable function

const myFunction=function(){
    console.log('Hello World')
}
console.log(typeof myFunction)// data type is Function it written. but we say Object function
// all non primitive data type is Function


//link for datatypes 
// https://262.ecma-international.org/5.1/#sec-11.4.3