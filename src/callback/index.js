function suma(a, b){
    return a + b;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(12, 12, suma));

function dateNow(callback){
    console.log("Fecha de hoy: ")
    setTimeout(() => {
        let data = new Date;
        callback(data);
    }, 3000);
}

function printData(dateNow){
    console.log(dateNow);
}

dateNow(printData);