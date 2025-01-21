//Singleton-->If declared by constructor we get a singleton-->object.create



//object literals -->without constructors
const Jsuser={
    name:"Aman",
    age:18,
    location:"Jaipur",
    lastLoginDays:["Monday,Tuesday"]
}
//Two ways to access the values of object
console.log(Jsuser.location);
console.log(Jsuser['location']);
//2nd method is important as if object declared as
const newJsuser={
    "full name":"Aman"
}
//Now you cant access .full name as it is declared in a format of string having a space between them
console.log(newJsuser["full name"]);


//Adding a symbol as the key of the object.Focus on syntax to add it
const mysym=Symbol("key1");
const Jsuser1={
    name:"Aman",
    age:18,
    location:"Jaipur",
    lastLoginDays:["Monday,Tuesday"],
    [mysym]:"mykey1"
}
console.log(Jsuser1);
//Output-->
/*{
  name: 'Aman',
  age: 18,
  location: 'Jaipur',
  lastLoginDays: [ 'Monday,Tuesday' ],
  [Symbol(key1)]: 'mykey1'
}*/  // Explicitly mentioned thatit is a symbol.
console.log(typeof Jsuser1.mysym);    //  -->You cannot access like this
console.log(Jsuser1[mysym]);// Output is mykey1


//Adding a function in the object as an element.
Jsuser1.greeting=function(){
    console.log("Hello India");
}
console.log(Jsuser1.greeting); //Output-->[Function (anonymous)]  -->You didn't call the function you just printed it as a variable. () should be added to call.
console.log(Jsuser1.greeting());
/* Output -->Hello India
undefined
*/


//A function of any object can access that object's properties using this keyword
Jsuser1.greeting2=function(){
    console.log(`Hello my friend ${this.name}`);
}
console.log(Jsuser1.greeting2());
//Output-->Hello my friend Aman
//undefined
//*********************************** 




// **************************************


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());