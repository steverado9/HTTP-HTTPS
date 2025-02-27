// //object spread operator
// const animals = {
//     tiger: 23,
//     lion: 5,
//     monkey: 2,
//     bird: 49
// }

// function objectSpread(p1, p2, p3) {
//     console.log(p1);
//     console.log(p2);
//     console.log(p3); 
// }

// const { tiger, lion, ...rest } = animals;

// objectSpread(tiger, lion, rest);

//2) Finally
// const links = [
//     'https://swapi.dev/api/films/1',
//     'https://swapi.dev/api/films/2',
//     'https://swapi.dev/api/films/3',
//     'https://swapi.dev/api/films/5'
// ]
// Promise.all(links.map(link => {
//     return fetch(link).then(people => people.json())
// }))
// .then(array => {
//     console.log('1', array[0])
//     console.log('2', array[1])
//     console.log('3', array[2])
//     console.log('4', array[3]) 
// })
// .catch(err => console.log('ughhh fix it!', err))
// .finally(() => console.log('extra'))


//for await of

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]


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

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    console.log(arrayOfPromises);
    
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    } 
}
getData2()