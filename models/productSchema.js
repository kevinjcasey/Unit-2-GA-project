const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    image: String,
    description: String,
    category: String,
    purchased: Boolean
})

const productsCollection = mongoose.model('Product', productSchema);

module.exports = productsCollection

