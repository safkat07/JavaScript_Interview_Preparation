const marvarHeros = ["thor", "Ironman", "Spiderman"]
const dcHeros = ["superman", "flash", "batman"]
// marvarHeros.push(dcHeros) //bad practice
// console.log(marvarHeros[3]);

// console.log(marvarHeros);
// const allHeros = marvarHeros.concat(dcHeros)
// console.log(allHeros);

// const allNewHeros = [...marvarHeros, ...dcHeros] //use spread operator to add arrays
// console.log(allNewHeros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array);
// let real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Safkat"))
console.log(Array.from("Safkat"))
console.log(Array.from({ name: "safkat" })) //canot object into array

let score = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score, score2, score3)); // truns anything in to array




