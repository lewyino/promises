const {randPromiseResolve, log, logError} = require('./utils');

Promise.any([
    randPromiseResolve(),
    randPromiseResolve(),
    randPromiseResolve(),
    new Promise(((resolve, reject) => setTimeout(reject, 1000, 'error race'))),
])
    .then((result) => log('result', result))
    .catch((error) => logError('error', error));
