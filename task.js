//1)JavaScript function that takes a callback and invokes it after a delay of 5 seconds.

const invokeCallback = (callback) => {
  setTimeout(callback, 5000);
}

function add() {
    let sum = 5 + 6;
    console.log(sum);
}

invokeCallback(add)

//2)JavaScript function that converts a callback-based function to a Promise-based function.
const convertCallbackToPromise = () => {
    function add() {
        let sum = 5 + 6;
        console.log(sum);
    }
    //promise
    const promise = new Promise((resolve, reject) => {
        setTimeout(add, 1000)
    })
    return promise.then(result => console.log(result))
}
convertCallbackToPromise();








