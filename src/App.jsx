import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Laptops from './pages/Laptops'
import Towers from './pages/Towers'
import Games from './pages/Games'
import CartProvider from './CartContext'

export default function App() {

  return (
    <div className="App">
      <CartProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="laptops" element={<Laptops/>}/>
          <Route path="towers" element={<Towers/>}/>
          <Route path="games" element={<Games/>}/>
        </Route>
      </Routes>
      </CartProvider>
    </div>
  )
}

