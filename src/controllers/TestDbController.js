const db = require("../config/db")

module.exports = {
  testDb: async (req, res) => {
    db.IgdbCredentials.findAll().then(igdbCredentials => {
      if (!igdbCredentials.length) {
        const newIgdbCredentials = {
          token: "dasdasdsaad",
          expireDate: new Date(),
        }
        db.IgdbCredentials.create(newIgdbCredentials)
        igdbCredentials = newIgdbCredentials


      }
      res.send(igdbCredentials[0])
    })
  }
}
