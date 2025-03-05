//About how js objects work behind the scenes 

console.log(Math.PI); // Output-> 3.141592653589793

// The question is  can we change the value of this Math.PI.If yes then how and if no then WHy not??

Math.PI=5;
console.log(Math.PI); //Output -> 3.141592653589793
//Couldnt overrride the value ? Why ?
//Lets check more about MAth.PI

const piDescriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(piDescriptor);
// //Output --->  {
//                   value: 3.141592653589793,
//                   writable: false,
//                   enumerable: false,
//                   configurable: false
//                }

//Object.getOwnPropertyDescriptor(Math,"PI") tells you about the hidden properties of the object
// NOw you see the writable property is set to false so you cant override the value of PI.
// even you cant change the writable value because it has numerous level of checks and barriers


//We can  also create our custom objects in js having such kind of properties and checks

const chai={
    name:"adrak chai",
    price:45,
    isAvailable:true,

    printMe:function(){
        console.log(this.name); 
    }
}

//Now does this custom object has its descriptor properties

console.log(Object.getOwnPropertyDescriptor(chai)); //Output->undefined  ->as you need to mention the property also whose descriptor you need

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

 //Output --->   {
//                   value: 'adrak chai',
//                   writable: true,
//                   enumerable: true,
//                   configurable: true
//                }


//since the object is custom made so we can also define our properties

chai.printMe();






Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
//Now we have changed the descriptor property  of chai n so now it cant be iterated since enumerable is false

//Trying to iterate on the object
for(let [key,value] of Object.entries(chai)){
    //Only for key value pairs whwerre pair is not a function
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);
    }
     
}

//Output --> price : 45
//           isAvailable : true
//name property is not the part of iteration now




