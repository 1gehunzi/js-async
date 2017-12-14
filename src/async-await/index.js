async function demo(params) {
    let result = await new Promise((resolve, reject) => {
        resolve('hello promise');
    });
    console.log(result);
}

console.log('async demo before');
demo();
console.log('async demo after');