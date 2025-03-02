class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    // createId(){
    //     return `123`;
    // }
    //THis method is now accessible to every instance of this class.But if we want to pose restrictions on this method then we have to declare it static.

    static createId(){
        return `123`;
    }
}

const aman=new User("Aman SIngh");
// console.log(aman.createId()); 
//Output->123 --->if it is not static
//Output->TypeError: aman.createId is not a function  ----> if it is static

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const rrr=new Teacher("rowdy rathore","rrr@iphone.com");
console.log(rrr.createId());
//Error because static props cannot be inherited also