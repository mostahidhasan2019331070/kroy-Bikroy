import React, { createContext, useContext, useState } from "react"

const CategoryContext = createContext()

export function useCategory() {
  return useContext(CategoryContext)
}

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState("")

  const setCategory = (category, id) => {
    setSelectedCategory(category)
    setSelectedCategoryId(id)
  }

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, selectedCategoryId, setCategory }}
    >
      {children}
    </CategoryContext.Provider>
  )
}
