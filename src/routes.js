const router = require("express").Router()

const GamesController = require("./controllers/GamesController")

router.get("/getGames", GamesController.getGames)

module.exports = router
