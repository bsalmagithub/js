//array
// () Parentheses, []brackets and {}braces
const myArr=[0, 1, 2, 3, 4, 5] // number are elements
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// array-copy operations create shallow copes and deep copies
// shallow copy (share same reference)  https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
// deep copy (do not share the same references)   https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

const myHeros=["Salma", "shaktiman"]

const myArr2=new Array(1, 2, 3, 4)
console.log(myArr[1]);
 

// Array methods
//push (add values in Array)
myArr.push(6)
myArr.push(7)
// console.log(myArr); [0,1,2,3,4,5,6,7]


//pop (remove the last value in Array)
myArr.pop()
// console.log(myArr);[0,1,2,3,4,5,6]


//unshift() it insert in Array starting 
myArr.unshift(0)//[0,0,1,2,3,4,5,6]


//Qustionary method it gives ouput as true or false 
//includes
console.log(myArr.includes(9));//false

//indexOf (to know the index)
console.log(myArr.indexOf(5))

//join() covert array to string
const newArr=myArr.join()

console.log(myArr);//[0,0,1,2,3,4,5,6]
console.log(newArr)//0,0,1,2,3,4,5,6 string



//slice(return section of array), splice
// console.log("A", myArr)A [0, 0, 1, 2,3, 4, 5, 6] 

const myn1=myArr.slice(1,3)
console.log(myn1);//[0,1] last string is not include
// console.log("B",myArr);B [0, 0, 1, 2,3, 4, 5, 6] 
  
const myn2=myArr.splice(1,3)
console.log("C" ,myn2)// C [0,1,2] original array is changed
console.log(myn2)// [0,1,2] last string is include




