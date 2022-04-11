const axios = require("axios")
const dbService = require("./dbService")
const db = require("../config/db")
require("dotenv").config()

const host = "https://api.igdb.com/v4"

const tokenRequestProcesss = async () => {
  let igdbCredentials = await verifyTokenExpiration()
  if (!igdbCredentials) {
    igdbCredentials = getIgdbToken()
  }
  return igdbCredentials
}

const getIgdbToken = async () => {
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
  const token = igdbCredentialsResponse.data.access_token

  saveToken(token, expireDate)

  return {
    token: token,
    expireDate: expireDate,
  }
}

const saveToken = async (token, expireDate) => {
  const newIgdbCredentials = {
    token: token,
    expireDate: expireDate,
  }
  db.IgdbCredentials.findAll().then(igdbCredentials => {
    if (!igdbCredentials.length) {
      db.IgdbCredentials.create(newIgdbCredentials)
      return
    }
    dbService.updateIgdbToken(newIgdbCredentials, igdbCredentials)

  })
}

const verifyTokenExpiration = async () => {
  const igdbCredentials = await db.IgdbCredentials.findAll().then(igdbCredentials => {
    return igdbCredentials
  })

  if (!igdbCredentials.length) {
    return false
  }
  const currentDate = new Date()
  const expireDate = igdbCredentials[0].expireDate
  if (currentDate > expireDate) {
    return false
  }
  return igdbCredentials[0]
}

const gameRequest = async (igdbToken, urlPath) => {
  const games = await axios.get(
    host + urlPath,
    {
      headers: {
        Authorization: "Bearer " + igdbToken,
        Accept: "application/json",
        "Client-ID": process.env.IGDB_CLIENT_ID,
      },
    }
  )

  return games.data
}

module.exports = { gameRequest, tokenRequestProcesss }