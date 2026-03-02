//slice() 

let number=[1,2,3,4,5,6];

//let num=number.slice(2,4);//index 2,3(excludes)

console.log(number);

let a= number.slice(3);

console.log(a);

//splice()--modifies the existing array

let cart=['apple','banana','orange','grape','kiwi'];

// let removed=cart.splice(2,2);

//let rem=cart.splice(-2,2);

cart.splice(1,0,'mango');

console.log(cart);

let numm=[4,5,6];
numm.splice(1,0,1,2,3,7,8);
console.log(numm);

//replace

let days =['mon','tue','wed','thurs','fri','sat'];
days.splice(2,2,'partyDay','Partythurs');
console.log(days);





