// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async tasl
//     //DB calls, cryptohraphy, network calls, 

//     setTimeout(() => {
//         console.log('first promise created');
//         resolve()
//     }, 1000);


// });

// promiseOne.then(() => {
//     console.log('first promise consumed');
// })

// console.log();
// console.log();

// //other approach
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('second promise created ');
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log('second promise consumed');

// })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: "lang", email: 'lang@gmail.com' })
//     }, 1000);
// })

// promiseThree.then((user) => {
//     console.log(user);
// })


// //fourse promise

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let err = false;
//         if (!err) {
//             resolve({ name: 'safkat', password: '123' })
//         }
//         else {
//             reject('ERROR: everything went wrong')
//         }
//     }, 1000);
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('finally free');
// })



// //promise 5

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: 'javaScript', password: '123' })
//         }
//         else {
//             reject('error js went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);

//     }

// }

// consumePromiseFive()



// async function getUsers() {
//     try {
//         const res = await fetch('https://jsonplaceholder.org/users')
//         const data = await res.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getUsers()

