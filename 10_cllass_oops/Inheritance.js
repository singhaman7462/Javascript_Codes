//Inheritance in JS
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

//TO inherit teacher class from user
class Teacher extends User{
    constructor(username, email, password){
        //Now super does the work of call method  it calls the parent class constructor and also passes the current context 
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe() //Output ->USERNAME is chai
const masalaChai = new User("masalaChai")

masalaChai.logMe() //Output->USERNAME is masalaChai

console.log(chai instanceof User); //Output->true

console.log(masalaChai.addCourse());//Output->masalaChai.addCourse is not a function
//Parent cant access the child methods
