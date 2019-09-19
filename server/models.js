const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ProductsDB', { useNewUrlParser: true });

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: true},
})

const products = mongoose.model('products', ProductSchema);

module.exports = products;