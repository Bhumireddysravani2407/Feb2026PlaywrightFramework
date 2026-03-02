// //post decrement

// let p=2;
// console.log(p);//2

// let q=p--;

// console.log(p);//2-1=1
// console.log(q);//2

// //pre decrement

// let k=-89;
// let h=--k;
// console.log(k);//-89-1=-90
// console.log(h);//-88-1=-90

// let total=100;//101
// console.log(total++);//100

// console.log(++total);//102

// // console.log((++"hello"));

// let i=11;//new i=12-->13
// let j=i++ + ++i;// 11+13=24


// console.log(i);
// console.log(j);

let a=11;// new val a=12-->13
let b=22;//-->23->24

let c=a+b+ a++ + ++b + ++a + ++b;//11+22+11+23+13+24=104

console.log(a);
console.log(b);
console.log(c);

let s=10;// 11->10->11->10

let t= s++ - --s + ++s - s--;//10-10+11-11

console.log(s);
console.log(t);

let d1=1.5;//->2.5
let d2=2.5;// 3.5
let res=d1++ + ++d2;//1.5+3.5=5

console.log(d1);
console.log(d2);
console.log(res);