function multipyby5(num){
    return num*5;
}

//Basic way of callng a function
multipyby5(3);

//Other way
console.log(multipyby5.prototype);//Output-> {} Empty because there is no properties of this method but if in fututre it gets some the prototypte will print those.Prototype genrrallly prints the this context of the method.


//So a function generally behaves like a funcn but we can make it behave like an object.It is because in js everything is ultimately an object.This is called prototypal inheritsnce.In this the js keeps on going up in the hierarchy until it gets the answer.But nothing is beyond the object.


//How Prototypal Inheritance Works:
// -->Every JavaScript object has an internal property called [[Prototype]], which links to another object.
// -->If a property or method is not found on an object, JavaScript looks up the prototype chain to find it.
// -->The Object.create() method allows us to create a new object with a specified prototype.



function createUser(username,score){
    this.username=username;
    this.score=score;
}

//As obhject has many inbuilt funcns in the prototype so can we also add custom bi=uilt functions to an object as the prototype.------>>>>Yes
createUser.prototype.increment=function(){
    this.score++;
    //If 'this' not written then js cant figure out that out of so many instances whose score hass to be incremented.
}
createUser.prototype.printMe=function(){
    console.log(`score of ${this.username} is ${this.score}`);
    
}

// const chai=createUser("chai",25);
// const tea=createUser("tea",250);
//When we print the chai.username it says that chai is undefined .It is because new keyword is not used.


const chai=new createUser("chai",25);
const tea=new createUser("tea",250);
console.log(chai);

chai.increment();
chai.printMe();
//Output -->createUser { username: 'chai', score: 25 }
        //  score of chai is 26





//Notes provided by Hitesh sir about New keyword
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


