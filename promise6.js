let counter = 0;
function randPromise() {
    const time = Math.floor(Math.random() * 1000);
    counter++;
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(counter);
        }, time);
    });
}

function log(msg) {
    console.log(`log ${msg}`);
}

function logError(msg) {
    console.error(`logError ${msg}`);
}

function saveResultAndRandPromise(result) {
    result = Array.isArray(result) ? result : [result];
    return randPromise()
        .then((result2) => [...result, result2]);
}

randPromise()
    .then(saveResultAndRandPromise)
    .then(saveResultAndRandPromise)
    .then((result3) => {
        log(`randPromise: ${result3.join(' ; ')}`);
    })
    .catch((error) => {
        logError(`error randPromise: ${error}`)
    });
