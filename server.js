const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/db.js")
const authRoutes = require("./routes/authRoute")
const cors = require("cors")

//configure env
dotenv.config()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/v1/auth", authRoutes)

//rest api
app.get("/", (req, res) => {
  res.send("welcome")
})

//port
const PORT = process.env.PORT || 8080

//run listen
app.listen(PORT, () => {
  try {
    // database config
    connectDB()
    console.log(`port is listening on ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})
