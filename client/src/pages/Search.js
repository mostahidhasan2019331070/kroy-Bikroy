import React from "react"
import Layout from "./../components/Layout/Layout"
import { useSearch } from "../context/SearchContext"

const Search = () => {
  const [search, setSearch] = useSearch()
  return (
    <Layout>
      <div className='search-container'>
        <div>
          <div className='text-center'>
            <h1>Search Results</h1>
            <h6>
              {search?.results.length < 1
                ? "No Products Found"
                : `Found ${search?.results.length}`}
            </h6>
          </div>

          <div className='card-container'>
            {search?.results.map((p) => (
              <div
                className='card product-card-body m-2'
                style={{ width: "20rem" }}
                key={p._id}
              >
                <div className='product-card-img'>
                  <div className='product-img'>
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className='card-img-top'
                      alt={p.name}
                      style={{ height: "10rem" }}
                    />
                  </div>
                </div>

                <div className='product-card-details'>
                  <div className='product-card-details-row'>
                    <h5 className='product-name'>{p.name}</h5>
                    <h5 className='product-price'>{p.price} tk</h5>
                  </div>
                </div>
                <p className='product-address'>{p.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Search
