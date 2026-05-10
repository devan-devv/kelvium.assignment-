import '../styles/Header.css';

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header-banner">
      <div className="header-content">
        <div className="header-brand">
          <span className="header-icon">🛒</span>
          <h1>QuickCart</h1>
        </div>

        <button className="cart-icon-btn" onClick={onCartClick} aria-label="Open cart">
          <span className="cart-icon">🛍️</span>
          <span className="cart-label">Cart</span>
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </button>
      </div>
      <p className="header-subtitle">Your one-stop shop for everything</p>
    </header>
  );
}

export default Header;
