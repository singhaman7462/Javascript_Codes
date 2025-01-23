//This keyword
const user = {
  username: "aman",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to webd[site]`);
    //Without this it says username is not defined so it is necessary here to use this keyword.

    console.log(this);
    //Output-->{
    //   username: 'john',
    //   price: 999,
    //   welcomeMessage: [Function: welcomeMessage]
    // }  -->Gives the entire object as hte current context.It gives the current value of username whenver called .in first case it is aman and then it is john.

  },
};

user.welcomeMessage(); //Output--> aman, welcome to webd[site]  -->Working fine
//this keyword takes the reference from current conetetxt.for above exampple current context was the scope of the object.

user.username = "john";
user.welcomeMessage(); //Output -->john, welcome to webd[site]-->username was cjanged in its context so it accessed the changed context.

console.log(this);//Output-->> {} ->since it has no context now.



//Arrow function
function chai(){
    console.log(this);
}
chai();//printing 'this' inside a functuon is totlally different as it prints a whole lot of values about differnet propertiees of the funvtion.


function chai1(){
    let username="ram";
    console.log(this.username);
}
chai1();//Output is undefined for this.username.So 'this' is not working inside the functyions in the intende way.


//Arrow method of declaring function
const chai3=()=>{
    let username="ram";
    console.log(this);
}
chai3();//For arrow function also this.username is unsdefined.
//Printing this gives an {}.Its different as in normal functio it print a number of properties.

const add2=(num1,num2)=>{
    return num1+num2;
}
console.log(add2(5,8));
//Works as a normal functiom.

//Implicit Return
const Implicitadd2=(num1,num2)=> num1+num2;
//This syntax is of implicit return arrow function .Here js assumrs that its a single line funvtion where num1+num2 is meant to returned.no need to give {} or return keyword.can be wrapped in ()
//const Implicitadd2=(num1,num2)=> (num1+num2);
//{}->needs return keywprd
//()--> no return keyword
console.log(Implicitadd2(87,1));




