const user={
    username:'salma',
    loginCount: 8,
    signedIn:true,

    //method  etUserDetails
    getUserDetails: function(){
        console.log('Got user details from database');

    }
}
console.log(user.username);
console.log(user.getUserDetails()); //method should be run () not refernce


