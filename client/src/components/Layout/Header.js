import React, { useEffect, useRef } from "react"
import {
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineUser,
} from "react-icons/ai"
import { NavLink, Link } from "react-router-dom"
import logo from "../../images/logo1.png"

const Header = () => {
  const searchInputRef = useRef(null)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  // Example counts
  const cartCount = 3
  const messageCount = 15
  const wishlistCount = 2

  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <img src={logo} alt='Kroy-Bikroy Logo' className='logo-img' />
      </Link>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Enter the product name...'
          ref={searchInputRef}
          className='search-input'
        />
        <div className='search-icon'>
          <AiOutlineSearch />
        </div>
      </div>
      <div className='icons'>
        <div className='icon'>
          <NavLink to='/sell' className='icon-navlink'>
            <AiOutlinePlusCircle />
          </NavLink>
        </div>
        <div className='icon'>
          <NavLink to='/inbox' className='icon-navlink'>
            <AiOutlineMessage />
          </NavLink>
          {messageCount > 0 && (
            <span className='count-badge'>{messageCount}</span>
          )}
        </div>
        <div className='icon'>
          <NavLink to='/wishlist' className='icon-navlink'>
            <AiOutlineHeart />
          </NavLink>
          {wishlistCount > 0 && (
            <span className='count-badge'>{wishlistCount}</span>
          )}
        </div>
        <div className='icon'>
          <NavLink to='/cart' className='icon-navlink'>
            <AiOutlineShoppingCart />
          </NavLink>
          {cartCount > 0 && <span className='count-badge'>{cartCount}</span>}
        </div>
        <div className='icon'>
          <NavLink to='/profile' className='icon-navlink'>
            <AiOutlineUser />
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
