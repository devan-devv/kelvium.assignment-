import { useCart } from '../context/CartContext.jsx';
import ProductCard from './ProductCard.jsx';
import '../styles/ProductList.css';

function ProductList({ products }) {
  const { addToCart } = useCart();

  return (
    <section className="product-list-section">
      <div className="section-heading">
        <h2>Featured products</h2>
        <p>Handpicked items for home, travel, work, and everyday joy.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
