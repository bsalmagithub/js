// CONTROL flow or LOGI flow
//if statement is first control flow

//const isUserLoggedIn=true
const temperature=41

/*if (temperature){  // it is true 
    console.log("less than 50"); // this will be execute
}
else{
    console.log("temperature is greater than 50"); //false this will be execute
}
console.log("execute");*/

// comparetive oparators 
// < less than , > greater than,  <= less than equal, >= greater than equal, == equal , === strick equal it check data type also,  != not eqaul , !==  = assignment operator not equal

/*const score=200
if (score > 100) {
    const power= "fly" // if we use var keyword it will get out of the scope also but we don't want so use let or const
    console.log(`User power: ${power}`); // User power: fly
}
// console.log(`User power: ${power}`); get error because it is output our scope
*/

// shot hand notation

const balance=1000

//this is called implicit scope it assume that there is scope we can't write multiple line some people write they instead of ; they put , basically don't write like this
//if (balance >500) console.log("test"); //test  // this is not good practice

if (balance < 500){
    console.log('less than 500');
}
else if (balance < 750){
    console.log('less than 750');
}
else if (balance < 900){
    console.log('less than 900');
}
else{
    console.log('less than 1200');// less than 1200
}

const isUserLoggedIn=true
const debitcard= true
const loggedInFromGoogle=false
const loggedInFromGmail=true

if (isUserLoggedIn && debitcard){  //& and 
    console.log("Allow to buy course"); //Allow to buy course
}
if (loggedInFromGoogle || loggedInFromGmail){ // || or 
    console.log('User logged in');  //User logged in
}

