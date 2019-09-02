var express = require('express');
var app = express();
var exhbs = require('express-handlebars');
var bodyParser = require('body-parser');

/* Custom Routes implemented */
let customRoute = require('./routes/rawRoute');
app.use('/route', customRoute);

// var mongo = require('./services/mongoFile');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exhbs({
    defaultLayout: 'main', //toggle main & main2
    // layoutsDir: __dirname + '/views/layouts/main2'
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

let jj = () => new Promise((resolve, reject) => {
    resolve('app');
})

let abc = jj(1).then(() => {
    console.log('Happ')
}).
    catch(() => {
        console.log('Sad')
    })


app.get('/studentDashboard', (req, res) => {
    res.render('student/studentDashboard');
})

// console.log(mongo.a);

app.post('/name', (req, res) => {
    res.json(req.body.name);
})

app.get('/toastrImplementation', (req, res) => {
    res.render('toastr/toastrDashboard');
})

app.get('/vehicleInfo', (req, res) => {
    res.render('vehicles/vehiclesDashboard');
})

app.post('/getChassisInfo', (req, res) => {
    res.json({
        chassisNo: '1245352'
    });
})



app.listen(9999, () => {
    console.log('Started');
})