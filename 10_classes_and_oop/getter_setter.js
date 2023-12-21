class User{
    constructor(email, password){
        this.email=email,
        this.password=password

    }

    //getter
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}salma`


    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }

    //setter
    set password(value){
        this._password=value.toUpperCase()
    }
}
const salma= new User('salma@123.com', '123')
console.log(salma.password);
console.log(salma.email);

