const tinderUser = new Object()

tinderUser.id = '01920'
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "somegmail@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Safkat",
            lastName: "sharif"
        }
    },

}

// console.log(regularUser.fullName);

//object methos

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) //merge all objects
const obj3 = {...obj1, ...obj2}
console.log(obj3);
// Object.keys(tinderUser) //to get all the keys of a object
// Object.values(tinderUser) //to get all the values of a object
const users = [{

}]


