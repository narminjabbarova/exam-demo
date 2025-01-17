import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./index.module.scss"
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";




const Header = () => {
  return (
    <>
    <header>
      <nav>

        <div className={styles['logo']}>
          <a href="#"> <h2>COLO <span>SHOP</span></h2></a>
        </div>

        <ul>
          <li> <NavLink to={"/"}>HOME</NavLink></li>
          <li> <NavLink to={"/products"}>PRODUCTS</NavLink></li>
          <li> <NavLink to={"/wishlist"}>WISHLIST</NavLink></li>
        </ul>

        <div className={styles['icons']}>
        <FaSearch />
        <FaUser />
        <MdShoppingCart />
        </div>

      </nav>
    </header>
    </>
  )
}

export default Header