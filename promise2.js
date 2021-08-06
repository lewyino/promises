function randPromise() {
    return new Promise((resolve, rejected) => {
        const rand = Math.random();
        if (rand < 0.5) {
            resolve(rand);
        }
        rejected(rand);
    });
}

randPromise()
    .then((result) => console.log(`1 ${result}`))
    .catch((error) => console.error(`1 error: ${error}`));

randPromise()
    .then((result) => console.log(`2 ${result}`))
    .catch((error) => console.error(`2 error: ${error}`));