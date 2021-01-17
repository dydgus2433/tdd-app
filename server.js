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
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB ConnectDB.."))
  .catch((err) => console.log(err));

app.use("/api/products", productRoutes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on porst ${PORT} ${HOST}`);
