

let person={
    name:'tom',
    age:40,
    salary:34.55
}

console.log(typeof(person));

let personjson= JSON.stringify(person);
 console.log(personjson);
 console.log(typeof(personjson));

 console.log("==================");

 let personobj= JSON.parse(personjson);

 console.log(personobj);
 console.log(typeof(personobj));