const { Product } = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => {
            console.log("Creating new product:", product)
            response.json(product)
        })
        .catch(err => response.json(err));
}

module.exports.getProducts = (request, response) => {
    Product.find()
        .then((allProducts) => {
			console.log("Running query to find all products:", allProducts)
			response.json(allProducts)
		})
        .catch((err) => response.json(err));
}