/* this are very simple
console.log(2 >1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
*/
console.log("2" > 1);// value is true
console.log("02" > 1);// true
 // automatically js converted 2 as a number
 // whenever you are comparing value check they are same data type or not and don't compare the different data type values
 
 //avoid the below comparisons null and undefined
 console.log(null > 0); //false
 console.log(null == 0 );//false
 console.log(null >= 0);//true

//the reason is that an equality check == and comparisons > < >= <= work differenlty.
// comparisons convert null to a number, treating it as 0. that's why (3) null >= is ture and (1) null > 0 is false.

console.log(undefined == 0); //false  all CSSNamespaceRule

// === strick check
console.log("2" === 2 );