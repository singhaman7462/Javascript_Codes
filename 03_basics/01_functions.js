//Normal function declaration
function greet(){
    console.log("Hi Aman");
}
function add2nums(num1,num2){
    console.log(num1+num2);
}
add2nums(3,4);//Normal
add2nums(3,"4");//Output-->34 considers 3 as string.
add2nums(3,'a');//Output-->3a
add2nums(3,null);//Output-->3
//num1 and num2 given at the time of function declaration are claaed parameters and at the time of function calling are called arguments.


//Returning something from the function
function add2numsReturn(num1,num2){
    let result=num1+num2;
    return result;
    //Cant write anything after return statement
}
const result=add2numsReturn(3,9);
console.log(result);


//Different ways to give arguments
function logInUserMessage(username){
    if(username===undefined){
        return ("Please enter a username.");
     
    }
    return `Welcoming you Mr ${username}.`
}
console.log(logInUserMessage('Aman Singh'));
console.log(logInUserMessage());
//If nothing passed as argument the result is undefined.Its safe to check if user has passed something or not using if statement.


//Giving default value to parameter such that not passing any argument has no effect on it
function logInUserMessageDefault(username="Rohan"){
    if(username===undefined){
        return ("Please enter a username.");
     
    }
    return `Welcoming you Mr ${username}.`
}
console.log(logInUserMessageDefault());//Output -->Welcoming you Mr Rohan.



//Shopping cart problem  Rest Operator 
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500));
//Rest operator Output-->[ 200, 400, 500 ]

//Other ways 
function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,600,700));
//Output-->[ 500, 600, 700 ]   -->200 and 400 go into val1 and val2 respectively.rest of them goes into num1



//**************************************************



function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));