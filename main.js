var express = require('express');
var _ = require('lodash');
var app = express();
var exhbs = require('express-handlebars');
let importedMethod = require('./outer');
var bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const mapData = require('./views/internationalization/pageMap.json');
const langData = require('./views/internationalization/en.json');
const valueEvaluation = (incomingValue) => {
    let finalValue;
    _.find(mapData.STUDENT_DASHBOARD, (val) => {
        finalValue = val === incomingValue ? langData[val] : 'Localization Error';
    });
    return finalValue;
}
dotEnv.config();

let helperPath = require('./helper/handlebarHelper');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(importedMethod.rr());
importedMethod.ww();



console.log(importedMethod.rr());
importedMethod.ww();
app.engine('handlebars', exhbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials',
    helpers: helperPath
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
            { fname: 'abc', lname: 'def' },
        ],
        opera: [1, 2, 3, 4]
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
    res.render('student/studentDashboard', { name: valueEvaluation('NAME') });
});

app.get('/dataTable/content', (req, res) => {
    res.json({
        value: [
            ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
            ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
            ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
            ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
            ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
        ]
    })
})

app.post('/student/formData', (req, res) => {
    res.send(`${req.body.fname}${req.body.lname}`);
})

app.listen(process.env.APP_PORT, process.env.HOST_NAME, () => {
    // console.log('Started');
})
