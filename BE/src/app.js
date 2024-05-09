import express from "express"
import "dotenv/config"
import cors from "cors"
import mongoose from "mongoose"
import accessRouter from "./routes/access/index.js"

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB is connected")
})
const port = 3000
const app = express()

const corsOptions = {
    "origin": "*",
    "methods": "GET, PUT, HEAD, PATCH, POST, DELETE",
    "optionsSuccessStatus": 204
}

app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/v1", accessRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})