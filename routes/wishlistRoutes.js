const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist.model");

router.get("/", async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne();

    if (!wishlist) {
      wishlist = await Wishlist.create({ items: [] });
    }

    res.status(200).json({
      data: { wishlist }
    });
  } catch {
    res.status(500).json({ message: "Failed to fetch wishlist" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { productId, title, price, image } = req.body;

    let wishlist = await Wishlist.findOne();

    if (!wishlist) {
      wishlist = await Wishlist.create({ items: [] });
    }

    const exists = wishlist.items.find(
      (item) => item.productId.toString() === productId
    );

    if (!exists) {
      wishlist.items.push({ productId, title, price, image });
    }

    await wishlist.save();

    res.status(200).json({
      data: { wishlist }
    });
  } catch {
    res.status(500).json({ message: "Failed to add to wishlist" });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne();

    wishlist.items = wishlist.items.filter(
      (item) => item.productId.toString() !== req.params.productId
    );

    await wishlist.save();

    res.status(200).json({
      data: { wishlist }
    });
  } catch {
    res.status(500).json({ message: "Failed to remove item" });
  }
});

module.exports = router;