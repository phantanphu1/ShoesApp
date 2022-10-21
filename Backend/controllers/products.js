const Products = require("../models/products");

//CRUD
//CREATE-POST
const createProduct = (req, res, next) => {
  try {
    const {
      productName,
      productBrand,
      type,
      price,
      discount,
      quantity,
      images,
    } = req.body;
    if (
      !productName ||
      !productBrand ||
      !type ||
      !price ||
      !discount ||
      !quantity ||
      !images
    ) {
      res.status(400).json({
        statuscode: 400,
        message: "Some fileds are not empty.",
      });
    }
    let product = new Products(req.body);
    // product.save()
    product.save().then((response) => {
      res.json({
        message: "Added product successfully!",
      });
    });
  } catch (error) {
    res.status(400).json(
      {
        statuscode: 400,
        message: 'Bad request'
      }
    )
  }
};



// get all product

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Products.find();
    if (Products.length > 0) {
      res.status(200).json({
        products: allProducts.reverse(),
        // reverse: thêm vào đầu
      })
    } else {
      res.status(200).json({
        message: 'no results',
        products: [],
      })
    }
  } catch (error) {
    console.log('error: ', error)
    res.status(400).json({
      message: 'Bad request',
    })
  }

}

// get by id
const getProductById = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Products.findById(productId);
    if (product) {
      res.status(200).json({
        statuscode: 200,
        product,
      })
    } else {
      res.json({
        statuscode: 204,
        message: 'this product Id is have not in the database',
        product: {},
      })
    }
  } catch (error) {
    console.log('error: ', error)
    res.status(400).json({
      statuscode: 400,
      message: 'Bad request',
    })
  }

}
//delete product by id

const deleteProductById = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Products.findByIdAndRemove(productId);
    if (product) {
      res.status(200).json({
        statuscode: 200,
        message: 'Delete product successfully',
      })
    } else {
      res.json({
        statuscode: 204,
        message: 'this product Id is have not in the database',
      })
    }
  } catch (error) {
    console.log('error: ', error)
    res.status(400).json({
      statuscode: 400,
      message: 'Bad request',
    })
  }

}

//updata by id
const editProduct = (req, res, next) => {
  try {
    let productId = req.params.productId
    if (!req.body) {
      return res.send({
        statuscode: 404,
        message: 'Body request can not emty.',
      })
    }
    Products.findByIdAndUpdate(productId, req.body).then((data) => {
      if (data) {
        res.status(200).json({
          statuscode: 200,
          message: 'Update product successfully',
        })
      } else {
        res.json({
          statuscode: 204,
          message: 'This product Id is have not in the database '
        })
      }
    })
  } catch (error) {
    res.status(400).json({
      statuscode: 400,
      message: 'Bad request',
    })
  }
}

//READ-GET  || POST
//UPDATE-PUT||PATCH
//DELETE-DELETE
module.exports = { createProduct, getAllProducts, getProductById, deleteProductById, editProduct };
