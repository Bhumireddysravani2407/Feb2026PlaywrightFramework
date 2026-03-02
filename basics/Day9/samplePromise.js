//Promise.race():
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 is done.....')
    }, 4000);
})    


let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2 is reject.....')
    }, 4000);
}) 


let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p3 is not done.....')
    }, 4000);
}) 

Promise.race([p1, p2, p3])
    .then(result => {
                    console.log(result);
    }).catch(error => {
                    console.log(error);
                })