import '../styles/Header.css';

function Header() {
  return (
    <header className="header-banner">
      <div className="header-content">
        <div className="header-brand">
          <span className="header-icon">🛒</span>
          <h1>QuickCart</h1>
        </div>
        <p className="header-subtitle">Your one-stop shop for everything</p>
      </div>
    </header>
  );
}

export default Header;
