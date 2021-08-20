const {randPromiseResolve, log, logError, randPromiseRejected} = require('./utils');

Promise.any([
    randPromiseRejected(),
    randPromiseResolve(),
    randPromiseResolve(),
    new Promise(((resolve, reject) => setTimeout(reject, 1000, 'error race'))),
])
    .then((result) => log(result))
    .catch((error) => logError(error));
