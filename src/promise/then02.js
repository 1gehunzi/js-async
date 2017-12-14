let promise = new Promise((resolve, reject) => {
    let random = Math.random() * 5;
    setTimeout(() => {
        resolve('success');
    }, 500);
});

promise.then(text => {
    console.log('resolve', text);
});