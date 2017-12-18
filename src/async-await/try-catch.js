let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error');
    }, 1000);
});

async function  demo(params) {
    console.log(name);
    // try {
        let result = await p;
    // } catch (e) {
    //     console.log(e);
    // }
}

demo().catch(result => {
    console.log(result);
});