const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Success"), 2000)
        : reject(new Error("Error"));
    });
}

const doSomethingAsyncAwait = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log("Before");
doSomethingAsyncAwait();
console.log("After");

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch(error) {
        console.error(error);
    }
}

console.log("Before 1");
anotherFunction();
console.log("After 1");