let promise = new Promise((resolve, reject) => {
    let random = Math.random() * 5;
    setTimeout(() => {
        reject('error');
    }, 500);
});

promise.then(null, text => {
    console.log('reject', text);
});