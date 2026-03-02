 function startMachine() {
     return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. Machine started');
            resolve();
        }, 5000);
    });
}

function boilWater() {
   return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('2. Water bolied');
            resolve();
        
        }, 3000);
    });
}


function addCoffeePowder() {
    return new Promise((resolve) => {
       setTimeout(() => {
        console.log('3. Coffee powder added');
        resolve();
    }, 1500);
    
    });
   
}

function pourInCup() {
   return new Promise((resolve) => {
       setTimeout(() => {
        console.log('4. Poured in Cup');
        resolve();
    }, 2000);
    
    });
}

function serveCoffee() {
    return new Promise((resolve) => {
       setTimeout(() => {
        console.log('5. Coffee is served');
        resolve();
    }, 1000);
    
    });
}

//calling the function using .then() chaining:
//     .then(boilWater)
//     .then(addCoffeePowder)
//     .then(pourInCup)
//     .then(serveCoffee)
//     .then(result => console.log('enjoy ur coffee!!!'))

//async - await:

function sum(a,b)
{
    return new Promise((resolve) => {
       setTimeout(() => {
        console.log('addidytion is done');
        resolve();
    }, 500);
    
} )
}

async function makeCoffee() {
    //async steps:
    await startMachine();//5secs -- done
    await boilWater();
    await addCoffeePowder();
    await pourInCup();
    await serveCoffee();
    sum(2,2);

    console.log('enjoy ur coffee!!!');
}
    
makeCoffee();

