const {randPromiseResolve, log} = require('./utils');

async function getResult() {
    console.log('getResult');
    const result = await randPromiseResolve();
    log(result);
}

getResult();
