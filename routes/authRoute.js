const express = require("express")
const router = express.Router()
const { register, login } = require("../controllers/authController")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")

router.post("/register", register)
router.post("/login", login)

// protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true })
})

module.exports = router
