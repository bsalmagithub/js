//ARROW FUNCTION
//THIS is a keyword it tells about current context


const user={
    username:"salma",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // salma, welcome to website
        console.log(this);  //{username: 'salma', price: 999,welcomeMessage: [Function: welcomeMessage] }     {username: 'sam',  price: 999, welcomeMessage: [Function: welcomeMessage]}
    }
}
user.welcomeMessage()       //salma , welcome to website
user.username="sam"         //we changed the context context means values
user.welcomeMessage()       //sam , welcome to website

console.log(this);  // {} current context is empty now we are in node environment this is refer to empty {} object

// in inspcet we get window it is global object

//defining function way 1
/*
function chai(){
    let username='salma'
    //console.log(this);      // we got so many values
    console.log(this.username) // undefined  this is used only in OBJECTS not in function
}
chai()*/

//2
/*const chai=function(){
    let username="salma"
    console.log(this.username);//   undefined
}
chai()*/


//++++++++ARROW FUNCTION +++++++++++++++++++++
const chai=() => {
    let username="salma"
    console.log(this.username);//   undefined
}
chai()

//BASIC SYNTAX   () => {}
//explicity return 
/*const addTwo=(num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(2, 3)); //5      */


//implicity return  means remove braces and return because one line code there no neccesry we get outputs
//when we write curly braces we have to write return keyword in paranthesis we don't write 
//const addTwo=(num1, num2) => num1 + num2  or
//const addTwo=(num1, num2) => (num1 + num2)
console.log(addTwo(2, 3));  //5

// const addTwo=(num1, num2) =>{username:"salma"}  //undefined because we cannot write object here
//console.log(addTwo(2, 3));

const addTwo=(num1, num2) =>({username:"salma"}) // we want wrap in paranthesis
console.log(addTwo(2, 3));





