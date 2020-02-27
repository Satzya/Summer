const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
        // unique: true
    },
    age: {
        type: Number,
        min: 2,
        max: 10000,
        maxlength: 1,
        trim: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
    /* tokens: [{
        token: {
            type: String
        }
    }] */
},
    {
        timestamps: true
    })

UserSchema.methods.generateAuthToken = async function () {
    const user = this;
    user.Token = jwt.sign({ _id: user._id.toString() }, 'authget', { expiresIn: '1d' });
    console.log('==', user.Token)
    // user.tokens = user.tokens.concat({ token })     // or user.tokens[0]['token'] = token
    return user
}
const User = mongoose.model('User', UserSchema)
module.exports = User 