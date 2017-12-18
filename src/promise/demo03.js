let p = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random > 0.4) {
        resolve('random > 0.4');
    } else {
        reject('random <= 0.4');
    }
});
p.then(result => {
    console.log('resovle', result);
}, result => {
    console.log('reject', result);
});