function setUsername(username){
    //complex DB calls
    this.username=username;
    // console.log("function called");
}

function createUser(username,email,password){
    // setUsername(username);
//Their is no problem in function getting called but is not able to set the username.

// The function is getting called but as soon as the function is over it is removed from the call stack along with all the variables declared in it and also its execution context is removed.So it is not held in the outer function.

//To hold its reference use  setUsername.call(username);

//Still the problem will not be solved because it will set username to its own 'this' which will be removed with its execution context.So provide the execution context of the outer function.
    
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
}

const chai=new createUser("chai","chai@fb.com","123");
console.log(chai);
//Output-->createUser { email: 'chai@fb.com', password: '123' }

console.log(chai.username);//Undefined

