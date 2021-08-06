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

function logResultAndRandPromise(result) {
    log(`randPromise: ${result}`);
    return randPromise();
}

randPromise()
    .then((result) => logResultAndRandPromise(result))
    .then((result2) => logResultAndRandPromise(result2))
    .then((result3) => {
        log(`randPromise: ${result3}`);
    })
    .catch((error) => {
        logError(`error randPromise: ${error}`)
    });

// randPromise()
//     .then((result) => {
//         logResultAndRandPromise(result)
//             .then((result2) => {
//                 logResultAndRandPromise(result2)
//                     .then((result3) => {
//                         log(`randPromise: ${result3}`);
//                     });
//             });
//     })
//     .catch((error) => {
//         logError(`error randPromise: ${error}`)
//     });
