const express = require("express");
const router = express.Router();
const productController = require("./controller/products");

// app.get("/", (req, res) => {
//     res.send("Hello World");
//   });
router.post("/", productController.createProduct);

module.exports = router;
