//reduce() method executes a user-supplied reducer callback function on each element of the array

const array1=[1, 2, 3, 4]
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
    //first accumulator value is = initialValue , currentValue = each num , after one iteration it takes the actual value and add next eachnum  0+1= 1+2 = 3 +3 = 6 + 4 = 10
)
console.log(sumWithInitial);


const myNums= [1,2,3]
// const myTotal= myNums.reduce(function (acc,currval){
//     //console.log(`${acc} and ${currval}`);
//     return acc + currval

// },0)
// console.log( myTotal);  //6

const myTotal= myNums.reduce( (acc,curr) => acc + curr,0)
console.log( myTotal); //6

const shoppingCart=[
    {
        itemName:'js course',
        price: 3000
    },
    {
        itemName:'python course',
        price: 3000
    },
    
    {
        itemName:'Dev course',
        price: 7000
    },
    {
        itemName:'Data Science course',
        price: 3000
    },
    
]

const pricetopay=shoppingCart.reduce( (acc, item) => (acc+ item.price),0)
console.log(pricetopay); //16000

