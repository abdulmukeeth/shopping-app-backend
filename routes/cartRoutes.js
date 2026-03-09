const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart.model");

router.get("/", async (req, res) => {
  try {
    let cart = await Cart.findOne();

    if (!cart) {
      cart = await Cart.create({ items: [] });
    }

    res.status(200).json({
      data: { cart }
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { productId, title, price, image, rating } = req.body;

    let cart = await Cart.findOne();

    if (!cart) {
      cart = await Cart.create({ items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.items.push({ productId, title, price, image, rating, qty: 1 });
    }

    await cart.save();

    res.status(200).json({
      data: { cart }
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to add to cart" });
  }
});

router.put("/:productId", async (req, res) => {
  try {
    const { action } = req.body; // "increase" or "decrease"

    const cart = await Cart.findOne();

    const item = cart.items.find(
      (i) => i.productId.toString() === req.params.productId
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (action === "increase") item.qty += 1;
    if (action === "decrease" && item.qty > 1) item.qty -= 1;

    await cart.save();

    res.status(200).json({
      data: { cart }
    });
  } catch {
    res.status(500).json({ message: "Failed to update quantity" });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const cart = await Cart.findOne();

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== req.params.productId
    );

    await cart.save();

    res.status(200).json({
      data: { cart }
    });
  } catch {
    res.status(500).json({ message: "Failed to remove item" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const cart = await Cart.findOne();
    cart.items = [];
    await cart.save();

    res.status(200).json({ message: "Cart cleared" });
  } catch {
    res.status(500).json({ message: "Failed to clear cart" });
  }
});

module.exports = router;