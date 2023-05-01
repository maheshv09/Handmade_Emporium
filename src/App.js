import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Profile from './Components/Profile';
import { useState } from 'react';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

const App = () => {

  
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/profile/:username' element={<Profile handleAddToCart={handleAddToCart} />} />
        <Route exact path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
