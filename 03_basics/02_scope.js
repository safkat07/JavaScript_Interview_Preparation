// if (true) {
//     var c = 30
// }
// let a = 10
// const b = 20
// console.log(a);
// console.log(b);
// console.log(c);

//nested scope

// function one() {
//     const userName = "Safkat"

//     function two() {
//         const website = "youtube"
//         console.log(userName);
//     }
//     // console.log(website);// error outer function can not exxcess innerfunction
//     two()
// }
// one()

if (true) {
    const userName = "Liker Billu"

    if (userName === "Liker Billu") {
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);

}

// console.log(userName);


// important topic
console.log(add1(5));

function add1 (num) {
return num + 1
}

const add2 = function (num) {
    return num + 2
}
console.log(add2(2));




