const express = require("express")

const { getProducts, getProductById, deleteProduct, addNewProduct } = require("../controllers/productController")

const router = express.Router()

// console.log(getProducts);
router.get("/", getProducts)
// router.get("/:id", getProductById)
// router.delete("/:id", deleteProduct)
// router.post("/", addNewProduct)

module.exports = router

