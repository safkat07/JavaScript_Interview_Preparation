//for loop

for (let i = 0; i < 10; i++) {

    if (i == 5) {
        // console.log("5 is the best number"); 
    }
    // console.log(i);
}

//nested loop
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);

    }
}

//for loop with array

let myArray = ['flash', 'batman', 'superman']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


//keywords in loop: break & continue


//break keyword

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("5 Deceected");
        break
    }
    // console.log(`the value is ${index}`);
}


//continue in for loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 Deceected");
        continue
    }
    console.log(`the value is ${index}`);
}