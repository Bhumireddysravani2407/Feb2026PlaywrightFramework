//spread oprator ...

let first=[1,2,3];
let second=[4,5,6];
let copy=[...first, ...second];//creates a copy

console.log(first);
console.log(second);
console.log(copy);

let results=first.concat(second);

console.log(results);