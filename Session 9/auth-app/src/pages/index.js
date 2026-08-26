import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();

  // Logout function generated using ChatGPT
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8' }}>NextAuth.js Google Authentication Portal</h1>

      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', maxWidth: '600px', border: '1px solid #334155', marginTop: '1.5rem' }}>
        {status === 'loading' ? (
          <p>Loading session details...</p>
        ) : session ? (
          <div>
            <h2 style={{ color: '#4ade80', margin: '0 0 0.5rem 0' }}>Status: Authenticated</h2>
            <p style={{ fontSize: '1.1rem' }}>User Name: <strong style={{ color: '#f8fafc' }}>{session.user.name}</strong></p>
            <p style={{ fontSize: '1.1rem' }}>User Email: <strong style={{ color: '#f8fafc' }}>{session.user.email}</strong></p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Link href="/profile" style={{ background: '#3b82f6', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
                Go to Profile Page
              </Link>
              <button
                onClick={handleLogout}
                style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 style={{ color: '#f87171', margin: '0 0 0.5rem 0' }}>Status: Not Logged In</h2>
            <p>Please log in using Google Authentication to view protected user details.</p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <button
                onClick={() => signIn('google')}
                style={{ background: '#4285F4', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Sign in with Google
              </button>
              <Link href="/profile" style={{ color: '#94a3b8', alignSelf: 'center', textDecoration: 'underline' }}>
                Try Profile (Protected)
              </Link>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#090d16', borderRadius: '8px', maxWidth: '600px' }}>
        <h3 style={{ color: '#a855f7', margin: '0 0 0.5rem 0' }}>Quick Test Links:</h3>
        <ul>
          <li><a href="/api/secret" target="_blank" style={{ color: '#38bdf8' }}>Test Protected API Endpoint (/api/secret)</a></li>
          <li><Link href="/profile" style={{ color: '#38bdf8' }}>Test Protected Profile Route (/profile)</Link></li>
        </ul>
      </div>
    </div>
  );
}
