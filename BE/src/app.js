import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json("Hello")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})