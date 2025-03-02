//Creating a class and its constructor along wiht some extra methods.
// class User{
//     constructor(userName,email,password){
//         this.userName=userName;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new User("Chai","chai@intuitw.com","123@");
// //using new keyword calls the constructor of the class.Defining a constructor is not compulsory.

// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



//Behind the scene if we would not have the access to the class

function User(userName,email,password){
    this.userName=userName;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername=function(){
    return `${this.userName.toUpperCase()}`
}


const tea = new User("Chai","chai@intuitw.com","123@");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());