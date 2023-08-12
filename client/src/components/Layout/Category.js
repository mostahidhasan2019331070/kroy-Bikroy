import React, { useState, useEffect } from "react"
import axios from "axios"
import { useCategory } from "../../context/CategoryContext"

const Category = () => {
  const [categories, setCategories] = useState([])
  const { setCategory } = useCategory()

  const handleCategorySelect = (category, id) => {
    setCategory(category, id)
  }

  // fetching categories function

  const getAllCategories = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      )
      if (res?.data.success) {
        setCategories(res?.data.category)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div className='category'>
      <ul className='category-section'>
        {categories?.map((c) => (
          <li
            key={c._id}
            className='category-items'
            onClick={() => handleCategorySelect(c.name, c._id)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
