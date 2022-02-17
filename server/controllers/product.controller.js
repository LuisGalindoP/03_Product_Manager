const Product = require('../models/product.model');

module.exports = {

    //FIND ALL PRODUCTS
    findAllProducts: (req, res) => {
        Product.find()
            .then((allProducts)=> {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err)=>{
                console.log(`Error in findAllProducts`);
                res.json({message: "Something went wrong in findAllProducts", error: err});
            })
    },
    //CREATE PRODUCT
    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err)=> {
                console.log(`Error in createNewProduct ${err}`);
                res.status(400).json(err);
            })
    },

    //FIND ONE PRODUCT
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err)=> {
                console.log('Error in findOneProduct');
                res.json({message: "Error in findOneProduct", error: err});
            })
    },

}
