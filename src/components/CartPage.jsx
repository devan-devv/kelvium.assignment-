import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage({ cart, onUpdateQuantity, onRemoveItem }) {
  // Calculate total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const total = calculateTotal();

  return (
    <div className="cart-page">
      <h1 className="cart-page-title">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <div className="empty-cart-icon">🛒</div>
          <p className="empty-cart-message">Your cart is empty</p>
          <p className="empty-cart-hint">Add some products to get started!</p>
          <Link to="/" className="continue-shopping-link">
            ← Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-page-content">
          <div className="cart-items-section">
            <div className="cart-items-list">
              {cart.map(item => (
                <div key={item.id} className="cart-page-item">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="cart-item-image"
                  />
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-category">{item.category}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                    title="Remove from cart"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Items:</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
            </div>

            <div className="summary-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <Link to="/" className="continue-shopping-btn">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
