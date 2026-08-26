import { useQuery, gql } from '@apollo/client';
import ProductCard from './ProductCard';

// Query to get Flipkart products
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
    }
  }
`;

export default function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // Showing loading message while fetching
  if (loading) {
    return <div className="loading-state">Loading products...</div>;
  }

  // Displaying error message if query fails
  if (error) {
    return <div className="error-state">Failed to load products: {error.message}</div>;
  }

  return (
    <section className="section-block">
      <h2>Flipkart Deals of the Day</h2>
      <div className="product-grid">
        {data.products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
