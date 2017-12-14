let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

let p4 = Promise.reject(5);

/**
 * all 的数组里面的元素可以不是 Promise 的对象
 */
Promise.all([p1, p2, p3, 4]).then(result => {
    console.log(result);
});

Promise.all([p4, p1]).then(result => {
    console.log(result);
}).catch(result => {
    console.log(result);
});