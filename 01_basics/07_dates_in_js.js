let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(
    2001, 4, 5, 5, 3
)
let myCreatedDateFormat2 = new Date(
 "2023-01-14"
)
let myCreatedDateFormat3 = new Date(
 "2023-01-14"
)
// console.log(myCreatedDateFormat2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());

let newDate = new Date()
// console.log(newDate.getMonth());
console.log(`Todays time is: ${newDate.getTime()}`);




const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
const day = String(now.getDate()).padStart(2, '0');

const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

console.log(formattedDate);
