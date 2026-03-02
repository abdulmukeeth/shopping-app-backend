const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({  
    title: String,  
    price: Number,  
    rating: Number,  
    category: String,  
    image: String,  
    description: String
    }, { 
        timestamps: true 
    });

const Product = mongoose.model("Product", productSchema);
module.exports = Product