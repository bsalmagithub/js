/// scope
//scope => has global scope and block scope . global=> outside the scope. block scope=> means {} under the braces
{} // this is scope if and function we are using scope . but in object this is curly braces are not scope it is object declaertion 

/*
let a =10
const b= 20
var c= 30 */


let a= 500
if (true){
    let a =10
    const b= 20
    var c= 30 // c=30 we can write without var also we get the output but this method is not good 
    //console.log("inner:" , a);// inner: 30
}
//console.log(a);error
//console.log(b);error
//console.log(c);// 30 outside nai ana chahitha but we got output
//console.log(a)//500



//nested scope
// inside function we can write another function not only in function we can write in if and loop 
function one(){
    const username="Salma"
    function two(){                 // the child function can access the parent variables but parent function can't access
        const website="google"
        //console.log(username);//Salma
    }
    //console.log(website) //error got we can't write outside scope because it finished 
    two()          //calling function
}
one()


if (true){
    const username="Salma"
    if (username === "Salma"){
        const website=" Google"
        //console.log(username + website);// Salma Google
    }
    //console.log(website); error
}
// console.log(username); error



//++++++++++++++++++intersting+++++++++++++++++
//same but differnt ways

console.log(addone(4)) // 5 we are getting output
function addone(num){
    return num +1
}
//console.log(addone(4));//5


addtwo(5)// canot access 'addtwo' before initialization
const addtwo= function(num){    //addtwo is expression
    return num +2
}
//console.log(addtwo(5));//7
