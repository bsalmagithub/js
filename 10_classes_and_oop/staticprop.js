class User{
    constructor(username){
        this.username=username

    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const salma=new User('salma')
// console.log(salma.createId())  //123


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone= new Teacher('iphone', 'email.com')
console.log(iphone.logMe());


