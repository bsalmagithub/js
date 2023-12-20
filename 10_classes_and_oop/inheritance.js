class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new Teacher('salma', 'email.com', '123')
// console.log(chai);
chai.addCourse()

const masala= new User('radhi')
masala.logMe()

console.log(chai === masala);  //false
console.log(chai instanceof masala);  //it is not working