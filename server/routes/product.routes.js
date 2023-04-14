const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.getProducts);
    app.post('/api/products', ProductController.createProduct);
}