import { useRouter } from 'next/router';

// Flipkart Product detail page pre-generated for 5 IDs
export default function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p style={{ padding: '2rem', color: 'white' }}>Loading product details...</p>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#22c55e' }}>Flipkart Product Page (SSG Pre-generated)</h1>
      
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', maxWidth: '500px', border: '1px solid #334155' }}>
        <h2>{product.name}</h2>
        <p style={{ fontSize: '1.4rem', color: '#4ade80', fontWeight: 'bold' }}>₹{product.price.toLocaleString()}</p>
        <p style={{ color: '#cbd5e1' }}>Category: {product.category}</p>
        <p style={{ color: '#94a3b8' }}>ID: #{product.id}</p>
      </div>
    </div>
  );
}

// Local array of 5 fake Flipkart product details
const productsData = [
  { id: 'p1', name: 'iPhone 15 Pro Max', price: 134900, category: 'Mobiles' },
  { id: 'p2', name: 'Sony Bravia 55 inch 4K TV', price: 64990, category: 'Televisions' },
  { id: 'p3', name: 'Asus ROG Gaming Laptop', price: 92990, category: 'Laptops' },
  { id: 'p4', name: 'Nike Air Max Sneakers', price: 8995, category: 'Footwear' },
  { id: 'p5', name: 'Canon EOS R6 Camera', price: 215995, category: 'Cameras' }
];

// Pre-generating paths for 5 fake product IDs
export async function getStaticPaths() {
  const paths = productsData.map((prod) => ({
    params: { id: prod.id }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const product = productsData.find((p) => p.id === params.id) || null;

  return {
    props: {
      product
    }
  };
}
