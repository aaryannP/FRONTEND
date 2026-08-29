import Link from 'next/link';

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#38bdf8' }}>
        Task 4: Next.js + Apollo GraphQL
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
        Static Site Generation (SSG) with GraphQL Pre-rendering
      </p>

      <Link href="/restaurants" style={{
        display: 'inline-block',
        padding: '0.85rem 1.75rem',
        backgroundColor: '#38bdf8',
        color: '#0f172a',
        fontWeight: '700',
        borderRadius: '0.5rem',
        textDecoration: 'none'
      }}>
        View Restaurants Listing Page →
      </Link>
    </div>
  );
}
