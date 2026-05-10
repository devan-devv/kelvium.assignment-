import { useState } from 'react';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import { products } from './data/products.js';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((currentCart) => {
      if (newQuantity <= 0) {
        return currentCart.filter((item) => item.id !== productId);
      }

      return currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const toggleCart = () => {
    setIsCartOpen((current) => !current);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app-shell">
      <Header cartItemCount={getTotalItems()} onCartClick={toggleCart} />

      <main className="app-content">
        <section className="hero-copy">
          <h1>QuickCart</h1>
          <p className="hero-message">
            Browse our curated shopping catalog with clean, minimal product cards designed for easy browsing.
          </p>
        </section>

        <ProductList products={products} onAddToCart={addToCart} />
      </main>

      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart} />
      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;
