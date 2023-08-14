const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/db.js")
const authRoutes = require("./routes/authRoute")
const categoryRoutes = require("./routes/categoryRoute")
const productRoutes = require("./routes/productRoute")
const messageRoutes = require('./routes/messageRoutes.js')
const chatRoutes = require("./routes/chatRoute.js")
const chats = require("./data/data");
const cors = require("cors")

//configure env
dotenv.config()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
// for checking
app.get("/api/v1/chats", (req, res) => {
  console.log(chats)
res.send(chats);
});

// routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)
app.use("/api/v1/chat",chatRoutes)

app.use("/api/v1/message",messageRoutes)

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
