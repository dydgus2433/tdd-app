const productModel = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  console.log("req", req);
  console.log("req.body", req.body);
  const createdProducts = await productModel.create(req.body);
  console.log("createdProducts", createdProducts);
  res.status(201).json(createdProducts);
};
