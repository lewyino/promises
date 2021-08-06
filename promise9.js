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

function wrappedRandPromise(index, sthToLog) {
    if (sthToLog) {
        console.log(index, sthToLog);
    }
    return randPromise();
}

// chained call
wrappedRandPromise(1)
    .then((result) => {
        return wrappedRandPromise(2, result);
    })
    .then((result) => wrappedRandPromise(3, result)
        .then((result) => {
            console.log(result);
            return result;
        }))
    .then((result) => wrappedRandPromise(4, result))
    .then((result) => {
        return wrappedRandPromise(5, result);
    })
    .then(wrappedRandPromise(6))
    .catch((error) => {
        logError(`error randPromise: ${error}`)
    });
