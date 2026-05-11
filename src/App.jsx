import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import CartPage from './components/CartPage.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import { useCart } from './context/CartContext.jsx';
import { products } from './data/products.js';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useCart();

  return (
    <BrowserRouter>
      <div className="app">
        <Header 
          cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={toggleCart}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Cart overlay backdrop */}
        {isCartOpen && (
          <div className="cart-overlay" onClick={toggleCart}></div>
        )}

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <HomePage 
                products={products}
                searchTerm={searchTerm}
              />
            } />

            <Route path="/category/:category" element={
              <CategoryPage products={products} />
            } />

            <Route path="/cart" element={
              <CartPage 
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
              />
            } />
          </Routes>
        </main>

        <CartSidebar 
          isOpen={isCartOpen}
          onClose={toggleCart}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
