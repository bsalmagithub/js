//loops is also called as iterations

//for loop
//this is syntax index value is 0 , index < array.length; this is condition check , index++ this last step of loop after scope 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i= 0; i< 10; i++) {      // we change variable name in all places double tap select the variable and click ctrl + d which you want change
    const element = i;
    if (element == 5) {
        //console.log('5 is best number');
    }
    //console.log(element);
}
// console.log(element);  here we get error because it is delcared in scope we can't access out of scope


//nested loop
for (let i = 0; i <= 10; i++){
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`Inner loop value: ${j} and outer loop ${i}`);
        //console.log(i+ "*" + j + " = " + i * j);
    }
}


//array
const myArray=["flash","batman","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


//keywords
//break and continue  

// for (let index = 1; index < 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index < 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue  // one time ke liye ignore
    }
    console.log(`value of i is ${index}`);
    
}
