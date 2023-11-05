//DATE

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//about date read it

let myDate= new Date()// object and instancs
console.log(myDate);// OP is not readable
console.log(myDate.toString());// toString is method OP is little bit better
console.log(myDate.toDateString());// Sun Nov 05 2023
console.log(myDate.toISOString());// 2023-11-05T11:16:36.523z
console.log(myDate.toLocaleDateString());//11/5/2023
console.log(myDate.toLocaleString());// 11/5/2023, 11:18:54AM
//typeOf for Date
console.log(typeof myDate); // Object

let myCreatedDate=new Date(2023, 0,23)// 0 means jan in js month start from 0
console.log(myCreatedDate);// little bit dificult to understand
console.log(myCreatedDate.toDateString());// Mon Jan 23 2023

//ddmmyy
let createDate=new Date('2023-01-14')//ddmmyy month is 01 start
console.log(createDate.toLocaleString());//1/14/2023, 12:00:00AM

//mmddyy
 let createdate=new Date('01-14-2023')
 console.log(createdate.toLocaleString());// 1/14/2023, 12:00:00 AM

//Time Stamp used in quizes to check who did it first
let myTimeStamp=Date.now()
console.log(myTimeStamp);// 1699184142764 it in milli seconds

//to convert mili seconds 
console.log(createdate.getTime());// get time here in milli seconds

//to convert in seconds
console.log(Date.now()/1000);// 16775675.099 it is in decimal value so we don't in decimal 
console.log(Math.floor(Date.now()/1000));//16775675

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()); //10 
console.log(newDate.getDay()+1)//0

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday:"long"  // ctrl + space all properties will get suggestion 
})