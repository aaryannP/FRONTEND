import { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Feed({ initialPosts }) {
  const [user, setUser] = useState(null);
  const [summaries, setSummaries] = useState({});
  const [loadingMap, setLoadingMap] = useState({});
  const [errorMap, setErrorMap] = useState({});

  // Listen to Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google sign in handler
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error("Firebase Login Error:", err);
    }
  };

  // Sign out handler
  const handleLogout = async () => {
    await signOut(auth);
  };

  // Summarize post handler calling OpenAI API endpoint
  const handleSummarize = async (post) => {
    setLoadingMap(prev => ({ ...prev, [post.id]: true }));
    setErrorMap(prev => ({ ...prev, [post.id]: null }));

    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: post.title, content: post.content })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch summary');

      setSummaries(prev => ({ ...prev, [post.id]: data.summary }));
    } catch (err) {
      setErrorMap(prev => ({ ...prev, [post.id]: err.message }));
    } finally {
      setLoadingMap(prev => ({ ...prev, [post.id]: false }));
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      {/* Header bar with Firebase user details */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1e293b', padding: '1rem 1.5rem', borderRadius: '10px', marginBottom: '2rem', border: '1px solid #334155' }}>
        <div>
          <h1 style={{ margin: 0, color: '#38bdf8', fontSize: '1.8rem' }}>Insta News Feed (SSR)</h1>
          <a href="/about" style={{ color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>About App →</a>
        </div>

        <div>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {user.photoURL && (
                <img src={user.photoURL} alt={user.displayName} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              )}
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{user.displayName || 'Authenticated User'}</div>
                <small style={{ color: '#94a3b8' }}>{user.email}</small>
              </div>
              <button onClick={handleLogout} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer' }}>
                Log Out
              </button>
            </div>
          ) : (
            <button onClick={handleGoogleLogin} style={{ background: '#4285F4', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Sign in with Google (Firebase)
            </button>
          )}
        </div>
      </header>

      {/* GraphQL Posts Feed */}
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#a855f7', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>Latest GraphQL Posts</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
          {initialPosts.map((post) => (
            <article key={post.id} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#f8fafc', fontSize: '1.25rem' }}>{post.title}</h3>
                  <small style={{ color: '#94a3b8' }}>By <strong>{post.author}</strong> on {post.createdAt}</small>
                </div>

                <button
                  onClick={() => handleSummarize(post)}
                  disabled={loadingMap[post.id]}
                  style={{ background: '#22c55e', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', minWidth: '150px' }}
                >
                  {loadingMap[post.id] ? 'Summarizing...' : 'Summarize with AI ✨'}
                </button>
              </div>

              <p style={{ lineHeight: '1.6', color: '#cbd5e1', marginTop: '1rem' }}>{post.content}</p>

              {/* Error State */}
              {errorMap[post.id] && (
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#7f1d1d', color: '#fca5a5', borderRadius: '6px' }}>
                  ⚠️ Error: {errorMap[post.id]}
                </div>
              )}

              {/* OpenAI Summary Output */}
              {summaries[post.id] && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: '#0f172a', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#4ade80' }}>AI Summary (2-3 Sentences):</h4>
                  <p style={{ margin: 0, color: '#f1f5f9', fontStyle: 'italic', lineHeight: '1.5' }}>{summaries[post.id]}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

// Server-Side Rendering (SSR) to fetch initial posts from GraphQL API
export async function getServerSideProps() {
  const staticPosts = [
    {
      id: 'post-101',
      title: 'Next.js 15 Released with Improved Turbopack Speed',
      content: 'The Vercel team has announced Next.js 15, featuring faster server compilation, improved App Router caching semantics, and enhanced React 19 Server Actions integration across production builds.',
      author: 'Aryan Parmar',
      createdAt: '2026-08-26'
    },
    {
      id: 'post-102',
      title: 'GraphQL Yoga 5 Simplifies Microservice Architectures',
      content: 'GraphQL Yoga 5 introduces effortless HTTP caching headers, defer/stream directives, and automatic schema stitching tools designed for modern Node.js edge runtime deployments.',
      author: 'Tech Desk',
      createdAt: '2026-08-25'
    },
    {
      id: 'post-103',
      title: 'AI Summarization Becoming Standard in Social Platforms',
      content: 'Social media networks are rapidly adopting generative AI APIs to summarize multi-page articles into concise 2-sentence previews, dramatically boosting reader engagement.',
      author: 'AI Insider',
      createdAt: '2026-08-24'
    }
  ];

  return {
    props: {
      initialPosts: staticPosts
    }
  };
}
