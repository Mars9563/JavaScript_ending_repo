const marvel_heros = ["thor", "IronMan", "spiderMan"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// a way of adding arrays together

// const allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros);

// a good way of adding arrays together

const all_new_heros = [...marvel_heros, ...dc_heros];// can add more arrays
console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
// you give the depth in this parameter
console.log(real_another_array);


console.log(Array.isArray("Mradul"));
console.log(Array.from("Mradul"));
console.log(Array.from({name: "Mradul"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));