const ProductController = require("../controllers/product.controller");
const {models} = require("mongoose");
const {updateProduct} = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createNewProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.post("/api/products/:id", ProductController.deleteProduct);
}
