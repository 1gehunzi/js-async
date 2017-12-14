let p1 = Promise.reject(1);

Promise.resolve(p1).catch(result => {
    console.log(result);
});