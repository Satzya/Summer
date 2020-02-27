const express = require('express');
const userRouter = require('./routerDetails/userRouter')
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const app = express();
require('./db/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(userRouter)
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + '/public')); // Path to mention all Js files

app.engine('handlebars', exhbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials',
}));

app.listen(9999, 'localhost', () => {
    console.log('Started');
})


/* const jwt = require('jsonwebtoken');

const token = jwt.sign({ _id: 'MAMA' }, 'authget', { notBefore: '1h' });
try {
    console.log(jwt.verify(token, 'authget'))
} catch (e) {
    console.log('Exception  ' + e)
}
 */
/* Service unavailable Middleware */
/* app.use((req, res, next) => {
    res.status(503).send("Application Down");
}) */
