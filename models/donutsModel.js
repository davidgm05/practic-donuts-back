const mongoose = require("mongoose");

const donutSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    sabor: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    }
})

const Donut = mongoose.model("Donuts", donutSchema, "donut")

module.exports = Donut