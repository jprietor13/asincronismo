const somethingWillHappen = function(){
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!! :D");
        } else {
            reject("Ouch!! :C");
        }
    });
}

somethingWillHappen()
.then(response => console.log("Hey!! :D"))
.catch(error => console.error("Error"));



const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('Success :D')
            }, 2000)
        } else {
            const err = new Error("Error :C");
            reject(err);
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(error => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log("Array of results", response);
})
.catch(error => {
    console.error(error);
})