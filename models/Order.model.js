const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        title: String,
        price: Number,
        qty: Number
      }
    ],
    total: { type: Number, required: true },
    address: {
      name: String,
      street: String,
      city: String,
      state: String,
      zip: String
    },
    placedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;