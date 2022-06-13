const { FIELDS } = require('../utils/constants')
const Validations = require('../utils/validations')
const requestParamsConverter = require('../utils/requestParamsConverter')



module.exports = {

  getGamesRequest: (limit = 12, offset = 0, sort = "release_dates=desc", search) => {

    const requestPath = `/games`
    const requestParams = requestParamsConverter.setUpParams(limit, offset, sort, search)

    return {
      path: requestPath,
      params: requestParams
    };
  },
}