import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"
import axios from "axios"
import { useAuth } from "../../context/auth"
import { Link } from "react-router-dom"

const YourProducts = () => {
  const [auth] = useAuth()
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-products`
      )
      if (res?.data.success) {
        let yourProducts = []
        const getProducts = res?.data.products

        getProducts.map((p) => {
          if (p.seller === auth.user.id) {
            yourProducts.push(p)
          }
        })
        setProducts(yourProducts)
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
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu />
          </div>
          <div className='col-md-9'>
            <h1 className='text-center'>Your Products</h1>
            <div className='card-container'>
              {products.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/user/product/${p.slug}`}
                  className='product-link'
                >
                  <div className='card m-2' style={{ width: "18rem" }}>
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className='card-img-top'
                      alt={p.name}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{p.name}</h5>
                      <p className='card-text'>{p.description.slice(0, 100)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default YourProducts
