const user = {
    userName: "Safkat",
    price: 999,
    welcomeMessage: function () {
        console.log(`welcome to website, ${userName}`);

    }
}

user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// function chai() {
//     let userName = "liker"
//     console.log(this.userName);
// }
// chai()


// const chai = function () {
//     let userName = "sam"
//     console.log(this.userName);
// }
// chai()


// const chai = () => {
//     let userName = "sam"
//     console.log(this.userName);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//implecet returns
const addTwo = (num1, num2) => num1 + num2
const addThree = (num1, num2) => (num1 + num2)

console.log(addTwo(1, 2));

