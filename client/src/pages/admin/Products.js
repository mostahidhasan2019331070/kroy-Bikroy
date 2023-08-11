import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import AdminMenu from "../../components/Layout/AdminMenu"
import axios from "axios"

const Products = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-products`
      )
      if (res?.data.success) {
        setProducts(res?.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <Layout>
      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu />
        </div>
        <div className='col-md-9'>
          <h1 className='text-center'>All Products</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Products
