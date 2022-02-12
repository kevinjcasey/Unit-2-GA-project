const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    image: String,
    description: String,
    category: String,
    purchased: Boolean
})

const productCollection = mongoose.model('Product', productSchema);

module.exports = productCollection

