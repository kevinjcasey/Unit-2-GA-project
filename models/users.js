const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true}
    // email: String,
    // cart: [String]
})

const User = mongoose.model('Users', userSchema)

module.exports = User