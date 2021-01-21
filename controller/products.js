const productModel = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  try {
    const createdProducts = await productModel.create(req.body);
    res.status(201).json(createdProducts);
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
