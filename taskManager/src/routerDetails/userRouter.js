const express = require('express')
const User = require('../models/users')
const router = express.Router()
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');

let cookieParser = require('cookie-parser')
router.use(cookieParser())

router.get('/setCookie', (req, res) => {
    // console.log(req.cookies['RTY']);
    res.cookie("RTY", 'Satya', { maxAge: 50000 });
    res.send('ListenOOP');
})

router.get('/userRegistration', (req, res) => {
    res.render('User/userDashboard')
})

router.post('/signup', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 1)
        const user = new User(req.body);
        const userWithToken = await user.generateAuthToken()
        await userWithToken.save()
        res.cookie('Token', userWithToken.Token)
        res.status(200).send(user)
    } catch (e) {
        console.log(e)
        if (e.code === 11000) {
            res.status(400).json({ Error: "Duplicate value provided." })
        }
        res.status(400).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findById(req.body.id);
        if (!await bcrypt.compare(req.body.password, user.password)) {
            throw new Error();
        }
        const userToken = await user.generateAuthToken()
        await user.updateOne({ _id: req.body.id }, { $set: { token: userToken } })
        await user.save()
        res.send({ user })
    } catch (e) {
        res.status(404).json(e)
    }
})

router.get('/getData/', auth, async (req, res) => {
    try {
        // value = await User.findById(req.query.id);
        console.log(req.user)
        res.status(200).send(req.user)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.post('/logout', auth, async (req, res) => {
    try {
        res.clearCookie('Token')
        res.status(200).send(req.user)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.delete('/deleteData', auth, async (req, res) => {
    try {
        let result = await User.findByIdAndDelete(req.user)
        res.status(200).send(result)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.put('/updateData', async (req, res) => {
    try {
        let result = await User.updateMany(req.body, { $set: { age: 7777 } })
        console.log(result.n)
        if (result.n === 0) { res.status(400).json({ "Error": "Data Missing" }) } else { res.status(200).send(result) }
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router;