let score=33
let scores= "33abc"
let scoress= null 
let scoress_number= Number(scoress)

let score_undefined= undefined 
let undefinedNumber= Number(score_undefined)

let score_boolean= true
let boolean_number= Number(score_boolean)

 console.log(typeof score)
 console.log(typeof (score))

 let valueInString= String(score)
 console.log(typeof valueInString)

 //convert Number
 let valueInNumber= Number(scores)
 console.log(typeof valueInNumber)
 console.log(valueInNumber) //NaN is a special type 


 console.log(scoress)
 console.log(scoress_number) // value of null is (0) zero


 console.log(typeof(undefinedNumber)) // type is Number
 console.log(undefinedNumber)// value is NaN


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
