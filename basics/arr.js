//let sum=(a,b)=>a+b;



function calc(funname,a,b){
    return funname(a,b);
}

let t= calc((a,b)=>a+b,10,20);
console.log(t);