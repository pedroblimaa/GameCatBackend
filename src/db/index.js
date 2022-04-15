const Sequelize = require("sequelize")
const dbConfig = require("../config/db")

const dbConnection = new Sequelize(dbConfig)

const IgdbCredentials = dbConnection.define('igdb_credentials', {
  token: {
    type: Sequelize.STRING,
  },
  expireDate: {
    type: Sequelize.DATE,
  },
})

const createDatabase = async () => {
  await dbConnection.query(`CREATE DATABASE IF NOT EXISTS gamecat_db;`)
  await IgdbCredentials.sync()
}

createDatabase()

module.exports = {
  dbConnection,
  IgdbCredentials,
}