const https = require("https")
const IgdbController = require("./IgdbController")

module.exports = {
  getGames: async (req, res) => {
    const keyBody = await IgdbController.getToken().then((response) => {
        console.log(response)
    })
    return
    // const key = JSON.parse(keyBody).access_token

    https.request(
      "https://api.igdb.com/v4/games?fields=*&limit=50&offset=0&order=release_dates.date%3Adesc&search=",
      {
        headers: {
          "Client-ID": process.env.IGDB_CLIENT_ID,
          Authorization: "Bearer " + key,
        },
      },
      (response) => {
        let body = ""
        response.on("data", (chunk) => {
          body += chunk
        })
        response.on("end", () => {
          res.send(body)
        })
      }
    )
  },
}
