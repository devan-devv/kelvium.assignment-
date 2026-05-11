import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose }) {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <>
      {/* Cart Sidebar */}
      <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">Shopping Cart</h2>
          <button className="close-btn" onClick={onClose} title="Close cart">
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart-sidebar">
            <p className="empty-message">Your cart is empty</p>
            <Link to="/" className="start-shopping-btn" onClick={onClose}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="cart-item-img"
                  />
                  
                  <div className="cart-item-info">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="cart-item-qty">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="qty">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove from cart"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span className="total-label">Total:</span>
                <span className="total-price">${getTotalPrice().toFixed(2)}</span>
              </div>

              <Link 
                to="/cart" 
                className="view-cart-btn"
                onClick={onClose}
              >
                View Cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartSidebar;
