const descriptor= Object.getOwnPropertyDescriptor(Math, 'PI')   
//console.log(descriptor);

//console.log(Math.PI);   //3.141592653589793 pi value

// const mynewobject= Object.create(null)
const chai={
    name:'ginger chai',
    price: 250,
    isAvailable: true,

    orderCahi: function(){
        console.log('chai nahi bni');
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    //writeable:false,
    enumerable: false

})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !==  'function'){

    
    console.log(`${key} : ${value}`);
    
}
}