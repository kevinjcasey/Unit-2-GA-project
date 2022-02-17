const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    favoriteCocktail: String
    
    // cart: [String]
})

const User = mongoose.model('Users', userSchema)

module.exports = User