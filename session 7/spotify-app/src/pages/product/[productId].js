import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

// Flipkart Product detail page generated via AI & modified with custom message
export default function ProductDetail({ product }) {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <h1 style={{ color: '#22c55e' }}>Flipkart Product Portal</h1>
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
        <p style={{ fontSize: '1.2rem', color: '#fbbf24' }}>
          <strong>Custom Message:</strong> Viewing Flipkart item details for Product ID: <span style={{ textDecoration: 'underline' }}>{productId || product.id}</span>
        </p>
        <h2>Title: {product.title}</h2>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

// Server-side props fetching for dynamic Flipkart product ID
export async function getServerSideProps({ params }) {
  const { productId } = params;

  // Mock Flipkart API fetch response
  const product = {
    id: productId,
    title: `Flipkart Special Edition Item (${productId})`,
    price: 14999,
    category: 'Electronics'
  };

  return {
    props: {
      product
    }
  };
}
