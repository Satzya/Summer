let express = require('express');
let router = express.Router();

router.get('/abc', (req, res) => {
    res.send(`<h1>abc</h1>`);
});

module.exports = router;