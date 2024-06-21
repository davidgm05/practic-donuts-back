const { addFavorites, getFavorites, deleteFavorites } = require("../controllers/favoritesController")

const router = require("express").Router()

router.get("/getfavorites", getFavorites)
router.post("/addfavoritos/:id", addFavorites)
router.delete("/deletefavorite/:id", deleteFavorites)

module.exports = router