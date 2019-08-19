let aa = new Promise((res, rej) => {
    return res('aa executed');
})

let bb = new Promise((res, rej) => {
    return res('bb executed');
})

let cc = new Promise((res, rej) => {
    return res('y');
})


cc.then((res) => {
    if (res === 'y') {
        bb.then(result => console.log(result));
    }
    else {
        bb.then((result) => {
            console.log(result);
            aa.then((result) => {
                console.log(result);
            })
        })
    }
})