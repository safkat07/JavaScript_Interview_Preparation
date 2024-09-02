//singleton

//object literals
// Object.create
const mysym = Symbol("key1")
const jsuser = {
    name: "Safkat",
    [mysym]: "mykey1",
    age: 32,
    location: "Dhaka",
    email: "safkat@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['MOnday', "Sturday", "Sunday"]
}

// console.log(jsuser["lastLoginDays"]);

// console.log(typeof jsuser[mysym]);
// console.log(jsuser[mysym]);

// Object.freeze(jsuser)
// jsuser.email = "gpt@gmail.com"
// console.log(jsuser);

jsuser.greeting = function () {
    console.log("There is a greeting");
}
jsuser.greeting2 = function () {
    console.log(`helle user ${this.name}`);
}
console.log(jsuser.greeting2())



