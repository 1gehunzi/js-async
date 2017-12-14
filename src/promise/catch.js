let promise = new Promise((resolve, reject) => {
    let random = Math.random() * 5;
    setTimeout(() => {
        reject('reject');
    }, 500);
});

promise.catch(text => {
    console.log('reject', text);
});