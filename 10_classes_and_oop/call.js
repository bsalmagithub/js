function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log('called');
}

function createUser(username, email, password){
    // SetUsername(username)   //it is refernce not call 
    SetUsername.call(this, username)  //technically calling after this we get the output

    this.email=email 
    this.password=password
}

const chai= new createUser('chai', 'cahi@123.com', '123')
console.log(chai);
