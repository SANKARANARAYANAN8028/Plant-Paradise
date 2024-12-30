import React from 'react';
import { products } from '../../utils';
import styles from './ProductListing.module.css';

const ProductListing = ({ addToCart, cartItems }) => {
  const isProductInCart = (productId) => {
    const result = cartItems.some(item => item.id === productId);
    console.log('Is product in cart:', productId, result); // Debug log
    return result;
  };

  const handleAddToCart = (product) => {
    console.log('Handle add to cart clicked:', product); // Debug log
    if (!isProductInCart(product.id)) {
      addToCart(product);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Plants</h1>
      {Object.entries(products.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {})).map(([category, categoryProducts]) => (
        <div key={category} className={styles.category}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.productsGrid}>
            {categoryProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={styles.productImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/500?text=Plant+Image';
                  }}
                />
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                <button
                  className={`${styles.addToCartButton} ${isProductInCart(product.id) ? styles.inCart : ''}`}
                  onClick={() => handleAddToCart(product)}
                  disabled={isProductInCart(product.id)}
                >
                  {isProductInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
