const userEmail=[]//'salma123'  // if there is no value "" output is Don't have user email. if it is [] the output is Got user email

if (userEmail){         //here just checking is value is there 
    console.log('Got user email');  //Got user email
}
else{
    console.log("Don't have user email");
}

// falsy values 
//false , 0 . -0 , BigInt on, "", null, undefined, NaN not an Number.

//truthy values
// "0", 'false', " ", [], {}, function(){}

//how to find array
if (userEmail.length === 0){    //userEmail=[]
    console.log("Array is empty");  //Array is empty
}


// if object is empty how to find the object
const emptyObj={}
if (Object.keys(emptyObj).length === 0){
    console.log('Object is empty');     // Object is empty

}

// false == 0  // true
// false == ''     // true
// 0 == ''         //true

//Nullish Coalescing Operator (??) : null and undefined

let val1;
// val1= 5 ?? 10       //5
// val1= null ?? 20        //20
//val1= undefined ?? 15       //15
val1= null ?? undefined ?? 10 ?? 30         //10


console.log(val1);
// both nullish and terniary are differnt 


//terniary Operator 
// condition? true : false

const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log( "more than 80"); //more than 80