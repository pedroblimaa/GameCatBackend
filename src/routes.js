const router = require("express").Router()

const GamesController = require("./controllers/GamesController")

router.get("/games", GamesController.getGames)
router.get("/test", GamesController.test)
router.get("/token", GamesController.getIgdbToken)

module.exports = router
