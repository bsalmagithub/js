class User{
    constructor(email, password){
        this.email=email,
        this.password=password

    }
    //getter
    get password(){
        return this.password.toUpperCase()


    }
    //setter
    set password(value){
        this.password=value.toUpperCase()
    }
}
const salma= new User('salma@123.com', '123')
console.log(salma.password);

