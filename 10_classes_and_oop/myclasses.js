//ES6 
//class syntax
// class User {
//     constructor(username, email, password){
//         this.username=username;
//         this.email=email
//         this.password=this.password
//     }

//     encryptPassword(){
//         return `${this.email}abc`  //password is not working in my code
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const chai=new User('chai', 'salma@com' , '123')
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}

const tea= new User('tea', 'tea@com','123')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());