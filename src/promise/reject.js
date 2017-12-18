let p = Promise.reject(123);

// console.log(p);
p.then(result => {
    console.log('then', result);
}).catch(result => {
    console.log('catch', result);
});