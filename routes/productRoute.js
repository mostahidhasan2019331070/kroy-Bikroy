const express = require("express")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")
const {
  createProductController,
  getAllProductController,
  getSingleProductController,
  getProductImageController,
  deleteProductController,
  updateProductController,
} = require("../controllers/productController")
const formidable = require("express-formidable")
const router = express.Router()

// create product

router.post(
  "/create-product",
  requireSignIn,
  formidable(),
  createProductController
)

// get all products

router.get("/get-products", getAllProductController)

// get single product

router.get("/get-product/:slug", getSingleProductController)

// get product photo

router.get("/product-photo/:pid", getProductImageController)

// delete product

router.delete("/delete-product/:pid", requireSignIn, deleteProductController)

// update product

router.put(
  "/update-product/:pid",
  requireSignIn,
  formidable(),
  updateProductController
)

module.exports = router
