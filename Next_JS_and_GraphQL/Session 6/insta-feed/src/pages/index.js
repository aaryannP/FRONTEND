// Homepage for Insta Feed app
export default function Home() {
  return (
    <main style={{ padding: '3rem', fontFamily: 'system-ui, sans-serif', textAlign: 'center', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '2.5rem' }}>Welcome to Insta Feed!</h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Created by: <strong style={{ color: '#f1f5f9' }}>Aryan Parmar</strong></p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/explore" style={{ color: '#a855f7', textDecoration: 'underline', fontSize: '1.1rem' }}>Go to Explore Page →</a>
      </div>
    </main>
  );
}
