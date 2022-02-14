const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: String,
    cart: [String]
})

const userCollection = mongoose.model('Users', userSchema)

module.exports = userCollection