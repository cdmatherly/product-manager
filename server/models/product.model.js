const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, 'Required field'],
        minlength: [2, 'Title must be at least {MINLENGTH} characters']
    },
    price: {
        type: Number,
        required: [true, 'Required field']
    },
    description: {
        type: String,
        required: [true, 'Required field'],
        minlength: [2, 'Description must be at least {MINLENGTH} characters']
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);