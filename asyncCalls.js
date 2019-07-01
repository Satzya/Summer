let abc = Promise.resolve().then(() =>
    console.log(`Resolved`)).catch(() =>
        console.log(`Error`)).finally();

// let def = () => {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             console.log(`def`);
//             return;
//         }
//     })
// }

let def = Promise.resolve();


let ghi = Promise.resolve();

abc.then(() => {
    console.log(`abc.then ${abc.PromiseStatus}`);
    def.then(() => {
        console.log(`def.then`);
        ghi.then(() => console.log(`ghi.then`));
    })
});

