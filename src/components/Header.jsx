import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ cartItemCount, onCartClick, searchTerm, onSearchChange }) {
  const categories = ['Electronics', 'Accessories', 'Home', 'Sports'];

  return (
    <header className="header">
      <div className="header-container">
        {/* Top row: Logo and Cart */}
        <div className="header-top">
          <Link to="/" className="header-logo">
            <h1 className="header-title">🛒 QuickCart</h1>
          </Link>

          <button className="cart-icon-btn" onClick={onCartClick} title="Open cart">
            🛒
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          {categories.map(cat => (
            <Link 
              key={cat} 
              to={`/category/${cat}`} 
              className="nav-link"
            >
              {cat}
            </Link>
          ))}
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>

        {/* Search Bar */}
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input 
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
