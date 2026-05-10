import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import { products } from './data/products.js';
import './styles/App.css';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">
        <section className="hero-copy">
          <h1>QuickCart</h1>
          <p className="hero-message">
            Browse our curated shopping catalog with clean, minimal product cards designed for easy browsing.
          </p>
        </section>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
