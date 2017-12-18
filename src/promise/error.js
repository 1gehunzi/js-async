// try {
    let p = new Promise((resolve, reject) => {
        throw new Error('im error');
        // reject(new Error('im error'));
    });
// } catch (e) {
//     console.log('catch', e);
// }

p.catch(result => {
    console.log(result);
});