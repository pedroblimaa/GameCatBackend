const axios = require('axios')
const gameService = require('../services/gameService')
const igdbService = require('../services/igdbService')

module.exports = {
  getGames: async (req, res) => {
    const { limit, page, sort, search } = req.query
    const igdbAuth = await igdbService.tokenRequestProcces()
    const requestConfig = gameService.getGamesRequest(limit, page, sort, search)
    const games = await igdbService.gameRequest(igdbAuth.token, requestConfig)

    res.send(games)
  },

  test: async (req, res) => {
    const igdbAuth = await igdbService.tokenRequestProces()
    const urlPath = '/genres&order=${orderBy}%3Adesc&search='
    const test = await igdbService.gameRequest(igdbAuth.token, urlPath)

    res.send(test)
  },

  getIgdbToken: async (req, res) => {
    const igdbAuth = await igdbService.getIgdbToken()

    res.send(igdbAuth)
  },
}
