const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    favoritos:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donuts",
    }
})

const Favorites = mongoose.model("Favorites", favoriteSchema, "favorite")

module.exports = Favorites