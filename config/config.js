require("dotenv").config();

require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "passwordsql123",
    database: process.env.DB_NAME || "ecommerce_shoes",
    host: process.env.DB_HOST || "localhost", // You need to update this to your Railway DB host
    dialect: "mysql",
    port: 3307,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: 3307, // default MySQL port used by RDS
    logging: false,
  },
};
