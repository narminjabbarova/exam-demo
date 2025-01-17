import React from 'react'
import styles from "./index.module.scss"

const Home = () => {
  return (
    <>
    <div className={styles['container']}>
      <div className={styles['texts']}>
        <h4>
        Spring / Summer Collection 2017
        </h4>
        <h1>
        Get up to 30% Off New Arrivals
        </h1>
        <button>SHOP NOW</button>
      </div>
    </div>
    </>
  )
}

export default Home