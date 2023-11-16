//Immediately Invoked Function Expressions (IIFE)
//global scope ke polution se problem hothi hay kahi bara usko hata ne ke liye we use iife
//function excutes immediately
/*function chai(){
    console.log(`DB Connected`);  //DB Connected
}
chai()*/


//syntax  ()()   ()=> function defination ()=> excuation. function wraped in paranthises and excutes
(function chai(){
    //named iife
    console.log(`DB Connected `); //DB Connected
})();
// don't know where to stop the context we want give ; in the end

//arrow function
( () =>{
    console.log(`DB Connected `);   //DB Connected 
})();


( (name) =>{
    console.log(`DB Connected ${name}`);    //DB Connected salma
})('salma')

