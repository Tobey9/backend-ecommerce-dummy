// routes/cart.js
const express = require("express");
const router = express.Router();
const { Cart, CartItem, Product } = require("../models"); // Import models
const { verifyToken } = require("../middleware/authVerify");

// Get Cart for a User
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: { userId: req.params.userId }, // Fetch the user's cart
      include: [{ model: CartItem, include: [Product] }], // Include CartItems with related Products
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    res.json(cart); // Return the cart with CartItems and Product data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Add Item to Cart
router.post("/:userId", verifyToken, async (req, res) => {
  try {
    // Only allow access if the user is modifying their own cart
    if (parseInt(req.params.userId) !== req.user.id) {
      return res.status(403).json({ error: "Access denied" });
    }

    const { productId, quantity } = req.body; // Get the productId and quantity from the request body

    // Check if the cart exists for the user
    let cart = await Cart.findOne({
      where: { userId: req.params.userId },
    });

    // If the cart doesn't exist, create a new cart
    if (!cart) {
      cart = await Cart.create({ userId: req.params.userId });
    }

    // Check if the CartItem already exists
    const existingCartItem = await CartItem.findOne({
      where: { cartId: cart.id, productId },
    });

    if (existingCartItem) {
      // If item already exists, just update the quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      return res.json(existingCartItem); // Return the updated cart item
    }

    // If CartItem doesn't exist, create a new item
    const cartItem = await CartItem.create({
      cartId: cart.id,
      productId,
      quantity,
    });

    res.json(cartItem); // Return the newly added cart item
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

// Remove Item from Cart
router.delete("/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const cart = await Cart.findOne({
      where: { userId },
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const cartItem = await CartItem.findOne({
      where: { cartId: cart.id, productId },
    });

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    await cartItem.destroy(); // Delete the cart item
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to remove item from cart" });
  }
});

// Update Cart Item Quantity
router.put("/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    if (quantity < 1) {
      return res.status(400).json({ error: "Quantity must be at least 1" });
    }

    const cart = await Cart.findOne({
      where: { userId },
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const cartItem = await CartItem.findOne({
      where: { cartId: cart.id, productId },
    });

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.json(cartItem); // Return the updated cart item
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update item quantity" });
  }
});

// Clear the cart for a user
router.delete("/:userId", async (req, res) => {
  console.log("HIT: clearing cart for user", req.params.userId);
  try {
    const userId = req.params.userId;

    // Find the user's cart
    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const cartItems = await CartItem.findAll({ where: { cartId: cart.id } });

    // Delete all items from the cart
    if (cartItems.length > 0) {
      await CartItem.destroy({ where: { cartId: cart.id } });
    }

    await cart.destroy();

    res.status(200).json({ message: "Cart cleared" });
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

module.exports = router;
