const myArr= [0, 1, 2, 3,4, 5]

//when you copy a array it gives shallow copies
//shallow copies: same reference
//deep copies: properties do not share the same reference

const myHeros = ["shakiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr);
//array methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop() removes the last element
// myArr.unshift(0) //add element in the first index of the array
// myArr.shift() //remove the element from the first index of the array
// console.log(myArr.includes(20));
// console.log(myArr.indexOf(10));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join() //it makes the array in to string, elements remain same
// console.log(myArr);
// console.log(newArr);

//slice, splice
// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //only take 1 index but not the last index of array
// console.log(myn1);

// console.log("before splice",myArr);
// const myn2 = myArr.splice(1, 3)
// console.log("splice",myn2);
// console.log("after splice ", myArr);







