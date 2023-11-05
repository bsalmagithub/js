const score= 400
console.log(score)//400

const balance=new Number(100)
console.log(balance)// [Number:100]

console.log(balance.toString().length);//change the number to string//3
console.log(balance.toFixed(2));//100.00

const othernUmber=23.8966
console.log(othernUmber.toPrecision(3));//23.9

const hundreds= 1000000
console.log(hundreds.toLocaleString());//1,000,000  based on us standard
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 based on indian stardard


// ******************   Maths   ******************************
//math libarary it comes default in javascript
console.log(Math);// is Object[Math]{}

//abs absolute value if value is in -ve it turn as a +ve 
console.log(Math.abs(-4));//4

//round => is function
console.log(Math.round(4.3));//4

//ceil => choose top value
console.log(Math.ceil(4.2));//5

//floor => choose low value
console.log(Math.floor(4.9));//4

//min to find the lowest value
console.log(Math.min(4,5,6,7,10,2));//2

//max to find the highest value
console.log(Math.max(3,4,6,7,11,5))//11

//random to get unknow value between 0 to 1 
console.log(Math.random());//every time will get random value


console.log((Math.random() * 10 )+ 1);// now we don't get 0 


const min=10
const max=20
 ///foramul remember this
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 