const router = require("express").Router()

const IgdbController = require("./controllers/IgdbController")
const GamesController = require("./controllers/GamesController")

router.get("/getToken", IgdbController.getToken)
router.get("/getGames", GamesController.getGames)

module.exports = router
