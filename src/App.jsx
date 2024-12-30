import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/Landing/LandingPage';
import ProductListing from './components/ProductListing/ProductListing';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.modules.css';


const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    console.log('Adding to cart in App:', product); // Debug log
    setCartItems(prevItems => {
      // Check if product is already in cart
      const exists = prevItems.find(item => item.id === product.id);
      
      if (exists) {
        // If it exists, increment quantity
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // If it's new, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, newQuantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header cartItemCount={totalItems} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/products" 
            element={
              <ProductListing 
                addToCart={addToCart}
                cartItems={cartItems}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <ShoppingCart 
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            } 
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
