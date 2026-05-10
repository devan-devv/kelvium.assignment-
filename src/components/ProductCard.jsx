import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <article className="product-card" tabIndex="0">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-details">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button type="button" className="add-button">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
