function asyncDemo(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 500);
    });
}

async function demo() {
    let r1 = await asyncDemo(1);
    let r2 = await asyncDemo(2);
    let r3 = await asyncDemo(3);

    console.log(r1, r2, r3);
}

demo();