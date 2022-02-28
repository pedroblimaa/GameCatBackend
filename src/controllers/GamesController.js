const axios = require("axios")
const IgdbService = require("../services/IgdbService")

module.exports = {
  getGames: async (req, res) => {
    const igdbToken = await IgdbService.getIgdbToken()
    const games = await IgdbService.getGames(igdbToken)

    res.send(games)
  },
}
