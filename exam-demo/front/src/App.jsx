import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts'
import Home from './pages/Home'
import Products from './pages/Products'
import Wishlist from './pages/Wishlist'
import NotFound from './pages/Notfound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<MainLayout/>}>
          <Route index element ={<Home/>}/>
          <Route path='/products' element = {<Products/>}/>
          <Route path='/wishlist' element = {<Wishlist/>}/>

        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
