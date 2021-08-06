let counter = 0;
function randPromise() {
    const time = Math.floor(Math.random() * 1000);
    counter++;
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve({counter, time});
        }, time);
    });
}

function call1() {
    return randPromise();
}

function call2(call1Result) {
    return randPromise()
        .then((result) => ({call1Result, call2Result: result}));
}

function call3(laterCallResult) {
    return randPromise()
        .then((result) => ({...laterCallResult, call3Result: result}));
}

call1()
    .then(call2)
    .then(call3)
    .then((result) => {
        console.log(JSON.stringify(result, null, 2));
    })
    .catch((error) => {
        logError(`error randPromise: ${error}`)
    });
