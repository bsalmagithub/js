// for of 

// ["", "", ""]
// [{}, {},{}]

// for (const iterator of object) {        // iterator means object, arrays, string . object => which think we are talking 
    
// }

const arr=[1,2,3,4,5]
for (const num of arr){
    console.log(num);

}

const greeting= "Hello World"
for (const greet of greeting){
    console.log(`Each char is ${greet}`);
}


//+++++++  maps  +++++++
// Maps => is object holds key-value pairs it give original insertion order of the keys. it is unique in the maps collection

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  //myObject is not iterable
    
// }

// object are iteratable but this is not way
//for of loop is not working on objects
