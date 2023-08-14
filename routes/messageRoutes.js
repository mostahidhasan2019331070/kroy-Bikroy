const express = require("express")
const { requireSignIn } = require("../middlewares/authMiddleware")
const { sendMessage } = require("../controllers/messageController")
const router = express.Router();
router.route('/').post(requireSignIn, sendMessage)
//router.route('/:chatId').get(protect,allMessage)
module.exports= router;
