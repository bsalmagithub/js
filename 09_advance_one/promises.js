const promiseOne= new Promise( function (resolve, reject) {  //creating promise
    //do an async task
        //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()       //if want resolve , call the resolve() method and its connected to the .this()
    },1000)
})
//promise is created now it time to consume

promiseOne.then(function(){       //.then(call back) is directly connected to the resolve
    console.log('promise consumed');
})

// Async task is completed
// promise consumed         output got


// we can create without variable promise also because variable it not complusary

new Promise(function ( resolve, reject){
    setTimeout( function(){
        console.log('Async task 2');
        resolve()

    },1000)
}).then( function(){
    console.log('Async 2 resolved');
})
// Async task 2
// Async 2 resolved


//third promise
const promiseThree= new Promise( function( resolve, reject){
    setTimeout(function(){
        resolve({username:'Chai', email: 'javascriptcode.come'})        // here passing through resolve we can pass parameter , data object Array function etc

    }, 1000)
})

promiseThree.then( function(user){
    console.log(user);      //{ username: 'Chai', email: 'javascriptcode.come' }

})

//promise four
const promiseFour= new Promise( function( resolve, reject){
    setTimeout( function(){
        let error=false   //true get error 
        if (!error){
            resolve({username:'salma',password: '123'})
        }
        else{
            reject('ERROR: Something went wrong ')
        }
    }, 1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then( (username)=>{      //chaining
    console.log(username);
})
.catch( function(error){
    console.log(error);
}).finally( ()=>{
    console.log('The promise is either resolved or reject');   //The promise is either resolved or reject
})


//promise five
const promiseFive= new Promise( function( resolve,reject){
    setTimeout( function(){
        let error =true   // if you false without try catch we get ouput otherwise we get error
        if (!error){
            resolve({username: 'javascript', password: '123'})
        }
        else{
            reject('Error: js went wrong')
        }
    },1000)
});
//async and await can't handle errors directly 
async function consumePromiseFive(){
    // const response= await promiseFive
    // console.log(response);              // we get error in this code 

    try{
        const response= await promiseFive
        console.log(response);
    } catch (error){
        console.log(error)
    }
}
consumePromiseFive()
//Error: js went wrong  (output)   

// https://jsonplaceholder.typicode.com/users
// async function getAllUsers(){
//     // const response =await fetch('https://jsonplaceholder.typicode.com/users')   //libarary
//     // const data= response.json()
//     // console.log(data)               didn't get output

//     try{
//     const response =await fetch('https://jsonplaceholder.typicode.com/users')   //libarary
//     //console.log(response);   // we got output but we want change format
//     const data=await response.json()    // it takes time to convert await use
//     console.log(data)
//     }catch (error){
//         console.log("ERROR: error");
//     }

// }
// getAllUsers()
//now write this in .then() and catch formate 
fetch('https://jsonplaceholder.typicode.com/use')
.then((response) =>{
    return response.json()
})
.then( (data)=> {
    console.log(data);
})
.catch( (error) => console.log(error))

