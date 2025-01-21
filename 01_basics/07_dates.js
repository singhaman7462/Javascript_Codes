 //Date Library
 let myDate= new Date();
 console.log(myDate);
 //Output ->2025-01-20T11:46:30.222Z ->yyyy-mm--dd-T-hh-mm-ss-ms


 //Other Versions of getting dates.
 console.log(myDate.toDateString());
 //Output -->Mon Jan 20 2025

 console.log(myDate.toISOString());
 //Output -->2025-01-20T11:50:32.584Z --> same as default 

 console.log(myDate.toJSON());
 //Output -->2025-01-20T11:51:30.910Z --> same as default

 console.log(myDate.toLocaleDateString());
 //Output -->1/20/2025 --> mm--dd--yyyy

 console.log(myDate.toLocaleString());
 //Output -->1/20/2025, 11:53:58 AM --> mm--dd--yyyy,hh--mm--ss

 console.log(myDate.toLocaleTimeString());
 //Output -->11:55:53 AM -->hh--mm--ss
 //toLocaleDateString() provides date only in local format.
 // toLocaleTimeString() provides time only in local format.
 //toLocaleString() provides date+time in local format.
 
 console.log(myDate.toString());
 //Output -->Mon Jan 20 2025 12:06:41 GMT+0000 (Coordinated Universal Time) --> detailed time with zone information.

 console.log(myDate.toTimeString());
 //Output -->Mon Jan 20 2025 12:06:41 GMT+0000 (Coordinated Universal Time) --> detailed time with zone information.


 console.log(typeof myDate);
 //Data type of Date is object.


 let myNewDate=new Date("1/20/2025");
 console.log(myNewDate);
 //Output is in the format 2025-01-20T00:00:00.000Z

 console.log(myNewDate.getTime());
//Output --> 1737456936351  Its in milliseconds till given date since the midnight at the beginning of January 1, 1970, UTC (the epoch)
console.log("Properties of given date")
console.log(myNewDate.getDay());
console.log(myNewDate.getDate());
console.log(myNewDate.getFullYear());
console.log(myNewDate.getMonth());
console.log(myNewDate.getHours());





 let dateInms=console.log(Date.now());
 //Output --> 1737456779334  Its in milliseconds till today since the midnight at the beginning of January 1, 1970, UTC (the epoch)


console.log(myNewDate.toLocaleString('default',{
    weekday:"long",
    month:"long"
}));
//Output --> January Monday -->A method where two parameters are given.1.Date format    2.Object to define the output format.






// *************************************

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})




