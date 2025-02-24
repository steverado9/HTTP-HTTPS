//1)JavaScript function that takes a callback and invokes it after a delay of 5 seconds.

const invokeCallback = (callback) => {
    setTimeout(callback, 5000);
}

function add() {
    let sum = 5 + 6;
    console.log('Question1', sum);
}

invokeCallback(add)

//2)JavaScript function that converts a callback-based function to a Promise-based function.
const convertCallbackToPromise = () => {
    function add() {
        let sum = 5 + 6;
        console.log('Question2', sum);
    }
    //promise
    const promise = new Promise((resolve, reject) => {
        setTimeout(add, 1000)
    })
    return promise.then(result => console.log(result))
}
convertCallbackToPromise();
//3)JavaScript function that makes an HTTP GET request to 'https://dummyjson.com/quotes' 
// and returns a Promise that resolves with the response data.
const getHttpRequest = (url) => {
    return fetch(url).then(data => console.log('Question3', data))
}
getHttpRequest('https://dummyjson.com/quotes');

//4)JavaScript function that takes an array of URLs
//  ('https://dummyjson.com/quotes/1', 'https://dummyjson.com/quotes/2', 'https://dummyjson.com/quotes/3') 
// and returns the results of each URL in parallel using Promises.
const url = [
    'https://dummyjson.com/quotes/1',
    'https://dummyjson.com/quotes/2',
    'https://dummyjson.com/quotes/3'
]
const getResultOfUrl = async (arrUrls) => {
    const arrOfPromises = arrUrls.map(arrUrl => fetch(arrUrl))
    for await (let request of arrOfPromises) {
        const data = await request.json();
        console.log('4', data);
    }
}
getResultOfUrl(url);

//5)JavaScript function that fetches data from API 'https://dummyjson.com/quotes/987654321' 
// and retries the request 3 times if it fails.
const fetchDataFromApi = async (url) => {
    try {
        const resp = await fetch(url)
        const data = await resp.json();
        console.log(data);
    } catch (err) {
        console.log('ooops', err);// was not able to catch the error
    }
    
    
}
fetchDataFromApi('https://dummyjson.com/quotes/987654321');









