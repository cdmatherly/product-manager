const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, 'Required field'],
        minlength: [2, 'Title must be {MINLENGTH}']
    },
    price: {
        type: Number,
        required: [true, 'Required field']
    },
    description: {
        type: String,
        required: [true, 'Required field'],
        minlength: [2, 'Title must be {MINLENGTH}']
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);