const express = require("express");
const config = require("./config/key");

const PORT = 5000;
const HOST = "0.0.0.0";

//App
const app = express();

const productRoutes = require("./routes");
const mongoose = require("mongoose");

mongoose
  .connect(config.mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// 에러 처리기
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.listen(PORT);
console.log(`Running on porst ${PORT} ${HOST}`);

module.exports = app;
