import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils';
import styles from './ShoppingCart.module.css';

const ShoppingCart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Add animation classes when component mounts
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.cartItem}`);
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.cartEmpty}>
          Your cart is empty. 
          <Link to="/products" className={styles.continueShoppingButton}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartHeader}>Shopping Cart</h1>
      {cartItems.map((item, index) => (
        <div 
          key={item.id} 
          className={styles.cartItem}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <img 
            src={item.image} 
            alt={item.name} 
            className={styles.itemImage}
          />
          <div className={styles.itemDetails}>
            <h3 className={styles.itemName}>{item.name}</h3>
            <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
          </div>
          <div className={styles.quantityControls}>
            <button 
              className={styles.quantityButton}
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className={styles.quantity}>{item.quantity}</span>
            <button 
              className={styles.quantityButton}
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button 
            className={styles.deleteButton}
            onClick={() => removeFromCart(item.id)}
            aria-label="Remove item"
          >
            Delete
          </button>
        </div>
      ))}
      <div className={styles.cartSummary}>
        <div className={styles.totalItems}>
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className={styles.totalCost}>
          <span>Total Cost:</span>
          <span>{formatPrice(totalCost)}</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/products" className={styles.continueShoppingButton}>
          Continue Shopping
        </Link>
        <button 
          className={styles.checkoutButton}
          onClick={() => alert('Checkout functionality coming soon!')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
