// let myName = "sharif             "
// let myName2 = "sadli             "
// // console.log(myName.trueLength());

// let myHero = ['hulk', 'thor']

// let heroPower = {
//     thor: 'hammer',
//     hulk: 'sling',
//     getThorPower: function () {
//         console.log(`hulk is panga ${this.hulk}`);
//     }
// }

// Object.prototype.hitesh = function () {
//     console.log(`he is present in all object`);

// }

// Array.prototype.heyDol = function () {
//     console.log('dol aci re pio');

// }
// // myHero.hitesh()
// myName.hitesh()

//inheritance


const user = {
    name: 'sadli',
    email: 'sadli@gmail.com'
}

const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = 'dol           '

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);

}

anotherUserName.trueLength()

'thisisa            name              '.trueLength()