const db = require("../config/db")


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
