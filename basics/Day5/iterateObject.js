//for ...in loop

let car={
    name:'BMW',
    price:'40'
};


for(let key in car){
    console.log(key +'  :  '+car[key]);
}

//object.keys(reference)

let userkeys=Object.keys(car);
console.log(userkeys);

let uservalues=Object.values(car);
console.log(uservalues);

for(let k in car){
    if(car[k]==='BMW')
    {
        console.log(k);
    }
}

let ent= Object.entries(car);

console.log(ent);



