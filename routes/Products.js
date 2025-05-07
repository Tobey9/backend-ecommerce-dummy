const express = require("express");
const router = express.Router();
const { Product } = require("../models");

router.get("/", async (req, res) => {
  const { category } = req.query;
  const options = {};

  if (category) {
    options.where = { category };
  }

  try {
    const products = await Product.findAll(options);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Product.findByPk(id);
  res.json(post);
});

module.exports = router;
