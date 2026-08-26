// About page for Insta News app
export default function About() {
  return (
    <div style={{ padding: '2.5rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '2.2rem' }}>About Insta News</h1>
      <p style={{ color: '#cbd5e1', lineHeight: '1.6', maxWidth: '600px' }}>
        Insta News is a modern Next.js news platform combining Server-Side Rendering (SSR), GraphQL data fetching, Firebase Authentication, and OpenAI summary capabilities.
      </p>
      <a href="/feed" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: 'bold' }}>← Go to News Feed</a>
    </div>
  );
}
