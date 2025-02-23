//How to create a promise
//synchronous promise
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('stuff worked');
//     } else {
//         reject('error, it broke');
//     }
// })
//promise.then(result => console.log(result));
//console.log(promise);
// promise
//     .then(result => (result + '!'))
//     .then(result2 => {
//         throw Error 
//         console.log(result2)
//     })
//     .catch(() => console.log('error!'))


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'HIII')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'POOKIE')
// })

// const promise4  = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'Is it me you are looking for?')
// })

// Promise.all([promise, promise2, promise3, promise4])
//  .then(values => {
//     console.log(values);
//  })


//Asynchronous Promises
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map((url) => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'))