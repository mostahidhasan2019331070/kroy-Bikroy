import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"
import axios from "axios"
import { Select } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../context/auth"
const { Option } = Select

const UpdateProduct = () => {
  const [auth] = useAuth()
  const navigate = useNavigate()
  const params = useParams()
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [id, setId] = useState("")
  const [address, setAddress] = useState("")
  //const [available, setAvailable] = useState("")
  const [image, setImage] = useState("")

  // fetching product information

  const getProductInformation = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      )

      if (res?.data.success) {
        setName(res?.data.product.name)
        setDescription(res?.data.product.description)
        setPrice(res?.data.product.price)
        setId(res?.data.product._id)
        setCategory(res?.data.product.category._id)
        setImage(res?.data.product.image)
        setAddress(res?.data.product.address)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductInformation()
    //eslint-disable-next-line
  }, [])

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

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const productData = new FormData()
      productData.append("name", name)
      productData.append("description", description)
      productData.append("price", price)
      productData.append("category", category)
      productData.append("address", address)
      image && productData.append("image", image)
      productData.append("seller", auth.user.id)
      console.log(productData)

      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
        productData
      )

      if (res?.data.success) {
        navigate("/dashboard/user/your-products")
        //navigate("/dashboard/user")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    try {
      let answer = window.prompt("are you sure?")
      if (!answer) return
      const res = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`
      )
      if (res?.data.success) {
        navigate("/dashboard/user/your-products")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu />
          </div>
          <div className='col-md-9'>
            <h1>Update Product</h1>
            <div className='m-1 w-75'>
              <Select
                bordered={false}
                placeholder='Select a Category'
                size='large'
                showSearch
                className='form-select mb-3'
                onChange={(value) => {
                  setCategory(value)
                }}
                required
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className='mb-3'>
                <input
                  type='text'
                  value={name}
                  placeholder='write a name'
                  className='form-control'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                <textarea
                  type='text'
                  value={description}
                  placeholder='write a description'
                  className='form-control'
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className='mb-3'>
                <input
                  type='number'
                  min={0}
                  value={price}
                  placeholder='write a Price'
                  className='form-control'
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  type='text'
                  value={address}
                  placeholder='write product address'
                  className='form-control'
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className='mb-5'>
                <label className='btn btn-outline-secondary image-container'>
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt='product_image'
                      className='img img-responsive'
                    />
                  ) : (
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`}
                      alt='product_image'
                      className='img img-responsive'
                    />
                  )}
                  <input
                    type='file'
                    name='image'
                    accept='image/*'
                    onChange={(e) => setImage(e.target.files[0])}
                    hidden
                    required
                  />
                </label>
                {/* <div className='row'>
                  <div className='col-md-4'>
                    <label className='btn btn-outline-secondary image-container'>
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          alt='product_image'
                          className='img img-responsive'
                        />
                      ) : (
                        "Upload Image"
                      )}
                      <input
                        type='file'
                        name='image'
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                  <div className='col-md-4'>
                    <label className='btn btn-outline-secondary image-container'>
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          alt='product_image'
                          className='img img-responsive'
                        />
                      ) : (
                        "Upload Image"
                      )}
                      <input
                        type='file'
                        name='image'
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                  <div className='col-md-4'>
                    <label className='btn btn-outline-secondary image-container'>
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          alt='product_image'
                          className='img img-responsive'
                        />
                      ) : (
                        "Upload Image"
                      )}
                      <input
                        type='file'
                        name='image'
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                </div> */}
              </div>
              <div className='d-flex'>
                <div className='mb-3 mr-10'>
                  <button className='btn btn-primary' onClick={handleUpdate}>
                    UPDATE
                  </button>
                </div>
                <div className='mb-3'>
                  <button className='btn btn-danger' onClick={handleDelete}>
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UpdateProduct
