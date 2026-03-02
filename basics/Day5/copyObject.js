let user={

    name:'Ajay',
    city:'LA'
}

let person={...user};//create a shallow copy

person.city='Pune';

console.log(user);
console.log(person);

let u1=user;

u1.city='Banglore';


console.log(user);
console.log(person);
console.log(u1);
