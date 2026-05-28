const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

// Routes
app.use("/api/contact", require("./routes/contactRoutes"))

// Default Route
app.get("/", (req, res) => {
  res.send("Backend Running")
})

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000")
})