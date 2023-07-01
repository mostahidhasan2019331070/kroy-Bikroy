import React, { useEffect, useRef } from "react"
import {
  FaInbox,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaPlus,
} from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"

const Header = () => {
  const searchInputRef = useRef(null)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='Kroy-Bikroy Logo' className='logo-img' />
      </div>
      <div className='search-box'>
        <input type='text' placeholder='Search' ref={searchInputRef} />
        <div className='search-icon'>
          <FaSearch />
        </div>
      </div>
      <div className='icons'>
        <div className='icon'>
          <FaPlus />
        </div>
        <div className='icon'>
          <Link to='/inbox'>
            <FaInbox />
          </Link>
        </div>
        <div className='icon'>
          <Link to='/wishlist'>
            <FaHeart />
          </Link>
        </div>
        <div className='icon'>
          <Link to='/cart'>
            <FaShoppingCart />
          </Link>
        </div>
        <div className='icon'>
          <Link to='/profile'>
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
