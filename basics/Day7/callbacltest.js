//callback : passing the function to another  function as parameter

//let sum= (a,b)=>a+b;
let sub=(a,b)=>a-b;
let mul=(a,b)=>a*b;
let div=(a,b)=>b/a;

let addition = function (a, b) {
    return a + b;
}

// function summing(a, b) {
//     return a + b;
// }


function calc(a,b,callbck)
{
    return callbck(a,b);//addition(10,200);
   
}

let s= calc(10,20,addition);//call back function /call by function
console.log(s);

