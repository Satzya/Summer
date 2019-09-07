var express = require('express');
var app = express();
var exhbs = require('express-handlebars');
let importedMethod = require('./outer');

console.log(importedMethod.rr());
importedMethod.ww();
app.engine('handlebars', exhbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials',
    helpers: {
        noop: function (val) {
            return val + 1;
        }
    }
}));
app.set('view engine', 'handlebars');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('handlebarsContents/first');
})

app.get('/home', (req, res) => {
    res.render('handlebarsContents/home', {
        contact: 'Summers', boolBhai: false,

        lists:
            ['abc', 'cde']

    });
})

app.get('/ajaxOperations', (req, res) => {
    res.render('ajaxCalls/ajaxOne');
});

app.get('/val', (req, res) => {

    // let user = { fname: 'abc', lname: 'def' };

    let user = {
        attrib: [
            { fname: 'abc', lname: 'def' },
            { fname: 'abc', lname: 'def' }
        ]
    }

    res.render('helperHandlebars/helperDashboard', {
        attrib: [
            {
                fname: 'xyz',
                lname: 'abc'
            }, {
                fname: 'nmo',
                lname: 'mno'
            }, {
                fname: 'nmo',
                lname: 'mno'
            }
        ]
    })
});



app.get('/studentDashboard', (req, res) => {
    res.render('student/studentDashboard');
});

app.listen(9999, () => {
    console.log('Started');
})