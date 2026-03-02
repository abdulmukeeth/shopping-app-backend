require("dotenv").config();
const mongoose = require("mongoose");
const { initializeDatabase } = require("./db/db.connect");

const Product = require("./models/Product.model");
const Category = require("./models/Category.model");
const Address = require("./models/Address.model");
const Order = require("./models/Order.model");

const seedData = async () => {
  try {
    await initializeDatabase();

    // Clearing the  old data
    await Product.deleteMany({});
    await Category.deleteMany({});
    await Address.deleteMany({});
    await Order.deleteMany({});

    console.log("Old data cleared");

    const categories = await Category.insertMany([
      { name: "Men Clothing" },
      { name: "Women Clothing" },
      { name: "Kids" },
    ]);

    console.log("Categories seeded");

    const products = await Product.insertMany([
      {
        title: "Men Casual Shirt",
        price: 999,
        rating: 4.2,
        category: "Men Clothing",
        image:
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
        description: "Comfortable cotton casual shirt for everyday wear.",
      },
      {
        title: "Women Summer Dress",
        price: 1499,
        rating: 4.5,
        category: "Women Clothing",
        image:
          "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
        description: "Lightweight floral summer dress for casual outings.",
      },
      {
        title: "Kids Hoodie",
        price: 799,
        rating: 4.0,
        category: "Kids",
        image:
          "https://images.unsplash.com/photo-1603252109303-2751441dd157",
        description: "Warm and cozy hoodie perfect for kids.",
      },
    ]);

    console.log("Products seeded");

    const addresses = await Address.insertMany([
      {
        name: "John Doe",
        street: "123 Main Street",
        city: "Mumbai",
        state: "Maharashtra",
        zip: "400001",
      },
      {
        name: "Jane Smith",
        street: "45 Park Avenue",
        city: "Delhi",
        state: "Delhi",
        zip: "110001",
      },
    ]);

    console.log("Addresses seeded");

    await Order.insertMany([
      {
        items: [
          {
            productId: products[0]._id,
            title: products[0].title,
            price: products[0].price,
            qty: 2,
          },
        ],
        total: products[0].price * 2,
        address: {
          name: addresses[0].name,
          street: addresses[0].street,
          city: addresses[0].city,
          state: addresses[0].state,
          zip: addresses[0].zip,
        },
        placedAt: new Date(),
      },
    ]);

    console.log("Orders seeded");

    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedData();