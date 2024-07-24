const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userID: String,
    productName: String,
    category: String,
    price: String,
    company: String
});


let Product = mongoose.model("products", productSchema);
module.exports = Product;