//object

let user={
    name:'Abhi',
    age:30,
    status:'active'
}
//. notation
//[] notation

console.log(user.name);
console.log(user.age);
console.log(user['status']);

user.city='LA';

//user=null;

user.age=40;
console.log(user);

//ES6 

class Product{

    constructor(name,price){
        this.name=name;
        this.price=price;
    }

}

let p1= new Product('macbook',1000);
console.log(p1.name);
console.log(p1.price);

