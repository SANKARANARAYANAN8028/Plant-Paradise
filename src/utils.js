export const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 29.99,
    category: "Low Maintenance",
    image: "https://urbanplants.co.in/cdn/shop/products/urban-plants-indoor-outdoor-plants-buy-snake-plant-with-pot-for-gift-38545438212311_1080x.jpg?v=1671602207",
    description: "Perfect for beginners, tolerates low light"
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: 49.99,
    category: "Tropical",
    image: "https://theaffordableorganicstore.com/wp-content/uploads/2023/05/Monstera-Deliciosa-Plants.webp",
    description: "Popular tropical plant with unique leaf patterns"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 34.99,
    category: "Air Purifying",
    image: "https://www.purehomeandliving.com/cdn/shop/files/10297469_2_b9ab6bab-1a79-4b1a-8169-aed5a9d7c754.jpg?v=1699011175",
    description: "Beautiful white flowers and air-purifying properties"
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 39.99,
    category: "Low Maintenance",
    image: "https://nurturinggreen.in/cdn/shop/products/PKP04022-Copy_1800x1800.jpg?v=1647425752",
    description: "Thrives in low light conditions"
  },
  {
    id: 5,
    name: "Bird of Paradise",
    price: 79.99,
    category: "Tropical",
    image: "https://budsnblush.com/cdn/shop/files/Alocasia_Black_Velvet_1200_x_1200px__GTTQOyMi3W.jpg?v=1720953692",
    description: "Dramatic tropical plant with large leaves"
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 24.99,
    category: "Air Purifying",
    image: "https://5.imimg.com/data5/ECOM/Default/2024/4/414074773/LM/IR/YB/198340278/2-52416e72-72a0-45dd-bbc5-861732931f1e-500x500.png",
    description: "Easy to grow and propagate"
  }
];

export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};
