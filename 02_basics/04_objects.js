//singleton
 
//declearing the objects
// const tinderUser= new Object()//{} singleton object
const tinderUser={}// {} non singleton obje
// console.log(tinderUser);//{} 
tinderUser.id="123abc"
tinderUser.name="Salma"
tinderUser.isLoggedIn=false
//console.log(tinderUser); //{ id: '123abc', name: 'Salma', isLoggedIn: false }


const regularUser={
    email:"salma@gmail.com",
    fullname:{
        userfullname:{
            firstname:"salma",
            lastname:"babu"
        }
    }
}
//console.log(regularUser.fullname);//{ userfullname: { firstname: 'salma', lastname: 'babu' } }

//console.log(regularUser.fullname.userfullname)//{ firstname: 'salma', lastname: 'babu' }


const obj1={1:'a', 2:'b'}
const obj2={3:'c', 4:'d'}
//const obj3={obj1, obj2}
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3=Object.assign({},obj1, obj2)// {} are optional
// const obj3=Object.assign(obj1, obj2)// we are not using this method that much
const obj3={...obj1, ...obj2}//use spread operator
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    },

]
users[1].email
console.log(tinderUser);//
console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Salma', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Salma' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true checking is key is present 



//desturting object

const course={
    coursename:'js',
    price:'999',
    courseInstructor:'salma'

}
// course.courseInstructor  // this one method

const {courseInstructor}= course // best method to extract
console.log(courseInstructor);//salma  now we can write directly 

//if courseInstructor is lengthy name we want short from 
const {courseInstructor: instructor} =course
console.log(instructor); //salma


//json api format
//in object
/*{
    'name':'salma',
    'coursename':'js',
    'price': 'free'
}
*/

//in Array
[
    {},
    {},
    {}
]

