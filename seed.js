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
  { 
    name: "Men Clothing",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    name: "Women Clothing",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    name: "Kids",
    image: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1714905733230-702715038fa4?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]);

    console.log("Categories seeded");

    const products = await Product.insertMany([
      {
    title: "Men Formal Shirt",
    price: 1299,
    rating: 4.3,
    category: "Men Clothing",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
    description: "Premium cotton formal shirt perfect for office wear."
  },
  {
    title: "Men Casual T-Shirt",
    price: 799,
    rating: 4.1,
    category: "Men Clothing",
    image: "https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Soft and breathable casual t-shirt for daily wear."
  },
  {
    title: "Men Denim Jacket",
    price: 1999,
    rating: 4.6,
    category: "Men Clothing",
    image: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=600",
    description: "Stylish denim jacket for a rugged look."
  },
  {
    title: "Men Hoodie",
    price: 1499,
    rating: 4.4,
    category: "Men Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    description: "Comfortable hoodie for winter season."
  },
  {
    title: "Men Slim Fit Jeans",
    price: 1799,
    rating: 4.2,
    category: "Men Clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    description: "Stretchable slim fit denim jeans."
  },
  {
    title: "Men Blazer",
    price: 3499,
    rating: 4.7,
    category: "Men Clothing",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600",
    description: "Elegant blazer for formal occasions."
  },
  {
    title: "Men Shorts",
    price: 699,
    rating: 4.0,
    category: "Men Clothing",
    image: "https://images.unsplash.com/photo-1617951907145-53f6eb87a3a3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable cotton shorts."
  },
  {
    title: "Men Polo T-Shirt",
    price: 999,
    rating: 4.3,
    category: "Men Clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600",
    description: "Classic polo t-shirt for semi-casual look."
  },
  {
    title: "Women Summer Dress",
    price: 1499,
    rating: 4.5,
    category: "Women Clothing",
    image: "https://images.unsplash.com/photo-1557771551-634f8d68b0a5?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Light floral dress for summer outings."
  },
  {
    title: "Women Crop Top",
    price: 899,
    rating: 4.2,
    category: "Women Clothing",
    image: "https://images.unsplash.com/photo-1537223419767-a8e6d78e27b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Trendy crop top for casual wear."
  },
  {
    title: "Women Denim Jacket",
    price: 2299,
    rating: 4.6,
    category: "Women Clothing",
    image: "https://plus.unsplash.com/premium_photo-1698260794931-f986132fcb0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish denim jacket."
  },
  {
    title: "Women Kurti",
    price: 1199,
    rating: 4.3,
    category: "Women Clothing",
    image: "https://images.unsplash.com/photo-1762777777722-3242a1f1c575?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Traditional and comfortable kurti."
  },
  {
    title: "Women Jeans",
    price: 1799,
    rating: 4.4,
    category: "Women Clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    description: "Slim fit stretchable jeans."
  },
  {
    title: "Women Hoodie",
    price: 1599,
    rating: 4.5,
    category: "Women Clothing",
    image: "https://plus.unsplash.com/premium_photo-1692574098104-b16daca8b190?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Warm hoodie for winter season."
  },
  {
    title: "Women Saree",
    price: 3499,
    rating: 4.8,
    category: "Women Clothing",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
    description: "Elegant saree for special occasions."
  },
  {
    title: "Women Skirt",
    price: 1299,
    rating: 4.1,
    category: "Women Clothing",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600",
    description: "Comfortable midi skirt."
  },

  // ================= KIDS =================
  {
    title: "Kids Hoodie",
    price: 799,
    rating: 4.0,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1588932250351-36235af5c0f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Warm hoodie for kids."
  },
  {
    title: "Kids T-Shirt",
    price: 499,
    rating: 4.2,
    category: "Kids",
    image: "https://plus.unsplash.com/premium_photo-1693242804032-e522ffb1f36d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Colorful cotton t-shirt."
  },
  {
    title: "Kids Jacket",
    price: 1299,
    rating: 4.4,
    category: "Kids",
    image: "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Winter jacket for kids."
  },
  {
    title: "Kids Shorts",
    price: 399,
    rating: 4.0,
    category: "Kids",
    image: "https://plus.unsplash.com/premium_photo-1691367782367-2bd37f646abc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable play shorts."
  },
  {
    title: "Kids Party Dress",
    price: 1599,
    rating: 4.6,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1635929328928-2896a684f712?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Beautiful party dress for kids."
  },
  {
    title: "Kids Jeans",
    price: 999,
    rating: 4.3,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
    description: "Durable denim jeans."
  },
  {
    title: "Kids Sweater",
    price: 899,
    rating: 4.2,
    category: "Kids",
    image: "https://images.unsplash.com/photo-1719408386140-5fbac6ffdcbd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Soft wool sweater."
  },
  {
    title: "Kids Cap",
    price: 299,
    rating: 4.1,
    category: "Kids",
    image: "https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish cap for kids."
  },

  // ================= ACCESSORIES =================
  {
    title: "Leather Wallet",
    price: 999,
    rating: 4.5,
    category: "Accessories",
    image: "https://plus.unsplash.com/premium_photo-1670963025497-d6d582ea9319?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Premium leather wallet."
  },
  {
    title: "Sunglasses",
    price: 1299,
    rating: 4.4,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    description: "UV protected stylish sunglasses."
  },
  {
    title: "Backpack",
    price: 1999,
    rating: 4.6,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=600",
    description: "Durable travel backpack."
  },
  {
    title: "Wrist Watch",
    price: 2999,
    rating: 4.7,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1658381466817-3592f4be8c0a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant wrist watch."
  },
  {
    title: "Handbag",
    price: 2499,
    rating: 4.5,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    description: "Stylish handbag."
  },
  {
    title: "Belt",
    price: 699,
    rating: 4.2,
    category: "Accessories",
    image: "https://plus.unsplash.com/premium_photo-1724075323608-f02348de3ed7?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Genuine leather belt."
  },
  {
    title: "Scarf",
    price: 599,
    rating: 4.1,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1719481949132-c973c51338cf?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Soft cotton scarf."
  },
  {
    title: "Cap",
    price: 399,
    rating: 4.0,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601634757806-fa236c453dee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Casual baseball cap."
  },

  // ================= FOOTWEAR =================
  {
    title: "Running Shoes",
    price: 2999,
    rating: 4.7,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    description: "Comfortable running shoes."
  },
  {
    title: "Casual Sneakers",
    price: 2499,
    rating: 4.5,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1572601809155-8a9f3191b2d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish casual sneakers."
  },
  {
    title: "Formal Shoes",
    price: 3499,
    rating: 4.6,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600",
    description: "Premium leather formal shoes."
  },
  {
    title: "Sandals",
    price: 1299,
    rating: 4.2,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1770757685173-94df47a52b68?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable daily sandals."
  },
  {
    title: "Slippers",
    price: 499,
    rating: 4.0,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1715525295763-a423d6dda172?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lightweight home slippers."
  },
  {
    title: "Boots",
    price: 3999,
    rating: 4.8,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1763661300203-aa3e2702f510?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Durable winter boots."
  },
  {
    title: "High Heels",
    price: 2999,
    rating: 4.6,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Elegant high heels."
  },
  {
    title: "Kids Sneakers",
    price: 1799,
    rating: 4.4,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600",
    description: "Comfortable sneakers for kids."
  },
    ]);

    console.log("Products seeded");

    // const addresses = await Address.insertMany([
    //   {
    //     name: "John Doe",
    //     street: "123 Main Street",
    //     city: "Mumbai",
    //     state: "Maharashtra",
    //     zip: "400001",
    //   },
    //   {
    //     name: "Jane Smith",
    //     street: "45 Park Avenue",
    //     city: "Delhi",
    //     state: "Delhi",
    //     zip: "110001",
    //   },
    // ]);

    console.log("Addresses seeded");

    // await Order.insertMany([
    //   {
    //     items: [
    //       {
    //         productId: products[0]._id,
    //         title: products[0].title,
    //         price: products[0].price,
    //         qty: 2,
    //       },
    //     ],
    //     total: products[0].price * 2,
    //     address: {
    //       name: addresses[0].name,
    //       street: addresses[0].street,
    //       city: addresses[0].city,
    //       state: addresses[0].state,
    //       zip: addresses[0].zip,
    //     },
    //     placedAt: new Date(),
    //   },
    // ]);

    console.log("Orders seeded");

    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedData();