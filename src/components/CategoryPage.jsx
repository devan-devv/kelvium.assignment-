import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductList from './ProductList';
import '../styles/CategoryPage.css';

function CategoryPage({ products }) {
  // Get category from URL params
  const { category } = useParams();

  // Filter products by category (case-insensitive)
  const filteredProducts = products.filter(p =>
    p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <div className="category-header">
        <h2 className="category-title">{category} Products</h2>
        <p className="category-count">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p className="empty-message">😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to All Products
          </Link>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default CategoryPage;
