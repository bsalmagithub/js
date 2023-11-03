const name="Salma"// this is one method to delcare the variable 
const repoCount= 50 

//console.log(name + repoCount + "value"); 
// this old syntax 

//modern way syntax use this method readable syntax 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another method to delcare variable is 

const gameName= new String('Salma')// new keyword mean we are using object in js
console.log(gameName); //[string: "Salma"]
console.log(gameName[0]);//S

console.log(gameName.__proto__)//{}. there are two underscore _ _ 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//which character are present in index we can check

console.log(gameName.indexOf('l'));// to find the character position
//@@@@@@@ write the article how many string methods are there

/*substing*/
const newString= gameName.substring(0,3) // start , end  //here we can't give the -ve values
console.log(newString);// Sal

/* slic*/
const anotherString= gameName.slice(-5,5)// it start from end here using -ve values
console.log(anotherString)

/*trim*/
const newString1="   Salma    "// extra spaces
console.log(newString1); //  spaces   Salma   spaces
console.log(newString1.trim());// here it removes the space
// about read it 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim 


/*replace*/
const url="https://salma.come/salma%20babu"

console.log(url.replace("%20","-")); //(search_value, replace_value)

/*includes*/
console.log(url.includes("salma"))// if present it give true

/*split*/ //convert string to Array based on anything
console.log(url.split('/'))//['https:', '', 'salma.come', 'salma%20babu']
