import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8' }}>Session 8: Next.js SSG vs SSR Data Fetching</h1>
      <p>Select an option below to test data fetching strategies:</p>

      <ul style={{ lineHeight: '2' }}>
        <li><Link href="/trending-movies" style={{ color: '#38bdf8' }}>1. Trending Movies (SSG getStaticProps)</Link></li>
        <li><Link href="/my-orders" style={{ color: '#f59e0b' }}>2. My Orders (SSR getServerSideProps)</Link></li>
        <li><Link href="/products/p1" style={{ color: '#4ade80' }}>3. Flipkart Product p1 (SSG getStaticPaths)</Link></li>
        <li><Link href="/latest-albums" style={{ color: '#a855f7' }}>4. Latest Albums (GraphQL getStaticProps)</Link></li>
      </ul>
    </div>
  );
}
