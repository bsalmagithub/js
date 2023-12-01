const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//map is callback function
// const newNums=myNumbers.map( (num) => num + 10  )
// console.log(newNums);   //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//forEach
// const newNum = []
// const nums=myNumbers.forEach( (num) =>{
//     return newNum.push(num +10)
// } )
// console.log(newNum);
// console.log(nums);



// const newNum = myNumbers.filter( (num) => num +10)
// console.log(newNum);
// The filter method expects a callback function that returns either true or false for each element in the array. If the callback function returns true, the element is included in the new array; otherwise, it is excluded.


//chaining method => we use 2 or 3 methods directly
  
const newNums =myNumbers
                .map( (num) => num  * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
