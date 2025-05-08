const { sequelize, Product } = require("../models");
const kidsProducts = require("../data/kidsProducts");
const womenProducts = require("../data/womenProducts");
const menProducts = require("../data/menProducts");

const seedAllProducts = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully.");

    // Optional: Sync models
    await sequelize.sync({ alter: true }); // Drops and recreates tables

    // Destroy existing products (this clears all records)
    await Product.destroy({
      where: {},
      force: true, // This also resets the auto-increment counter
    });
    console.log("Existing products deleted!");

    const allProducts = [...kidsProducts, ...womenProducts, ...menProducts];

    await Product.bulkCreate(allProducts);
    console.log("Products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedAllProducts();
