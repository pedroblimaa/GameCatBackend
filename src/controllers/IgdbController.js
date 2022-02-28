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
    
    let body = ""

    await https
      .request(
        {
          host: "id.twitch.tv",
          path: requestPath,
          method: "POST",
        },
        function (response) {
          response.on("data", function (chunk) {
            body += chunk
            console.log(body)
            return body
          })
        }
      )
      .end()
  },
}
