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
import Category from "./Category"
import { useAuth } from "../../context/auth"

const Header = () => {
  const searchInputRef = useRef(null)
  const [auth, setAuth] = useAuth()

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    })
    localStorage.removeItem("auth")
  }

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  // Example counts
  const cartCount = 3
  const messageCount = 15
  const wishlistCount = 2

  return (
    <>
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
            {!auth.user ? (
              <NavLink to='/login' className='icon-navlink'>
                <AiOutlineUser />
              </NavLink>
            ) : (
              <NavLink
                onClick={handleLogout}
                to='/login'
                className='icon-navlink'
              >
                <AiOutlineUser />
              </NavLink>
            )}
          </div>
        </div>
      </header>
      <Category />
    </>
  )
}

export default Header
