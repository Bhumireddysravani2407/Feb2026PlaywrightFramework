++ operator

let a=1;
console.log(a);

let b=a++;//post increment

console.log(a);

console.log(b);

let c=1;
console.log(c);

let d=++c;//pre increment

console.log(c);

console.log(d);

let m=-99;
console.log(m);//-99
let n=m++;
console.log(m);//-98
console.log(n);//-99

let x=-999;
let y=++x;
console.log(x);//-998
console.log(y);//-998

let a1=-10;//updated a1=-9
console.log(a1);//-10

let b1=a1++;//b1=-10, -10+1=-9
console.log(a1);//-9
console.log(b1);//-10

let c1=++a1;//a1=-9. -9+1=-8
console.log(a1);//-8
console.log(c1);//-8


