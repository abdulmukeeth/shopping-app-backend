const express = require("express");
const router = express.Router();
const Category = require("../models/Category.model");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      data: { categories }
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      data: { category }
    });
  } catch (err) {
    res.status(500).json({ message: "Category not found" });
  }
});

module.exports = router;