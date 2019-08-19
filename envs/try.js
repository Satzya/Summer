let def = async (gg) => {
    console.log(gg);
    let obj = {
        'key': 'value'
    }
    return Promise.resolve(obj);
}

async function uu() {
    let gg = [1, 2, 3];
    if (false)
        return Promise.resolve();
    else
        return Promise.reject('undef');
}

let abc = async () => {
    try {
        let vv = await uu();
        let rr = await def('abc');
        rr.key2 = vv;
        // rr.
        return Promise.resolve(rr);
    } catch (error) {
        return Promise.reject(error);
    }
}

abc().then((hh) => console.log(`${hh.key} ${hh.key2}`), (error) => console.log(error));