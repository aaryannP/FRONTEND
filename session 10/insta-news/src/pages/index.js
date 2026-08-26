export default function Home() {
  return (
    <div style={{ padding: '3rem', fontFamily: 'system-ui, sans-serif', textAlign: 'center', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '2.5rem' }}>Welcome to Insta News</h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Session 10: Next.js, GraphQL, Firebase Auth & OpenAI Summarization</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
        <a href="/feed" style={{ background: '#3b82f6', color: 'white', padding: '0.8rem 1.6rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          Go to /feed (SSR + GraphQL + AI)
        </a>
        <a href="/about" style={{ background: '#1e293b', color: '#cbd5e1', padding: '0.8rem 1.6rem', borderRadius: '8px', textDecoration: 'none', border: '1px solid #334155' }}>
          Go to /about
        </a>
      </div>
    </div>
  );
}
