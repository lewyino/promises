let counter = 0;
function randPromiseResolve() {
    const time = Math.floor(Math.random() * 1000);
    return new Promise((resolve, rejected) => {
        const result = counter++;
        setTimeout(() => {
            resolve({result, time});
        }, time);
    });
}
function randPromiseRejected() {
    const time = Math.floor(Math.random() * 1000);
    return new Promise((resolve, rejected) => {
        const result = counter++;
        setTimeout(() => {
            rejected({result, time});
        }, time);
    });
}
function randPromise() {
    const time = Math.floor(Math.random() * 1000);
    return new Promise((resolve, rejected) => {
        const result = counter++;
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve({result, time})
                : rejected({result, time});
        }, time);
    });
}

function log(msg) {
    console.log('log', msg);
}

function logError(msg) {
    console.error('logError', msg);
}

module.exports = {
    randPromise,
    randPromiseResolve,
    randPromiseRejected,
    log,
    logError,
}
