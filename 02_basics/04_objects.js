//Object Singletons using constructors
const newUser=new Object();
console.log(newUser);
//Output -->{}

//Same output even if declared without constructor
const newUser1={};
console.log(newUser1);
//Output -->{}

//The only difference between both the object is that the constructor method creates a singleton object while the without constructor method create an object literal.
newUser.id="11db";
newUser.name="Samay";


//Nesting of Objects and their accessing
const regularUser={
 email:"singh38ndhsl@falana.com",
 fullname:{
    username:{
        firstname:'Aman',
        lastname:'Singh'
    }
 }
}
console.log(regularUser.fullname.username.firstname);
//Output --> Aman


//Combining objects

const obj1={a:1,b:2};
const obj2={c:3,d:4};

//Method 1
const obj3={obj1,obj2};
console.log(obj3);
//Output
//{ obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }
//didnt get intended result .

//Method 2
const obj4=Object.assign(obj1,obj2);
console.log(obj4);
//Output -->  { a: 1, b: 2, c: 3, d: 4 }
/* We got the intended result ....follow the written notes.*/





/*   ***************************************
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
    */