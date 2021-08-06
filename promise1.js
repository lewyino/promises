const promise = new Promise((resolve, rejected) => {
    const rand = Math.random();
    if (rand < 0.5) {
        resolve(rand);
    }
    rejected(rand);
});

promise
    .then((result) => console.log(`result: ${result}`))
    .catch((error) => console.error(`error: ${error}`));

promise
    .then((result) => console.log(`2 ${result}`))
    .catch((error) => console.error(`2 error: ${error}`));
