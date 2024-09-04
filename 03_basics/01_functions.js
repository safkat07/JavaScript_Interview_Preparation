
function sayMyName() {
    console.log("s")
    console.log("a")
    console.log("f")
    console.log("k")
    console.log("a")
    console.log("t")
}
// sayMyName()
function addNum(num1, num2) {//parameters
return (num1+num2);
}
const res = addNum(1, 3) //arguments
// console.log("result: ", res);
function loginUserMessage(userName) {
    if (!userName ) {
return "enter a valid user name"
    }
return `${userName} just logged in`
}
const login = loginUserMessage("sdf")
// console.log(login);

//cart style

function calculateCartPrice(val1, val2, ...num1) {
return num1
}
// console.log(calculateCartPrice(200,400,500, 2000));

const user = {
    userName: "safkat",
    price: 199
}

function handleObject(anyObject) {
console.log(`usernamer is ${anyObject?.userName} price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    userName: "sam",
    price: 399
})

const myNewArr = [200, 400, 100, 600]
function returnSecondValue(getArray) {

    return getArray[1]

}
console.log(returnSecondValue(myNewArr));


