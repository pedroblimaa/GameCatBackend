const router = require("express").Router()

const GamesController = require("./controllers/GamesController")
const TestDbController = require("./controllers/TestDbController")

router.get("/getGames", GamesController.getGames)
router.get("/testDb", TestDbController.testDb)

module.exports = router
