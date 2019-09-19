const controller = require('./controller')

module.exports = function (app) {
    app.get('/products', controller.allProducts)
    app.get('/products/:id', controller.oneProduct)
    app.post('/products', controller.createProduct)
    app.put('/products/:id', controller.editProduct)
    app.delete('/products/:id', controller.deleteProduct)
    app.all("*", controller.reroute)
}