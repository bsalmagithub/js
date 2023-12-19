// object literal
const user={
    username:'salma',
    loginCount: 8,
    signedIn:true,

    //method  etUserDetails
    getUserDetails: function(){
        // console.log('Got user details from database');
        console.log(`Username: ${this.username}`);  //without this we get error
        console.log(this);  //object value we got

    }
}
//console.log(user.username);
// console.log(user.getUserDetails()); //method should be run () not refernce


//prototypes are called methods

// this keyword using means current context

// console.log(this);   //{} output in global          // in brower we get window object
// with single object we can create multiple instances
// some places we need new instances
//new keyword help for create new context



// Constructor function   new is keyword it is Constructor function

// const promiseOne= new Promise()
// const date= new Date()

function User(username, loginCount, isLoggedIn){
    this.myusername= username;   // variable= myusername  parameter=username
    this.loginCount= loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting= function (){
        console.log(`Welcome ${this.username}`);
    }

    return this   //if we write this line or not we get the answer
}
// const userOne= User('salma', 12, true)
// const userTwo= User('radhi', 10, false)  // in console userTwo is over write we didn't call the userTwo 

//now we won't get like that
const userOne= new User('salma', 12, true)
const userTwo= new User('radhi', 10, false)  
console.log(userOne);       //user { myusername: 'salma', loginCount: 12, isLoggedIn: true }
