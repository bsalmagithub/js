const accountId= 144553
let accountEmail="Salma@google.com"
var accountPassword="12345"
accountCity="Goa" //this is not prefer

let accountState; // value is undefined


// accountId=2 not allowed
accountEmail="hc@hc.com"
accountPassword="2122221"
accountCity="blore"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and fuctional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity , accountState])
