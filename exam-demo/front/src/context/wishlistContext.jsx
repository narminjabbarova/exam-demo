import React, { createContext, useState } from 'react'


export const wishlistContext = createContext(null)
const WishlistProvider = ({children}) => {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (product) => {
    const idx = wishlist.findIndex((q) => q._id === product._id)
    if (idx === -1) {
        setWishlist([...wishlist, { ...product }])
    } else {
        setWishlist([...wishlist].filter((q) => q._id !== product._id))
    }
}
  
  console.log(wishlist);
  return (
    <wishlistContext.Provider value = {{wishlist, toggleWishlist}}>{children}</wishlistContext.Provider>
  )
}

export default WishlistProvider