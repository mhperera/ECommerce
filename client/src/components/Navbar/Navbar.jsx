import React from 'react';
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="left">
          <div className="item">
            <img src="/img/logo.png" alt="Logo" width={30} height={30} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">ladies</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Gents</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Kids</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">MANA STORE</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/home">Home Page</Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/stores">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
