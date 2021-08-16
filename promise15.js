const {randPromiseRejected, log, logError} = require('./utils');

async function getResult() {
    log('getResult');
    try {
        const result = await randPromiseRejected();
        log(result);
    } catch(error) {
        logError(error);
    }
}

getResult();
