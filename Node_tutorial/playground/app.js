let yargs = require('yargs');
let notes = require('./module')

yargs.command({
    command: 'Add',
    describe: 'Add a note',
    handler: (argv) => {
        notes.notesUtilities(argv)
    }
})

/* yargs.command({
    command: 'Remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing a Note')
    }
}) */


console.log(yargs.argv)