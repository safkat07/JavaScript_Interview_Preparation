//ForOf Loop

const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    // console.log(`for of loop value: ${value}`);
}

const greetings = 'Hello, World!'

for (const greet of greetings) {
    // console.log(`for of greeting ${greet}`);
}

//Maps
const map = new Map()

map.set("BN", "Bangladesh")
map.set("UK", "United Kingdom")
map.set("FR", "France")

//if we use for of loop in the map
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    'game1': "NFS",
    "game2": "Spiderman"
}

for (const [key, value] of myObj) {
    // console.log(value); //give error myobj is not iteraable
}


