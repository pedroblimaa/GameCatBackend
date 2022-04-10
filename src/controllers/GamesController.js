const axios = require("axios")
const IgdbService = require("../services/IgdbService")

module.exports = {
  getGames: async (req, res) => {
    const igdbAuth = await IgdbService.tokenRequestProcesss()
    const games = await IgdbService.getGames(igdbAuth.token)

    console.log(igdbAuth)

    res.send(games)
  },
}
