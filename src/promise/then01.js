let promise = new Promise((resolve, reject) => {
    let random = Math.random() * 5;
    setTimeout(() => {
        if (random > 3) {
            resolve('success');
        } else {
            reject('error');
        }
    }, 500);
});

promise.then(text => {
    console.log('resolve', text);
}, text => {
    console.log('reject', text);
});