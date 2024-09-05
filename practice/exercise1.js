// Question-01:  Remove  falsy values fron an array
/* Falsy values are: false, zero, null, undefined, blank & NaN
*/
let test = ['🍎', false, '🍉', NaN,  0, undefined ,'🥕', null, '','🍌']
//ans
let fruits =  test.filter(Boolean)
console.log(fruits);
/*
explaination:
if we pass boolean in a function it returns true
*/

//Question-02: Convert any value to boolean
//ans
console.log(!!"safkat");
//or
console.log(Boolean(""));

/*
explaination:
just give !! before the value or just write the Boolean keyword before the value
*/

//Question-03: Resizing any array
let animals = ['cat', 'bat', 'dog', 'cow']
//ans
animals.length = 3
console.log(animals);
/*
explaination:
we can use the array's lenght property to resize the array
*/


//Question-04: How to flattern a multi-dimensional array
let numbers = [1, 2, [3, 4, 5], [5, 6]]
//ans
console.log(numbers.flat(Infinity));
/*
explaination:
we can use the flat methos to make the array flat
*/

//Question-05: short conditionals
const captain = "mash"
//ans
console.log(captain == "mash"? "yes" : "no");
/*
use of ternary operator
*/

//Question-06: replace all occurance of a string
const qoute = "React is a js framework & this framework is the most popular frontend framework right now"
//ans
console.log(qoute.replace(/framework/g, "library"));
/*
explaination:
use of regx, by default it will only replace the first occurrence of the string, we have to put a g to replace all the strings
*/


//Question-07: Log values with variable names smartly
const libray1 = "JQuery"
const libray2 = "React"
//ans
console.log({libray1});
console.log({libray2});


//Question-08: Know performance of a task
const startTIme = performance.now()
for (let i = 0; i < 50; i++) {
//   console.log(i);
}
const endTime = performance.now()
console.log(`Loop took ${endTime - startTIme} milliseconds to finish`);





