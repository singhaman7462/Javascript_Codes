//IIFE-->Immediately Invoked Function Expressions
(function chai(){
    //Named IIFE
    console.log(`DB connected`);
})();

( () =>{
    //Normal IIFE
    console.log(`iife created thorough an arrow function`);
})();
//This is the suyntax to write a IIFE .Wrap your funcn in a () and give another () for executipn.
//  ';' is must because for in iife, js doesnt know when to end the exectuoion.So without senicolon it will not stop and next statements wont be ececuted.

//How to pass paraneter in arrow function
( (name) =>{
    console.log(`iife created thorough an arrow function and parameter passed was ${name}`);
})('Aman');
//Works fine .Consider it as a normal function where second () is the calling parantheses.