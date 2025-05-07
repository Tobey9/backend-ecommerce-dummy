require("dotenv").config();

require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "passwordsql123",
    database: "ecommerce_shoes",
    host: "localhost",
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
