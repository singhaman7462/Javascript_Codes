// Normal objects in js are clalled object literals.Its a collection of properties and methods.
//Object Literal

const userName={
    name:'Aman Singh',
    age:22,
    signedIn:true,

    logIn:function(){
        console.log(`${this.name} logged in`);
        //If you want to access the props of this object then you have to use this keyword otherwise it will give an error as it will not be able to figure out whose props it has to access

        //'This' is the Context keyword

       console.log(this);
       //Output->>
    //    {
    //     name: 'Aman Singh',
    //     age: 22,
    //     signedIn: true,
    //     logIn: [Function: logIn]
    //   }
    
    //Its the current context we get by the printing 'this' keyword.It changes as the context changes.

    },

    

}

// console.log(userName.name);
// console.log(userName.logIn());


//Global Context

// console.log(this);//Output is {} -> empty object as there is nothing in the context now.
//If this is printed in a browser we get the window context.This is called the Global Context.


//Constructor function 
// A function used to create more instance sof an object.->JS has new keword used for the constructor.

//Best pracrice is to have the same names of parameters as the props.

function user(name,age,signedIn){
    this.name=name;
    this.age=age;
    this.signedIn=signedIn

    return this;
    //Not necessary to be returned.It is implicitly returned
}

const newUser=new user('Akaash',20,false);
// console.log(newUser);
//A long object is printed as we have returned this from the consrtrructor so it prints the entire context.

//So we cant use the method like this as a constructor because if you create any other object with same constructor then the context changes and even after printing the old object it prints the context of new objext.


//So the soln to this prblm is to use the constructotr funcn i.e. 'new' keyword.It creates a new copy of the object and doesnt affect the old ones.

const user2=new user('Ritik',29,true);
// console.log(user2);

//Output on printing both the objects
// user { name: 'Akaash', age: 20, signedIn: false }
// user { name: 'Ritik', age: 29, signedIn: true }


//We can access the constructor
console.log(user2.constructor);
//Output->>[Function: user]   ->So it is merely a reference of the object .



