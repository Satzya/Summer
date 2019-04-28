var express = require('express');
var app = express();
var exhbs = require('express-handlebars');

app.engine('handlebars', exhbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('first');
})

app.get('/home', (req, res) => {
    res.render('home', {
        contact: 'Summers', boolBhai: false,

        lists:
            ['abc', 'cde']

    });
})


app.listen(9999, () => {
    console.log('Started');
})