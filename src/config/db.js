require("dotenv").config()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("gamecat_db", process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
})

const IgdbCredentials = sequelize.define('igdb_credentials', {
  token: {
    type: Sequelize.STRING,
  },
  expireDate: {
    type: Sequelize.DATE,
  },
})

module.exports = {
  IgdbCredentials,
  sequelize,
}