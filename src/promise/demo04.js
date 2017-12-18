let p = new Promise((resolve, reject) => {
    reject('error');
});

let resultP = p.then(null, result => {
    console.log(result);
    // resolve(undefined);
    return 123;
});

// console.log(resultP);
resultP.then(tmp => {
    console.log(tmp);
});