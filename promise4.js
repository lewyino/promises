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

randPromise()
    .then((result) => {
        log(`randPromise: ${result}`);
        randPromise()
            .then((result2) => {
                log(`randPromise: ${result2}`);
                randPromise()
                    .then((result3) => {
                        log(`randPromise: ${result3}`);
                    });
            });
    })
    .catch((error) => {
        logError(`error randPromise: ${error}`)
    });
