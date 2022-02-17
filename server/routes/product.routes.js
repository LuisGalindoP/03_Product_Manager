const ProductController = require("../controllers/product.controller");
const {models} = require("mongoose");

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createNewProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
}
