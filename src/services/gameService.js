module.exports = {
  mountGetGameUrl: (limit = 12, offset = 0) => {

    const fields =
      "id,category,external_games,game_modes,genres,platforms,release_dates,screenshots,similar_games,slug,summary"

    const requestPath =
      "/games?fields=" + fields + "&limit=" + limit + "&offset=" + offset

    const url = requestPath + "&order=release_dates.date%3Adesc&search="

    return url;
  }
}