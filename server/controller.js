const products = require('./models')
const path = require('path')

module.exports = {
    allProducts: function (req, res) {
        console.log("***************Get All Products************")
        products.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    oneProduct: function (req, res) {
        console.log("***************Get One Product************")
        products.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createProduct: function (req, res) {
        console.log("***************Create Product************")
        products.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    editProduct: function (req, res) {
        console.log("***************Edit Product************")
        console.log(req.body)
        products.update({ _id: req.params.id }, req.body)
            .then(data => {
                console.log("GOT DATA BACK FROM DB")
                console.log(data);
                res.json({ success: "success" })
            })
            .catch(err => {
                console.log("iT bROKeDed");
                res.json(err)
            })
    },
    deleteProduct: function (req, res) {
        console.log("***************Delete Product************")
        products.remove({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    reroute: function (req, res) {
        res.sendFile(path.resolve(__dirname, "../public/dist/public/index.html"))
    }
}

