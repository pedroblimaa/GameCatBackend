const db = require("../db/index")


module.exports = {
  updateIgdbToken: (newIgdbCredentials, igdbCredentials) => {
    db.IgdbCredentials.update(
      {
        token: newIgdbCredentials.token,
        expireDate: newIgdbCredentials.expireDate,
      },
      {
        where: {
          id: igdbCredentials[0].id,
        },
      }
    )
  }
}
