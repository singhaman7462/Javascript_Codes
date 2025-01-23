//The story of scope start with let ,var and const
// Normal scope
// let a=10;
// var b=20;
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);
//Normal Output


//Start of the Problem
if(true){
    let a=10;
    const c=30; 
    var b=20;
    
}
//Ideally any variable declared in a scope should not be accessible outdsdie the dscope.

// console.log(a);
// //It gives an error that a is not defined so let works well.

// console.log(c);
// //It also gives an error that a is not defined so const works well. Declaration without any keyword also behaves like var only.So declaring with var is not good.

// console.log(b);
// //This case prints an output 20.Tis is the problem that var is even accessible outside the scope.



//Block Scope and Global Scope

let a=100;
if(true){
    let a=20;
    console.log(`Inner scope: ${a}`);
}

console.log(`Globval scope: ${a}`);
// Output -->Inner scope: 20
//Globval scope: 100
//a in global scope follows global declaration.Declaration inside a block scope is not implemented globally.



//Nested scopes and closures
function one(){
    const user="aman";

    function two(){
        const website="yt";
        console.log(user);
        //It can access the user variable as one() has a greater scope and two() is in its scope.
    }
    // console.log(website);//ReferenceError: website is not defined Website is defined in a smaller scope so cabt be accessed.
    two();
}

one();



//Function declaration methods
//Normal Deckartion
console.log(addone(5));//Output is 6 s0o it works fine even if called before declaration.
function addone(num){
    return num+1;
}

//Funcyion declared by storing in variuable
console.log(addtwo(9));//Output -->ReferenceError: Cannot access 'addtwo' before initialization
const addtwo=function(num){
    return num+2;
}
