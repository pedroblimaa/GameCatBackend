const axios = require("axios")
const res = require("express/lib/response")
require("dotenv").config()

const host = "https://api.igdb.com/v4"

module.exports = {
  getIgdbToken: async () => {
    const requestPath =
      "/oauth2/token?client_id=" +
      process.env.IGDB_CLIENT_ID +
      "&client_secret=" +
      process.env.IGDB_SECRET +
      "&grant_type=client_credentials"

    const igdbCredentialsResponse = await axios.post(
      "https://id.twitch.tv" + requestPath
    )

    const expireSeconds = igdbCredentialsResponse.data.expires_in
    const expireDate = new Date(Date.now() + expireSeconds * 1000)

    return {
      token: igdbCredentialsResponse.data.access_token,
      expireDate: expireDate,
    }
  },

  getGames: async (igdbToken, limit = 12, offset = 0) => {
    const fields =
      "id,category,external_games,game_modes,genres,platforms,release_dates,screenshots,similar_games,slug,summary"

    const requestPath =
      host + "/games?fields=" + fields + "&limit=" + limit + "&offset=" + offset

    const games = await axios.get(
      requestPath + "&order=release_dates.date%3Adesc&search=",
      {
        headers: {
          Authorization: "Bearer " + igdbToken,
          Accept: "application/json",
          "Client-ID": process.env.IGDB_CLIENT_ID,
        },
      }
    )

    return games.data
  },
}
