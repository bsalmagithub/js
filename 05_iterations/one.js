//loops is also called as iterations

//for loop
//this is syntax index value is 0 , index < array.length; this is condition check , index++ this last step of loop after scope 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i= 0; i< 10; i++) {      // we change variable name in all places double tap select the variable and click ctrl + d which you want change
    const element = i;
    console.log(element);
    
}
// console.log(element);  here we get error because it is delcared in scope we can't access out of scope