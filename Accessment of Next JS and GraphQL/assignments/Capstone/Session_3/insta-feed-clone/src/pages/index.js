import React, { useEffect } from 'react';

export default function Home() {
  const mapsApiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

  useEffect(() => {
    console.log('=== Insta Feed Clone Environment Variable ===');
    console.log('NEXT_PUBLIC_MAPS_API_KEY:', process.env.NEXT_PUBLIC_MAPS_API_KEY);
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #dbdbdb', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ fontFamily: 'monospace', fontSize: '2rem', color: '#262626' }}>📸 Insta Feed Clone</h1>
        <p style={{ color: '#8e8e8e' }}>Next.js Scalable Architecture with Environment Variable Logging</p>
      </header>

      <div style={{ backgroundColor: '#ffffff', border: '1px solid #dbdbdb', padding: '20px', borderRadius: '8px', maxWidth: '500px' }}>
        <h3>🔑 Environment Check:</h3>
        <p><strong>NEXT_PUBLIC_MAPS_API_KEY:</strong> <code>{mapsApiKey}</code></p>
        <p style={{ fontSize: '12px', color: '#8e8e8e' }}>
          * Check browser console (F12) to see <code>process.env.NEXT_PUBLIC_MAPS_API_KEY</code> output.
        </p>
      </div>
    </div>
  );
}
