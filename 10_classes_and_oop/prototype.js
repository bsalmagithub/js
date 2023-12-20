// let myName='salma'
// console.log(myName.length); //5     //length is a propetry

// let myName1='salma     '
// console.log(myName1.length); //10


// let myName2='salma     '
// console.log(myName2.trueLength);        //undefined
// //above code we want remove the extra spaces we can use trim() function every time we can't use like myName2.trim().length

let myHeros= ['thor', 'spiderman']

let heroPower={
    thor:'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}

Object.prototype.salma= function(){
    console.log(`salma is present in all objects`);  // output got
}

Array.prototype.heysalma=function(){
    console.log(`salma says hello`);
}

// heroPower.salma()
myHeros.salma()         //in heroPower and myHeros salma is available

myHeros.heysalma()  //present heysalma
// heroPower.heysalma()  //absent


//********Inheritance ******** *

const User={
    name: 'chai',
    email:'salma@123'
}

const Teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: 'js assignment',
    fullTime:true,
    __proto__:TeachingSupport   //this little bit old approch 
}
Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername='salmaAndCode    '

String.prototype.trueLenght=function(){
    console.log(`${this}`);     //salmaAndCode
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}  
anotherUsername.trueLenght()        //True length is : 12

'SALMA'.trueLenght()
'iceTea'.trueLenght()