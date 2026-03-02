const express = require("express");
const router = express.Router();
const Address = require("../models/Address.model");

router.get("/", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json({
      data: { addresses }
    });
  } catch {
    res.status(500).json({ message: "Failed to fetch addresses" });
  }
});

router.post("/", async (req, res) => {
  try {
    const saved = await new Address(req.body).save();
    res.status(201).json({
      data: { address: saved }
    });
  } catch {
    res.status(500).json({ message: "Failed to add address" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      data: { address: updated }
    });
  } catch {
    res.status(500).json({ message: "Failed to update address" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Address deleted" });
  } catch {
    res.status(500).json({ message: "Failed to delete address" });
  }
});

module.exports = router;