const marvel_heros=["thor", "Ironman","spiderman"]
const dc_heros=["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3]); //[ 'superman', 'flash', 'batman' ]
//console.log(marvel_heros[3][1]);//flash

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros); 

//spread operator it spread the array
const all_new_heros=[...marvel_heros, ...dc_heros]
//console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)// it marge all array in one array
console.log(real_another_array)//[1,2,3,4,5,6,7,6,7,4,5]

 console.log(Array.isArray("Salma"));//False
 console.log(Array.from("Salma"));//convert as array [ 'S', 'a', 'l', 'm', 'a' ]
 
 
 console.log(Array.from({name:"Salma"}));//[]  ineresting
 let score1=100
 let score2=200
 let score3=300
 let score5=400
 //instead of from we can use of also
console.log(Array.of(score1,score2,score3));//[100, 200, 300]

 