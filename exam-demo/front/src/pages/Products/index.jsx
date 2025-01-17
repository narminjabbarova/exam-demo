import React, { useEffect, useState } from 'react';
import styles from "./index.module.scss";
import { BASE_URL } from '../../constants/script';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { FaHeart } from "react-icons/fa6";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const getAllProducts = async () => {
    try {
      const res = await axios(`${BASE_URL}/api/products`);
      console.log(res.data);
      setProducts(res.data.data); 
    } catch (error) {
      console.error('Error getting products:', error);
    }
  };

  const handleSort = (option) => {
    let sortedProducts = [...products];
    if (option === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price); 
    } else if (option === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price); 
    }
    return sortedProducts;
  };

  const filteredProducts = handleSort(sortOption).filter((w) => 
    w.title.toLowerCase().includes(search.toLowerCase().trim())
  );

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <div className={styles['container']}>
        <h1>New Arrivals</h1>
        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="default">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <div className={styles['products']}>
          {filteredProducts.length > 0 ? filteredProducts.map((w) => (
            <div className={styles["product"]} key={w._id}>
              <img src={w.imageUrl} alt={w.title} />
              <div className={styles['heart']}><FaHeart /></div>
              <h3>{w.title}</h3>
              <p>${w.price}</p>
            </div>
          )) : <div>No products found</div>}
        </div>
      </div>
    </>
  );
};

export default Products;
