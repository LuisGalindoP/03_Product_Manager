const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product name is required"],
        minlength: [3, "Product name must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Please add a price"],
        min: [0.98, "Price must me more than 98 cents"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
        minlength: [10, "Product description must be at least 10 characters"]
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
