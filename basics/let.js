let b=20;//block scoped


function test(){

let b=30;
console.log(b);//30
if(true)
{
    let b=40;

    console.log(b);//30
}
console.log(b);//30

}
test();
console.log(b);//20

//hoisting is not possible in let

// console.log(num);
// let num=10;

let br="Chrome";

const numberofweekday=7;
numberofweekday=10;
console.log(numberofweekday);

console.log(object);