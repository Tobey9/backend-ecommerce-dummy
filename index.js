const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");
const PORT = 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(
  cors({
    origin: [
      "https://whimsical-travesseiro-743409.netlify.app",
      "http://localhost:4173",
      "http://localhost:5173",
    ], // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // allow cookies to be sent
  })
);
app.use(express.json());

const productRouter = require("./routes/Products");
app.use("/products", productRouter);
const userRouter = require("./routes/Users");
app.use("/user", userRouter);
const cartRouter = require("./routes/Cart");
app.use("/cart", cartRouter);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
