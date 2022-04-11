const axios = require("axios")
const gameService = require("../services/gameService")
const igdbService = require("../services/igdbService")

module.exports = {
  getGames: async (req, res) => {
    const igdbAuth = await igdbService.tokenRequestProcesss()
    const urlPath = gameService.mountGetGameUrl()
    const games = await igdbService.gameRequest(igdbAuth.token, urlPath)

    res.send(games)
  },
}
