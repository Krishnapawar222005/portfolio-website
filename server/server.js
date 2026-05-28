const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const contactRoutes = require("./routes/contactRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/contact", contactRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.send("Backend Running 🚀")
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})