let p = new Promise((resolve, reject) => {
    reject('error');
});
let resultP = p.catch(result => {
    console.log(result);
    return 123;
});

console.log(resultP);