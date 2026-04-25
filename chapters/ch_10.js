const m_heros = ['thor', 'ironman', 'spiderman'];
const dc = ['superman', 'flash', 'batman'];

// m_heros.push(dc);
// console.log(m_heros);

// const all_heros = m_heros.concat(dc);
// console.log(all_heros);

// const all_heros = [...m_heros, ...dc];
// console.log(all_heros);


const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_arr = another_arr.flat(Infinity);
console.log(real_another_arr);


console.log(Array.isArray("Mradul"));
console.log(Array.from("Mradul"));
console.log(Array.from({
    name: 'Mradul'
}));// interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
