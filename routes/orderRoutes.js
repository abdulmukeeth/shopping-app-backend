const express = require("express");
const router = express.Router();
const Order = require("../models/Order.model");

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({
      data: { orders }
    });
  } catch {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

router.post("/", async (req, res) => {
  try {
    const saved = await new Order(req.body).save();
    res.status(201).json({
      data: { order: saved }
    });
  } catch {
    res.status(500).json({ message: "Failed to place order" });
  }
});

module.exports = router;