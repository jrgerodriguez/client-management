const express = require("express")
const app = express()
require('dotenv').config();
const routes = require("./routes/")

const PORT = process.env.PORT

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})