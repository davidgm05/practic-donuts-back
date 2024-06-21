const Donut = require("../models/donutsModel")

const getDonuts = async (req,res) => {
    try{
        const donuts = await Donut.find();
        if(!donuts){
            return res.status(204).json({
                status: "error",
                message: "no se encontraron donuts"
            })
        }
        return res.status(200).json({
            status: "success",
            data: donuts,
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error al traer los donuts",
            error: error.message,
        })
    }
}

const getDonutById = async (req,res) => {
    try{
        const donutId = req.params.id
        const donut = await Donut.findById(donutId);
        if(!donut){
            return res.status(204).json({
                status: "error",
                message: "no se encontraron donuts"
            })
        }
        return res.status(200).json({
            status: "success",
            data: donut,
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error al traer el donut",
            error: error.message,
        })
    }
}

const postDonut = async (req,res) => {
    try{
        const {nombre, sabor, precio} = req.body;
        const newDonut = new Donut({
            nombre,
            sabor,
            precio,
        })
        await newDonut.save()
        return res.status(200).json({
            status: "success",
            data: newDonut
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error al crear el donut",
            error: error.message,
        })
    }
}

const updateDonut = async (req,res) => {
    try{
        const {nombre, sabor, precio} = req.body;
        const donutId = req.params.id;
        if(!donutId){
            return res.status(204).json({
                status: "error",
                message: "no se encontro el donut",
            })
        }
        const updateDonut = await Donut.findByIdAndUpdate(
            donutId,
            {nombre,
            sabor,
            precio,},
            {new: true},
        )
        return res.status(200).json({
            status: "success",
            data: updateDonut
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error al actualizar el donut",
            error: error.message,
        })
    }
}

const deleteDonut = async (req,res) => {
    try{
        const donutId = req.params.id;
        if(!donutId){
            return res.status(204).json({
                status: "error",
                message: "el donut no a sido encontrado"
                })
                }
        const donutToDelete = await Donut.findByIdAndDelete(donutId)
        return res.status(200).json({
            status: "success",
            data: donutToDelete,
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "error al eliminar el donut",
            error: error.message,
        })
    }
}

module.exports = {getDonuts, postDonut, updateDonut, deleteDonut, getDonutById}