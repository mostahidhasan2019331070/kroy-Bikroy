const express = require("express")
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware")
const {
  createCategoryController,
  updateCategoryController,
  getCategoriesController,
  getSingleCategoryController,
  deleteCategoryController,
} = require("../controllers/categoryController")
const router = express.Router()

// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
)

// update category

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
)

// get all categories

router.get("/get-category", getCategoriesController)

// get single category

router.get("/get-category/:slug", getSingleCategoryController)

//delete category

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
)

module.exports = router
