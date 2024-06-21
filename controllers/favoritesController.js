const Favorites = require("../models/favoriteModel");

const addFavorites = async (req,res) => {
    try{
       const donutId = req.params.id;
       const addDonut = new Favorites({
        favoritos: donutId,
       })
       await addDonut.save()
       return res.status(200).json({
        status: "success",
        data: addDonut,
       })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error al añadir a favoritos",
            error: error.message,
        })
    }
}

const getFavorites = async (req,res) => {
    try{
       const favoritos = await Favorites.find().populate("favoritos");
       if(!favoritos){
        return res.status(204).json({
            status: "error",
            message: "no hay favoritos",
        })
       }
       return res.status(200).json({
        status: "success",
        data: favoritos,
       })
     } catch (error) {
         return res.status(400).json({
             status: "error",
             message: "error traer los favoritos",
             error: error.message,
         })
     } 
}

const deleteFavorites = async (req,res) => {
    try{
        const favoritosId = req.params.id;
        const deletedFavoritos = await Favorites.findByIdAndDelete(favoritosId);
        return res.status(200).json({
            status: "success",
            data: deletedFavoritos,
        })
      } catch (error) {
          return res.status(400).json({
              status: "error",
              message: "error al eliminar de favoritos",
              error: error.message,
          })
      } 
}


module.exports = {addFavorites, getFavorites, deleteFavorites}