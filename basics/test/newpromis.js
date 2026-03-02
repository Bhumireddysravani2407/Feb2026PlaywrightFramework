//promise declaration

let myPromise = new Promise( (resolve, reject)=> {
    let success = false;

    if (success) {
        resolve('task is done')
    }
    else {
        reject('task is not done')
    }
});

myPromise.then(function (result) {
    console.log("Success: " + result);
}).catch(function (error) {
    console.log("error: " + error);
});

//returning a promise in a method
let userPromise = new Promise((resolve, reject) => {
    let user = { name: 'naveen', age: 20 };
    resolve(user);
});


function fetchUser() {
    return userPromise;
}

fetchUser().then(result => {
    console.log(result);
})

userPromise.then(result => {
    console.log(result);
});



//finally block

let personPromise = new Promise((resolve, reject) => {
    let flag = false;

    if (flag) {
        resolve('pass');
    }
    else {
        reject('fail');
    }
});

personPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('finally block');
});

//nested promise

function doubleAmountAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    })
}

//call the function:
doubleAmountAfter2Seconds(5)
    .then(result => {
        console.log(result);//10
        return doubleAmountAfter2Seconds(result);//10
    }).then(result => {
        console.log(result);
    })
    

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(result => {
    console.log(result);
})    


Promise.race([
    new Promise((resolve) =>  setTimeout(()=>  resolve('taskA')  , 1000)),
    new Promise((resolve) =>  setTimeout(()=>  resolve('taskB')  , 500))
]).then(result => {
    console.log(result);
})