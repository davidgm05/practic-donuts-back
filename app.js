const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const donutsRouter = require("./routers/donutRouter")
const favoriteRouter = require("./routers/favoriteRouter")
const PORT = 3000;

const app = express()

app.use(cors())
app.use(express.json())

const urlMongo = process.env.DATABASE_URL;

mongoose.connect(urlMongo)

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("error el conectar")
})

db.once("connected", () => {
    console.log("success connected")
})

db.on("disconnected", (error) => {
    console.error("disconnected")
})

app.use("/donuts", donutsRouter)
app.use("/favoritos", favoriteRouter)

app.listen(PORT, () => {
    console.log(`server running in http://localhost:${PORT}`)
})