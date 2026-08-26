import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirecting to sign in page if unauthenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
    }
  }, [status, router]);

  // ChatGPT generated logout function with redirect to homepage
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  if (status === 'loading') {
    return <div style={{ padding: '2rem', color: 'white', background: '#0f172a', minHeight: '100vh' }}>Checking session status...</div>;
  }

  if (!session) return null;

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0f172a', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8' }}>User Profile Page</h1>

      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '10px', maxWidth: '500px', border: '1px solid #334155' }}>
        <h2>Welcome, {session.user.name}</h2>
        <p>Email: <strong>{session.user.email}</strong></p>
        
        {session.user.image && (
          <img src={session.user.image} alt={session.user.name} style={{ width: '80px', borderRadius: '50%', marginBottom: '1rem' }} />
        )}

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={handleLogout}
            style={{ background: '#ef4444', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Log Out
          </button>
          
          <a href="/" style={{ color: '#38bdf8', alignSelf: 'center', textDecoration: 'none' }}>Back to Home</a>
        </div>
      </div>
    </div>
  );
}
