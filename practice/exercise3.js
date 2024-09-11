//Question:1
//what wil be the output of the blew code
// console.log([] + []);
// //output will be blank
// console.log({} + []);
//output will be [object Object]


//Question:02
//what will be the output of the blew code
// function myFunction() {
//     return 'Bangladesh'
// }

// const string = myFunction`hello`;
// console.log(string);
//output will be Bangladesh
//when we use a tag template literal after a function, it calls the function automatically and passes the literal as an argument to this function


//Question:03
//how to make all the text contents of a website editable?
// document.body.contentEditable = true


//Question:04
//what will be the output of the blew code?

// function b() {
//     console.log(`the length is ${this.length}`);
// }

// let a = {
//     length: 10,
//     method: function (b) {
//         arguments[0]()
//     }
// }

// a.method(b, 5)


//Question:05
//what will be the output of the blew code?
// const a1 = "constructor";
// console.log(a1[a1](01));//output 1



//Question:06
//what will be the output of the blew code?
console.log(0.1 + 0.2); //0.300000004


//Question:07
//what will be the output of the blew code?
console.log(("Bangladesh").__proto__.proto__.proto__);//null

//Question:08
//Make a function that sorts its arguments without using loops

const myFun = function () {
    return [].slice.call(arguments).sort()
}

console.log(myFun(2, 3, 1));



