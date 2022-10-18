const Products = require('../models/products')


// CRUD
// CREAT - POST
const createProduct = (req, res, next) => {
    try {
        const { 
            productName,
            ProductBrand,
            type,
            price,
            discount,
            quantity,
            images,
        } = req.body
        if (
            !productName ||
            !ProductBrand ||
            !type ||
            !price ||
            !discount ||
            !quantity ||
            !images
        ) {
            res.status(400).json({
                statusCode: 400,
                message: 'Some fields are not empty.',
            })
        }
        let product = new Products(req.body)
        // product.save()
        product.save().then((response) => {
            res.json({
              message: 'Added product successfully!',
            })
          })
    } catch (error) {
        console.log(error);
    }
}

// READ - GET||POST
// UPDATE - PUT ||PATCH
// DELETE - DELETE

module.exports = { createProduct }