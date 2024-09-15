

import React from 'react'
import './App.css'
import Navvar from './Components/Navvar'
import {  BrowserRouter,Routes,Route}from "react-router-dom"
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import CartS from './pages/cart'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navvar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<CartS/>}/>
       

        



        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App