const {randPromiseResolve, log, logError} = require('./utils');

Promise.race([
    randPromiseResolve(),
    randPromiseResolve(),
    randPromiseResolve(),
    new Promise(((resolve, reject) => setTimeout(reject, 1000, 'error race'))),
])
    .then((result) => log(result))
    .catch((error) => logError(error));
