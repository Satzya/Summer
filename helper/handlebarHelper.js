module.exports = {
    noop: (options) => {
        return options + 10;
    },

    iterator: (val) => {
        let finalElement = '';
        val.forEach(element => {
            finalElement += `<h1>${element.fname}&nbsp;${element.lname}</h1>`
        });
        return finalElement;
    },
    switch: (val) => {
        switch (val) {
            case 'a':
                return 'a';
            case 'b':
                return 'b';
            default:
                return 'Invalid';
        }
    }
}
