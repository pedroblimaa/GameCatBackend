require("dotenv").config()

module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "gamecat_db",
  define: {
    timestamps: true,
    underscored: true,
  },
  logging: false,
}
