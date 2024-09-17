const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newN =myNums.map((num) => num+10 )


//chaining in array methods
const newNum = myNums.map((num) => {
   return num*10
}).map((num) => num+1).filter((num) => num> 50)

console.log(newNum);






