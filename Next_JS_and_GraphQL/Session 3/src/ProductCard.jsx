// Single product card component in Flipkart style
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h4 className="product-name">{product.name}</h4>
        <div className="price-tag">₹{product.price.toLocaleString()}</div>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}
