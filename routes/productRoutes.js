const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      data: { products }
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      data: { product }
    });
  } catch (err) {
    res.status(500).json({ message: "Product not found" });
  }
});

module.exports = router;