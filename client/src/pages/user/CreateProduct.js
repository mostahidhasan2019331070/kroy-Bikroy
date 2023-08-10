import React, { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"
import axios from "axios"
import { Select } from "antd"
import { useNavigate } from "react-router-dom"
const { Option } = Select

const CreateProduct = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [address, setAddress] = useState("")
  //const [available, setAvailable] = useState("")
  const [image, setImage] = useState("")

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

  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const productData = new FormData()
      productData.append("name", name)
      productData.append("description", description)
      productData.append("price", price)
      productData.append("category", category)
      productData.append("address", address)
      productData.append("image", image)

      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/create-product`,
        productData
      )

      if (res?.data.success) {
        //navigate("/dashboard/user/your-products")
        navigate("/dashboard/user")
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
            <h1>Create Product</h1>
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
                    "Upload Image"
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
              <div className='mb-3 text-center'>
                <button className='btn btn-primary' onClick={handleCreate}>
                  ADD TO SELL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProduct
