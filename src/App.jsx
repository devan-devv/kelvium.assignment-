import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import products from './data/products.js';
import './styles/App.css';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">
        <section className="hero-copy">
          <p className="eyebrow">Discover top products, handpicked for your lifestyle.</p>
          <h2>Shop the latest essentials with confidence.</h2>
          <p className="hero-message">
            QuickCart brings modern ecommerce design and responsive layout to one clean shopping page.
          </p>
        </section>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
