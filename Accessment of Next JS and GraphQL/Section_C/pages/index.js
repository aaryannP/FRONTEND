import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FoodDash AI — Full-Stack Food Delivery Platform</title>
        <meta name="description" content="AI-Powered Food Delivery Application built with Next.js, GraphQL, Redux, and Firebase" />
      </Head>

      <section className="hero">
        <h1>AI-Powered Food Delivery Platform</h1>
        <p>
          Experience lightning-fast ordering powered by Next.js SSR, GraphQL API queries, Redux state management, and Firebase real-time Firestore synchronization.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/menu" className="btn-primary" style={{ display: 'inline-block', width: 'auto', padding: '0.85rem 2rem' }}>
            Explore Menu (GraphQL) →
          </Link>
          <Link href="/orders" style={{
            display: 'inline-block',
            padding: '0.85rem 2rem',
            backgroundColor: 'transparent',
            border: '1px solid #38bdf8',
            color: '#38bdf8',
            borderRadius: '0.5rem',
            fontWeight: '700'
          }}>
            Track Live Orders →
          </Link>
        </div>
      </section>

      {/* Tech Stack Feature Cards */}
      <div className="grid">
        <div className="food-card">
          <span className="card-badge">Module 2</span>
          <h3>React Component Design</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.5rem 0 1rem' }}>
            Reusable food card components with dynamic props, stateful interactions, and accessibility.
          </p>
        </div>

        <div className="food-card">
          <span className="card-badge">Module 3</span>
          <h3>Advanced Hooks & Firebase</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.5rem 0 1rem' }}>
            Firebase Auth session persistence and real-time Firestore order updates via onSnapshot().
          </p>
        </div>

        <div className="food-card">
          <span className="card-badge">Module 4</span>
          <h3>GraphQL & Next.js SSR</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.5rem 0 1rem' }}>
            Apollo Client useQuery fetching, Redux Thunk cart state, and Next.js file-based routing.
          </p>
        </div>
      </div>
    </div>
  );
}
