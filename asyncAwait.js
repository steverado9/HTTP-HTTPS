//How to use fetch()
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//     .then(console.log)

//How to use fetch() with async await
// async function fetchUser() { //an async function
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users'); //we await a promise and put in a variable resp
//     const data = await resp.json(); //we await the resp in json and put in a variable called data
//     console.log(data); 
// }
//fetchUser()

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//using promises
// Promise.all(urls.map(url => 
//     fetch(url).then(resp => resp.json())
// )).then(array => {
//     console.log('users', array[0])
//     console.log('posts', array[1])
//     console.log('albums', array[2])
// }).catch('oops');

//using aysnc and await on Promise.all
const getData = async function() {
    try {
        const [users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)  
    } catch (err) {
        console.log('ooops', err);
    }
}