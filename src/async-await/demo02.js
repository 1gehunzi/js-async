function sleep(wait) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(wait);
        }, wait);
    });
}

// sleep(100).then(result01 => {
//     return sleep(result01 + 100);
// }).then(result02 => {
//     return sleep(result02 + 100);
// }).then(result03 => {
//     console.log(result03);
// });

async function demo() {
    let result01 = await sleep(100);
    let result02 = await sleep(result01 + 100);
    let result03 = await sleep(result02 + 100);
    // console.log(result03);
    return result03;
}

demo().then(result => {
    // result03;
    console.log(result);
})