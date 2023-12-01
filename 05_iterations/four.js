const myObject={
    js: 'javascript',
    cpp:'c++',
    rb: 'rubby',
    swift: 'swift by apple'
}

//for in loop => here objects work. this loop  not only objects 
for (const key in myObject) {
    //console. log(key);  // jd cpp rb swift
    //console.log(myObject[key]); // we get values
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//array in for in loop

const programming=['js','rb','py','java','cpp']

for (const key in programming){
    //console.log(key);   // 0 1 2 3 4  arrays key are starts with 0 by default it is number
    //console.log(programming[key]);  // js rb py java cpp

}


const map = new Map()   // this map is not iteratable so we can't write in a loop
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    //console.log(key); // nothing will come

}