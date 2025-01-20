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