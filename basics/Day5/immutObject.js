

let user={

    name:'Ajay',
    city:'LA',
    age : 40

}

// Object.freeze(user);// can not add or update

// user.name='TOM';
// user.age=45;

console.log(user);

Object.seal(user);

user.name='TOM';
user.age=60;

console.log(user);
