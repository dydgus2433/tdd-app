const express = require("express");
var router = express.Router();

const productController = require("./controller/products");
router.get("/", productController.hello);

module.exports = router;
