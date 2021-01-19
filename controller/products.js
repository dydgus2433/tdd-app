const productModel = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  try {
    const createdProducts = await productModel.create(req.body);
    res.status(201).json(createdProducts);
  } catch (error) {
    next(error);
  }
};
