import React, { useState } from 'react';
import Navbar from './Navbar';
import PlaylistSection from './PlaylistCard';
import Footer from './Footer';
import BookTicketModal from './BookTicketModal';
import IPLSignupForm from './DynamicForm';

/**
 * CAPSTONE SESSION 4 MASTER DEMO PLAYGROUND
 * Renders all 5 tasks together in an interactive React App
 */
export default function AppDemo() {
  const [activeNav, setActiveNav] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Social Links passed as props to Task 3 Footer
  const customSocialLinks = [
    { id: 'fb', name: 'Facebook', icon: '🌐', url: 'https://facebook.com' },
    { id: 'tw', name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { id: 'ig', name: 'Instagram', icon: '📸', url: 'https://instagram.com' },
    { id: 'yt', name: 'YouTube', icon: '▶️', url: 'https://youtube.com' },
  ];

  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* TASK 1: Reusable Food Delivery Navbar */}
      <Navbar activeLink={activeNav} onNavigate={(tab) => setActiveNav(tab)} />

      <main style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 20px' }}>
        <header style={{ marginBottom: '24px', textAlign: 'center' }}>
          <h1 style={{ color: '#2c3e50' }}>Capstone Session 4 — Reusable React Components</h1>
          <p style={{ color: '#7f8c8d' }}>Active Tab: <strong style={{ color: '#e23744' }}>{activeNav.toUpperCase()}</strong></p>
        </header>

        {/* TASK 4 Trigger: Book Ticket Modal Button */}
        <section style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <h3>Task 4: BookMyShow Reusable Ticket Modal</h3>
          <p style={{ color: '#666' }}>Click below to pop up the BookMyShow ticket booking form modal:</p>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: '12px 24px',
              backgroundColor: '#f84464',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '800',
              cursor: 'pointer',
            }}
          >
            🎟️ Open Book Ticket Modal
          </button>
        </section>

        {/* TASK 2: Spotify Playlist Card Components */}
        <section style={{ marginBottom: '30px' }}>
          <PlaylistSection />
        </section>

        {/* TASK 5: Scaffolded Dynamic IPL Fantasy Sign Up Form */}
        <section style={{ marginBottom: '30px' }}>
          <IPLSignupForm />
        </section>

      </main>

      {/* TASK 4 Component */}
      <BookTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        movieTitle="Kalki 2898 AD"
      />

      {/* TASK 3: Flipkart Style Footer with Props */}
      <Footer socialLinks={customSocialLinks} />

    </div>
  );
}
