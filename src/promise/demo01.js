/**
 * Promise 对象学习
 */
let p1 = new Promise((resolve, reject) => {
    let random = Math.random() * 5;
    setTimeout(() => {
        if (random > 4) {
            resolve('success');
        } else {
            reject('error');
        }
    }, 500);
});

p1.then(text => {
    console.log(text);
})
.catch(text => {
    console.log(text);
});