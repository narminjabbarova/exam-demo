const productModel = require("../models/productModel")

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({})
    res.status(200).send({ data: products, message: 'success' })

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "product not found" })
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.findByIdAndDelete(id)
    if (!product) {
      return res.status(404).json({ message: "can't delete product" })
    }
    res.status(200).json({
      message: "deleted successfully",
      deleteProduct: product,
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const addNewProduct = async (req, res) => {
  try {
    const newProduct = new productModel({ ...req.body });
    await newProduct.save();
    res.status(201).json({ message: "product added successfully", newProduct: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = { getProducts, getProductById, deleteProduct, addNewProduct }