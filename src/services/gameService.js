const { FIELDS } = require ('../utils/constants')
const Validations = require ('../utils/validations')

const getFields = () => {
  return FIELDS.join(',')
}

module.exports = {

  getGamesUrl: (limit = 12, offset = 0, orderBy = "release_dates", searchBy = "", searchFor = "") => {
    Validations.validateItem(searchFor, searchBy)
    const fields = getFields()
    const requestPath = `/games?fields=${fields}&limit=${limit}&offset=${offset}`
    let url = `${requestPath}&order=${orderBy}%3Adesc&search=`

    if (searchBy) {
      url += `${searchBy}%3A${searchFor}`
    }

    return url;
  },
}