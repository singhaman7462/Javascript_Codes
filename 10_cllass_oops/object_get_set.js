//getter and setter in objects
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

//Here you call tea.email but the property is _email then how does it work.
//Behind the scenes this is the magic of getter and setter.When a getter or setter is made by name email then even though its a fucntion but it is considered as a property so it can be called by "tea.email"  no need to give () at the end. _email creates a variable email which is private. 