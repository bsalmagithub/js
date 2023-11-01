

let score=33
console.log(typeof score)
console.log(typeof (score))

let valueInString= String(score)
console.log(typeof valueInString)


let scores= "33abc"
//convert Number
let valueInNumber= Number(scores)
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN is a special type 


let scoress= null 
let scoress_number= Number(scoress)
console.log(scoress)
console.log(scoress_number) // value of null is (0) zero

let score_undefined= undefined 
let undefinedNumber= Number(score_undefined)
console.log(typeof(undefinedNumber)) // type is Number
console.log(undefinedNumber)// value is NaN


let score_boolean= true
let boolean_number= Number(score_boolean)
console.log(typeof(boolean_number)) //type is number
console.log(boolean_number) //value is 1 

 //"33" =>33
 //"33abc" => NaN Not an Number but type is NUMBER
//  true => value is 1 ; false => value is 0 

let isLoggedIn= 1 //if it is empty we will get False 
let boolean= Boolean(isLoggedIn)
console.log(boolean) //value is true 

//"" => false
// "salma" => ture

//conver string
let somenNumber= 33
let stringNumber= String(somenNumber)
console.log(stringNumber);

//typeof => string


// *******************  Operations ***************************

let value=3
let negValue= -value
//console.log(negValue)  value -3

/*basic operations
console.log(2 + 2);  4
console.log( 2 - 2)     0
console.log( 2 * 2)     4
console.log( 2 ** 3)    8
console.log( 2 / 3)     0.66
console.log( 2 % 3)     2
*/

let str1= "Hello"
let str2= " Salma"
let str3= str1 + str2
// console.log(str3);  Hello Salma

/*
console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
*/

console.log(true); //true
console.log(+true);//1
console.log(+"");//0

//link to study prifix and profix
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

//  link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations

