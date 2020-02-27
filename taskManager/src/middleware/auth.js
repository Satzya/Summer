const jwt = require('jsonwebtoken');
const User = require('../models/users');

const auth = async (req, res, next) => {
    try {
        // const token = req.header('Authorization').replace('Bearer ', ''); // for header
        const token = req.cookies.Token;// fetched from cookie 
        const decoded = jwt.verify(token, 'authget') // id recieved from decoded token & verified
        const user = await User.findOne({ _id: decoded._id })
        console.log(user)
        if (user) {
            req.user = user
            req.token = token
        } else {
            res.status(401).send("Unauthorized")
        }
        next()
    } catch (e) {
        console.log(e)
        res.status(401).send(e)
    }
}

module.exports = auth