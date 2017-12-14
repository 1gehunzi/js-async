/**
 * promise 的状态会凝固
 * 永远收不到 reject 的状态
 */
let promise = new Promise((resolve, reject) => {
    resolve(12);
    console.log('new Promise((resolve, reject)');
    reject('error');
});

promise.then(result => {
    console.log(result);
});

promise.catch(result => {
    console.log(result);
});