class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    //Creating getter and setter
    get password(){
        // return this._password.toUpperCase();->error
        // return this._password.toUpperCase();

        //With getters we can return any value we want to the user like hashed values or anything
    }
    //if you have created a getter then setter also must be created
    set password(value){
    //    this.password=value;->error
    this._password=value;
    }

    
}

const aman=new User("aman@g.com","123");
//Error -->RangeError: Maximum call stack size exceeded
//Its like a race between construcotor and setter that who will set the value

//Solution -> use a different variable in setter and getter also.Now the constructor will only set email because for password anyway control was shifting to setter. IN getter also this different variable is used bercause the value is contained by this new variav=ble only.

console.log(aman.password);

//Now it is wprking

