const {randPromiseResolve, log, logError} = require('./utils');

Promise.allSettled([
    randPromiseResolve(),
    randPromiseResolve(),
    randPromiseResolve(),
    Promise.reject('error all'),
])
.then((result) => log(result))
.catch((error) => logError(error));

