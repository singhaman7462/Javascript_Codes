 //  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
 
 const num1=100;
 const num2=100.3;

 console.log(typeof num1); 
 console.log(typeof num2);
 //num1 and num2 both are number


 const temp=null;
 console.log(typeof temp);
 //null has a datatype object.


 const id=Symbol('1');
 const id2=Symbol('1');
 console.log(id===id2);
 //False because Symbol datatype create unique variables even if the value passed is same.



// Reference (Non primitive)
// Array, Objects, Functions
 const friends=["Aman,Sudhanshu,Ritesh,Sunil"];
 console.log(typeof friends);
 //Datatype of Array is Object

 let obj1={
    name:"Aman",
    age:23
 }
 console.log(typeof obj1);
 //Object datatype


 const func1=function(){
    console.log("Hello world");
 }
 console.log(typeof func1);
 //Datatype of function is function Object

 console.log(typeof id);
 //Datatype of symbol is symbol
 // https://262.ecma-international.org/5.1/#sec-11.4.3