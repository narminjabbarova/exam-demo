import React, { useContext } from 'react'
import { wishlistContext } from '../../context/wishlistContext'
import styles from "./index.module.scss"
import { Helmet } from 'react-helmet-async'
import { FaHeart } from "react-icons/fa6";

const wishlist = () => {
  const {wishlist, toogleWishlist} = useContext(wishlistContext)
  return (
    <>
    <Helmet>
      <title>wishlist</title>
    </Helmet>

    <div>


<div className="container">


    <div className={styles["products"]}>
        
            {
                wishlist.length > 0 && wishlist.map((w) => {
                    return (
                      <div className={styles["product"]} key={w._id}>
                      <img src={w.imageUrl} alt={w.title} />
                      <div className={styles['heart']}><FaHeart onClick={()=>{toogleWishlist()}}/></div>
                      <h3>{w.title}</h3>
                      <p>${w.price}</p>
                  </div>
                    )
                })
            }
       
    </div>

</div>
</div>
    
    </>

   
  )
}

export default wishlist