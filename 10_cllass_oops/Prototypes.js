let myName="Aman     ";
console.log(myName.length);
//It give 9 as result due to extra spaces .Now can we add a function to the myName that tells its true length??????
//Can we create such a custom function that can be called for any string?????????----> e.g. myName.truelength();



let myHeros=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
       console.log(`the power of spis=derman is to ${this.spiderman}`);
       
    }
}


//How to create a method that can be accessible by all objects
//A method can be injected in the prototype of upmost level of hierarchy i.e. Object.prototype.

Object.prototype.omnipotentMethod=function(){
    console.log("This method is present everywhere because it is a protype of Object and everything in js is ultimately an object");
}

// heroPower.omnipotentMethod();      //It works

// myHeros.omnipotentMethod();
//It again works as ultimately array is also an object.


//We added a method to object protoptype and it was called by an array but if we added a method in arrray prototyoe will it be accessible by the object???????????????


Array.prototype.arraySpecific=function(){
    console.log("This method is inserted in the prototype of the array");
}
myHeros.arraySpecific();//Array will obviously have its access

// heroPower.arraySpecific();
//It gives an error.So it means js only looks for the method in the upper levels of the hierarchy


//Inheritance

const user={
    name:"chai",
    email:"chai@google.com"
}

const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false
}

const taSupport={
    makeAssignment:true,
    isFullTime:true,

    //Now if i want taSupport to have the attributes of teachingSupport also i.e. It should inherit from teacher

    __proto__:teachingSupport
}

//You can also assign the inheritance out of the object definition like a normal prop
teacher.__proto__=user;


//Modern syntax for the prototypoal inheritance
Object.setPrototypeOf(teachingSupport,teacher);
//teachingSupport is inherited from teacher



//Now the solution of our first problem
String.prototype.trueLength=function(){
    console.log(`The actual length of the string is ${this.trim().length} `);
}

myName.trueLength();