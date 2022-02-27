const https = require("https")
require("dotenv").config()

module.exports = {
  getToken: async (req, res) => {
    const requestPath =
      "/oauth2/token?client_id=" +
      process.env.IGDB_CLIENT_ID +
      "&client_secret=" +
      process.env.IGDB_SECRET +
      "&grant_type=client_credentials"

    https
      .request(
        {
          host: "id.twitch.tv",
          path: requestPath,
          method: "POST",
        },
        function (response) {
          let body = ""
          response.on("data", function (chunk) {
            body += chunk
          })
          response.on("end", function () {
            return body
          })
        }
      )
      .end()
  },
}
