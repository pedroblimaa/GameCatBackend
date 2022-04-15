const axios = require("axios")
const gameService = require("../services/gameService")
const igdbService = require("../services/igdbService")

module.exports = {
  getGames: async (req, res) => {
    const { page, order, searchBy, searchFor } = req.query
    const igdbAuth = await igdbService.tokenRequestProcesss()
    const urlPath = gameService.getGamesUrl(12, page ?? 0, order ?? "release_dates", searchBy ?? "", searchFor ?? "")
    const games = await igdbService.gameRequest(igdbAuth.token, urlPath)

    res.send(games)
  },

  test: async (req, res) => {
    const igdbAuth = await igdbService.tokenRequestProcesss()
    const urlPath = '/genres&order=${orderBy}%3Adesc&search='
    const test = await igdbService.gameRequest(igdbAuth.token, urlPath)

    res.send(test)
  }
}
