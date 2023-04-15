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
        .catch(err => {
            response.json(err)
            console.log(err)
        });
}

module.exports.getAllProducts = (request, response) => {
    Product.find()
        .then((allProducts) => {
			console.log("Running query to find all products:", allProducts)
			response.json(allProducts)
		})
        .catch((err) => response.json(err));
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => {
            console.log("Running query to find one product:", product)
            response.json(product)
        })
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => {
            console.log("Updating product:", updatedProduct)
            response.json(updatedProduct)
        })
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => {
            console.log("Deleting from database product", request.params.id)
            response.json(deleteConfirmation)
        })
        .catch(err => response.json(err))
}





