let p1 = Promise.resolve(1);

// p1.then(result => {
//     console.log(1);
// });

Promise.resolve(p1).then(result => {
    console.log(result);
});