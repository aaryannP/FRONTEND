// Explore page for Trending Reels
export default function Explore() {
  return (
    <main style={{ padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif', maxWidth: '700px', margin: '0 auto', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', borderRadius: '12px' }}>
      <h1 style={{ color: '#ec4899', fontSize: '2.2rem' }}>Explore Trending Reels</h1>
      <p style={{ lineHeight: '1.7', color: '#cbd5e1', fontSize: '1.1rem' }}>
        Server-side rendering (SSR) fetches trending reels directly on the server for each user request.
        By pre-rendering ready-to-view HTML before reaching the browser, social media apps like Insta Feed deliver instant content playback, eliminate client-side loading flashes, and allow search engines to crawl viral trends effortlessly.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: '#38bdf8', textDecoration: 'none' }}>← Back to Home</a>
      </div>
    </main>
  );
}
