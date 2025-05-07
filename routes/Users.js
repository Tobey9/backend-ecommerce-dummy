require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const { Users } = require("../models");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middleware/authVerify");

const secret = process.env.jwt_password;

router.post("/register", async (req, res) => {
  console.log("registered");
  const { email, password, name, birthDate, gender } = req.body;

  try {
    const existingUser = await Users.findOne({ where: { email } });
    if (existingUser)
      return res.status(400).json({ message: "Email already in use" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.create({
      email,
      password: hashedPassword,
      birthDate,
      gender,
      name,
    });

    const accessToken = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      secret,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true, // Ensures JavaScript cannot access the cookie
      secure: false, // Set to true in production for HTTPS
      sameSite: "Lax", // Helps prevent CSRF attacks
      maxAge: 3600000,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({
      where: { email: email },
    });
    if (!user) return res.json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.json({ error: "Incorrect Password" });

    const accessToken = jwt.sign(
      {
        email: user.email,
        id: user.id,
      },
      secret,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true, // Ensures JavaScript cannot access the cookie
      secure: false, // Set to true in production for HTTPS
      sameSite: "Lax", // Helps prevent CSRF attacks
      maxAge: 3600000,
    });

    console.log("Issued Token:", accessToken);

    res.json({
      message: "Success!",
      email: user.email,
      id: user.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong during login" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.json({ message: "Logged out successfully" });
});

router.get("/auth", verifyToken, (req, res) => {
  console.log("Cookies:", req.cookies); // <-- Add this
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, process.env.jwt_password);
    res.json({ id: decoded.id, email: decoded.email });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;
