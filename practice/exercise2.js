// Question: 01 Swapping values
let arr = [1, 2, 3, 4, 5];
//using temp variable
// let temp = arr[0]
// arr[0] = arr[4]
// arr[4] = temp
// console.log(arr);
//array destructuring method
[arr[0], arr[4]] = [arr[4], arr[0]]
console.log(arr);
//var swap
let a = 1;
let b = 2;
[a, b] = [b, a]
console.log(a, b);
//using math
b = a + (a = b) - b;
console.log(a, b);

//02 Question: how to create a click to copy button in html js

function copyToClipboard(str) {
    const element = document.createElement('textarea');
    element.value = str;
    document.body.appendChild(element);
    element.select()
    document.execCommand('copy');
    document.body.removeChild(element)
}
function handleClick() {
    let text = document.querySelector("#text")
    copyToClipboard(text)
}


//03 Question: Destructuring Aliases
const language = {
    name: "javascript",
    founded: 1995,
    founder: "Brendan Eich"
}
const { name: langName } = language
console.log(langName);

//04 Question: Get value as data Type
// const elem = document.querySelector('#number').valueAsNumber;


//05 Question: remove duplicate from array

const array = [1, 2, 3, 4, 4, 4, 3, 3, 2];

console.log([...new Set(array)]);


//06 Question: compare two arrays by value

const hasSameElements = (arr1, arr2) => {
return arr1.length === arr2.length && arr1.every((v,i) => v === arr2[i] )
}
console.log(hasSameElements([1,2], [1,2]));

//07 Question: shuffling array

const numbers = [1, 3, 67, 245, 235]
console.log(numbers.sort(() => Math.random() -0.5));

console.log(numbers);

//08 Question: Comma operator
let x = 1
x = (x++, x)
console.log(x);

let y = (2, 3)
console.log(y);

let z = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];
for (let i = 0, j = 3; i <= 3; i++, j--) {
    console.log("a[" + i + "][" + j + "] = " + a[i][j]);
  }





