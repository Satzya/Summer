var express = require('express');
var app = express();
var exhbs = require('express-handlebars');
/* var rou = express.Router();

rou.get('/happa', (req, res) => {
    res.render('student/studentDashboard');
})

app.use('/', rou); /* For Router */ /*  */

app.engine('handlebars', exhbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials'
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

app.get('/jsonRes', (req, res) => {
    res.send('<h1>HERE</h1>');
})

let jj = (b) => new Promise(function (resolve, reject) {
    resolve('app');
})

abc = jj(1).then(() => {
    console.log('Happ')
}).catch(() => {
    console.log('Sad')
})

app.get('/studentDashboard', (req, res) => {
    res.render('student/studentDashboard');
});

app.listen(9999, () => {
    console.log('Started');
})