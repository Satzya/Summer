// let addNote = (title, body) => {
//     console.log(JSON.stringify(title._))
// }

// module.exports = {
//     addNotes: addNote
// }

let notesUtility = (title, body) => {
    console.log(addNotes(title))
}

let addNotes = (args) => {
    try {
        let rty = JSON.stringify(args._)
        console.log(rty[1])
        return JSON.stringify(args._)
    } catch (e) {
        return 'Invalid Data'
    }
}

module.exports = {
    notesUtilities: notesUtility
}