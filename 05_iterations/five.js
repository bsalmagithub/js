const coding= ['js', 'ruby', 'jave','python']


//coding.forEach( function name(){})  // forEach(callback function)
// in callback there is no name so remove the name
//forEach is smart it itereta all the values

// coding.forEach(function (item) {
//     console.log(item);      // js ruby java...

    
// })


// arrow function

// coding.forEach( (val) => {
//     console.log(val);       //js ruby java....
// })


// function printMe(item){
//     console.log(item);      //js ruby java..
// }
// coding.forEach(printMe)         //printMe is refernce


// 


// [{},{},{}]
const myCoding =[
    {
        languageName: 'javascript',
        languagefile: 'js'
    },
    {
        languageName: 'java',
        languagefile: 'java'
    },
    {
        languageName: 'python',
        languagefile: 'py'
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);

})
