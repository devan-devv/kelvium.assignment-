import React from 'react';
import ProductList from './ProductList';
import '../styles/HomePage.css';

function HomePage({ products, searchTerm }) {
  // Filter products based on searchTerm
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <div className="search-results-info">
          <p className="search-results">
            Found <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'} matching "{searchTerm}"
          </p>
        </div>
      )}

      {filteredProducts.length === 0 && searchTerm ? (
        <div className="no-results-container">
          <p className="no-results">😕 No products found for "{searchTerm}"</p>
          <p className="no-results-hint">Try searching for something else</p>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default HomePage;
