function sayMayName(){
    console.log("S");
    console.log("a");
    console.log("l");

    
}
//function => is keyword
//sayMayName=> is function name
//(){} are syntax

sayMayName()
//sayMayName=> reference
//() => excuation

/*function addTwoNumbers(number1,number2){
    console.log(number1+ number2);

}

//addTwoNumbers(1 , 2)//3
// addTwoNumbers(1 , "3")//13
// addTwoNumbers(1 , h)//  1h
// addTwoNumbers(10 , null)//10

// addTwoNumbers(number1,number2)  number1,2 are called parameters
// addTwoNumbers(1 , 2) here 1,2 are called arguments
const result= addTwoNumbers(3, 4)//7
console.log("Result: " , result);// Result: undefined
*/

function addTwoNumbers(number1,number2){
    /*let result= number1 + number2
    return result*/
    // console.log("Salma") this is not excute we can't excute before the return
    return number1 + number2// this is anthoer way 
}
const result= addTwoNumbers(3, 4)
//console.log("Result:" , result); // Result: 7

function loginUserMessage(username){
    return `${username} just logged in`

}
console.log(loginUserMessage("salma"))// salma just logged in
// console.log(loginUserMessage()) // undefined just logged  in // we are not giving the argument 


// using if 
function loginUsermessage(userName = "Radhi"){ //here we can give default values also 
    if (userName === undefined){// (!username) same 
        console.log("Please enter a username"); // not im getting this line and 
        return // when i use return here the second line is not excutes
    }
    return `${userName} just logged in`// this 

}
console.log(loginUsermessage())

// Rest opertor
function calculateCartPrice(...num){// 200 for we get only fist number we want all for that we want use (...)rest operator 
    return num
    
}
console.log(calculateCartPrice(200,300,500))// [200, 300, 500]using rest we got array


const user={
    username:"Salma",
    price: 20
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);//username is Salma and price is 20
}
// handleobject(user)
//pass object
handleobject({
    username:"radhi",
    price: 500
})//username is radhi and price is 500 // if we want we can directly give the object

//pass array
const myNewArray=[200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 100, 600]))//400